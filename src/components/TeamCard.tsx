import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, Search, Pencil, Briefcase, ChevronRight, TrendingUp, TrendingDown, Bot, Terminal, LayoutGrid, Clock, Code } from 'lucide-react';
import type { Team, SubAgent } from '../data/types';
import CountUp from './CountUp';
import Sparkline from './Sparkline';

const typeConfig = {
  monitoring: { label: 'Monitoring', icon: Eye, color: 'var(--c-monitoring)' },
  research: { label: 'Research', icon: Search, color: 'var(--c-research)' },
  content: { label: 'Creative', icon: Pencil, color: 'var(--c-content)' },
  bd: { label: 'Business Dev', icon: Briefcase, color: 'var(--c-bd)' },
  engineering: { label: 'Engineering', icon: Code, color: '#60a5fa' },
};

function SubAgentPill({ agent }: { agent: SubAgent }) {
  const isRunning = agent.status === 'running';
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-mono" style={{ background: 'var(--c-surface-2)', border: '1px solid var(--c-border)' }}>
      {agent.workspace.type === 'canvas' ? <LayoutGrid size={9} style={{ color: 'var(--c-accent)' }} /> : <Terminal size={9} style={{ color: 'var(--c-terminal-text)' }} />}
      <span style={{ color: 'var(--c-text-secondary)' }}>{agent.name}</span>
      {isRunning && <div className="w-1 h-1 rounded-full animate-breathe" style={{ background: 'var(--c-accent)' }} />}
    </div>
  );
}

export default function TeamCard({ team, index }: { team: Team; index: number }) {
  const navigate = useNavigate();
  const config = typeConfig[team.type];
  const TypeIcon = config.icon;
  const runningAgents = team.subAgents.filter(a => a.status === 'running');
  const latestActivity = team.activity[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      onClick={() => navigate(`/team/${team.id}`)}
      className="rounded-2xl cursor-pointer group relative overflow-hidden"
      style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', boxShadow: 'var(--c-card-shadow)' }}
    >
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <TypeIcon size={14} style={{ color: config.color }} strokeWidth={1.5} />
              <span className="text-[10px] font-mono font-medium uppercase tracking-[0.12em]" style={{ color: config.color }}>{config.label}</span>
            </div>
            <h3 className="text-[15px] font-semibold" style={{ color: 'var(--c-text-primary)' }}>{team.name}</h3>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full animate-breathe" style={{ background: 'var(--c-accent)' }} />
            <span className="text-[10px] font-mono" style={{ color: 'var(--c-accent)' }}>LIVE</span>
          </div>
        </div>

        {/* Team lead */}
        <div className="flex items-center gap-2 mb-3 px-3 py-2 rounded-lg" style={{ background: 'var(--c-surface-2)', border: '1px solid var(--c-border-subtle)' }}>
          <Bot size={13} style={{ color: config.color }} />
          <span className="text-[11px] font-mono" style={{ color: 'var(--c-text-secondary)' }}>
            <span style={{ color: 'var(--c-text-primary)' }}>{team.lead.name}</span> — {team.lead.personality}
          </span>
        </div>

        {/* Sub-agents */}
        <div className="mb-3">
          <div className="text-[9px] font-mono uppercase tracking-[0.12em] mb-1.5" style={{ color: 'var(--c-text-muted)' }}>
            Sub-agents · {runningAgents.length} active / {team.subAgents.length}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {team.subAgents.slice(0, 4).map(agent => (
              <SubAgentPill key={agent.id} agent={agent} />
            ))}
          </div>
        </div>

        {/* Key metrics with sparklines */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {team.kpis.slice(0, 2).map((kpi, i) => (
            <div key={i} className="rounded-lg px-3 py-2" style={{ background: 'var(--c-bg)', border: '1px solid var(--c-border-subtle)' }}>
              <div className="text-[9px] font-mono uppercase tracking-[0.12em] mb-0.5" style={{ color: 'var(--c-text-muted)' }}>{kpi.label}</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-semibold font-mono" style={{ color: 'var(--c-text-primary)' }}>
                    {typeof kpi.value === 'number' ? <CountUp end={kpi.value} /> : kpi.value}
                  </span>
                  {kpi.trend === 'up' && <TrendingUp size={10} style={{ color: 'var(--c-accent)' }} />}
                  {kpi.trend === 'down' && <TrendingDown size={10} className="text-red-400/60" />}
                </div>
                {kpi.sparkline && <Sparkline data={kpi.sparkline} color={config.color} width={40} height={16} />}
              </div>
            </div>
          ))}
        </div>

        {/* Deadline if exists */}
        {team.deadline && (
          <div className="flex items-center gap-2 px-3 py-1.5 mb-3 rounded-lg" style={{ background: team.deadline.daysLeft <= 3 ? 'rgba(239,68,68,0.06)' : 'var(--c-accent-dim)', border: `1px solid ${team.deadline.daysLeft <= 3 ? 'rgba(239,68,68,0.15)' : 'var(--c-accent-border)'}` }}>
            <Clock size={10} style={{ color: team.deadline.daysLeft <= 3 ? '#ef4444' : 'var(--c-accent)' }} />
            <span className="text-[10px] font-mono" style={{ color: team.deadline.daysLeft <= 3 ? '#ef4444' : 'var(--c-accent)' }}>
              {team.deadline.daysLeft}d — {team.deadline.label}
            </span>
          </div>
        )}

        {/* Latest activity — single line */}
        {latestActivity && (
          <div className="flex items-start gap-2 py-2 border-t" style={{ borderColor: 'var(--c-border)' }}>
            <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: config.color, opacity: 0.6 }} />
            <p className="text-[11px] line-clamp-1" style={{ color: 'var(--c-text-secondary)' }}>{latestActivity.message}</p>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 mt-1 border-t" style={{ borderColor: 'var(--c-border)' }}>
          <div className="text-[10px] font-mono" style={{ color: 'var(--c-text-muted)' }}>
            {team.artifacts.length} artifacts
          </div>
          <span className="text-[11px] font-mono flex items-center gap-1 transition-colors" style={{ color: 'var(--c-text-muted)' }}>
            Enter
            <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
