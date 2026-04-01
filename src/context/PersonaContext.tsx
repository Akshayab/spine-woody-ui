import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Persona, Team, TeamType } from '../data/types';
import { personas as initialPersonas } from '../data/mockData';

interface PersonaContextType {
  currentPersona: Persona;
  setPersona: (id: string) => void;
  addTeam: (name: string, description: string, leadName: string) => void;
  dismissAlert: (activityId: string) => void;
  approveArtifact: (artifactId: string) => void;
}

const PersonaContext = createContext<PersonaContextType | null>(null);

export function PersonaProvider({ children }: { children: ReactNode }) {
  const [allPersonas, setAllPersonas] = useState<Persona[]>(initialPersonas);
  const [currentId, setCurrentId] = useState<string>(initialPersonas[0].id);
  const currentPersona = allPersonas.find(p => p.id === currentId) || allPersonas[0];

  const setPersona = useCallback((id: string) => setCurrentId(id), []);

  const addTeam = useCallback((name: string, description: string, leadName: string) => {
    const teamId = `${currentId}-${name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;
    const newTeam: Team = {
      id: teamId,
      name,
      type: 'research' as TeamType,
      description,
      personaId: currentId,
      status: 'active',
      schedule: 'Configuring...',
      lead: { name: leadName, personality: 'Adaptive and resourceful', description: `Setting up team focused on: ${description.slice(0, 100)}` },
      subAgents: [],
      artifacts: [],
      activity: [
        { id: `${teamId}-a1`, teamId, message: `${leadName} is analyzing your requirements and configuring agents`, timestamp: 'Just now', type: 'agent-spawn' },
      ],
      automations: [],
      integrations: [],
      terminal: {
        uptime: '< 1 minute',
        files: ['config.yaml'],
        activeProcesses: ['agent_setup.py'],
        terminalLines: [
          '$ ssh agent@compute.spine.dev',
          `Connected to sandbox-${Math.random().toString(36).slice(2, 6)}`,
          `$ python3 agent_setup.py --team "${name}"`,
          'Analyzing requirements...',
          `Provisioning ${leadName} as team lead...`,
          'Setting up persistent workspace...',
        ],
      },
      kpis: [
        { label: 'Status', value: 'Setting up' },
        { label: 'Agents', value: 0 },
        { label: 'Artifacts', value: 0 },
        { label: 'Uptime', value: '< 1m' },
      ],
    };

    setAllPersonas(prev => prev.map(p =>
      p.id === currentId
        ? {
            ...p,
            teams: [...p.teams, newTeam],
            metrics: { ...p.metrics, teamsActive: p.metrics.teamsActive + 1 },
            chatThreads: [
              ...p.chatThreads,
              {
                id: `${teamId}-chat`,
                label: name,
                teamId,
                lastActivity: 'Just now',
                messages: [
                  { id: `${teamId}-m1`, sender: 'system' as const, text: `${leadName}: I'm setting up the team now. Analyzing your description to determine the right agents, tools, and integrations. I'll have everything configured shortly.`, timestamp: 'Just now', teamId },
                ],
              },
            ],
          }
        : p
    ));
  }, [currentId]);

  const dismissAlert = useCallback((activityId: string) => {
    setAllPersonas(prev => prev.map(p =>
      p.id === currentId
        ? {
            ...p,
            teams: p.teams.map(t => ({
              ...t,
              activity: t.activity.map(a => a.id === activityId ? { ...a, type: 'routine' as const } : a),
            })),
          }
        : p
    ));
  }, [currentId]);

  const approveArtifact = useCallback((artifactId: string) => {
    setAllPersonas(prev => prev.map(p =>
      p.id === currentId
        ? {
            ...p,
            teams: p.teams.map(t => ({
              ...t,
              artifacts: t.artifacts.map(a => a.id === artifactId ? { ...a, pinned: true } : a),
            })),
          }
        : p
    ));
  }, [currentId]);

  return (
    <PersonaContext.Provider value={{ currentPersona, setPersona, addTeam, dismissAlert, approveArtifact }}>
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const ctx = useContext(PersonaContext);
  if (!ctx) throw new Error('usePersona must be inside PersonaProvider');
  return ctx;
}
