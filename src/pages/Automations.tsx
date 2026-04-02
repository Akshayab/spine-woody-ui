import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Zap, ChevronRight, Pause, Clock, Eye, Search, Pencil, Briefcase, Code } from 'lucide-react';
import { usePersona } from '../context/PersonaContext';
import type { TeamType } from '../data/types';

const typeColors: Record<TeamType, string> = { monitoring: 'var(--c-monitoring)', research: 'var(--c-research)', content: 'var(--c-content)', bd: 'var(--c-bd)', engineering: '#60a5fa' };
const typeIcons: Record<TeamType, typeof Eye> = { monitoring: Eye, research: Search, content: Pencil, bd: Briefcase, engineering: Code };

export default function AutomationsPage() {
  const { currentPersona } = usePersona();
  const navigate = useNavigate();

  const totalActive = currentPersona.teams.reduce((sum, t) => sum + t.automations.filter(a => a.enabled).length, 0);

  return (
    <div className="max-w-[1200px] mx-auto px-10 py-10">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <h1 className="text-2xl font-light tracking-tight" style={{ color: 'var(--c-text-primary)' }}>Automations</h1>
        <p className="text-[12px] mt-1 font-mono" style={{ color: 'var(--c-text-muted)' }}>
          {totalActive} active across {currentPersona.teams.length} teams
        </p>
      </motion.div>

      {currentPersona.teams.length === 0 && (
        <div className="text-center py-20">
          <Zap size={28} style={{ color: 'var(--c-text-muted)', opacity: 0.3 }} className="mx-auto mb-4" />
          <p className="text-[13px]" style={{ color: 'var(--c-text-muted)' }}>No automations yet. Create a team to get started.</p>
        </div>
      )}

      {/* Grouped by team */}
      {currentPersona.teams.map((team, ti) => {
        if (team.automations.length === 0) return null;
        const color = typeColors[team.type] || 'var(--c-accent)';
        const TypeIcon = typeIcons[team.type] || Search;
        const active = team.automations.filter(a => a.enabled);
        const paused = team.automations.filter(a => !a.enabled);

        return (
          <motion.div key={team.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: ti * 0.05 }} className="mb-8">
            {/* Team header */}
            <button onClick={() => navigate(`/team/${team.id}`)}
              className="flex items-center gap-2.5 mb-3 group">
              <TypeIcon size={13} style={{ color }} />
              <span className="text-[13px] font-medium" style={{ color: 'var(--c-text-primary)' }}>{team.name}</span>
              <span className="text-[10px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{active.length} active</span>
              <ChevronRight size={12} style={{ color: 'var(--c-text-muted)', opacity: 0.3 }} className="group-hover:opacity-70 transition-opacity" />
            </button>

            <div className="space-y-1.5">
              {active.map((auto, _i) => (
                <div key={auto.id} className="flex items-center gap-4 rounded-xl px-5 py-3.5"
                  style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${color}10` }}>
                    <Zap size={13} style={{ color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px]" style={{ color: 'var(--c-text-primary)' }}>{auto.name}</div>
                    <span className="text-[10px] font-mono flex items-center gap-1" style={{ color: 'var(--c-text-muted)' }}>
                      <Clock size={9} /> {auto.schedule}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    {auto.lastRun && <span className="text-[10px] font-mono" style={{ color: 'var(--c-text-muted)' }}>Last: {auto.lastRun}</span>}
                    {auto.nextRun && <span className="text-[10px] font-mono" style={{ color }}>Next: {auto.nextRun}</span>}
                    <div className="w-2 h-2 rounded-full animate-breathe" style={{ background: color }} />
                  </div>
                </div>
              ))}
              {paused.map((auto, _i) => (
                <div key={auto.id} className="flex items-center gap-4 rounded-xl px-5 py-3.5 opacity-50"
                  style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
                  <Pause size={13} style={{ color: 'var(--c-text-muted)' }} />
                  <span className="text-[13px]" style={{ color: 'var(--c-text-muted)' }}>{auto.name}</span>
                  <span className="text-[10px] font-mono ml-auto" style={{ color: 'var(--c-text-muted)' }}>Paused</span>
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
