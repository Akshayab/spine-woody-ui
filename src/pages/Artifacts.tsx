import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, FileSpreadsheet, Presentation, Table2, StickyNote } from 'lucide-react';
import { usePersona } from '../context/PersonaContext';
import { getAllArtifacts } from '../data/mockData';
import type { Artifact } from '../data/types';
import ArtifactPreview from '../components/ArtifactPreview';

const artifactTypes = ['all', 'report', 'spreadsheet', 'memo', 'document', 'deck', 'data-table'];

const typeConfig: Record<string, { icon: typeof FileText; color: string; label: string }> = {
  report: { icon: FileText, color: 'var(--c-research)', label: 'Report' },
  spreadsheet: { icon: FileSpreadsheet, color: '#4ade80', label: 'Spreadsheet' },
  memo: { icon: StickyNote, color: 'var(--c-accent)', label: 'Memo' },
  document: { icon: FileText, color: 'var(--c-content)', label: 'Document' },
  deck: { icon: Presentation, color: '#f472b6', label: 'Deck' },
  'data-table': { icon: Table2, color: '#22d3ee', label: 'Data Table' },
};

export default function ArtifactsPage() {
  const { currentPersona } = usePersona();
  const allArtifacts = getAllArtifacts(currentPersona.id);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [teamFilter, setTeamFilter] = useState('all');
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);

  const filtered = allArtifacts.filter(a => {
    if (typeFilter !== 'all' && a.type !== typeFilter) return false;
    if (teamFilter !== 'all' && a.teamId !== teamFilter) return false;
    if (search && !a.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  // Group by time
  const today = filtered.filter(a => a.daysAgo === 0);
  const thisWeek = filtered.filter(a => a.daysAgo > 0 && a.daysAgo <= 7);
  const older = filtered.filter(a => a.daysAgo > 7);

  return (
    <div className="max-w-[1200px] mx-auto px-10 py-10">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <h1 className="text-2xl font-light tracking-tight" style={{ color: 'var(--c-text-primary)' }}>Artifacts</h1>
        <p className="text-[12px] mt-1 font-mono" style={{ color: 'var(--c-text-muted)' }}>{filtered.length} items across {currentPersona.teams.length} teams</p>
      </motion.div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <div className="relative flex-1 min-w-[200px] max-w-md">
          <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--c-text-muted)' }} />
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..."
            className="w-full rounded-xl pl-10 pr-4 py-3 text-[13px] font-mono focus:outline-none"
            style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text-primary)' }} />
        </div>
        {/* Type filter pills */}
        <div className="flex gap-1">
          {artifactTypes.map(t => {
            const tc = t !== 'all' ? typeConfig[t] : null;
            const isActive = typeFilter === t;
            return (
              <button key={t} onClick={() => setTypeFilter(t)}
                className="px-3 py-1.5 rounded-lg text-[10px] font-mono transition-colors flex items-center gap-1.5"
                style={{
                  background: isActive ? (tc?.color ? `${tc.color}15` : 'var(--c-accent-dim)') : 'var(--c-surface)',
                  border: `1px solid ${isActive ? (tc?.color || 'var(--c-accent)') + '30' : 'var(--c-border)'}`,
                  color: isActive ? (tc?.color || 'var(--c-accent)') : 'var(--c-text-muted)',
                }}>
                {tc && <tc.icon size={10} />}
                {t === 'all' ? 'All' : tc?.label || t}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grouped artifacts */}
      {[{ label: 'Today', items: today }, { label: 'This week', items: thisWeek }, { label: 'Earlier', items: older }].map(group => {
        if (group.items.length === 0) return null;
        return (
          <div key={group.label} className="mb-6">
            <div className="text-[10px] font-mono uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--c-text-muted)' }}>{group.label}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {group.items.map((artifact, i) => {
                const team = currentPersona.teams.find(t => t.id === artifact.teamId);
                const tc = typeConfig[artifact.type] || typeConfig.report;
                const TypeIcon = tc.icon;
                return (
                  <motion.div key={artifact.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
                    onClick={() => setSelectedArtifact(artifact)}
                    className="rounded-xl p-4 cursor-pointer transition-all duration-200 group"
                    style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${tc.color}10` }}>
                        <TypeIcon size={16} style={{ color: tc.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[13px] font-medium truncate mb-0.5" style={{ color: 'var(--c-text-primary)' }}>{artifact.title}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono" style={{ color: tc.color }}>{tc.label}</span>
                          <span className="text-[9px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{team?.name}</span>
                        </div>
                        {artifact.subAgentName && (
                          <span className="text-[9px] font-mono" style={{ color: 'var(--c-text-muted)' }}>via {artifact.subAgentName}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        );
      })}

      <AnimatePresence>{selectedArtifact && <ArtifactPreview artifact={selectedArtifact} onClose={() => setSelectedArtifact(null)} />}</AnimatePresence>
    </div>
  );
}
