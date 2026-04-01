import { useEffect, useRef } from 'react';
import type { CanvasBlock, CanvasEdge } from '../data/types';

interface Props {
  blocks: CanvasBlock[];
  edges: CanvasEdge[];
  color: string;
  height?: number;
}

export default function CanvasDAG({ blocks, edges, color, height = 200 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const W = rect.width;
    const H = rect.height;

    // Layout blocks left-to-right
    const nodeW = 110;
    const nodeH = 32;
    const gap = (W - blocks.length * nodeW) / (blocks.length + 1);

    const positions = blocks.map((_, i) => ({
      x: gap + i * (nodeW + gap),
      y: H / 2 - nodeH / 2 + (i % 2 === 0 ? -12 : 12),
    }));

    const blockMap = new Map(blocks.map((b, i) => [b.id, i]));
    let time = 0;

    function draw() {
      if (!ctx) return;
      time += 0.01;
      ctx.clearRect(0, 0, W, H);

      // Grid
      ctx.strokeStyle = getCssVar('--c-border-subtle') || 'rgba(255,255,255,0.02)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < W; x += 30) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = 0; y < H; y += 30) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

      // Edges
      edges.forEach((edge, ei) => {
        const fi = blockMap.get(edge.from);
        const ti = blockMap.get(edge.to);
        if (fi === undefined || ti === undefined) return;
        const fp = positions[fi];
        const tp = positions[ti];
        const fx = fp.x + nodeW;
        const fy = fp.y + nodeH / 2;
        const tx = tp.x;
        const ty = tp.y + nodeH / 2;

        ctx.strokeStyle = hexToRgba(color, 0.15);
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        const midX = (fx + tx) / 2;
        ctx.moveTo(fx, fy);
        ctx.bezierCurveTo(midX, fy, midX, ty, tx, ty);
        ctx.stroke();

        // Flow dot
        const t = (time * 0.4 + ei * 0.2) % 1;
        const bx = bezier(fx, midX, midX, tx, t);
        const by = bezier(fy, fy, ty, ty, t);
        ctx.fillStyle = hexToRgba(color, 0.4 + Math.sin(time * 2) * 0.2);
        ctx.beginPath();
        ctx.arc(bx, by, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Blocks
      blocks.forEach((block, i) => {
        const pos = positions[i];
        const isRunning = block.status === 'running';
        const isDone = block.status === 'done';
        const alpha = block.status === 'queued' ? 0.4 : 1;

        // Block body
        ctx.globalAlpha = alpha;
        ctx.fillStyle = getCssVar('--c-surface') || '#141414';
        ctx.strokeStyle = hexToRgba(color, isRunning ? 0.3 + Math.sin(time * 2) * 0.1 : isDone ? 0.15 : 0.08);
        ctx.lineWidth = isRunning ? 1.5 : 1;
        roundRect(ctx, pos.x, pos.y, nodeW, nodeH, 6);
        ctx.fill();
        ctx.stroke();

        // Status dot
        if (isRunning) {
          const dotAlpha = 0.5 + Math.sin(time * 3 + i) * 0.3;
          ctx.fillStyle = hexToRgba(color, dotAlpha);
          ctx.beginPath();
          ctx.arc(pos.x + nodeW - 8, pos.y + 8, 3, 0, Math.PI * 2);
          ctx.fill();
        } else if (isDone) {
          ctx.fillStyle = hexToRgba(color, 0.3);
          ctx.beginPath();
          ctx.arc(pos.x + nodeW - 8, pos.y + 8, 2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Label
        ctx.fillStyle = getCssVar('--c-text-secondary') || '#8a8378';
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        const label = block.label.length > 14 ? block.label.slice(0, 12) + '..' : block.label;
        ctx.fillText(label, pos.x + 8, pos.y + nodeH / 2);

        // Type badge
        ctx.fillStyle = hexToRgba(color, 0.5);
        ctx.font = '8px "JetBrains Mono", monospace';
        ctx.textAlign = 'right';
        ctx.fillText(block.type, pos.x + nodeW - 14, pos.y + nodeH - 7);

        ctx.globalAlpha = 1;
      });

      animRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [blocks, edges, color, height]);

  return (
    <canvas ref={canvasRef} className="w-full" style={{ height, display: 'block' }} />
  );
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r); ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h); ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r); ctx.arcTo(x, y, x + r, y, r); ctx.closePath();
}

function bezier(p0: number, p1: number, p2: number, p3: number, t: number) {
  const u = 1 - t;
  return u*u*u*p0 + 3*u*u*t*p1 + 3*u*t*t*p2 + t*t*t*p3;
}

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function getCssVar(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
