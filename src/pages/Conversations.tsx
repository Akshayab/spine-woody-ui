import { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Bot, ChevronRight, ArrowUp, Smartphone } from 'lucide-react';
import { usePersona } from '../context/PersonaContext';
import type { ChatMessage, ChatThread } from '../data/types';

const mockResponses: Record<string, string[]> = {
  monitoring: [
    "Running a scan now. I'll have updated data within the hour.",
    "Price Tracker is on it. Checking all tracked brands for changes.",
    "Good call. Spinning up a sub-agent to dig into that. Results by end of day.",
  ],
  research: [
    "Starting a deep dive. Web Crawler is gathering sources now.",
    "Trend Analyst is processing that. Analysis ready shortly.",
    "Spinning up a new sub-agent for this. Findings by this afternoon.",
  ],
  content: [
    "Content Drafter is starting a new canvas for this. Draft within the hour.",
    "On it. Pulling the latest market research into the brief.",
    "Great idea. Spinning up a sub-agent to draft options.",
  ],
  bd: [
    "Checking the pipeline now. Account Researcher is pulling the latest.",
    "RFP Scanner is on it. I'll flag any matches against your criteria.",
    "Proposal Writer is available. Spinning up a canvas with key sections.",
  ],
  all: [
    "Routing to all team leads. Each will adjust their sub-agents accordingly.",
    "Understood. All teams notified and adjusting priorities.",
    "Got it. All team leads are on it. You'll see updates in each team's activity.",
  ],
};

function getMockResponse(teamType: string): string {
  const responses = mockResponses[teamType] || mockResponses.all;
  return responses[Math.floor(Math.random() * responses.length)];
}

export default function Conversations() {
  const { currentPersona } = usePersona();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preselectedTeam = searchParams.get('team');

  const [threads, setThreads] = useState<ChatThread[]>([]);
  const [activeThreadId, setActiveThreadId] = useState<string | null>(null);

  useEffect(() => {
    setThreads(currentPersona.chatThreads.map(t => ({ ...t, messages: [...t.messages] })));
    if (preselectedTeam) {
      const thread = currentPersona.chatThreads.find(t => t.teamId === preselectedTeam);
      setActiveThreadId(thread?.id || currentPersona.chatThreads[0]?.id || null);
    } else {
      setActiveThreadId(currentPersona.chatThreads[0]?.id || null);
    }
  }, [currentPersona.id, preselectedTeam]);

  const activeThread = threads.find(t => t.id === activeThreadId);
  const activeTeam = activeThread?.teamId ? currentPersona.teams.find(t => t.id === activeThread.teamId) : undefined;

  const handleSend = (text: string) => {
    if (!activeThread) return;
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`, sender: 'user', text,
      timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
      teamId: activeThread.teamId,
    };
    setThreads(prev => prev.map(t =>
      t.id === activeThreadId ? { ...t, messages: [...t.messages, userMsg], lastActivity: 'Just now' } : t
    ));
    setTimeout(() => {
      const teamType = activeTeam?.type || 'all';
      const leadName = activeTeam?.lead.name || 'Command';
      const sysMsg: ChatMessage = {
        id: `sys-${Date.now()}`, sender: 'system',
        text: `${leadName}: ${getMockResponse(teamType)}`,
        timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
        teamId: activeThread.teamId,
      };
      setThreads(prev => prev.map(t =>
        t.id === activeThreadId ? { ...t, messages: [...t.messages, sysMsg] } : t
      ));
    }, 800);
  };

  return (
    <div className="h-full flex">
      {/* Thread sidebar */}
      <div className="w-[280px] shrink-0 border-r flex flex-col" style={{ borderColor: 'var(--c-border)', background: 'var(--c-bg-elevated)' }}>
        <div className="px-4 pt-6 pb-4">
          <h1 className="text-lg font-semibold tracking-tight" style={{ color: 'var(--c-text-primary)' }}>Conversations</h1>
        </div>

        <div className="flex-1 overflow-y-auto px-2 pb-4">
          {/* Company thread */}
          {threads.filter(t => !t.teamId).map(thread => (
            <ThreadButton key={thread.id} thread={thread} isActive={activeThreadId === thread.id}
              icon={<Users size={14} />} subtitle="All teams"
              onClick={() => setActiveThreadId(thread.id)} />
          ))}

          {/* Team threads */}
          {threads.filter(t => t.teamId).length > 0 && (
            <div className="text-[9px] font-mono uppercase tracking-[0.12em] px-3 mt-4 mb-2" style={{ color: 'var(--c-text-muted)', opacity: 0.5 }}>Teams</div>
          )}
          {threads.filter(t => t.teamId).map(thread => {
            const team = currentPersona.teams.find(t => t.id === thread.teamId);
            return (
              <ThreadButton key={thread.id} thread={thread} isActive={activeThreadId === thread.id}
                icon={<Bot size={14} />} subtitle={team?.lead.name}
                onClick={() => setActiveThreadId(thread.id)} />
            );
          })}

          {/* iMessage thread indicator */}
          <div className="text-[9px] font-mono uppercase tracking-[0.12em] px-3 mt-4 mb-2" style={{ color: 'var(--c-text-muted)', opacity: 0.5 }}>External</div>
          <button onClick={() => navigate('/imessage')}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all"
            style={{ background: 'transparent' }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--c-surface-2)' }}>
              <Smartphone size={14} style={{ color: 'var(--c-text-muted)' }} />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[13px]" style={{ color: 'var(--c-text-muted)' }}>iMessage</span>
              <div className="text-[10px] font-mono" style={{ color: 'var(--c-text-muted)', opacity: 0.5 }}>via text message</div>
            </div>
            <ChevronRight size={12} style={{ color: 'var(--c-text-muted)', opacity: 0.3 }} />
          </button>
        </div>
      </div>

      {/* Chat panel */}
      <div className="flex-1 flex flex-col" style={{ background: 'var(--c-bg)' }}>
        {activeThread ? (
          <ChatPanel thread={activeThread} team={activeTeam} onSend={handleSend} navigate={navigate} />
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-[13px] font-mono" style={{ color: 'var(--c-text-muted)' }}>Select a conversation</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ThreadButton({ thread, isActive, icon, subtitle, onClick }: {
  thread: ChatThread; isActive: boolean; icon: React.ReactNode; subtitle?: string; onClick: () => void;
}) {
  const lastMsg = thread.messages[thread.messages.length - 1];
  return (
    <button onClick={onClick}
      className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left mb-0.5 transition-all"
      style={{ background: isActive ? 'var(--c-accent-dim)' : 'transparent', borderLeft: isActive ? '2px solid var(--c-accent)' : '2px solid transparent' }}>
      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: isActive ? 'var(--c-accent-dim)' : 'var(--c-surface-2)', color: isActive ? 'var(--c-accent)' : 'var(--c-text-muted)' }}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-medium truncate" style={{ color: isActive ? 'var(--c-text-primary)' : 'var(--c-text-secondary)' }}>{thread.label}</span>
          <span className="text-[9px] font-mono shrink-0 ml-2" style={{ color: 'var(--c-text-muted)' }}>{thread.lastActivity}</span>
        </div>
        {subtitle && <div className="text-[10px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{subtitle}</div>}
        {lastMsg && <div className="text-[11px] truncate mt-0.5" style={{ color: 'var(--c-text-muted)' }}>{lastMsg.text.slice(0, 45)}...</div>}
      </div>
    </button>
  );
}

function ChatPanel({ thread, team, onSend, navigate }: {
  thread: ChatThread; team: import('../data/types').Team | undefined; onSend: (t: string) => void; navigate: (p: string) => void;
}) {
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [thread.messages.length]);

  const handleSubmit = () => { if (!input.trim()) return; onSend(input); setInput(''); };

  return (
    <>
      <div className="px-6 py-4 border-b flex items-center justify-between shrink-0" style={{ borderColor: 'var(--c-border)', background: 'var(--c-bg-elevated)' }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--c-accent-dim)' }}>
            {thread.teamId ? <Bot size={16} style={{ color: 'var(--c-accent)' }} /> : <Users size={16} style={{ color: 'var(--c-accent)' }} />}
          </div>
          <div>
            <span className="text-[15px] font-medium" style={{ color: 'var(--c-text-primary)' }}>{thread.label}</span>
            {team ? (
              <div className="text-[11px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{team.lead.name} — {team.lead.personality}</div>
            ) : (
              <div className="text-[11px] font-mono" style={{ color: 'var(--c-text-muted)' }}>All team leads</div>
            )}
          </div>
        </div>
        {team && (
          <button onClick={() => navigate(`/team/${team.id}`)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono transition-colors"
            style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text-secondary)' }}>
            Open team <ChevronRight size={10} />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {thread.messages.map((msg, i) => (
            <motion.div key={msg.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.03, 0.3) }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] rounded-2xl px-4 py-3 ${msg.sender === 'user' ? 'rounded-br-md' : 'rounded-bl-md'}`}
                style={{
                  background: msg.sender === 'user' ? 'var(--c-accent)' : 'var(--c-surface)',
                  color: msg.sender === 'user' ? 'white' : 'var(--c-text-primary)',
                  border: msg.sender === 'system' ? '1px solid var(--c-border)' : 'none',
                }}>
                <p className="text-[13px] leading-relaxed whitespace-pre-line">{msg.text}</p>
                {msg.link && (
                  <button onClick={() => msg.link?.teamId && navigate(`/team/${msg.link.teamId}`)}
                    className="flex items-center gap-1 mt-2 text-[11px] font-mono"
                    style={{ color: msg.sender === 'user' ? 'rgba(255,255,255,0.7)' : 'var(--c-accent)' }}>
                    {msg.link.label} <ChevronRight size={10} />
                  </button>
                )}
                <div className="text-[9px] font-mono mt-1.5" style={{ opacity: 0.4 }}>{msg.timestamp}</div>
              </div>
            </motion.div>
          ))}
          <div ref={endRef} />
        </div>
      </div>

      <div className="px-6 py-4 border-t shrink-0" style={{ borderColor: 'var(--c-border)', background: 'var(--c-bg-elevated)' }}>
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            placeholder={`Message ${team?.lead.name || 'all teams'}...`}
            className="flex-1 bg-transparent px-4 py-3 rounded-xl text-[13px] focus:outline-none"
            style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text-primary)' }} />
          <button onClick={handleSubmit} className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all"
            style={{ background: input.trim() ? 'var(--c-accent)' : 'var(--c-surface)', color: input.trim() ? 'white' : 'var(--c-text-muted)' }}>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </>
  );
}
