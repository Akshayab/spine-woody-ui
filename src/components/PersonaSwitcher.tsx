import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePersona } from '../context/PersonaContext';
import { personas } from '../data/mockData';

export default function PersonaSwitcher() {
  const { currentPersona, setPersona } = usePersona();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="px-3 py-2 relative">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors" style={{ color: 'var(--c-text-primary)' }}>
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0" style={{ background: 'var(--c-accent-dim)', border: '1px solid var(--c-accent-border)', color: 'var(--c-accent)' }}>
          {currentPersona.avatar}
        </div>
        <div className="flex-1 text-left min-w-0">
          <div className="text-[13px] font-medium truncate" style={{ color: 'var(--c-text-primary)' }}>{currentPersona.name}</div>
          <div className="text-[11px] truncate" style={{ color: 'var(--c-text-muted)' }}>{currentPersona.role}</div>
        </div>
        <ChevronDown size={14} style={{ color: 'var(--c-text-muted)', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15 }}
              className="absolute left-3 right-3 top-full mt-1 rounded-xl shadow-2xl z-50 overflow-hidden p-1.5"
              style={{ background: 'var(--c-surface-2)', border: '1px solid var(--c-border-light)' }}>
              {personas.map(p => (
                <button key={p.id} onClick={() => { setPersona(p.id); setIsOpen(false); if (location.pathname.startsWith('/team/')) navigate('/'); }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors"
                  style={{ background: p.id === currentPersona.id ? 'var(--c-accent-dim)' : 'transparent' }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                    style={{ background: p.id === currentPersona.id ? 'var(--c-accent-dim)' : 'var(--c-surface-3)', color: p.id === currentPersona.id ? 'var(--c-accent)' : 'var(--c-text-muted)', border: `1px solid ${p.id === currentPersona.id ? 'var(--c-accent-border)' : 'var(--c-border)'}` }}>
                    {p.avatar}
                  </div>
                  <div className="text-left">
                    <div className="text-[13px] font-medium" style={{ color: 'var(--c-text-primary)' }}>{p.name}</div>
                    <div className="text-[11px]" style={{ color: 'var(--c-text-muted)' }}>{p.role}</div>
                  </div>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
