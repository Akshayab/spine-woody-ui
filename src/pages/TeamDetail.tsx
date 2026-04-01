import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Zap, Bot, Terminal, LayoutGrid, ChevronRight, ArrowRight, MessageSquare, ArrowUp, Server } from 'lucide-react';
import { usePersona } from '../context/PersonaContext';
import ArtifactPreview from '../components/ArtifactPreview';
import CanvasDAG from '../components/CanvasDAG';
import SandboxTerminal from '../components/SandboxTerminal';
import Sparkline from '../components/Sparkline';
import type { Artifact, TeamType, SubAgent, ChatMessage } from '../data/types';

const typeColors: Record<TeamType, string> = { monitoring: '#d4a053', research: '#7a9ec2', content: '#b89ad4', bd: '#6ab89a' };
const typeLabels: Record<TeamType, string> = { monitoring: 'Monitoring', research: 'Research', content: 'Creative', bd: 'Business Dev' };

const chatResponses: Record<string, string[]> = {
  monitoring: [
    "Running a scan now. Price Tracker is pulling fresh data from all tracked sources.",
    "I'll spin up a sub-agent to investigate. Results within the hour.",
    "Checking now. Social Monitor is cross-referencing the latest posts.",
  ],
  research: [
    "Good question. Let me get Trend Analyst to look into that specifically.",
    "Web Crawler is on it. I'll have sources gathered within 30 minutes.",
    "Starting analysis now. Report Builder will format the findings once ready.",
  ],
  content: [
    "Content Drafter is starting a canvas for this. First draft in ~45 minutes.",
    "I'll pull the latest market data into the brief first, then draft options.",
    "Campaign Builder can handle that. Setting up the sandbox now.",
  ],
  bd: [
    "RFP Scanner is checking against your criteria right now.",
    "Account Researcher is pulling background. I'll have a summary shortly.",
    "Proposal Writer is available. Setting up the canvas with key sections.",
  ],
};

export default function TeamDetail() {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const { currentPersona } = usePersona();
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null);
  const [rightTab, setRightTab] = useState<'overview' | 'chat'>('overview');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  const team = currentPersona.teams.find(t => t.id === (teamId || ''));

  // Load chat messages from persona data
  useEffect(() => {
    if (!team) return;
    const thread = currentPersona.chatThreads.find(t => t.teamId === team.id);
    setChatMessages(thread?.messages ? [...thread.messages] : []);
  }, [currentPersona.id, teamId]);

  if (!team) {
    return <div className="p-8"><p style={{ color: 'var(--c-text-muted)' }}>Team not found.</p></div>;
  }

  const color = typeColors[team.type];
  const runningAgents = team.subAgents.filter(a => a.status === 'running');

  const handleChatSend = (text: string) => {
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`, sender: 'user', text,
      timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
      teamId: team.id,
    };
    setChatMessages(prev => [...prev, userMsg]);
    setTimeout(() => {
      const responses = chatResponses[team.type] || chatResponses.monitoring;
      const sysMsg: ChatMessage = {
        id: `s-${Date.now()}`, sender: 'system',
        text: `${team.lead.name}: ${responses[Math.floor(Math.random() * responses.length)]}`,
        timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
        teamId: team.id,
      };
      setChatMessages(prev => [...prev, sysMsg]);
    }, 800);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen">
      {/* Top bar */}
      <div className="px-8 pt-6 pb-2 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-[12px] font-mono transition-colors" style={{ color: 'var(--c-text-muted)' }}>
          <ArrowLeft size={14} /> Command Center
        </button>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full animate-breathe" style={{ backgroundColor: color }} />
          <span className="text-[10px] font-mono uppercase tracking-[0.15em]" style={{ color }}>{typeLabels[team.type]}</span>
        </div>
      </div>

      <div className="px-8 pb-8">
        {/* Header */}
        <div className="mb-5">
          <h1 className="text-2xl font-light tracking-tight" style={{ color: 'var(--c-text-primary)' }}>{team.name}</h1>
          <p className="text-[12px] mt-1 max-w-xl" style={{ color: 'var(--c-text-muted)' }}>{team.description}</p>
        </div>

        {/* Briefing */}
        <TeamBriefing team={team} color={color} />

        {/* Two-column layout */}
        <div className="grid grid-cols-[1fr_340px] gap-6">
          {/* LEFT */}
          <div>
            {/* Team lead card */}
            <div className="rounded-xl p-4 mb-4 flex items-center gap-4" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${color}15` }}>
                <Bot size={20} style={{ color }} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[14px] font-semibold" style={{ color: 'var(--c-text-primary)' }}>{team.lead.name}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ background: 'var(--c-accent-dim)', color: 'var(--c-accent)' }}>Team Lead</span>
                </div>
                <p className="text-[12px]" style={{ color: 'var(--c-text-secondary)' }}>{team.lead.description}</p>
              </div>
              <div className="text-[10px] font-mono" style={{ color: 'var(--c-text-muted)' }}>
                {runningAgents.length} / {team.subAgents.length} active
              </div>
            </div>

            {/* Sub-agents */}
            <div className="mb-3">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.12em]" style={{ color: 'var(--c-text-muted)' }}>Sub-agents</h3>
            </div>

            {/* Sub-agents */}
            <div className="space-y-3">
              {team.subAgents.map((agent, i) => (
                <SubAgentCard key={agent.id} agent={agent} color={color} index={i}
                  expanded={expandedAgent === agent.id}
                  onToggle={() => setExpandedAgent(expandedAgent === agent.id ? null : agent.id)} />
              ))}
            </div>

            {/* Automations */}
            <div className="mt-6">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--c-text-muted)' }}>Automations</h3>
              <div className="space-y-2">
                {team.automations.map(auto => (
                  <div key={auto.id} className="flex items-center gap-3 rounded-lg px-4 py-2.5" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
                    <Zap size={12} style={{ color }} />
                    <span className="text-[12px] flex-1" style={{ color: 'var(--c-text-primary)' }}>{auto.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded" style={{ background: 'var(--c-surface-2)', color: 'var(--c-text-muted)' }}>{auto.schedule}</span>
                      <ArrowRight size={9} style={{ color, opacity: 0.4 }} />
                      <span className="text-[9px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{auto.nextRun}</span>
                    </div>
                    <div className={`w-1.5 h-1.5 rounded-full ${auto.enabled ? 'animate-breathe' : ''}`} style={{ background: auto.enabled ? color : 'var(--c-text-muted)' }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Integrations */}
            {team.integrations && team.integrations.length > 0 && (
              <div className="mt-6">
                <h3 className="text-[10px] font-mono uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--c-text-muted)' }}>Connectors</h3>
                <div className="flex flex-wrap gap-2">
                  {team.integrations.map(int => (
                    <div key={int.id} className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: int.status === 'connected' ? 'var(--c-accent)' : int.status === 'error' ? '#ef4444' : 'var(--c-text-muted)' }} />
                      <span className="text-[11px]" style={{ color: 'var(--c-text-primary)' }}>{int.name}</span>
                      <span className="text-[9px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{int.lastSync}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Persistent team terminal */}
            {team.terminal && (
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.12em] flex items-center gap-2" style={{ color: 'var(--c-text-muted)' }}>
                    <Server size={10} /> Team Sandbox
                  </h3>
                  <div className="flex items-center gap-3 text-[9px] font-mono" style={{ color: 'var(--c-text-muted)' }}>
                    <span className="flex items-center gap-1"><div className="w-1 h-1 rounded-full animate-breathe" style={{ background: 'var(--c-terminal-text)' }} /> Up {team.terminal.uptime}</span>
                    <span>{team.terminal.files.length} files</span>
                    <span>{team.terminal.activeProcesses.length} processes</span>
                  </div>
                </div>
                <SandboxTerminal lines={team.terminal.terminalLines} files={team.terminal.files} height={140} />
              </div>
            )}
          </div>

          {/* RIGHT: Tabbed — Overview / Chat */}
          <div className="flex flex-col" style={{ minHeight: '500px' }}>
            {/* Tab bar */}
            <div className="flex items-center gap-0 mb-3 border-b" style={{ borderColor: 'var(--c-border)' }}>
              {(['overview', 'chat'] as const).map(tab => (
                <button key={tab} onClick={() => setRightTab(tab)}
                  className="relative px-4 py-2.5 text-[11px] font-mono uppercase tracking-[0.1em] transition-colors"
                  style={{ color: rightTab === tab ? 'var(--c-text-primary)' : 'var(--c-text-muted)' }}>
                  {tab === 'chat' && <MessageSquare size={10} className="inline mr-1.5" />}
                  {tab}
                  {rightTab === tab && <motion.div layoutId="right-tab" className="absolute bottom-0 left-0 right-0 h-px" style={{ background: color }} />}
                </button>
              ))}
            </div>

            {rightTab === 'overview' ? (
              <div className="flex-1 overflow-y-auto">
                {/* KPIs */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {team.kpis.map((kpi, i) => (
                    <div key={i} className="rounded-lg px-3 py-2" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
                      <div className="text-[8px] font-mono uppercase tracking-[0.12em]" style={{ color: 'var(--c-text-muted)' }}>{kpi.label}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-base font-semibold font-mono" style={{ color: 'var(--c-text-primary)' }}>{kpi.value}</span>
                        {kpi.sparkline && <Sparkline data={kpi.sparkline} color={color} width={36} height={14} />}
                      </div>
                      {kpi.change && <div className="text-[9px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{kpi.change}</div>}
                    </div>
                  ))}
                </div>

                {/* Activity */}
                <div className="mb-4">
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--c-text-muted)' }}>Activity</h3>
                  <div className="space-y-0.5">
                    {team.activity.map((item, i) => (
                      <motion.div key={item.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                        className="flex items-start gap-2.5 px-3 py-2 rounded-lg">
                        <ActivityDot type={item.type} color={color} />
                        <div>
                          <p className="text-[11px] leading-relaxed" style={{ color: 'var(--c-text-primary)' }}>{item.message}</p>
                          <span className="text-[9px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{item.timestamp}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Artifacts */}
                <div>
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--c-text-muted)' }}>Artifacts</h3>
                  <div className="space-y-1.5">
                    {team.artifacts.slice(0, 4).map(artifact => (
                      <div key={artifact.id} onClick={() => setSelectedArtifact(artifact)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors"
                        style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
                        <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: 'var(--c-surface-2)', border: '1px solid var(--c-border)' }}>
                          <span className="text-[8px] font-mono uppercase" style={{ color }}>{artifact.type.charAt(0)}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[12px] truncate" style={{ color: 'var(--c-text-primary)' }}>{artifact.title}</div>
                          {artifact.subAgentName && <div className="text-[9px] font-mono" style={{ color: 'var(--c-text-muted)' }}>via {artifact.subAgentName}</div>}
                        </div>
                        <span className="text-[10px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{artifact.daysAgo === 0 ? 'Today' : `${artifact.daysAgo}d`}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <TeamChat messages={chatMessages} onSend={handleChatSend} leadName={team.lead.name} color={color} />
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedArtifact && <ArtifactPreview artifact={selectedArtifact} onClose={() => setSelectedArtifact(null)} />}
      </AnimatePresence>
    </motion.div>
  );
}

// ============ TEAM CHAT (embedded) ============
function TeamChat({ messages, onSend, leadName, color }: { messages: ChatMessage[]; onSend: (t: string) => void; leadName: string; color: string }) {
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages.length]);

  const handleSubmit = () => { if (!input.trim()) return; onSend(input); setInput(''); };

  return (
    <div className="flex-1 flex flex-col rounded-xl overflow-hidden" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.length === 0 && (
          <div className="text-center py-8">
            <Bot size={24} style={{ color, opacity: 0.3 }} className="mx-auto mb-2" />
            <p className="text-[12px] font-mono" style={{ color: 'var(--c-text-muted)' }}>Message {leadName} to give direction</p>
          </div>
        )}
        {messages.map((msg, _i) => (
          <motion.div key={msg.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${msg.sender === 'user' ? 'rounded-br-md' : 'rounded-bl-md'}`}
              style={{
                background: msg.sender === 'user' ? color : 'var(--c-surface-2)',
                color: msg.sender === 'user' ? 'white' : 'var(--c-text-primary)',
                border: msg.sender === 'system' ? '1px solid var(--c-border)' : 'none',
              }}>
              <p className="text-[12px] leading-relaxed whitespace-pre-line">{msg.text}</p>
              <div className="text-[8px] font-mono mt-1" style={{ opacity: 0.4 }}>{msg.timestamp}</div>
            </div>
          </motion.div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="px-3 py-2.5 border-t flex items-center gap-2" style={{ borderColor: 'var(--c-border)' }}>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          placeholder={`Message ${leadName}...`}
          className="flex-1 bg-transparent px-3 py-2 rounded-lg text-[12px] focus:outline-none"
          style={{ background: 'var(--c-surface-2)', border: '1px solid var(--c-border)', color: 'var(--c-text-primary)' }} />
        <button onClick={handleSubmit} className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: input.trim() ? color : 'var(--c-surface-2)', color: input.trim() ? 'white' : 'var(--c-text-muted)' }}>
          <ArrowUp size={12} />
        </button>
      </div>
    </div>
  );
}


// ============ SUB-AGENT CARD ============
function SubAgentCard({ agent, color, index, expanded, onToggle }: { agent: SubAgent; color: string; index: number; expanded: boolean; onToggle: () => void }) {
  const isCanvas = agent.workspace.type === 'canvas';
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + index * 0.05 }}
      className="rounded-xl overflow-hidden" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
      <div className="flex items-center gap-3 px-4 py-3 cursor-pointer" onClick={onToggle}>
        <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: isCanvas ? `${color}10` : 'rgba(74, 222, 128, 0.08)' }}>
          {isCanvas ? <LayoutGrid size={14} style={{ color }} /> : <Terminal size={14} style={{ color: 'var(--c-terminal-text)' }} />}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-medium" style={{ color: 'var(--c-text-primary)' }}>{agent.name}</span>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded" style={{ background: 'var(--c-surface-2)', color: 'var(--c-text-muted)' }}>{agent.role}</span>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[10px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{isCanvas ? 'Canvas' : 'Sandbox'}</span>
            {isCanvas && agent.workspace.type === 'canvas' && <span className="text-[10px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{agent.workspace.blocks.length} blocks</span>}
            {!isCanvas && agent.workspace.type === 'sandbox' && <span className="text-[10px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{agent.workspace.files.length} files</span>}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {agent.progress !== undefined && agent.status === 'running' && (
            <div className="flex items-center gap-1.5 mr-1">
              <div className="w-16 h-1 rounded-full overflow-hidden" style={{ background: 'var(--c-border)' }}>
                <div className="h-full rounded-full" style={{ width: `${agent.progress}%`, background: color }} />
              </div>
              <span className="text-[9px] font-mono" style={{ color }}>{agent.progress}%</span>
            </div>
          )}
          <StatusBadge status={agent.status} color={color} />
          <ChevronRight size={14} style={{ color: 'var(--c-text-muted)', transform: expanded ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
        </div>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
            <div className="px-4 pb-4 border-t" style={{ borderColor: 'var(--c-border)' }}>
              <div className="mt-3 rounded-lg overflow-hidden" style={{ border: '1px solid var(--c-border)' }}>
                {agent.workspace.type === 'canvas' ? (
                  <CanvasDAG blocks={agent.workspace.blocks} edges={agent.workspace.edges} color={color} height={180} />
                ) : (
                  <SandboxTerminal lines={agent.workspace.terminalLines} files={agent.workspace.files} height={180} />
                )}
              </div>
              {agent.artifacts.length > 0 && (
                <div className="mt-3">
                  <div className="text-[9px] font-mono uppercase tracking-[0.12em] mb-1.5" style={{ color: 'var(--c-text-muted)' }}>Artifacts</div>
                  <div className="flex flex-wrap gap-1.5">
                    {agent.artifacts.map(a => (
                      <div key={a.id} className="flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-mono"
                        style={{ background: 'var(--c-surface-2)', border: '1px solid var(--c-border)', color: 'var(--c-text-secondary)' }}>
                        <span className="text-[8px] uppercase" style={{ color }}>{a.type.charAt(0)}</span>
                        {a.title.length > 30 ? a.title.slice(0, 28) + '..' : a.title}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {agent.skills && agent.skills.length > 0 && (
                <div className="mt-3">
                  <div className="text-[9px] font-mono uppercase tracking-[0.12em] mb-1.5" style={{ color: 'var(--c-text-muted)' }}>Skills</div>
                  <div className="flex flex-wrap gap-1">
                    {agent.skills.map((s, i) => (
                      <span key={i} className="text-[9px] font-mono px-1.5 py-0.5 rounded" style={{ background: `${color}08`, color, border: `1px solid ${color}15` }}>{s}</span>
                    ))}
                  </div>
                </div>
              )}
              <button className="mt-3 flex items-center gap-1.5 text-[11px] font-mono" style={{ color: 'var(--c-accent)' }}>
                <ExternalLink size={11} /> Open full workspace
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function StatusBadge({ status, color }: { status: string; color: string }) {
  const configs: Record<string, { bg: string; text: string; dot: boolean }> = {
    running: { bg: `${color}12`, text: color, dot: true },
    completed: { bg: 'var(--c-surface-2)', text: 'var(--c-text-muted)', dot: false },
    idle: { bg: 'var(--c-surface-2)', text: 'var(--c-text-muted)', dot: false },
    error: { bg: 'rgba(239,68,68,0.1)', text: '#ef4444', dot: false },
  };
  const cfg = configs[status] || configs.idle;
  return (
    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono font-medium" style={{ background: cfg.bg, color: cfg.text }}>
      {cfg.dot && <div className="w-1 h-1 rounded-full animate-breathe" style={{ background: cfg.text }} />}
      {status}
    </div>
  );
}

function ActivityDot({ type, color }: { type?: string; color: string }) {
  const dotColor = type === 'alert' ? '#ef4444' : type === 'agent-spawn' || type === 'agent-complete' ? color : 'var(--c-text-muted)';
  return <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: dotColor, opacity: 0.6 }} />;
}

function TeamBriefing({ team, color }: { team: import('../data/types').Team; color: string }) {
  const alerts = team.activity.filter(a => a.type === 'alert');
  const readyArtifacts = team.artifacts.filter(a => a.daysAgo <= 1);
  const runningAgents = team.subAgents.filter(a => a.status === 'running');

  const lines: { icon: string; text: string; urgent?: boolean }[] = [];
  if (alerts.length > 0) lines.push({ icon: '!', text: alerts[0].message, urgent: true });
  if (runningAgents.length > 0) {
    lines.push({ icon: '~', text: `${runningAgents.length} agent${runningAgents.length > 1 ? 's' : ''} working: ${runningAgents.map(a => a.name).join(', ')}` });
  }
  if (readyArtifacts.length > 0) lines.push({ icon: '*', text: `${readyArtifacts.length} artifact${readyArtifacts.length > 1 ? 's' : ''} ready for review` });
  if (team.automations.some(a => a.enabled)) {
    const next = team.automations.find(a => a.enabled && a.nextRun);
    if (next) lines.push({ icon: '>', text: `Next: ${next.name} — ${next.nextRun}` });
  }
  if (lines.length === 0) return null;

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl p-4 mb-5" style={{ background: `${color}06`, border: `1px solid ${color}15` }}>
      <div className="text-[10px] font-mono uppercase tracking-[0.12em] mb-2.5" style={{ color }}>Briefing</div>
      <div className="space-y-1.5">
        {lines.slice(0, 4).map((line, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <span className="text-[11px] font-mono mt-0.5 w-3 text-center shrink-0" style={{ color: line.urgent ? '#ef4444' : color }}>{line.icon}</span>
            <span className="text-[12px] leading-relaxed" style={{ color: 'var(--c-text-primary)' }}>{line.text}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
