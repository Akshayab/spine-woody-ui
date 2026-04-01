import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { usePersona } from '../context/PersonaContext';

export default function IMessage() {
  const { currentPersona } = usePersona();
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-10 py-10">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <button onClick={() => navigate('/conversations')} className="flex items-center gap-2 text-[12px] font-mono mb-6 transition-colors" style={{ color: 'var(--c-text-muted)' }}>
          <ArrowLeft size={14} /> Back to Conversations
        </button>
        <h1 className="text-2xl font-light tracking-tight" style={{ color: 'var(--c-text-primary)' }}>iMessage Control</h1>
        <p className="text-[13px] mt-2 max-w-lg leading-relaxed" style={{ color: 'var(--c-text-secondary)' }}>
          Control your agent teams from anywhere via text message. Morning briefings, alerts, and direction — all through iMessage on your phone.
        </p>
      </motion.div>

      <div className="flex justify-center mt-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="w-[390px]">
          <div className="bg-black rounded-[52px] p-[10px] shadow-[0_0_80px_rgba(0,0,0,0.8)]">
            <div className="bg-black rounded-[42px] overflow-hidden relative">
              <div className="absolute top-[10px] left-1/2 -translate-x-1/2 z-20"><div className="w-[126px] h-[36px] bg-black rounded-full" /></div>
              <div className="relative z-10 flex items-center justify-between px-9 pt-4 pb-0 h-[54px] bg-[#1c1c1e]">
                <span className="text-white text-[15px] font-semibold" style={{ fontFamily: '-apple-system, sans-serif' }}>9:41</span>
                <div className="flex items-center gap-1.5">
                  <svg width="16" height="12" viewBox="0 0 18 12" fill="white"><rect x="0" y="5" width="3" height="7" rx="0.7"/><rect x="5" y="3" width="3" height="9" rx="0.7"/><rect x="10" y="1" width="3" height="11" rx="0.7"/><rect x="15" y="0" width="3" height="12" rx="0.7" opacity="0.3"/></svg>
                  <svg width="25" height="12" viewBox="0 0 27 12" fill="none"><rect x="0.5" y="0.5" width="23" height="11" rx="3" stroke="white" strokeOpacity="0.35"/><rect x="24.5" y="3.5" width="2" height="5" rx="1" fill="white" fillOpacity="0.4"/><rect x="2" y="2" width="17" height="8" rx="1.5" fill="white"/></svg>
                </div>
              </div>
              <div className="bg-[#1c1c1e] border-b border-white/5 px-4 py-2.5 flex items-center gap-3">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M8 1L1 8L8 15" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#d4a053] to-[#b8883c] flex items-center justify-center mb-0.5">
                    <span className="text-white text-sm font-semibold" style={{ fontFamily: '-apple-system, sans-serif' }}>AT</span>
                  </div>
                  <span className="text-white text-[14px] font-semibold" style={{ fontFamily: '-apple-system, sans-serif' }}>Agent Teams</span>
                </div>
                <div className="w-6" />
              </div>
              <div className="bg-black px-3 py-3 space-y-1 h-[480px] overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                {currentPersona.imessages.map((msg, i) => {
                  const showTime = i === 0 || currentPersona.imessages[i - 1].time !== msg.time;
                  const isUser = msg.sender === 'user';
                  const isLast = i === currentPersona.imessages.length - 1;
                  const nextSame = !isLast && currentPersona.imessages[i + 1].sender === msg.sender && currentPersona.imessages[i + 1].time === msg.time;
                  return (
                    <div key={i}>
                      {showTime && <div className="text-center py-2"><span className="text-[11px] text-[#86868b]" style={{ fontFamily: '-apple-system, sans-serif' }}>{i === 0 ? 'Today ' : ''}{msg.time}</span></div>}
                      <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.03 * i }}
                        className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-0.5`}>
                        <div>
                          <div className={`max-w-[260px] px-3.5 py-2 text-[15px] leading-[20px] whitespace-pre-line ${isUser ? `bg-[#007AFF] text-white ${!nextSame ? 'rounded-[18px] rounded-br-[4px]' : 'rounded-[18px]'}` : `bg-[#262628] text-[#e5e5e7] ${!nextSame ? 'rounded-[18px] rounded-bl-[4px]' : 'rounded-[18px]'}`}`}
                            style={{ fontFamily: '-apple-system, SF Pro Text, sans-serif' }}>
                            {msg.text}
                          </div>
                          {msg.link && !isUser && (
                            <div className="ml-2 mt-1 text-[12px]" style={{ color: '#007AFF', fontFamily: '-apple-system, sans-serif' }}>
                              {msg.link.label}
                            </div>
                          )}
                        </div>
                      </motion.div>
                      {isUser && !nextSame && <div className="flex justify-end px-1 mb-2"><span className="text-[10px] text-[#86868b]" style={{ fontFamily: '-apple-system, sans-serif' }}>{isLast ? 'Read' : 'Delivered'}</span></div>}
                    </div>
                  );
                })}
              </div>
              <div className="bg-[#1c1c1e] border-t border-white/5 px-3 py-2.5 pb-8 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="#007AFF" strokeWidth="2" strokeLinecap="round"/></svg></div>
                <div className="flex-1 border border-white/10 rounded-full px-4 py-2.5"><span className="text-[#86868b] text-[16px]" style={{ fontFamily: '-apple-system, sans-serif' }}>iMessage</span></div>
              </div>
              <div className="bg-black flex justify-center pb-2 pt-1"><div className="w-[134px] h-[5px] bg-white/30 rounded-full" /></div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="text-center mt-8 text-[12px] max-w-sm mx-auto font-mono leading-relaxed" style={{ color: 'var(--c-text-muted)', opacity: 0.6 }}>
        This is a preview of the iMessage integration. Same interface your human assistant would use — but it's your AI teams on the other end.
      </motion.p>
    </div>
  );
}
