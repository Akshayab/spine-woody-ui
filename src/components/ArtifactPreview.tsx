import { motion } from 'framer-motion';
import { X, Download, Star, ExternalLink, FileSpreadsheet, FileText, Presentation, Table2, StickyNote } from 'lucide-react';
import type { Artifact } from '../data/types';

const typeConfig: Record<string, { label: string; icon: typeof FileText; color: string }> = {
  report: { label: 'Report', icon: FileText, color: 'var(--c-research)' },
  spreadsheet: { label: 'Spreadsheet', icon: FileSpreadsheet, color: '#4ade80' },
  memo: { label: 'Memo', icon: StickyNote, color: 'var(--c-accent)' },
  document: { label: 'Document', icon: FileText, color: 'var(--c-content)' },
  deck: { label: 'Presentation', icon: Presentation, color: '#f472b6' },
  'data-table': { label: 'Data Table', icon: Table2, color: '#22d3ee' },
};

export default function ArtifactPreview({ artifact, onClose }: { artifact: Artifact; onClose: () => void }) {
  const tc = typeConfig[artifact.type] || typeConfig.report;
  const TypeIcon = tc.icon;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 backdrop-blur-sm" style={{ background: 'var(--c-overlay)' }} onClick={onClose} />
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
        className="relative rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
        style={{ background: 'var(--c-bg-elevated)', border: '1px solid var(--c-border)' }}>

        {/* Header with type badge */}
        <div className="flex items-center justify-between px-6 py-4 border-b shrink-0" style={{ borderColor: 'var(--c-border)' }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${tc.color}12` }}>
              <TypeIcon size={18} style={{ color: tc.color }} />
            </div>
            <div>
              <h2 className="text-[15px] font-medium" style={{ color: 'var(--c-text-primary)' }}>{artifact.title}</h2>
              <div className="flex items-center gap-3 mt-0.5">
                <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: tc.color }}>{tc.label}</span>
                {artifact.subAgentName && <span className="text-[10px] font-mono" style={{ color: 'var(--c-text-muted)' }}>via {artifact.subAgentName}</span>}
                <span className="text-[10px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{artifact.daysAgo === 0 ? 'Today' : `${artifact.daysAgo}d ago`}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {[Star, Download, ExternalLink, X].map((Icon, i) => (
              <button key={i} onClick={i === 3 ? onClose : undefined} className="p-2 rounded-lg transition-colors" style={{ color: 'var(--c-text-muted)' }}>
                <Icon size={15} strokeWidth={1.5} />
              </button>
            ))}
          </div>
        </div>

        {/* Content — styled by type */}
        <div className="flex-1 overflow-auto">
          {artifact.preview ? (
            <ArtifactContent type={artifact.type} content={artifact.preview} color={tc.color} />
          ) : (
            <div className="text-center py-16" style={{ color: 'var(--c-text-muted)' }}><p className="text-sm font-mono">Preview not available</p></div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ArtifactContent({ type, content, color }: { type: string; content: string; color: string }) {
  const html = markdownToHtml(content);

  // Deck type — render as slide cards
  if (type === 'deck') {
    const slides = content.split(/\*\*Slide \d+/).filter(s => s.trim()).map(s => s.replace(/^\*\*?\s*/, '').replace(/\*\*$/, ''));
    return (
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          {slides.map((slide, i) => (
            <div key={i} className="rounded-xl p-5 aspect-[16/10] flex flex-col" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
              <div className="text-[9px] font-mono uppercase mb-2" style={{ color }}>Slide {i + 1}</div>
              <div className="flex-1 text-[11px] leading-relaxed overflow-hidden" style={{ color: 'var(--c-text-secondary)' }}
                dangerouslySetInnerHTML={{ __html: markdownToHtml(slide) }} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Spreadsheet/data-table — emphasize tables
  if (type === 'spreadsheet' || type === 'data-table') {
    return (
      <div className="p-6">
        <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--c-border)' }}>
          <div className="artifact-table" style={{ '--table-accent': color } as React.CSSProperties}
            dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <style>{`
          .artifact-table table { width: 100%; border-collapse: collapse; font-size: 12px; font-family: 'JetBrains Mono', monospace; }
          .artifact-table th { background: var(--c-surface); color: var(--c-text-primary); font-weight: 500; text-align: left; padding: 10px 14px; border-bottom: 2px solid var(--table-accent, var(--c-accent)); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; }
          .artifact-table td { padding: 8px 14px; border-bottom: 1px solid var(--c-border); color: var(--c-text-secondary); }
          .artifact-table tr:hover td { background: var(--c-surface); }
          .artifact-table p, .artifact-table h1, .artifact-table h2, .artifact-table h3, .artifact-table li { color: var(--c-text-secondary); font-size: 12px; padding: 4px 14px; }
        .artifact-table ol, .artifact-table ul { padding: 4px 14px 4px 30px; }
        .artifact-table ol li, .artifact-table ul li { padding: 4px 0; }
          .artifact-table h2 { font-size: 13px; font-weight: 600; color: var(--c-text-primary); padding-top: 16px; text-transform: uppercase; letter-spacing: 0.1em; }
          .artifact-table strong { color: var(--c-text-primary); }
        `}</style>
      </div>
    );
  }

  // Memo — cleaner, letter-style
  if (type === 'memo') {
    return (
      <div className="px-10 py-8 max-w-3xl mx-auto">
        <div className="rounded-xl p-8" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
          <div className="memo-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <style>{`
          .memo-content { font-size: 13px; line-height: 1.7; color: var(--c-text-secondary); }
          .memo-content h1 { font-size: 18px; font-weight: 300; color: var(--c-text-primary); margin-bottom: 16px; letter-spacing: -0.02em; }
          .memo-content h2 { font-size: 13px; font-weight: 600; color: var(--c-text-primary); margin-top: 24px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.1em; font-family: 'JetBrains Mono', monospace; }
          .memo-content h3 { font-size: 13px; font-weight: 500; color: var(--c-text-primary); margin-top: 16px; margin-bottom: 6px; }
          .memo-content p { margin-bottom: 10px; }
          .memo-content strong { color: var(--c-text-primary); font-weight: 500; }
          .memo-content table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: 11px; margin: 12px 0; }
          .memo-content th { background: var(--c-surface-2); padding: 8px 12px; text-align: left; font-weight: 500; color: var(--c-text-primary); border: 1px solid var(--c-border); }
          .memo-content td { padding: 6px 12px; border: 1px solid var(--c-border); color: var(--c-text-secondary); }
          .memo-content li { margin-bottom: 4px; padding-left: 4px; }
          .memo-content ol { padding-left: 20px; list-style: decimal; }
          .memo-content ul { padding-left: 16px; }
          .memo-content code { font-family: 'JetBrains Mono', monospace; font-size: 11px; background: var(--c-surface-2); padding: 2px 6px; border-radius: 4px; color: var(--c-accent); }
          .memo-content blockquote { border-left: 2px solid var(--c-accent); padding-left: 12px; margin: 12px 0; font-style: italic; color: var(--c-text-muted); }
          .memo-content hr { border: none; border-top: 1px solid var(--c-border); margin: 20px 0; }
        `}</style>
      </div>
    );
  }

  // Report/document — default rich rendering
  return (
    <div className="px-10 py-8 max-w-3xl mx-auto">
      <div className="report-content" dangerouslySetInnerHTML={{ __html: html }} />
      <style>{`
        .report-content { font-size: 13px; line-height: 1.7; color: var(--c-text-secondary); }
        .report-content h1 { font-size: 20px; font-weight: 300; color: var(--c-text-primary); margin-bottom: 20px; letter-spacing: -0.02em; border-bottom: 1px solid var(--c-border); padding-bottom: 12px; }
        .report-content h2 { font-size: 12px; font-weight: 600; color: var(--c-text-primary); margin-top: 28px; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.1em; font-family: 'JetBrains Mono', monospace; }
        .report-content h3 { font-size: 14px; font-weight: 500; color: var(--c-text-primary); margin-top: 20px; margin-bottom: 8px; }
        .report-content p { margin-bottom: 12px; }
        .report-content strong { color: var(--c-text-primary); font-weight: 500; }
        .report-content table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: 11px; margin: 16px 0; border-radius: 8px; overflow: hidden; }
        .report-content th { background: var(--c-surface); padding: 10px 14px; text-align: left; font-weight: 500; color: var(--c-text-primary); border: 1px solid var(--c-border); font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; }
        .report-content td { padding: 8px 14px; border: 1px solid var(--c-border); color: var(--c-text-secondary); }
        .report-content tr:hover td { background: var(--c-surface); }
        .report-content li { margin-bottom: 6px; padding-left: 4px; }
        .report-content ul { list-style: none; padding-left: 0; }
        .report-content ul li { position: relative; padding-left: 16px; }
        .report-content ul li:before { content: ''; position: absolute; left: 0; top: 10px; width: 4px; height: 4px; border-radius: 50%; background: var(--c-accent); opacity: 0.4; }
        .report-content ol { padding-left: 20px; list-style: decimal; }
        .report-content ol li { padding-left: 4px; }
        .report-content code { font-family: 'JetBrains Mono', monospace; font-size: 11px; background: var(--c-surface); padding: 2px 6px; border-radius: 4px; color: var(--c-accent); }
        .report-content blockquote { border-left: 2px solid var(--c-accent); padding-left: 16px; margin: 16px 0; font-style: italic; color: var(--c-text-muted); }
        .report-content hr { border: none; border-top: 1px solid var(--c-border); margin: 24px 0; }
      `}</style>
    </div>
  );
}

function markdownToHtml(md: string): string {
  let html = md
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/^---$/gm, '<hr />')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>');

  // Tables
  html = html.replace(/^(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)*)/gm, (_m, header, _s, body) => {
    const hs = header.split('|').filter((c: string) => c.trim()).map((c: string) => `<th>${c.trim()}</th>`).join('');
    const rs = body.trim().split('\n').map((r: string) => {
      const cs = r.split('|').filter((c: string) => c.trim()).map((c: string) => `<td>${c.trim()}</td>`).join('');
      return `<tr>${cs}</tr>`;
    }).join('');
    return `<table><thead><tr>${hs}</tr></thead><tbody>${rs}</tbody></table>`;
  });

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');

  // Numbered lists
  html = html.replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>');
  html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, (match) => {
    // Only wrap if not already wrapped
    if (match.startsWith('<ul>') || match.startsWith('<ol>')) return match;
    return `<ol>${match}</ol>`;
  });

  // Paragraphs — handle remaining text blocks
  html = html.split('\n\n').map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    // Already an HTML element
    if (trimmed.match(/^<[hupoltb]/)) return trimmed;
    // Wrap plain text in <p>
    if (!trimmed.match(/^</)) {
      return `<p>${trimmed.replace(/\n/g, '<br />')}</p>`;
    }
    return trimmed;
  }).join('\n');

  return html;
}
