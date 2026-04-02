import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, FolderKanban, Bot, ChevronRight, ArrowUp, FileText, FileSpreadsheet, Presentation, Table2, StickyNote } from 'lucide-react';
import { usePersona } from '../context/PersonaContext';
import ArtifactPreview from '../components/ArtifactPreview';
import type { Artifact, TeamType, ChatMessage } from '../data/types';

const typeColors: Record<TeamType, string> = { monitoring: '#d4a053', research: '#7a9ec2', content: '#b89ad4', bd: '#6ab89a', engineering: '#60a5fa' };
const artifactIcons: Record<string, typeof FileText> = { report: FileText, spreadsheet: FileSpreadsheet, memo: StickyNote, document: FileText, deck: Presentation, 'data-table': Table2 };
const artifactColors: Record<string, string> = { report: '#7a9ec2', spreadsheet: '#4ade80', memo: '#d4a053', document: '#b89ad4', deck: '#f472b6', 'data-table': '#22d3ee' };

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { currentPersona } = usePersona();
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
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
  const allActivity = teams.flatMap(t => t.activity.map(a => ({ ...a, teamName: t.name }))).slice(0, 8);

  const handleChatSend = () => {
    if (!chatInput.trim()) return;
    const userMsg: ChatMessage = { id: `pc-u-${Date.now()}`, sender: 'user', text: chatInput, timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) };
    setChatMessages(prev => [...prev, userMsg]);
    setChatInput('');
    setTimeout(() => {
      const leadNames = teams.map(t => t.lead.name).join(' and ');
      setChatMessages(prev => [...prev, {
        id: `pc-s-${Date.now()}`, sender: 'system',
        text: `${leadNames} are coordinating on this. I'll route to the right agents across teams and keep you updated.`,
        timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
      }]);
    }, 800);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="px-8 pt-6 pb-2 flex items-center justify-between">
        <button onClick={() => navigate('/projects')} className="flex items-center gap-2 text-[12px] font-mono transition-colors" style={{ color: 'var(--c-text-muted)' }}>
          <ArrowLeft size={14} /> Projects
        </button>
        {project.deadline && (
          <span className="text-[12px] font-mono flex items-center gap-1.5"
            style={{ color: project.deadline.daysLeft <= 7 ? '#ef4444' : 'var(--c-accent)' }}>
            <Clock size={12} /> {project.deadline.daysLeft}d — {project.deadline.label}
          </span>
        )}
      </div>

      <div className="px-8 pb-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FolderKanban size={18} style={{ color: 'var(--c-accent)' }} />
            <h1 className="text-2xl font-light tracking-tight" style={{ color: 'var(--c-text-primary)' }}>{project.name}</h1>
          </div>
          <p className="text-[13px] max-w-2xl" style={{ color: 'var(--c-text-secondary)' }}>{project.description}</p>
        </div>

        {/* Two-column: Teams + Artifacts on left, Chat on right */}
        <div className="grid grid-cols-[1fr_340px] gap-6">
          {/* LEFT */}
          <div>
            {/* Contributing teams */}
            <div className="mb-6">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--c-text-muted)' }}>Contributing teams</h3>
              <div className="space-y-2">
                {teams.map(team => {
                  const color = typeColors[team.type] || '#d4a053';
                  const running = team.subAgents.filter(a => a.status === 'running');
                  return (
                    <div key={team.id} onClick={() => navigate(`/team/${team.id}`)}
                      className="flex items-center gap-4 rounded-xl px-4 py-3 cursor-pointer group transition-all"
                      style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
                      <div className="w-2 h-8 rounded-full" style={{ background: color }} />
                      <div className="flex-1">
                        <div className="text-[13px] font-medium" style={{ color: 'var(--c-text-primary)' }}>{team.name}</div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <Bot size={10} style={{ color }} />
                          <span className="text-[11px]" style={{ color: 'var(--c-text-muted)' }}>
                            {team.lead.name} · {running.length > 0 ? `${running.length} working` : 'idle'}
                          </span>
                        </div>
                      </div>
                      <div className="text-[10px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{team.artifacts.length} artifacts</div>
                      <ChevronRight size={14} style={{ color: 'var(--c-text-muted)', opacity: 0.2 }} className="group-hover:opacity-60 transition-opacity" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Unified artifact feed */}
            <div className="mb-6">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--c-text-muted)' }}>Artifacts across teams</h3>
              <div className="space-y-1.5">
                {allArtifacts.slice(0, 8).map(artifact => {
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
                          {artifact.subAgentName && <span className="text-[9px] font-mono" style={{ color: 'var(--c-text-muted)' }}>via {artifact.subAgentName}</span>}
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

            {/* Cross-team activity */}
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--c-text-muted)' }}>Activity</h3>
              <div className="space-y-1">
                {allActivity.map((item, _i) => (
                  <div key={item.id} className="flex items-start gap-2.5 px-3 py-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: item.type === 'alert' ? '#ef4444' : 'var(--c-text-muted)', opacity: 0.5 }} />
                    <div>
                      <p className="text-[11px]" style={{ color: 'var(--c-text-primary)' }}>{item.message}</p>
                      <span className="text-[9px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{item.teamName} · {item.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Cross-team chat */}
          <div className="flex flex-col rounded-xl overflow-hidden" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', minHeight: '500px' }}>
            <div className="px-4 py-3 border-b" style={{ borderColor: 'var(--c-border)' }}>
              <span className="text-[12px] font-medium" style={{ color: 'var(--c-text-primary)' }}>Project chat</span>
              <div className="text-[10px] font-mono mt-0.5" style={{ color: 'var(--c-text-muted)' }}>
                {teams.map(t => t.lead.name).join(', ')}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {chatMessages.length === 0 && (
                <div className="text-center py-8">
                  <FolderKanban size={20} style={{ color: 'var(--c-accent)', opacity: 0.3 }} className="mx-auto mb-2" />
                  <p className="text-[11px] font-mono" style={{ color: 'var(--c-text-muted)' }}>Chat with all team leads at once</p>
                </div>
              )}
              {chatMessages.map(msg => (
                <motion.div key={msg.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${msg.sender === 'user' ? 'rounded-br-md' : 'rounded-bl-md'}`}
                    style={{ background: msg.sender === 'user' ? 'var(--c-accent)' : 'var(--c-surface-2)', color: msg.sender === 'user' ? 'white' : 'var(--c-text-primary)', border: msg.sender === 'system' ? '1px solid var(--c-border)' : 'none' }}>
                    <p className="text-[12px] leading-relaxed whitespace-pre-line">{msg.text}</p>
                    <div className="text-[8px] font-mono mt-1" style={{ opacity: 0.4 }}>{msg.timestamp}</div>
                  </div>
                </motion.div>
              ))}
              <div ref={endRef} />
            </div>
            <div className="px-3 py-2.5 border-t flex items-center gap-2" style={{ borderColor: 'var(--c-border)' }}>
              <input type="text" value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleChatSend()}
                placeholder="Message all team leads..."
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
