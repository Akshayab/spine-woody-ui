import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Sparkles, Bot, X, ChevronRight } from 'lucide-react';
import { usePersona } from '../context/PersonaContext';

const mockResponses: Record<string, { team: string; leadName: string; response: string }> = {
  'default': { team: 'All teams', leadName: 'Command', response: 'Understood. Routing your direction to the relevant team leads now.' },
  'competitor': { team: 'Competitor Watch', leadName: 'Sentinel', response: 'On it. Spinning up Price Tracker to pull the latest data. I\'ll have an updated comparison by end of day.' },
  'pricing': { team: 'Competitor Watch', leadName: 'Sentinel', response: 'Running a pricing refresh now. Price Tracker\'s sandbox is pulling current data from all tracked brands.' },
  'content': { team: 'Content & Marketing', leadName: 'Muse', response: 'Got it. Content Drafter is starting a new canvas for this. Should have a first draft within the hour.' },
  'research': { team: 'Market Research', leadName: 'Scout', response: 'Starting a deep dive now. Web Crawler is gathering sources and Trend Analyst will process the findings.' },
  'review': { team: 'All teams', leadName: 'Command', response: 'Pulling the latest artifacts for your review. 3 items are ready across your teams.' },
  'refresh': { team: 'Competitor Watch', leadName: 'Sentinel', response: 'Refreshing now. Price Tracker and Social Monitor are both running. Updated data in ~15 minutes.' },
};

function getResponse(input: string) {
  const lower = input.toLowerCase();
  for (const [key, resp] of Object.entries(mockResponses)) {
    if (key !== 'default' && lower.includes(key)) return resp;
  }
  return mockResponses['default'];
}

export default function SteeringInput() {
  const { currentPersona } = usePersona();
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [response, setResponse] = useState<{ team: string; leadName: string; response: string; query: string } | null>(null);

  const handleSubmit = () => {
    if (!value.trim()) return;
    const resp = getResponse(value);
    setResponse({ ...resp, query: value });
    setValue('');
    // Auto-dismiss after 8 seconds
    setTimeout(() => setResponse(null), 8000);
  };

  return (
    <div className="mb-8">
      <div className="relative">
        <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
          <input type="text" value={value} onChange={e => setValue(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            placeholder="Direct your teams..."
            className="w-full bg-transparent px-6 py-4 pr-14 text-sm focus:outline-none" style={{ color: 'var(--c-text-primary)' }} />
          <button onClick={handleSubmit}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center transition-all"
            style={{ background: value.trim() ? 'var(--c-accent)' : 'var(--c-surface-2)', color: value.trim() ? 'var(--c-bg)' : 'var(--c-text-muted)' }}>
            <ArrowUp size={14} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Response card */}
      <AnimatePresence>
        {response && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            className="mt-3 rounded-xl overflow-hidden"
            style={{ background: 'var(--c-surface)', border: '1px solid var(--c-accent-border)' }}
          >
            <div className="px-4 py-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Bot size={13} style={{ color: 'var(--c-accent)' }} />
                  <span className="text-[11px] font-mono font-medium" style={{ color: 'var(--c-accent)' }}>{response.leadName}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ background: 'var(--c-accent-dim)', color: 'var(--c-text-muted)' }}>{response.team}</span>
                </div>
                <button onClick={() => setResponse(null)} style={{ color: 'var(--c-text-muted)' }}><X size={12} /></button>
              </div>
              <div className="text-[12px] mb-1" style={{ color: 'var(--c-text-muted)' }}>
                <span className="font-mono">You:</span> {response.query}
              </div>
              <p className="text-[13px] leading-relaxed" style={{ color: 'var(--c-text-primary)' }}>{response.response}</p>
              <button onClick={() => { setResponse(null); navigate('/conversations'); }}
                className="flex items-center gap-1 mt-2 text-[11px] font-mono transition-colors"
                style={{ color: 'var(--c-accent)' }}>
                Continue in Conversations <ChevronRight size={10} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Suggested actions — hide when response is showing */}
      {!response && (
        <div className="flex items-start gap-2 mt-3 pl-1">
          <Sparkles size={11} className="mt-1 shrink-0" style={{ color: 'var(--c-accent)', opacity: 0.4 }} />
          <div className="flex flex-wrap gap-1.5">
            {currentPersona.suggestedActions.map((action, i) => (
              <motion.button key={action.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.1 }}
                onClick={() => setValue(action.text)}
                className="text-[11px] font-mono rounded-full px-3 py-1 transition-all"
                style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text-muted)' }}>
                {action.text}
              </motion.button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
