import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Radio, FileText, MessageCircle, Settings, Sun, Moon, Smartphone } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import PersonaSwitcher from './PersonaSwitcher';
import { useTheme } from '../context/ThemeContext';
import { usePersona } from '../context/PersonaContext';

const navItems = [
  { to: '/', icon: Radio, label: 'Command Center' },
  { to: '/conversations', icon: MessageCircle, label: 'Conversations' },
  { to: '/artifacts', icon: FileText, label: 'Artifacts' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

export default function Layout() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { currentPersona } = usePersona();
  const activeSubAgents = currentPersona.teams.reduce((sum, t) => sum + t.subAgents.filter(a => a.status === 'running').length, 0);

  return (
    <div className="flex h-screen" style={{ background: 'var(--c-bg)' }}>
      <aside className="w-60 flex flex-col shrink-0 border-r" style={{ background: 'var(--c-bg-elevated)', borderColor: 'var(--c-border)' }}>
        <div className="px-5 pt-6 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'var(--c-accent-dim)' }}>
              <div className="w-2 h-2 rounded-full animate-breathe" style={{ background: 'var(--c-accent)' }} />
            </div>
            <span className="text-sm font-semibold tracking-wide uppercase" style={{ letterSpacing: '0.15em', color: 'var(--c-text-primary)' }}>
              Command
            </span>
          </div>
          <button onClick={toggleTheme} className="p-1.5 rounded-lg transition-colors hover:opacity-80" style={{ color: 'var(--c-text-muted)' }}>
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>

        <PersonaSwitcher />

        <nav className="flex-1 px-3 py-5">
          <div className="space-y-0.5">
            {navItems.map(item => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] transition-all duration-200"
                style={({ isActive }) => ({
                  background: isActive ? 'var(--c-accent-dim)' : 'transparent',
                  color: isActive ? 'var(--c-accent)' : 'var(--c-text-muted)',
                  fontWeight: isActive ? 500 : 400,
                })}>
                <item.icon size={16} strokeWidth={1.5} />
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t" style={{ borderColor: 'var(--c-border)' }}>
            <div className="text-[9px] font-mono uppercase tracking-[0.15em] px-3 mb-2" style={{ color: 'var(--c-text-muted)', opacity: 0.5 }}>Demo</div>
            <NavLink to="/imessage"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-[12px] transition-all duration-200"
              style={({ isActive }) => ({
                background: isActive ? 'var(--c-accent-dim)' : 'transparent',
                color: isActive ? 'var(--c-accent)' : 'var(--c-text-muted)',
                opacity: isActive ? 1 : 0.6,
              })}>
              <Smartphone size={14} strokeWidth={1.5} />
              iMessage
            </NavLink>
          </div>
        </nav>

        <div className="px-5 py-4 border-t" style={{ borderColor: 'var(--c-border)' }}>
          <div className="flex items-center gap-2 text-[11px]" style={{ color: 'var(--c-text-muted)' }}>
            <div className="w-1.5 h-1.5 rounded-full animate-breathe" style={{ background: 'var(--c-accent)' }} />
            <span>{activeSubAgents} agents running</span>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-auto" style={{ background: 'var(--c-bg)' }}>
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }} className="min-h-full">
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
