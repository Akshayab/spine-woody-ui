import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  lines: string[];
  files: string[];
  height?: number;
}

export default function SandboxTerminal({ lines, files, height = 200 }: Props) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    setVisibleLines(0);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= lines.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, [lines]);

  return (
    <div className="rounded-lg overflow-hidden font-mono text-[11px]" style={{ height, background: 'var(--c-terminal-bg)' }}>
      <div className="flex items-center justify-between px-3 py-1.5 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.3)' }}>sandbox — compute.spine.dev</span>
        {files.length > 0 && (
          <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.2)' }}>{files.length} files</span>
        )}
      </div>
      <div className="p-3 overflow-y-auto" style={{ height: height - 32 }}>
        {lines.slice(0, visibleLines).map((line, i) => {
          const isCommand = line.startsWith('$');
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1 }}
              className="leading-[1.8]"
              style={{
                color: isCommand ? 'var(--c-terminal-text)' : 'rgba(255,255,255,0.45)',
                fontWeight: isCommand ? 500 : 400,
              }}
            >
              {line}
            </motion.div>
          );
        })}
        {visibleLines >= lines.length && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{ color: 'var(--c-terminal-text)' }}
          >
            $ █
          </motion.span>
        )}
      </div>
    </div>
  );
}
