import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight, Plus, X, Bot, Clock, AlertTriangle, FileText, Activity, Sparkles, ArrowUp, Rocket } from 'lucide-react';
import { usePersona } from '../context/PersonaContext';
import TeamCard from '../components/TeamCard';


export default function CommandCenter() {
  const { currentPersona, addTeam, dismissAlert, approveArtifact } = usePersona();
  const navigate = useNavigate();
  const { metrics } = currentPersona;
  const [showAddTeam, setShowAddTeam] = useState(false);
  const [briefingExpanded, setBriefingExpanded] = useState(false);
  const [commandInput, setCommandInput] = useState('');
  const [commandResponse, setCommandResponse] = useState<string | null>(null);
  const runningAgents = currentPersona.teams.reduce((sum, t) => sum + t.subAgents.filter(a => a.status === 'running').length, 0);


  const alerts = currentPersona.teams.flatMap(t => t.activity.filter(a => a.type === 'alert').map(a => ({ ...a, teamName: t.name, teamId: t.id })));
  const recentArtifacts = currentPersona.teams.flatMap(t => t.artifacts.filter(a => a.daysAgo <= 1 && !a.pinned).map(a => ({ ...a, teamName: t.name })));
  const runningAgentsList = currentPersona.teams.flatMap(t => t.subAgents.filter(a => a.status === 'running').map(a => ({ ...a, teamName: t.name, teamId: t.id })));
  const deadlines = currentPersona.teams.filter(t => t.deadline).map(t => ({ ...t.deadline!, teamName: t.name, teamId: t.id }));
  const urgentDeadlines = deadlines.filter(d => d.daysLeft <= 7);
  const hasTeams = currentPersona.teams.length > 0;

  const handleCommand = () => {
    if (!commandInput.trim()) return;
    const input = commandInput;
    setCommandInput('');
    setCommandResponse(`Routing: "${input}" — your team leads are on it.`);
    setTimeout(() => setCommandResponse(null), 5000);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-10 py-10">
      {/* Header with integrated command */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-light tracking-tight" style={{ color: 'var(--c-text-primary)' }}>
            Good {getGreeting()}, {currentPersona.name}
          </h1>
          <button onClick={() => setShowAddTeam(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[12px] font-mono transition-colors"
            style={{ background: 'var(--c-accent)', color: 'white' }}>
            <Plus size={13} /> New Team
          </button>
        </div>

        {/* Command bar — part of the header, not floating */}
        {hasTeams && (
          <div className="relative mb-4">
            <input type="text" value={commandInput} onChange={e => setCommandInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleCommand()}
              placeholder="Tell your teams what to do..."
              className="w-full rounded-xl px-5 py-3 pr-12 text-[13px] focus:outline-none"
              style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text-primary)' }} />
            <button onClick={handleCommand}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: commandInput.trim() ? 'var(--c-accent)' : 'var(--c-surface-2)', color: commandInput.trim() ? 'white' : 'var(--c-text-muted)' }}>
              <ArrowUp size={13} />
            </button>
          </div>
        )}

        {/* Command response */}
        <AnimatePresence>
          {commandResponse && (
            <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
              className="mb-4 rounded-xl px-4 py-2.5 flex items-center gap-2"
              style={{ background: 'var(--c-accent-dim)', border: '1px solid var(--c-accent-border)' }}>
              <Bot size={13} style={{ color: 'var(--c-accent)' }} />
              <span className="text-[12px]" style={{ color: 'var(--c-text-primary)' }}>{commandResponse}</span>
              <button onClick={() => setCommandResponse(null)} className="ml-auto" style={{ color: 'var(--c-text-muted)' }}><X size={12} /></button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Empty state for new personas */}
      {!hasTeams && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
          <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ background: 'var(--c-accent-dim)' }}>
            <Rocket size={28} style={{ color: 'var(--c-accent)' }} />
          </div>
          <h2 className="text-xl font-light mb-2" style={{ color: 'var(--c-text-primary)' }}>Welcome to your Command Center</h2>
          <p className="text-[13px] max-w-md mx-auto mb-8" style={{ color: 'var(--c-text-secondary)' }}>
            Create your first team to get started. Describe what you need — we'll build the right AI team with the right agents, tools, and integrations.
          </p>
          <button onClick={() => navigate('/onboarding')}
            className="px-6 py-3 rounded-xl text-[13px] font-mono font-medium inline-flex items-center gap-2"
            style={{ background: 'var(--c-accent)', color: 'white' }}>
            <Plus size={15} /> Create Your First Team
          </button>

          {/* Suggestions */}
          <div className="mt-8">
            <div className="text-[9px] font-mono uppercase tracking-[0.12em] mb-3 flex items-center justify-center gap-1.5" style={{ color: 'var(--c-text-muted)' }}>
              <Sparkles size={9} /> Ideas to get started
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {currentPersona.suggestedActions.map(a => (
                <button key={a.id} onClick={() => navigate('/onboarding')}
                  className="text-[11px] font-mono px-3 py-1.5 rounded-full"
                  style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text-muted)' }}>
                  {a.text}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Status strip — only when teams exist */}
      {hasTeams && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          className="flex items-center gap-5 mb-6 px-5 py-3 rounded-xl"
          style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-breathe" style={{ background: 'var(--c-accent)' }} />
            <span className="text-[12px]" style={{ color: 'var(--c-text-primary)' }}>
              <span className="font-mono font-semibold">{runningAgents}</span> agents working across <span className="font-mono font-semibold">{currentPersona.teams.length}</span> teams
            </span>
          </div>
          <div className="w-px h-4" style={{ background: 'var(--c-border)' }} />
          <span className="text-[12px]" style={{ color: 'var(--c-text-secondary)' }}>
            <span className="font-mono font-semibold" style={{ color: 'var(--c-text-primary)' }}>{metrics.artifactsProducedThisWeek}</span> artifacts this week
          </span>
          {alerts.length > 0 && <>
            <div className="w-px h-4" style={{ background: 'var(--c-border)' }} />
            <span className="text-[12px] flex items-center gap-1.5" style={{ color: '#ef4444' }}>
              <AlertTriangle size={11} /> {alerts.length} alert{alerts.length > 1 ? 's' : ''}
            </span>
          </>}
          {urgentDeadlines.map((d, i) => (
            <span key={i} className="text-[12px] flex items-center gap-1.5" style={{ color: d.daysLeft <= 3 ? '#ef4444' : 'var(--c-accent)' }}>
              <Clock size={11} /> <span className="font-mono font-semibold">{d.daysLeft}d</span> {d.label}
            </span>
          ))}
        </motion.div>
      )}

      {/* Inline top alert — visible without expanding */}
      {hasTeams && alerts.length > 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
          className="mb-4 flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer"
          style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.12)' }}
          onClick={() => navigate(`/team/${alerts[0].teamId}`)}>
          <AlertTriangle size={13} className="text-red-400 shrink-0" />
          <span className="text-[12px] flex-1" style={{ color: 'var(--c-text-primary)' }}>{alerts[0].message}</span>
          <span className="text-[10px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{alerts[0].teamName}</span>
          <ChevronRight size={12} style={{ color: 'var(--c-text-muted)', opacity: 0.4 }} />
        </motion.div>
      )}

      {/* Teams grid */}
      {hasTeams && (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">
          {currentPersona.teams.map((team, i) => (
            <TeamCard key={team.id} team={team} index={i} />
          ))}
        </div>
      )}

      {/* Briefing — expandable, details on demand */}
      {hasTeams && (alerts.length > 0 || recentArtifacts.length > 0 || runningAgentsList.length > 0) && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <button onClick={() => setBriefingExpanded(!briefingExpanded)}
            className="flex items-center gap-2 w-full px-5 py-3 rounded-xl text-left transition-colors"
            style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
            <Activity size={13} style={{ color: 'var(--c-accent)' }} />
            <span className="text-[12px] flex-1" style={{ color: 'var(--c-text-secondary)' }}>
              Detailed briefing
              {alerts.length > 0 && <span className="text-red-400 ml-2">· {alerts.length} alert{alerts.length > 1 ? 's' : ''}</span>}
              {recentArtifacts.length > 0 && <span className="ml-2" style={{ color: 'var(--c-accent)' }}>· {recentArtifacts.length} to review</span>}
              {runningAgentsList.length > 0 && <span className="ml-2" style={{ color: 'var(--c-text-muted)' }}>· {runningAgentsList.length} in progress</span>}
            </span>
            <ChevronDown size={14} style={{ color: 'var(--c-text-muted)', transform: briefingExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
          </button>
          <AnimatePresence>
            {briefingExpanded && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="mt-3 rounded-xl p-5" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
                  {alerts.length > 0 && (
                    <div className="mb-4">
                      <div className="text-[10px] font-mono uppercase tracking-[0.12em] mb-2" style={{ color: 'var(--c-text-muted)' }}>Alerts</div>
                      {alerts.map((a, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b last:border-b-0" style={{ borderColor: 'var(--c-border)' }}>
                          <div className="flex items-start gap-2.5">
                            <AlertTriangle size={12} className="text-red-400 mt-0.5" />
                            <div>
                              <p className="text-[12px]" style={{ color: 'var(--c-text-primary)' }}>{a.message}</p>
                              <span className="text-[9px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{a.teamName}</span>
                            </div>
                          </div>
                          <div className="flex gap-1.5 shrink-0 ml-3">
                            <button onClick={() => navigate(`/team/${a.teamId}`)} className="px-2.5 py-1 rounded-lg text-[10px] font-mono" style={{ background: 'var(--c-accent)', color: 'white' }}>Review</button>
                            <button onClick={() => dismissAlert(a.id)} className="px-2.5 py-1 rounded-lg text-[10px] font-mono" style={{ background: 'var(--c-surface-2)', color: 'var(--c-text-muted)' }}>Dismiss</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {runningAgentsList.length > 0 && (
                    <div className="mb-4">
                      <div className="text-[10px] font-mono uppercase tracking-[0.12em] mb-2" style={{ color: 'var(--c-text-muted)' }}>In progress</div>
                      <div className="grid grid-cols-3 gap-2">
                        {runningAgentsList.map((a, i) => (
                          <button key={i} onClick={() => navigate(`/team/${a.teamId}`)} className="rounded-lg px-3 py-2 text-left" style={{ background: 'var(--c-surface-2)', border: '1px solid var(--c-border)' }}>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[11px] font-medium" style={{ color: 'var(--c-text-primary)' }}>{a.name}</span>
                              {a.progress && <span className="text-[9px] font-mono" style={{ color: 'var(--c-accent)' }}>{a.progress}%</span>}
                            </div>
                            <div className="text-[9px] font-mono mb-1" style={{ color: 'var(--c-text-muted)' }}>{a.teamName}</div>
                            {a.progress && <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: 'var(--c-border)' }}><div className="h-full rounded-full" style={{ width: `${a.progress}%`, background: 'var(--c-accent)' }} /></div>}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {recentArtifacts.length > 0 && (
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.12em] mb-2" style={{ color: 'var(--c-text-muted)' }}>Ready for review</div>
                      {recentArtifacts.slice(0, 3).map((a, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b last:border-b-0" style={{ borderColor: 'var(--c-border)' }}>
                          <div className="flex items-center gap-2 min-w-0">
                            <FileText size={11} style={{ color: 'var(--c-accent)' }} />
                            <p className="text-[12px] truncate" style={{ color: 'var(--c-text-primary)' }}>{a.title}</p>
                          </div>
                          <div className="flex gap-1.5 shrink-0 ml-3">
                            <button className="px-2.5 py-1 rounded-lg text-[10px] font-mono" style={{ background: 'var(--c-accent-dim)', color: 'var(--c-accent)' }}>Open</button>
                            <button onClick={() => approveArtifact(a.id)} className="px-2.5 py-1 rounded-lg text-[10px] font-mono" style={{ background: 'var(--c-surface-2)', color: 'var(--c-text-muted)' }}>Approve</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      <AnimatePresence>
        {showAddTeam && <AddTeamModal persona={currentPersona} onClose={() => setShowAddTeam(false)} onCreateTeam={addTeam} />}
      </AnimatePresence>
    </div>
  );
}

function getGreeting() {
  const h = new Date().getHours();
  return h < 12 ? 'morning' : h < 17 ? 'afternoon' : 'evening';
}

const teamExamples: Record<string, string[]> = {
  woody: ['Supply Chain Watch', 'Wine Expo Prep', 'Distributor Outreach', 'Tasting Room Analytics', 'PR & Press Watch'],
  sarah: ['New Client: Acme Corp', 'Regulatory Watch', 'Conference Prep', 'Knowledge Base Builder', 'Proposal Factory'],
  marcus: ['Feature Launch War Room', 'Customer Success Intel', 'Board Deck Prep', 'Dev Community Watch', 'Pricing Strategy'],
  alex: ['Engineering Team', 'Competitive Intel', 'Customer Research', 'Growth & Analytics', 'Infrastructure Monitor'],
};

function AddTeamModal({ persona, onClose, onCreateTeam }: { persona: import('../data/types').Persona; onClose: () => void; onCreateTeam: (name: string, desc: string, lead: string) => void }) {
  const [step, setStep] = useState<'describe' | 'confirm'>('describe');
  const [description, setDescription] = useState('');
  const [teamName, setTeamName] = useState('');
  const examples = teamExamples[persona.id] || teamExamples.alex;

  const leadNames = ['Atlas', 'Scout', 'Sentinel', 'Muse', 'Hunter', 'Compass', 'Watchdog', 'Quill', 'Pathfinder', 'Echo', 'Radar', 'Herald', 'Terra', 'Forge', 'Nexus', 'Spark', 'Orbit'];
  const leadName = leadNames[Math.floor((description.length + teamName.length) % leadNames.length)] || 'Agent';

  const handleCreate = () => {
    const finalName = teamName.trim() || description.split(' ').slice(0, 3).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    onCreateTeam(finalName, description, leadName);
    setStep('confirm');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 backdrop-blur-sm" style={{ background: 'var(--c-overlay)' }} onClick={onClose} />
      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
        className="relative rounded-2xl w-full max-w-lg overflow-hidden" style={{ background: 'var(--c-bg-elevated)', border: '1px solid var(--c-border)' }}>
        <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: 'var(--c-border)' }}>
          <h2 className="text-[15px] font-medium" style={{ color: 'var(--c-text-primary)' }}>Create a Team</h2>
          <button onClick={onClose} style={{ color: 'var(--c-text-muted)' }}><X size={16} /></button>
        </div>
        <div className="px-6 py-6">
          {step === 'describe' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="text-[13px] mb-4" style={{ color: 'var(--c-text-secondary)' }}>
                Describe what you need — we'll build a team with the right agents, tools, and integrations.
              </p>
              <div className="mb-3">
                <label className="text-[10px] font-mono uppercase tracking-[0.1em] block mb-1" style={{ color: 'var(--c-text-muted)' }}>Team name <span style={{ opacity: 0.5 }}>(optional)</span></label>
                <input type="text" value={teamName} onChange={e => setTeamName(e.target.value)} placeholder="We'll generate one if blank"
                  className="w-full px-4 py-2.5 rounded-xl text-[13px] focus:outline-none"
                  style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text-primary)' }} />
              </div>
              <div className="mb-4">
                <label className="text-[10px] font-mono uppercase tracking-[0.1em] block mb-1" style={{ color: 'var(--c-text-muted)' }}>What should this team do?</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)}
                  placeholder="e.g., Monitor our competitors' pricing, track new product launches, and alert me to any changes"
                  rows={4} className="w-full px-4 py-3 rounded-xl text-[13px] focus:outline-none resize-none"
                  style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text-primary)' }} />
              </div>
              <div className="mb-4">
                <div className="text-[9px] font-mono uppercase tracking-[0.1em] mb-2 flex items-center gap-1.5" style={{ color: 'var(--c-text-muted)' }}>
                  <Sparkles size={9} /> Ideas
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {examples.map((ex, i) => (
                    <button key={i} onClick={() => { setTeamName(ex); setDescription(`Set up a team focused on ${ex.toLowerCase()}. Configure the right agents, connectors, and automations.`); }}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full transition-colors"
                      style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text-muted)' }}>
                      {ex}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={handleCreate} className="w-full px-4 py-3 rounded-xl text-[12px] font-mono font-medium"
                style={{ background: description.trim() ? 'var(--c-accent)' : 'var(--c-surface-2)', color: description.trim() ? 'white' : 'var(--c-text-muted)' }}
                disabled={!description.trim()}>
                Create Team
              </button>
            </motion.div>
          )}
          {step === 'confirm' && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-4">
              <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: 'var(--c-accent-dim)' }}>
                <Bot size={24} style={{ color: 'var(--c-accent)' }} />
              </div>
              <h3 className="text-[16px] font-medium mb-1" style={{ color: 'var(--c-text-primary)' }}>{teamName || 'New Team'}</h3>
              <p className="text-[12px] font-mono mb-3" style={{ color: 'var(--c-accent)' }}>Team lead: {leadName}</p>
              <p className="text-[12px] mb-4 max-w-sm mx-auto" style={{ color: 'var(--c-text-secondary)' }}>
                Your team is live. {leadName} is setting up agents and integrations. You'll see activity start appearing shortly.
              </p>
              <button onClick={onClose} className="px-6 py-2.5 rounded-xl text-[12px] font-mono font-medium" style={{ background: 'var(--c-accent)', color: 'white' }}>
                Go to Command Center
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
