import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ArrowUp, Check, Bot, Terminal, LayoutGrid, Zap, Link2, Clock, Rocket } from 'lucide-react';
import { usePersona } from '../context/PersonaContext';

type Step = 'describe' | 'review' | 'integrations' | 'automations' | 'deploy' | 'first-direction';

interface ProposedIntegration {
  name: string;
  type: string;
  description: string;
  connected: boolean;
}

interface ProposedAutomation {
  name: string;
  schedule: string;
  enabled: boolean;
}

// Infer team config from description
function inferProposal(name: string, description: string) {
  const lower = (name + ' ' + description).toLowerCase();

  if (lower.includes('engineer') || lower.includes('develop') || lower.includes('code') || lower.includes('ship') || lower.includes('build')) {
    return {
      leadName: 'Forge',
      leadPersonality: 'Systematic and ship-focused',
      leadDesc: 'Engineering orchestrator who coordinates development agents, manages code quality, and keeps the team shipping.',
      agents: [
        { name: 'Code Agent', role: 'Full-stack developer', workspaceType: 'sandbox' as const, skills: ['TypeScript', 'Python', 'React', 'API design'] },
        { name: 'Code Reviewer', role: 'Quality & security', workspaceType: 'canvas' as const, skills: ['code review', 'security audit', 'best practices'] },
        { name: 'DevOps Agent', role: 'CI/CD & infrastructure', workspaceType: 'sandbox' as const, skills: ['Docker', 'GitHub Actions', 'monitoring'] },
      ],
      integrations: [
        { name: 'GitHub', type: 'Code repository', description: 'Access repos, create PRs, run actions', connected: false },
        { name: 'Linear', type: 'Project management', description: 'Track issues, sprints, and roadmap', connected: false },
        { name: 'Datadog', type: 'Monitoring', description: 'Application metrics and alerts', connected: false },
        { name: 'Slack', type: 'Messaging', description: 'Notifications and team updates', connected: false },
      ],
      automations: [
        { name: 'Run tests on every push', schedule: 'On git push', enabled: true },
        { name: 'Daily code health report', schedule: 'Every day at 9:00 AM', enabled: true },
        { name: 'Weekly sprint summary', schedule: 'Every Friday at 5:00 PM', enabled: true },
      ],
    };
  }

  if (lower.includes('competi') || lower.includes('monitor') || lower.includes('watch') || lower.includes('track')) {
    return {
      leadName: 'Sentinel',
      leadPersonality: 'Vigilant and data-driven',
      leadDesc: 'Competitive intelligence specialist who tracks market changes and competitor moves around the clock.',
      agents: [
        { name: 'Web Scanner', role: 'Website & pricing monitor', workspaceType: 'sandbox' as const, skills: ['web scraping', 'price tracking', 'change detection'] },
        { name: 'Signal Analyst', role: 'Trend & pattern detection', workspaceType: 'canvas' as const, skills: ['data analysis', 'anomaly detection', 'reporting'] },
      ],
      integrations: [
        { name: 'Google Alerts', type: 'Monitoring', description: 'Track mentions and news', connected: false },
        { name: 'Crunchbase', type: 'Data', description: 'Company and funding data', connected: false },
        { name: 'Slack', type: 'Messaging', description: 'Alert notifications', connected: false },
      ],
      automations: [
        { name: 'Daily competitor scan', schedule: 'Every day at 7:00 AM', enabled: true },
        { name: 'Alert on pricing changes', schedule: 'Real-time monitoring', enabled: true },
        { name: 'Weekly digest', schedule: 'Every Monday at 9:00 AM', enabled: true },
      ],
    };
  }

  if (lower.includes('customer') || lower.includes('research') || lower.includes('feedback') || lower.includes('user')) {
    return {
      leadName: 'Echo',
      leadPersonality: 'Empathetic and insight-driven',
      leadDesc: 'Research synthesizer who processes customer feedback and surfaces actionable insights.',
      agents: [
        { name: 'Feedback Processor', role: 'Reviews & NPS analyzer', workspaceType: 'sandbox' as const, skills: ['NLP', 'sentiment analysis', 'data processing'] },
        { name: 'Insight Writer', role: 'Report & theme synthesizer', workspaceType: 'canvas' as const, skills: ['synthesis', 'report writing', 'visualization'] },
      ],
      integrations: [
        { name: 'Intercom', type: 'Support', description: 'Customer conversations and tickets', connected: false },
        { name: 'Typeform', type: 'Surveys', description: 'Survey responses and NPS data', connected: false },
        { name: 'Slack', type: 'Messaging', description: 'Insight notifications', connected: false },
      ],
      automations: [
        { name: 'Process new feedback daily', schedule: 'Every day at 8:00 AM', enabled: true },
        { name: 'Weekly insight report', schedule: 'Every Friday at 4:00 PM', enabled: true },
        { name: 'NPS trend alert', schedule: 'When score changes >5 pts', enabled: true },
      ],
    };
  }

  // Default
  return {
    leadName: 'Compass',
    leadPersonality: 'Adaptive and resourceful',
    leadDesc: 'Versatile team lead who coordinates agents to deliver on your goals.',
    agents: [
      { name: 'Research Agent', role: 'Data gathering & analysis', workspaceType: 'canvas' as const, skills: ['research', 'analysis', 'synthesis'] },
      { name: 'Builder Agent', role: 'Content & output creation', workspaceType: 'sandbox' as const, skills: ['content creation', 'formatting', 'delivery'] },
    ],
    integrations: [
      { name: 'Google Drive', type: 'Storage', description: 'Document storage and sharing', connected: false },
      { name: 'Slack', type: 'Messaging', description: 'Team notifications', connected: false },
    ],
    automations: [
      { name: 'Daily status check', schedule: 'Every day at 9:00 AM', enabled: true },
      { name: 'Weekly output review', schedule: 'Every Friday at 5:00 PM', enabled: true },
    ],
  };
}

export default function Onboarding() {
  const navigate = useNavigate();
  const { addTeam } = usePersona();
  const [step, setStep] = useState<Step>('describe');
  const [teamName, setTeamName] = useState('');
  const [description, setDescription] = useState('');
  const [proposal, setProposal] = useState<ReturnType<typeof inferProposal> | null>(null);
  const [integrations, setIntegrations] = useState<ProposedIntegration[]>([]);
  const [automations, setAutomations] = useState<ProposedAutomation[]>([]);
  const [deployPhase, setDeployPhase] = useState(0);
  const [firstCommand, setFirstCommand] = useState('');
  const [commandSent, setCommandSent] = useState(false);

  const handleDescribeNext = () => {
    if (!teamName.trim() || !description.trim()) return;
    const p = inferProposal(teamName, description);
    setProposal(p);
    setIntegrations(p.integrations);
    setAutomations(p.automations);
    setStep('review');
  };

  const handleDeploy = () => {
    if (!proposal) return;
    addTeam(teamName, description, proposal.leadName);
    setStep('deploy');
    // Simulate deployment phases
    setTimeout(() => setDeployPhase(1), 1000);
    setTimeout(() => setDeployPhase(2), 3000);
    setTimeout(() => setDeployPhase(3), 5000);
    setTimeout(() => setDeployPhase(4), 7000);
  };

  const handleFirstCommand = () => {
    if (!firstCommand.trim()) return;
    setCommandSent(true);
    setTimeout(() => navigate('/'), 2000);
  };

  const toggleIntegration = (i: number) => {
    setIntegrations(prev => prev.map((int, idx) => idx === i ? { ...int, connected: !int.connected } : int));
  };

  const toggleAutomation = (i: number) => {
    setAutomations(prev => prev.map((auto, idx) => idx === i ? { ...auto, enabled: !auto.enabled } : auto));
  };

  const connectedCount = integrations.filter(i => i.connected).length;
  const enabledAutoCount = automations.filter(a => a.enabled).length;

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12" style={{ background: 'var(--c-bg)' }}>
      <div className="w-full max-w-xl">
        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {['describe', 'review', 'integrations', 'automations', 'deploy', 'first-direction'].map((s) => (
            <div key={s} className="w-2 h-2 rounded-full transition-all"
              style={{ background: s === step ? 'var(--c-accent)' : 'var(--c-border)', transform: s === step ? 'scale(1.3)' : 'scale(1)' }} />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* STEP 1: Describe */}
          {step === 'describe' && (
            <motion.div key="describe" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}>
              <h2 className="text-2xl font-light mb-2" style={{ color: 'var(--c-text-primary)' }}>Create your first team</h2>
              <p className="text-[13px] mb-6" style={{ color: 'var(--c-text-muted)' }}>Tell us what you need. We'll propose the right structure.</p>

              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-[0.1em] block mb-1.5" style={{ color: 'var(--c-text-muted)' }}>Team name</label>
                  <input type="text" value={teamName} onChange={e => setTeamName(e.target.value)} placeholder="e.g., Engineering Team, Competitive Intel"
                    className="w-full px-4 py-3 rounded-xl text-[14px] focus:outline-none"
                    style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text-primary)' }} />
                </div>
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-[0.1em] block mb-1.5" style={{ color: 'var(--c-text-muted)' }}>What should this team do?</label>
                  <textarea value={description} onChange={e => setDescription(e.target.value)}
                    placeholder="Be specific — what problems should it solve? What should it track, build, or produce?"
                    rows={4} className="w-full px-4 py-3 rounded-xl text-[14px] focus:outline-none resize-none"
                    style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text-primary)' }} />
                </div>

                {/* Quick ideas */}
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[9px] font-mono uppercase tracking-[0.1em] mr-1 mt-1" style={{ color: 'var(--c-text-muted)' }}>Ideas:</span>
                  {['Engineering Team', 'Competitive Intel', 'Customer Research'].map(idea => (
                    <button key={idea} onClick={() => { setTeamName(idea); setDescription(`Set up a team focused on ${idea.toLowerCase()}. Configure the right agents, tools, and automations.`); }}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full"
                      style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text-muted)' }}>{idea}</button>
                  ))}
                </div>

                <button onClick={handleDescribeNext} disabled={!teamName.trim() || !description.trim()}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-[13px] font-mono font-medium"
                  style={{ background: teamName.trim() && description.trim() ? 'var(--c-accent)' : 'var(--c-surface-2)', color: teamName.trim() && description.trim() ? 'white' : 'var(--c-text-muted)' }}>
                  Review Proposal <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Review proposal */}
          {step === 'review' && proposal && (
            <motion.div key="review" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}>
              <h2 className="text-2xl font-light mb-2" style={{ color: 'var(--c-text-primary)' }}>Here's what we recommend</h2>
              <p className="text-[13px] mb-6" style={{ color: 'var(--c-text-muted)' }}>Review the proposed team structure. You can adjust everything later.</p>

              {/* Team lead */}
              <div className="rounded-xl p-4 mb-4" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
                <div className="flex items-center gap-3 mb-2">
                  <Bot size={18} style={{ color: 'var(--c-accent)' }} />
                  <div>
                    <div className="text-[14px] font-medium" style={{ color: 'var(--c-text-primary)' }}>{proposal.leadName}</div>
                    <div className="text-[11px]" style={{ color: 'var(--c-text-muted)' }}>Team Lead · {proposal.leadPersonality}</div>
                  </div>
                </div>
                <p className="text-[12px]" style={{ color: 'var(--c-text-secondary)' }}>{proposal.leadDesc}</p>
              </div>

              {/* Agents */}
              <div className="mb-4">
                <div className="text-[10px] font-mono uppercase tracking-[0.1em] mb-2" style={{ color: 'var(--c-text-muted)' }}>Agents ({proposal.agents.length})</div>
                <div className="space-y-2">
                  {proposal.agents.map((agent, _i) => (
                    <div key={agent.name} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
                      {agent.workspaceType === 'canvas' ? <LayoutGrid size={14} style={{ color: 'var(--c-accent)' }} /> : <Terminal size={14} style={{ color: 'var(--c-terminal-text)' }} />}
                      <div className="flex-1">
                        <div className="text-[13px]" style={{ color: 'var(--c-text-primary)' }}>{agent.name}</div>
                        <div className="text-[10px]" style={{ color: 'var(--c-text-muted)' }}>{agent.role} · {agent.workspaceType}</div>
                      </div>
                      <div className="flex gap-1">
                        {agent.skills.slice(0, 2).map((s, j) => (
                          <span key={j} className="text-[8px] font-mono px-1.5 py-0.5 rounded" style={{ background: 'var(--c-surface-2)', color: 'var(--c-text-muted)' }}>{s}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary of what's next */}
              <div className="flex items-center gap-4 mb-6 text-[11px]" style={{ color: 'var(--c-text-muted)' }}>
                <span className="flex items-center gap-1"><Link2 size={10} /> {integrations.length} integrations to connect</span>
                <span className="flex items-center gap-1"><Zap size={10} /> {automations.length} automations to configure</span>
              </div>

              <div className="flex gap-3">
                <button onClick={() => setStep('describe')} className="px-4 py-3 rounded-xl text-[13px] font-mono"
                  style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text-muted)' }}>
                  <ArrowLeft size={14} />
                </button>
                <button onClick={() => setStep('integrations')}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-[13px] font-mono font-medium"
                  style={{ background: 'var(--c-accent)', color: 'white' }}>
                  Connect Integrations <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Integrations */}
          {step === 'integrations' && (
            <motion.div key="integrations" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}>
              <h2 className="text-2xl font-light mb-2" style={{ color: 'var(--c-text-primary)' }}>Connect your tools</h2>
              <p className="text-[13px] mb-6" style={{ color: 'var(--c-text-muted)' }}>Your agents need access to data sources. Connect what you use — skip the rest.</p>

              <div className="space-y-2 mb-6">
                {integrations.map((int, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-xl px-4 py-3.5"
                    style={{ background: 'var(--c-surface)', border: `1px solid ${int.connected ? 'var(--c-accent-border)' : 'var(--c-border)'}` }}>
                    <div className="flex-1">
                      <div className="text-[13px] font-medium" style={{ color: 'var(--c-text-primary)' }}>{int.name}</div>
                      <div className="text-[11px]" style={{ color: 'var(--c-text-muted)' }}>{int.description}</div>
                    </div>
                    <button onClick={() => toggleIntegration(i)}
                      className="px-4 py-2 rounded-lg text-[11px] font-mono font-medium transition-all"
                      style={{
                        background: int.connected ? 'var(--c-accent)' : 'var(--c-surface-2)',
                        color: int.connected ? 'white' : 'var(--c-text-secondary)',
                        border: `1px solid ${int.connected ? 'var(--c-accent)' : 'var(--c-border)'}`,
                      }}>
                      {int.connected ? <span className="flex items-center gap-1"><Check size={12} /> Connected</span> : 'Connect'}
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button onClick={() => setStep('review')} className="px-4 py-3 rounded-xl text-[13px] font-mono"
                  style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text-muted)' }}>
                  <ArrowLeft size={14} />
                </button>
                <button onClick={() => setStep('automations')}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-[13px] font-mono font-medium"
                  style={{ background: 'var(--c-accent)', color: 'white' }}>
                  {connectedCount > 0 ? `Continue with ${connectedCount} connected` : 'Skip for now'} <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Automations */}
          {step === 'automations' && (
            <motion.div key="automations" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}>
              <h2 className="text-2xl font-light mb-2" style={{ color: 'var(--c-text-primary)' }}>Configure automations</h2>
              <p className="text-[13px] mb-6" style={{ color: 'var(--c-text-muted)' }}>These will run on schedule. Toggle off anything you don't need.</p>

              <div className="space-y-2 mb-6">
                {automations.map((auto, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-xl px-4 py-3.5"
                    style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', opacity: auto.enabled ? 1 : 0.5 }}>
                    <Zap size={14} style={{ color: auto.enabled ? 'var(--c-accent)' : 'var(--c-text-muted)' }} />
                    <div className="flex-1">
                      <div className="text-[13px]" style={{ color: 'var(--c-text-primary)' }}>{auto.name}</div>
                      <div className="flex items-center gap-1 text-[11px]" style={{ color: 'var(--c-text-muted)' }}>
                        <Clock size={9} /> {auto.schedule}
                      </div>
                    </div>
                    <button onClick={() => toggleAutomation(i)}
                      className="w-10 h-6 rounded-full relative transition-colors cursor-pointer"
                      style={{ background: auto.enabled ? 'var(--c-accent)' : 'var(--c-surface-3)' }}>
                      <div className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all" style={{ left: auto.enabled ? '22px' : '4px' }} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button onClick={() => setStep('integrations')} className="px-4 py-3 rounded-xl text-[13px] font-mono"
                  style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text-muted)' }}>
                  <ArrowLeft size={14} />
                </button>
                <button onClick={handleDeploy}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-[13px] font-mono font-medium"
                  style={{ background: 'var(--c-accent)', color: 'white' }}>
                  <Rocket size={14} /> Deploy Team
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 5: Deploy */}
          {step === 'deploy' && proposal && (
            <motion.div key="deploy" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
              className="text-center">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ background: 'var(--c-accent-dim)' }}>
                <Bot size={28} style={{ color: 'var(--c-accent)' }} />
              </div>
              <h2 className="text-2xl font-light mb-2" style={{ color: 'var(--c-text-primary)' }}>{teamName}</h2>
              <p className="text-[13px] mb-8" style={{ color: 'var(--c-text-muted)' }}>{proposal.leadName} is setting up your team</p>

              <div className="text-left max-w-sm mx-auto space-y-3 mb-8">
                {[
                  { label: 'Provisioning sandbox environment', phase: 0 },
                  { label: `Deploying ${proposal.leadName} as team lead`, phase: 1 },
                  { label: `Spinning up ${proposal.agents.length} agents`, phase: 2 },
                  { label: `Connecting ${connectedCount} integration${connectedCount !== 1 ? 's' : ''}`, phase: 3 },
                  { label: `Configuring ${enabledAutoCount} automation${enabledAutoCount !== 1 ? 's' : ''}`, phase: 4 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {deployPhase > item.phase ? (
                      <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'var(--c-accent)' }}>
                        <Check size={12} color="white" />
                      </div>
                    ) : deployPhase === item.phase ? (
                      <div className="w-5 h-5 rounded-full animate-breathe" style={{ background: 'var(--c-accent)', opacity: 0.6 }} />
                    ) : (
                      <div className="w-5 h-5 rounded-full" style={{ background: 'var(--c-surface-2)', border: '1px solid var(--c-border)' }} />
                    )}
                    <span className="text-[13px]" style={{ color: deployPhase >= item.phase ? 'var(--c-text-primary)' : 'var(--c-text-muted)' }}>{item.label}</span>
                  </div>
                ))}
              </div>

              {deployPhase >= 4 && (
                <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} onClick={() => setStep('first-direction')}
                  className="px-6 py-3 rounded-xl text-[13px] font-mono font-medium inline-flex items-center gap-2"
                  style={{ background: 'var(--c-accent)', color: 'white' }}>
                  Give your first direction <ArrowRight size={14} />
                </motion.button>
              )}
            </motion.div>
          )}

          {/* STEP 6: First direction */}
          {step === 'first-direction' && proposal && (
            <motion.div key="first-direction" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}>
              <h2 className="text-2xl font-light mb-2" style={{ color: 'var(--c-text-primary)' }}>Your team is ready</h2>
              <p className="text-[13px] mb-6" style={{ color: 'var(--c-text-muted)' }}>
                {proposal.leadName} and {proposal.agents.length} agents are standing by. What should they work on first?
              </p>

              <div className="rounded-xl overflow-hidden mb-4" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
                {/* Mock chat */}
                <div className="px-5 py-4 border-b" style={{ borderColor: 'var(--c-border)' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Bot size={14} style={{ color: 'var(--c-accent)' }} />
                    <span className="text-[12px] font-medium" style={{ color: 'var(--c-text-primary)' }}>{proposal.leadName}</span>
                  </div>
                  <p className="text-[13px] leading-relaxed" style={{ color: 'var(--c-text-secondary)' }}>
                    Team is deployed and ready. I have {proposal.agents.length} agents configured{connectedCount > 0 ? ` with ${connectedCount} data sources connected` : ''}. What would you like us to focus on first?
                  </p>
                </div>

                {commandSent ? (
                  <div className="px-5 py-4">
                    <div className="flex justify-end mb-3">
                      <div className="rounded-2xl rounded-br-md px-4 py-2.5" style={{ background: 'var(--c-accent)', color: 'white' }}>
                        <p className="text-[13px]">{firstCommand}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full animate-breathe" style={{ background: 'var(--c-accent)' }} />
                      <span className="text-[12px]" style={{ color: 'var(--c-text-muted)' }}>{proposal.leadName} is on it...</span>
                    </div>
                  </div>
                ) : (
                  <div className="px-4 py-3 flex items-center gap-2">
                    <input type="text" value={firstCommand} onChange={e => setFirstCommand(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleFirstCommand()}
                      placeholder={`Message ${proposal.leadName}...`}
                      className="flex-1 bg-transparent px-3 py-2.5 rounded-xl text-[13px] focus:outline-none"
                      style={{ background: 'var(--c-surface-2)', border: '1px solid var(--c-border)', color: 'var(--c-text-primary)' }} />
                    <button onClick={handleFirstCommand}
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: firstCommand.trim() ? 'var(--c-accent)' : 'var(--c-surface-2)', color: firstCommand.trim() ? 'white' : 'var(--c-text-muted)' }}>
                      <ArrowUp size={14} />
                    </button>
                  </div>
                )}
              </div>

              <button onClick={() => navigate('/')} className="w-full text-center text-[12px] font-mono py-2 transition-colors" style={{ color: 'var(--c-text-muted)' }}>
                Skip — go to Command Center
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
