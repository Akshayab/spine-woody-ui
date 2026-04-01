import { motion } from 'framer-motion';
import { usePersona } from '../context/PersonaContext';
import { useTheme } from '../context/ThemeContext';
import { Bell, Users, Sun, Moon } from 'lucide-react';

export default function SettingsPage() {
  const { currentPersona } = usePersona();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="max-w-3xl mx-auto px-10 py-10">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <h1 className="text-2xl font-light tracking-tight" style={{ color: 'var(--c-text-primary)' }}>Settings</h1>
        <p className="text-[12px] mt-1 font-mono" style={{ color: 'var(--c-text-muted)' }}>Team configuration and preferences</p>
      </motion.div>

      <Section title="Profile">
        <div className="flex items-center gap-4 p-5">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold" style={{ background: 'var(--c-accent-dim)', border: '1px solid var(--c-accent-border)', color: 'var(--c-accent)' }}>
            {currentPersona.avatar}
          </div>
          <div>
            <div className="text-[14px] font-medium" style={{ color: 'var(--c-text-primary)' }}>{currentPersona.name}</div>
            <div className="text-[12px] font-mono" style={{ color: 'var(--c-text-muted)' }}>{currentPersona.role}</div>
          </div>
        </div>
      </Section>

      <Section title="Appearance">
        <div className="flex items-center justify-between px-5 py-4">
          <div>
            <div className="text-[13px]" style={{ color: 'var(--c-text-primary)' }}>Theme</div>
            <div className="text-[11px] font-mono mt-0.5" style={{ color: 'var(--c-text-muted)' }}>Switch between dark and light mode</div>
          </div>
          <button onClick={toggleTheme} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[12px] font-mono" style={{ background: 'var(--c-surface-2)', border: '1px solid var(--c-border)', color: 'var(--c-text-secondary)' }}>
            {theme === 'dark' ? <Moon size={12} /> : <Sun size={12} />}
            {theme === 'dark' ? 'Dark' : 'Light'}
          </button>
        </div>
      </Section>

      <Section title="Notifications" icon={Bell}>
        {[
          { label: 'Morning briefing', desc: 'Daily summary of overnight activity', on: true },
          { label: 'Critical change alerts', desc: 'Immediate notification on important changes', on: true },
          { label: 'Artifact ready', desc: 'When new artifacts are ready for review', on: true },
          { label: 'Weekly digest', desc: 'Summary of all activity for the week', on: false },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between px-5 py-3.5 border-t" style={{ borderColor: 'var(--c-border)' }}>
            <div>
              <div className="text-[13px]" style={{ color: 'var(--c-text-primary)' }}>{item.label}</div>
              <div className="text-[11px] font-mono mt-0.5" style={{ color: 'var(--c-text-muted)' }}>{item.desc}</div>
            </div>
            <div className="w-9 h-[22px] rounded-full relative cursor-pointer" style={{ background: item.on ? 'var(--c-accent)' : 'var(--c-surface-3)' }}>
              <div className="absolute top-[3px] w-4 h-4 rounded-full bg-white" style={{ left: item.on ? '18px' : '3px', transition: 'left 0.2s' }} />
            </div>
          </div>
        ))}
      </Section>

      <Section title="Teams" icon={Users}>
        {currentPersona.teams.map(team => (
          <div key={team.id} className="flex items-center justify-between px-5 py-3.5 border-t" style={{ borderColor: 'var(--c-border)' }}>
            <div>
              <div className="text-[13px]" style={{ color: 'var(--c-text-primary)' }}>{team.name}</div>
              <div className="text-[11px] font-mono mt-0.5" style={{ color: 'var(--c-text-muted)' }}>Lead: {team.lead.name} · {team.subAgents.length} sub-agents</div>
            </div>
            <button className="text-[11px] font-mono" style={{ color: 'var(--c-accent)' }}>Configure</button>
          </div>
        ))}
      </Section>
    </div>
  );
}

function Section({ title, icon: Icon, children }: { title: string; icon?: typeof Bell; children: React.ReactNode }) {
  return (
    <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
      <h2 className="text-[10px] font-semibold uppercase tracking-[0.15em] font-mono mb-3 flex items-center gap-2" style={{ color: 'var(--c-text-muted)' }}>
        {Icon && <Icon size={12} strokeWidth={1.5} />} {title}
      </h2>
      <div className="rounded-xl overflow-hidden" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>{children}</div>
    </motion.section>
  );
}
