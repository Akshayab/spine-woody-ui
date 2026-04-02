import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, FolderKanban, Bot, ChevronDown, ArrowUp, FileText, FileSpreadsheet, Presentation, Table2, StickyNote, MessageSquare, Terminal, LayoutGrid, ExternalLink } from 'lucide-react';
import { usePersona } from '../context/PersonaContext';
import ArtifactPreview from '../components/ArtifactPreview';
import CanvasDAG from '../components/CanvasDAG';
import SandboxTerminal from '../components/SandboxTerminal';
import type { Artifact, TeamType, ChatMessage } from '../data/types';

const typeColors: Record<TeamType, string> = { monitoring: '#d4a053', research: '#7a9ec2', content: '#b89ad4', bd: '#6ab89a', engineering: '#60a5fa' };
const artifactIcons: Record<string, typeof FileText> = { report: FileText, spreadsheet: FileSpreadsheet, memo: StickyNote, document: FileText, deck: Presentation, 'data-table': Table2 };
const artifactColors: Record<string, string> = { report: '#7a9ec2', spreadsheet: '#4ade80', memo: '#d4a053', document: '#b89ad4', deck: '#f472b6', 'data-table': '#22d3ee' };

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { currentPersona } = usePersona();
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [showChat, setShowChat] = useState(false);
  const [expandedTeam, setExpandedTeam] = useState<string | null>(null);
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const endRef = useRef<HTMLDivElement>(null);

  const project = (currentPersona.projects || []).find(p => p.id === projectId);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [chatMessages.length]);

  if (!project) {
    return <div className="p-8"><p style={{ color: 'var(--c-text-muted)' }}>Project not found.</p></div>;
  }

  const teams = currentPersona.teams.filter(t => project.teamIds.includes(t.id));
  const allArtifacts = teams.flatMap(t => t.artifacts.map(a => ({ ...a, teamName: t.name, teamType: t.type }))).sort((a, b) => a.daysAgo - b.daysAgo);

  const handleChatSend = () => {
    if (!chatInput.trim()) return;
    setChatMessages(prev => [...prev, { id: `pc-u-${Date.now()}`, sender: 'user', text: chatInput, timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) }]);
    setChatInput('');
    setTimeout(() => {
      const leadNames = teams.map(t => t.lead.name).join(' and ');
      setChatMessages(prev => [...prev, { id: `pc-s-${Date.now()}`, sender: 'system', text: `${leadNames}: Coordinating across teams on this. Routing to the right agents now.`, timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) }]);
    }, 800);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="px-8 pt-6 pb-2 flex items-center justify-between">
        <button onClick={() => navigate('/projects')} className="flex items-center gap-2 text-[12px] font-mono transition-colors" style={{ color: 'var(--c-text-muted)' }}>
          <ArrowLeft size={14} /> Projects
        </button>
        <div className="flex items-center gap-3">
          {project.deadline && (
            <span className="text-[12px] font-mono flex items-center gap-1.5"
              style={{ color: project.deadline.daysLeft <= 7 ? '#ef4444' : 'var(--c-accent)' }}>
              <Clock size={12} /> {project.deadline.daysLeft}d — {project.deadline.label}
            </span>
          )}
          <button onClick={() => setShowChat(!showChat)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono transition-colors"
            style={{ background: showChat ? 'var(--c-accent-dim)' : 'var(--c-surface)', border: `1px solid ${showChat ? 'var(--c-accent-border)' : 'var(--c-border)'}`, color: showChat ? 'var(--c-accent)' : 'var(--c-text-muted)' }}>
            <MessageSquare size={11} /> Chat
          </button>
        </div>
      </div>

      <div className="px-8 pb-8">
        {/* Title + team dots */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <FolderKanban size={16} style={{ color: 'var(--c-accent)' }} />
            <h1 className="text-2xl font-light tracking-tight" style={{ color: 'var(--c-text-primary)' }}>{project.name}</h1>
          </div>
          <p className="text-[12px] max-w-2xl" style={{ color: 'var(--c-text-muted)' }}>{project.description}</p>
          <div className="flex items-center gap-3 mt-2">
            {teams.map(t => (
              <span key={t.id} className="flex items-center gap-1.5 text-[11px]" style={{ color: 'var(--c-text-secondary)' }}>
                <div className="w-2 h-2 rounded-full" style={{ background: typeColors[t.type] || 'var(--c-accent)' }} />
                {t.name}
              </span>
            ))}
          </div>
        </div>

        <div className={`grid gap-6 ${showChat ? 'grid-cols-[1fr_320px]' : 'grid-cols-1'}`}>
          {/* MAIN CONTENT */}
          <div>
            {/* Teams — inline expandable, no navigation away */}
            <div className="mb-6">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--c-text-muted)' }}>Teams</h3>
              <div className="space-y-2">
                {teams.map(team => {
                  const color = typeColors[team.type] || '#d4a053';
                  const running = team.subAgents.filter(a => a.status === 'running');
                  const isExpanded = expandedTeam === team.id;

                  return (
                    <div key={team.id} className="rounded-xl overflow-hidden" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
                      {/* Team header — click to expand, not navigate */}
                      <button onClick={() => setExpandedTeam(isExpanded ? null : team.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors">
                        <div className="w-1.5 h-6 rounded-full" style={{ background: color }} />
                        <Bot size={14} style={{ color }} />
                        <div className="flex-1 min-w-0">
                          <div className="text-[13px] font-medium" style={{ color: 'var(--c-text-primary)' }}>{team.name}</div>
                          <span className="text-[10px]" style={{ color: 'var(--c-text-muted)' }}>
                            {team.lead.name} · {running.length > 0 ? `${running.length} working` : 'idle'} · {team.artifacts.length} artifacts
                          </span>
                        </div>
                        <ChevronDown size={14} style={{ color: 'var(--c-text-muted)', transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                      </button>

                      {/* Expanded: agents + artifacts + link to full team */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                            <div className="px-4 pb-4 border-t" style={{ borderColor: 'var(--c-border)' }}>
                              {/* Agents */}
                              {team.subAgents.length > 0 && (
                                <div className="mt-3 mb-3">
                                  <div className="text-[9px] font-mono uppercase tracking-[0.12em] mb-2" style={{ color: 'var(--c-text-muted)' }}>Agents</div>
                                  <div className="space-y-1.5">
                                    {team.subAgents.map(agent => {
                                      const isAgentExpanded = expandedAgent === agent.id;
                                      const isCanvas = agent.workspace.type === 'canvas';
                                      return (
                                        <div key={agent.id} className="rounded-lg overflow-hidden" style={{ border: '1px solid var(--c-border)' }}>
                                          <button onClick={() => setExpandedAgent(isAgentExpanded ? null : agent.id)}
                                            className="w-full flex items-center gap-2.5 px-3 py-2 text-left">
                                            {isCanvas ? <LayoutGrid size={11} style={{ color }} /> : <Terminal size={11} style={{ color: 'var(--c-terminal-text)' }} />}
                                            <span className="text-[12px]" style={{ color: 'var(--c-text-primary)' }}>{agent.name}</span>
                                            <span className="text-[9px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{agent.role}</span>
                                            {agent.progress !== undefined && agent.status === 'running' && (
                                              <div className="flex items-center gap-1 ml-auto">
                                                <div className="w-12 h-1 rounded-full overflow-hidden" style={{ background: 'var(--c-border)' }}>
                                                  <div className="h-full rounded-full" style={{ width: `${agent.progress}%`, background: color }} />
                                                </div>
                                                <span className="text-[9px] font-mono" style={{ color }}>{agent.progress}%</span>
                                              </div>
                                            )}
                                            {agent.status === 'completed' && <span className="text-[9px] font-mono ml-auto" style={{ color: 'var(--c-text-muted)' }}>done</span>}
                                          </button>
                                          <AnimatePresence>
                                            {isAgentExpanded && (
                                              <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                                                <div className="px-3 pb-3">
                                                  <div className="rounded-lg overflow-hidden" style={{ border: '1px solid var(--c-border)' }}>
                                                    {agent.workspace.type === 'canvas' ? (
                                                      <CanvasDAG blocks={agent.workspace.blocks} edges={agent.workspace.edges} color={color} height={140} />
                                                    ) : (
                                                      <SandboxTerminal lines={agent.workspace.terminalLines} files={agent.workspace.files} height={120} />
                                                    )}
                                                  </div>
                                                </div>
                                              </motion.div>
                                            )}
                                          </AnimatePresence>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}

                              {/* Team artifacts inline */}
                              {team.artifacts.length > 0 && (
                                <div className="mb-3">
                                  <div className="text-[9px] font-mono uppercase tracking-[0.12em] mb-2" style={{ color: 'var(--c-text-muted)' }}>Artifacts</div>
                                  <div className="space-y-1">
                                    {team.artifacts.slice(0, 4).map(a => {
                                      const AIcon = artifactIcons[a.type] || FileText;
                                      const ac = artifactColors[a.type] || '#d4a053';
                                      return (
                                        <div key={a.id} onClick={() => setSelectedArtifact(a)}
                                          className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg cursor-pointer transition-colors"
                                          style={{ background: 'var(--c-surface-2)' }}>
                                          <AIcon size={11} style={{ color: ac }} />
                                          <span className="text-[11px] truncate flex-1" style={{ color: 'var(--c-text-primary)' }}>{a.title}</span>
                                          <span className="text-[9px] font-mono shrink-0" style={{ color: 'var(--c-text-muted)' }}>{a.daysAgo === 0 ? 'Today' : `${a.daysAgo}d`}</span>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}

                              <button onClick={() => navigate(`/team/${team.id}`)}
                                className="flex items-center gap-1.5 text-[11px] font-mono transition-colors"
                                style={{ color: 'var(--c-accent)' }}>
                                <ExternalLink size={10} /> Open full team view
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

            {/* All artifacts across teams */}
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--c-text-muted)' }}>
                All artifacts · {allArtifacts.length}
              </h3>
              <div className={`grid gap-2 ${showChat ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                {allArtifacts.slice(0, 9).map(artifact => {
                  const AIcon = artifactIcons[artifact.type] || FileText;
                  const aColor = artifactColors[artifact.type] || '#d4a053';
                  const tColor = typeColors[artifact.teamType as TeamType] || '#d4a053';
                  return (
                    <div key={artifact.id} onClick={() => setSelectedArtifact(artifact)}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer transition-colors"
                      style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${aColor}10` }}>
                        <AIcon size={14} style={{ color: aColor }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[12px] truncate" style={{ color: 'var(--c-text-primary)' }}>{artifact.title}</div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: tColor }} />
                          <span className="text-[9px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{artifact.teamName}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono shrink-0" style={{ color: 'var(--c-text-muted)' }}>
                        {artifact.daysAgo === 0 ? 'Today' : `${artifact.daysAgo}d`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Chat panel */}
          {showChat && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              className="flex flex-col rounded-xl overflow-hidden" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', height: '480px' }}>
              <div className="px-4 py-3 border-b" style={{ borderColor: 'var(--c-border)' }}>
                <span className="text-[12px] font-medium" style={{ color: 'var(--c-text-primary)' }}>Project chat</span>
                <div className="text-[10px] font-mono mt-0.5" style={{ color: 'var(--c-text-muted)' }}>{teams.map(t => t.lead.name).join(', ')}</div>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                {chatMessages.length === 0 && (
                  <div className="text-center py-8">
                    <FolderKanban size={20} style={{ color: 'var(--c-accent)', opacity: 0.3 }} className="mx-auto mb-2" />
                    <p className="text-[11px] font-mono" style={{ color: 'var(--c-text-muted)' }}>Message all team leads</p>
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
            </motion.div>
          )}
        </div>
      </div>

      {selectedArtifact && <ArtifactPreview artifact={selectedArtifact} onClose={() => setSelectedArtifact(null)} />}
    </div>
  );
}
