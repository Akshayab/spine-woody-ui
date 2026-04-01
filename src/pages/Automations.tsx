import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Zap, ChevronRight, Play, Pause, Clock } from 'lucide-react';
import { usePersona } from '../context/PersonaContext';

export default function AutomationsPage() {
  const { currentPersona } = usePersona();
  const navigate = useNavigate();

  const allAutomations = currentPersona.teams.flatMap(t =>
    t.automations.map(a => ({ ...a, teamName: t.name, teamId: t.id, teamType: t.type }))
  );

  const active = allAutomations.filter(a => a.enabled);
  const paused = allAutomations.filter(a => !a.enabled);

  const typeColors: Record<string, string> = { monitoring: 'var(--c-monitoring)', research: 'var(--c-research)', content: 'var(--c-content)', bd: 'var(--c-bd)' };

  return (
    <div className="max-w-[1200px] mx-auto px-10 py-10">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <h1 className="text-2xl font-light tracking-tight" style={{ color: 'var(--c-text-primary)' }}>Automations</h1>
        <p className="text-[12px] mt-1 font-mono" style={{ color: 'var(--c-text-muted)' }}>
          {active.length} active across {currentPersona.teams.length} teams
        </p>
      </motion.div>

      {allAutomations.length === 0 && (
        <div className="text-center py-20">
          <Zap size={28} style={{ color: 'var(--c-text-muted)', opacity: 0.3 }} className="mx-auto mb-4" />
          <p className="text-[13px]" style={{ color: 'var(--c-text-muted)' }}>No automations yet. Create a team to get started.</p>
        </div>
      )}

      {/* Active automations */}
      {active.length > 0 && (
        <div className="mb-8">
          <div className="text-[10px] font-mono uppercase tracking-[0.12em] mb-3 flex items-center gap-2" style={{ color: 'var(--c-text-muted)' }}>
            <Play size={10} style={{ color: 'var(--c-accent)' }} /> Active
          </div>
          <div className="space-y-2">
            {active.map((auto, i) => (
              <motion.div key={auto.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
                className="flex items-center gap-4 rounded-xl px-5 py-4 group cursor-pointer"
                style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
                onClick={() => navigate(`/team/${auto.teamId}`)}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--c-accent-dim)' }}>
                  <Zap size={14} style={{ color: 'var(--c-accent)' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-medium" style={{ color: 'var(--c-text-primary)' }}>{auto.name}</div>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="text-[10px] font-mono" style={{ color: typeColors[auto.teamType] || 'var(--c-text-muted)' }}>{auto.teamName}</span>
                    <span className="text-[10px] font-mono flex items-center gap-1" style={{ color: 'var(--c-text-muted)' }}>
                      <Clock size={9} /> {auto.schedule}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  {auto.lastRun && <span className="text-[10px] font-mono" style={{ color: 'var(--c-text-muted)' }}>Last: {auto.lastRun}</span>}
                  {auto.nextRun && <span className="text-[10px] font-mono" style={{ color: 'var(--c-accent)' }}>Next: {auto.nextRun}</span>}
                  <div className="w-2 h-2 rounded-full animate-breathe" style={{ background: 'var(--c-accent)' }} />
                  <ChevronRight size={14} style={{ color: 'var(--c-text-muted)', opacity: 0.3 }} className="group-hover:opacity-70 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Paused */}
      {paused.length > 0 && (
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.12em] mb-3 flex items-center gap-2" style={{ color: 'var(--c-text-muted)' }}>
            <Pause size={10} /> Paused
          </div>
          <div className="space-y-2">
            {paused.map((auto, i) => (
              <motion.div key={auto.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
                className="flex items-center gap-4 rounded-xl px-5 py-4 opacity-60"
                style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--c-surface-2)' }}>
                  <Zap size={14} style={{ color: 'var(--c-text-muted)' }} />
                </div>
                <div className="flex-1">
                  <div className="text-[13px]" style={{ color: 'var(--c-text-secondary)' }}>{auto.name}</div>
                  <span className="text-[10px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{auto.teamName}</span>
                </div>
                <span className="text-[10px] font-mono" style={{ color: 'var(--c-text-muted)' }}>Paused</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
