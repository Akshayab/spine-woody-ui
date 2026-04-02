import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Clock, FolderKanban, X, Check } from 'lucide-react';
import { usePersona } from '../context/PersonaContext';

const typeColors: Record<string, string> = { monitoring: 'var(--c-monitoring)', research: 'var(--c-research)', content: 'var(--c-content)', bd: 'var(--c-bd)', engineering: '#60a5fa' };

export default function ProjectsPage() {
  const { currentPersona } = usePersona();
  const navigate = useNavigate();
  const [showCreate, setShowCreate] = useState(false);

  const projects = currentPersona.projects || [];

  return (
    <div className="max-w-[1200px] mx-auto px-10 py-10">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light tracking-tight" style={{ color: 'var(--c-text-primary)' }}>Projects</h1>
            <p className="text-[12px] mt-1 font-mono" style={{ color: 'var(--c-text-muted)' }}>
              Cross-team initiatives · {projects.length} active
            </p>
          </div>
          <button onClick={() => setShowCreate(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[12px] font-mono transition-colors"
            style={{ background: 'var(--c-accent)', color: 'white' }}>
            <Plus size={13} /> New Project
          </button>
        </div>
      </motion.div>

      {projects.length === 0 && (
        <div className="text-center py-20">
          <FolderKanban size={28} style={{ color: 'var(--c-text-muted)', opacity: 0.3 }} className="mx-auto mb-4" />
          <p className="text-[13px] mb-2" style={{ color: 'var(--c-text-secondary)' }}>No projects yet</p>
          <p className="text-[12px] max-w-sm mx-auto mb-6" style={{ color: 'var(--c-text-muted)' }}>
            Projects let your teams collaborate on shared initiatives. Create one to coordinate work across teams.
          </p>
          <button onClick={() => setShowCreate(true)}
            className="px-5 py-2.5 rounded-xl text-[12px] font-mono inline-flex items-center gap-2"
            style={{ background: 'var(--c-accent)', color: 'white' }}>
            <Plus size={13} /> Create a Project
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => {
          const teams = currentPersona.teams.filter(t => project.teamIds.includes(t.id));
          const artifactCount = teams.reduce((sum, t) => sum + t.artifacts.length, 0);
          const activeAgents = teams.reduce((sum, t) => sum + t.subAgents.filter(a => a.status === 'running').length, 0);

          return (
            <motion.div key={project.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              onClick={() => navigate(`/project/${project.id}`)}
              className="rounded-2xl p-5 cursor-pointer group transition-all"
              style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>

              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-[15px] font-semibold mb-1" style={{ color: 'var(--c-text-primary)' }}>{project.name}</h3>
                  <p className="text-[12px] line-clamp-2" style={{ color: 'var(--c-text-secondary)' }}>{project.description}</p>
                </div>
                <FolderKanban size={16} style={{ color: 'var(--c-accent)', opacity: 0.5 }} />
              </div>

              {/* Contributing teams */}
              <div className="flex items-center gap-2 mb-3">
                {teams.map(t => (
                  <div key={t.id} className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-mono"
                    style={{ background: 'var(--c-surface-2)', border: '1px solid var(--c-border)', color: 'var(--c-text-secondary)' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: typeColors[t.type] || 'var(--c-accent)' }} />
                    {t.name}
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-4 pt-3 border-t" style={{ borderColor: 'var(--c-border)' }}>
                <span className="text-[11px]" style={{ color: 'var(--c-text-muted)' }}>
                  <span className="font-mono font-semibold" style={{ color: 'var(--c-text-primary)' }}>{teams.length}</span> teams
                </span>
                <span className="text-[11px]" style={{ color: 'var(--c-text-muted)' }}>
                  <span className="font-mono font-semibold" style={{ color: 'var(--c-text-primary)' }}>{artifactCount}</span> artifacts
                </span>
                {activeAgents > 0 && (
                  <span className="text-[11px] flex items-center gap-1" style={{ color: 'var(--c-accent)' }}>
                    <div className="w-1.5 h-1.5 rounded-full animate-breathe" style={{ background: 'var(--c-accent)' }} />
                    {activeAgents} working
                  </span>
                )}
                {project.deadline && (
                  <span className="text-[11px] flex items-center gap-1 ml-auto font-mono"
                    style={{ color: project.deadline.daysLeft <= 7 ? '#ef4444' : 'var(--c-accent)' }}>
                    <Clock size={10} /> {project.deadline.daysLeft}d — {project.deadline.label}
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {showCreate && <CreateProjectModal onClose={() => setShowCreate(false)} />}
      </AnimatePresence>
    </div>
  );
}

function CreateProjectModal({ onClose }: { onClose: () => void }) {
  const { currentPersona } = usePersona();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const [autoSuggested, setAutoSuggested] = useState(false);

  // Auto-suggest teams when description changes
  const autoSuggestTeams = (desc: string) => {
    if (autoSuggested || !desc.trim() || currentPersona.teams.length === 0) return;
    const lower = desc.toLowerCase();
    const suggested: string[] = [];
    for (const team of currentPersona.teams) {
      const teamWords = (team.name + ' ' + team.description + ' ' + team.lead.name).toLowerCase();
      // Check if any words from description match team context
      const descWords = lower.split(/\s+/).filter(w => w.length > 3);
      if (descWords.some(w => teamWords.includes(w))) {
        suggested.push(team.id);
      }
    }
    // If we found matches, suggest them. Otherwise suggest all teams.
    if (suggested.length >= 2) {
      setSelectedTeams(suggested);
      setAutoSuggested(true);
    } else if (currentPersona.teams.length <= 3) {
      setSelectedTeams(currentPersona.teams.map(t => t.id));
      setAutoSuggested(true);
    }
  };

  const toggleTeam = (id: string) => {
    setSelectedTeams(prev => prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]);
  };

  const typeColors2: Record<string, string> = { monitoring: 'var(--c-monitoring)', research: 'var(--c-research)', content: 'var(--c-content)', bd: 'var(--c-bd)', engineering: '#60a5fa' };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 backdrop-blur-sm" style={{ background: 'var(--c-overlay)' }} onClick={onClose} />
      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
        className="relative rounded-2xl w-full max-w-lg overflow-hidden" style={{ background: 'var(--c-bg-elevated)', border: '1px solid var(--c-border)' }}>
        <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: 'var(--c-border)' }}>
          <h2 className="text-[15px] font-medium" style={{ color: 'var(--c-text-primary)' }}>New Project</h2>
          <button onClick={onClose} style={{ color: 'var(--c-text-muted)' }}><X size={16} /></button>
        </div>
        <div className="px-6 py-6 space-y-4">
          <div>
            <label className="text-[10px] font-mono uppercase tracking-[0.1em] block mb-1" style={{ color: 'var(--c-text-muted)' }}>Project name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g., Wine Expo Prep, Q1 Launch"
              className="w-full px-4 py-2.5 rounded-xl text-[13px] focus:outline-none"
              style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text-primary)' }} />
          </div>
          <div>
            <label className="text-[10px] font-mono uppercase tracking-[0.1em] block mb-1" style={{ color: 'var(--c-text-muted)' }}>Description</label>
            <textarea value={description} onChange={e => { setDescription(e.target.value); autoSuggestTeams(e.target.value); }} placeholder="What are you trying to accomplish?"
              rows={2} className="w-full px-4 py-2.5 rounded-xl text-[13px] focus:outline-none resize-none"
              style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: 'var(--c-text-primary)' }} />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[10px] font-mono uppercase tracking-[0.1em]" style={{ color: 'var(--c-text-muted)' }}>Contributing teams</label>
              {autoSuggested && <span className="text-[9px] font-mono" style={{ color: 'var(--c-accent)' }}>auto-selected based on description</span>}
            </div>
            <div className="space-y-1.5">
              {currentPersona.teams.map(team => {
                const isSelected = selectedTeams.includes(team.id);
                return (
                  <button key={team.id} onClick={() => toggleTeam(team.id)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all"
                    style={{ background: isSelected ? 'var(--c-accent-dim)' : 'var(--c-surface)', border: `1px solid ${isSelected ? 'var(--c-accent-border)' : 'var(--c-border)'}` }}>
                    <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: isSelected ? 'var(--c-accent)' : 'var(--c-surface-2)', border: `1px solid ${isSelected ? 'var(--c-accent)' : 'var(--c-border)'}` }}>
                      {isSelected && <Check size={12} color="white" />}
                    </div>
                    <div className="w-2 h-2 rounded-full" style={{ background: typeColors2[team.type] || 'var(--c-accent)' }} />
                    <span className="text-[13px]" style={{ color: 'var(--c-text-primary)' }}>{team.name}</span>
                    <span className="text-[10px] font-mono ml-auto" style={{ color: 'var(--c-text-muted)' }}>{team.lead.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <button onClick={onClose} disabled={!name.trim() || selectedTeams.length < 2}
            className="w-full px-4 py-3 rounded-xl text-[12px] font-mono font-medium"
            style={{ background: name.trim() && selectedTeams.length >= 2 ? 'var(--c-accent)' : 'var(--c-surface-2)', color: name.trim() && selectedTeams.length >= 2 ? 'white' : 'var(--c-text-muted)' }}>
            Create Project ({selectedTeams.length} teams)
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
