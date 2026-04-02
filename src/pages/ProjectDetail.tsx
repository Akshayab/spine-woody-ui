import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, FolderKanban, Bot, ChevronDown, ArrowUp, FileText, FileSpreadsheet, Presentation, Table2, StickyNote, CheckCircle, Circle, Loader, ExternalLink, Terminal, LayoutGrid } from 'lucide-react';
import { usePersona } from '../context/PersonaContext';
import ArtifactPreview from '../components/ArtifactPreview';
import CanvasDAG from '../components/CanvasDAG';
import SandboxTerminal from '../components/SandboxTerminal';
import type { Artifact, TeamType, ChatMessage } from '../data/types';

const typeColors: Record<TeamType, string> = { monitoring: '#d4a053', research: '#7a9ec2', content: '#b89ad4', bd: '#6ab89a', engineering: '#60a5fa' };
const artifactIcons: Record<string, typeof FileText> = { report: FileText, spreadsheet: FileSpreadsheet, memo: StickyNote, document: FileText, deck: Presentation, 'data-table': Table2 };
const artifactColors: Record<string, string> = { report: '#7a9ec2', spreadsheet: '#4ade80', memo: '#d4a053', document: '#b89ad4', deck: '#f472b6', 'data-table': '#22d3ee' };
const statusConfig = {
  'on-track': { label: 'On track', color: 'var(--c-accent)', bg: 'var(--c-accent-dim)' },
  'at-risk': { label: 'At risk', color: '#f59e0b', bg: 'rgba(245,158,11,0.08)' },
  'behind': { label: 'Behind', color: '#ef4444', bg: 'rgba(239,68,68,0.08)' },
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { currentPersona } = usePersona();
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [expandedTeam, setExpandedTeam] = useState<string | null>(null);
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const endRef = useRef<HTMLDivElement>(null);

  const project = (currentPersona.projects || []).find(p => p.id === projectId);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [chatMessages.length]);

  if (!project) return <div className="p-8"><p style={{ color: 'var(--c-text-muted)' }}>Project not found.</p></div>;

  const teams = currentPersona.teams.filter(t => project.teamIds.includes(t.id));
  const allArtifacts = teams.flatMap(t => t.artifacts.map(a => ({ ...a, teamName: t.name, teamType: t.type }))).sort((a, b) => a.daysAgo - b.daysAgo);
  const sc = statusConfig[project.status] || statusConfig['on-track'];
  const doneCount = project.milestones.filter(m => m.status === 'done').length;

  const handleChatSend = () => {
    if (!chatInput.trim()) return;
    setChatMessages(prev => [...prev, { id: `pc-u-${Date.now()}`, sender: 'user', text: chatInput, timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) }]);
    setChatInput('');
    setTimeout(() => {
      const leads = teams.map(t => t.lead.name);
      setChatMessages(prev => [...prev, { id: `pc-s-${Date.now()}`, sender: 'system',
        text: `${leads.join(' and ')}: Got it. We're coordinating across ${teams.length} teams on this. ${leads[0]} is taking point — I'll spin up task agents where needed and keep you posted.`,
        timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) }]);
    }, 800);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="px-8 pt-6 pb-2 flex items-center justify-between">
        <button onClick={() => navigate('/projects')} className="flex items-center gap-2 text-[12px] font-mono" style={{ color: 'var(--c-text-muted)' }}>
          <ArrowLeft size={14} /> Projects
        </button>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono px-2 py-1 rounded-full" style={{ background: sc.bg, color: sc.color }}>{sc.label}</span>
          {project.deadline && (
            <span className="text-[12px] font-mono flex items-center gap-1.5" style={{ color: project.deadline.daysLeft <= 7 ? '#ef4444' : 'var(--c-accent)' }}>
              <Clock size={12} /> {project.deadline.daysLeft}d — {project.deadline.label}
            </span>
          )}
        </div>
      </div>

      <div className="px-8 pb-8">
        {/* Title + Goal */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <FolderKanban size={16} style={{ color: 'var(--c-accent)' }} />
            <h1 className="text-2xl font-light tracking-tight" style={{ color: 'var(--c-text-primary)' }}>{project.name}</h1>
          </div>
          <p className="text-[13px] max-w-2xl mb-2" style={{ color: 'var(--c-text-secondary)' }}>{project.goal}</p>
          {/* Progress bar */}
          <div className="flex items-center gap-3 mt-3">
            <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'var(--c-border)' }}>
              <div className="h-full rounded-full transition-all" style={{ width: `${project.progress}%`, background: sc.color }} />
            </div>
            <span className="text-[12px] font-mono font-semibold" style={{ color: sc.color }}>{project.progress}%</span>
          </div>
          <div className="flex items-center gap-3 mt-2">
            {teams.map(t => (
              <span key={t.id} className="flex items-center gap-1.5 text-[11px]" style={{ color: 'var(--c-text-secondary)' }}>
                <div className="w-2 h-2 rounded-full" style={{ background: typeColors[t.type] || 'var(--c-accent)' }} />
                {t.name}
              </span>
            ))}
          </div>
        </div>

        {/* Two column: content + chat */}
        <div className="grid grid-cols-[1fr_340px] gap-6">
          {/* LEFT */}
          <div>
            {/* Milestones */}
            <div className="mb-6">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--c-text-muted)' }}>
                Milestones · {doneCount}/{project.milestones.length}
              </h3>
              <div className="space-y-1">
                {project.milestones.map(m => {
                  const mTeam = m.teamId ? teams.find(t => t.id === m.teamId) : null;
                  return (
                    <div key={m.id} className="flex items-center gap-3 px-4 py-2.5 rounded-xl"
                      style={{ background: m.status === 'done' ? 'transparent' : 'var(--c-surface)', border: m.status === 'done' ? '1px solid transparent' : '1px solid var(--c-border)' }}>
                      {m.status === 'done' ? <CheckCircle size={15} style={{ color: 'var(--c-accent)' }} /> :
                       m.status === 'in-progress' ? <Loader size={15} style={{ color: sc.color }} className="animate-spin" /> :
                       <Circle size={15} style={{ color: 'var(--c-text-muted)', opacity: 0.3 }} />}
                      <span className="text-[13px] flex-1" style={{ color: m.status === 'done' ? 'var(--c-text-muted)' : 'var(--c-text-primary)', textDecoration: m.status === 'done' ? 'line-through' : 'none', opacity: m.status === 'done' ? 0.6 : 1 }}>
                        {m.label}
                      </span>
                      {mTeam && (
                        <span className="flex items-center gap-1.5 text-[9px] font-mono" style={{ color: 'var(--c-text-muted)' }}>
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: typeColors[mTeam.type] || 'var(--c-accent)' }} />
                          {mTeam.name}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Teams — expandable inline */}
            <div className="mb-6">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--c-text-muted)' }}>Teams</h3>
              <div className="space-y-2">
                {teams.map(team => {
                  const color = typeColors[team.type] || '#d4a053';
                  const running = team.subAgents.filter(a => a.status === 'running');
                  const taskAgents = team.subAgents.filter(a => a.lifecycle === 'task');
                  const isExpanded = expandedTeam === team.id;
                  return (
                    <div key={team.id} className="rounded-xl overflow-hidden" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
                      <button onClick={() => setExpandedTeam(isExpanded ? null : team.id)} className="w-full flex items-center gap-3 px-4 py-3 text-left">
                        <div className="w-1.5 h-6 rounded-full" style={{ background: color }} />
                        <Bot size={14} style={{ color }} />
                        <div className="flex-1 min-w-0">
                          <span className="text-[13px] font-medium" style={{ color: 'var(--c-text-primary)' }}>{team.name}</span>
                          <span className="text-[10px] ml-2" style={{ color: 'var(--c-text-muted)' }}>
                            {team.lead.name} · {running.length} working{taskAgents.length > 0 ? ` · ${taskAgents.filter(a => a.status !== 'completed').length} tasks` : ''}
                          </span>
                        </div>
                        <ChevronDown size={14} style={{ color: 'var(--c-text-muted)', transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="px-4 pb-4 border-t" style={{ borderColor: 'var(--c-border)' }}>
                              {team.subAgents.filter(a => a.status !== 'completed').map(agent => {
                                const isCanvas = agent.workspace.type === 'canvas';
                                const isAgentExpanded = expandedAgent === agent.id;
                                return (
                                  <div key={agent.id} className="mt-2 rounded-lg overflow-hidden" style={{ border: '1px solid var(--c-border)' }}>
                                    <button onClick={() => setExpandedAgent(isAgentExpanded ? null : agent.id)} className="w-full flex items-center gap-2 px-3 py-2 text-left">
                                      {isCanvas ? <LayoutGrid size={10} style={{ color }} /> : <Terminal size={10} style={{ color: 'var(--c-terminal-text)' }} />}
                                      <span className="text-[12px]" style={{ color: 'var(--c-text-primary)' }}>{agent.name}</span>
                                      {agent.lifecycle === 'task' && <span className="text-[8px] font-mono px-1 py-0.5 rounded" style={{ background: 'var(--c-teal-dim)', color: 'var(--c-teal)' }}>task</span>}
                                      {agent.progress && <span className="text-[9px] font-mono ml-auto" style={{ color }}>{agent.progress}%</span>}
                                    </button>
                                    <AnimatePresence>
                                      {isAgentExpanded && (
                                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                                          <div className="px-3 pb-3">
                                            <div className="rounded-lg overflow-hidden" style={{ border: '1px solid var(--c-border)' }}>
                                              {agent.workspace.type === 'canvas' ? <CanvasDAG blocks={agent.workspace.blocks} edges={agent.workspace.edges} color={color} height={120} /> : <SandboxTerminal lines={agent.workspace.terminalLines} files={agent.workspace.files} height={100} />}
                                            </div>
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                );
                              })}
                              <button onClick={() => navigate(`/team/${team.id}`)} className="flex items-center gap-1 mt-3 text-[10px] font-mono" style={{ color: 'var(--c-accent)' }}>
                                <ExternalLink size={9} /> Full team view
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Artifacts */}
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--c-text-muted)' }}>Artifacts · {allArtifacts.length}</h3>
              <div className="grid grid-cols-2 gap-2">
                {allArtifacts.slice(0, 6).map(a => {
                  const AIcon = artifactIcons[a.type] || FileText;
                  const ac = artifactColors[a.type] || '#d4a053';
                  const tc = typeColors[a.teamType as TeamType] || '#d4a053';
                  return (
                    <div key={a.id} onClick={() => setSelectedArtifact(a)} className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 cursor-pointer" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
                      <AIcon size={13} style={{ color: ac }} />
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] truncate" style={{ color: 'var(--c-text-primary)' }}>{a.title}</div>
                        <div className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full" style={{ background: tc }} /><span className="text-[8px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{a.teamName}</span></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Chat — always visible */}
          <div className="flex flex-col rounded-xl overflow-hidden" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', height: '600px' }}>
            <div className="px-4 py-3 border-b" style={{ borderColor: 'var(--c-border)' }}>
              <span className="text-[12px] font-medium" style={{ color: 'var(--c-text-primary)' }}>Project chat</span>
              <div className="text-[10px] font-mono mt-0.5" style={{ color: 'var(--c-text-muted)' }}>{teams.map(t => t.lead.name).join(', ')}</div>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {chatMessages.length === 0 && (
                <div className="text-center py-6">
                  <FolderKanban size={18} style={{ color: 'var(--c-accent)', opacity: 0.3 }} className="mx-auto mb-2" />
                  <p className="text-[11px] mb-3" style={{ color: 'var(--c-text-muted)' }}>Coordinate across all {teams.length} team leads</p>
                  <p className="text-[10px] leading-relaxed px-4" style={{ color: 'var(--c-text-muted)', opacity: 0.6 }}>
                    Messages here go to {teams.map(t => t.lead.name).join(', ')}. They'll coordinate sub-agents across teams.
                  </p>
                </div>
              )}
              {chatMessages.map(msg => (
                <motion.div key={msg.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${msg.sender === 'user' ? 'rounded-br-md' : 'rounded-bl-md'}`}
                    style={{ background: msg.sender === 'user' ? 'var(--c-accent)' : 'var(--c-surface-2)', color: msg.sender === 'user' ? 'white' : 'var(--c-text-primary)', border: msg.sender === 'system' ? '1px solid var(--c-border)' : 'none' }}>
                    <p className="text-[12px] leading-relaxed whitespace-pre-line">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={endRef} />
            </div>
            <div className="px-3 py-2.5 border-t flex items-center gap-2" style={{ borderColor: 'var(--c-border)' }}>
              <input type="text" value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleChatSend()}
                placeholder="Message all leads..."
                className="flex-1 bg-transparent px-3 py-2 rounded-lg text-[12px] focus:outline-none"
                style={{ background: 'var(--c-surface-2)', border: '1px solid var(--c-border)', color: 'var(--c-text-primary)' }} />
              <button onClick={handleChatSend} className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: chatInput.trim() ? 'var(--c-accent)' : 'var(--c-surface-2)', color: chatInput.trim() ? 'white' : 'var(--c-text-muted)' }}>
                <ArrowUp size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedArtifact && <ArtifactPreview artifact={selectedArtifact} onClose={() => setSelectedArtifact(null)} />}
    </div>
  );
}
