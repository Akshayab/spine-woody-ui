import { createContext, useContext, useState, useCallback, useRef, type ReactNode } from 'react';
import type { Persona, Team, TeamType, SubAgent, Artifact, Integration } from '../data/types';
import { personas as initialPersonas } from '../data/mockData';

interface PersonaContextType {
  currentPersona: Persona;
  setPersona: (id: string) => void;
  addTeam: (name: string, description: string, leadName: string) => void;
  dismissAlert: (activityId: string) => void;
  approveArtifact: (artifactId: string) => void;
  updateTeam: (teamId: string, updater: (team: Team) => Team) => void;
}

const PersonaContext = createContext<PersonaContextType | null>(null);

// Simulation configs for different team descriptions
function inferTeamConfig(name: string, description: string, _leadName: string) {
  const lower = (name + ' ' + description).toLowerCase();

  if (lower.includes('engineer') || lower.includes('develop') || lower.includes('code') || lower.includes('ship')) {
    return {
      type: 'research' as TeamType,
      personality: 'Systematic and ship-focused',
      leadDesc: `Engineering orchestrator who coordinates development agents, manages code quality, and keeps the team shipping.`,
      agents: [
        { name: 'Code Agent', role: 'Full-stack developer', workspaceType: 'sandbox' as const, skills: ['TypeScript', 'Python', 'React', 'API design', 'testing'] },
        { name: 'Code Reviewer', role: 'Quality & security reviewer', workspaceType: 'canvas' as const, skills: ['code review', 'security audit', 'best practices', 'refactoring'] },
        { name: 'DevOps Agent', role: 'CI/CD & infrastructure', workspaceType: 'sandbox' as const, skills: ['Docker', 'GitHub Actions', 'monitoring', 'deployment'] },
      ],
      integrations: [
        { name: 'GitHub', type: 'api' as const },
        { name: 'Linear', type: 'api' as const },
        { name: 'Datadog', type: 'api' as const },
      ],
      automations: ['Run tests on every push', 'Daily code health report', 'Weekly sprint summary'],
      firstArtifact: { title: 'Codebase Architecture Overview', type: 'report' as const },
    };
  }

  if (lower.includes('competi') || lower.includes('monitor') || lower.includes('watch') || lower.includes('track')) {
    return {
      type: 'monitoring' as TeamType,
      personality: 'Vigilant and data-driven',
      leadDesc: `Competitive intelligence specialist who tracks market changes, competitor moves, and emerging threats around the clock.`,
      agents: [
        { name: 'Web Scanner', role: 'Website & pricing monitor', workspaceType: 'sandbox' as const, skills: ['web scraping', 'price tracking', 'change detection'] },
        { name: 'Signal Analyst', role: 'Trend & pattern detection', workspaceType: 'canvas' as const, skills: ['data analysis', 'anomaly detection', 'reporting'] },
      ],
      integrations: [
        { name: 'Google Alerts', type: 'api' as const },
        { name: 'Crunchbase', type: 'data' as const },
      ],
      automations: ['Daily competitor scan', 'Alert on pricing changes', 'Weekly digest'],
      firstArtifact: { title: 'Initial Competitor Landscape', type: 'report' as const },
    };
  }

  if (lower.includes('customer') || lower.includes('research') || lower.includes('feedback') || lower.includes('user')) {
    return {
      type: 'research' as TeamType,
      personality: 'Empathetic and insight-driven',
      leadDesc: `Research synthesizer who processes customer feedback, interview data, and usage patterns to surface actionable insights.`,
      agents: [
        { name: 'Feedback Processor', role: 'Reviews & NPS analyzer', workspaceType: 'sandbox' as const, skills: ['NLP', 'sentiment analysis', 'data processing'] },
        { name: 'Insight Writer', role: 'Report & theme synthesizer', workspaceType: 'canvas' as const, skills: ['synthesis', 'report writing', 'visualization'] },
      ],
      integrations: [
        { name: 'Intercom', type: 'messaging' as const },
        { name: 'Typeform', type: 'api' as const },
      ],
      automations: ['Process new feedback daily', 'Weekly insight report', 'NPS trend alert'],
      firstArtifact: { title: 'Customer Feedback Themes Q1', type: 'report' as const },
    };
  }

  // Default — content/general
  return {
    type: 'content' as TeamType,
    personality: 'Creative and adaptable',
    leadDesc: `Versatile team lead who coordinates agents to deliver on your goals.`,
    agents: [
      { name: 'Research Agent', role: 'Data gathering & analysis', workspaceType: 'canvas' as const, skills: ['research', 'analysis', 'data synthesis'] },
      { name: 'Builder Agent', role: 'Content & output creation', workspaceType: 'sandbox' as const, skills: ['content creation', 'formatting', 'delivery'] },
    ],
    integrations: [
      { name: 'Google Drive', type: 'storage' as const },
      { name: 'Slack', type: 'messaging' as const },
    ],
    automations: ['Daily status check', 'Weekly output review'],
    firstArtifact: { title: `${name} - Initial Analysis`, type: 'report' as const },
  };
}

export function PersonaProvider({ children }: { children: ReactNode }) {
  const [allPersonas, setAllPersonas] = useState<Persona[]>(initialPersonas);
  const [currentId, setCurrentId] = useState<string>(initialPersonas[0].id);
  const currentPersona = allPersonas.find(p => p.id === currentId) || allPersonas[0];
  const timersRef = useRef<number[]>([]);

  const setPersona = useCallback((id: string) => setCurrentId(id), []);

  const updateTeam = useCallback((teamId: string, updater: (team: Team) => Team) => {
    setAllPersonas(prev => prev.map(p =>
      p.id === currentId
        ? { ...p, teams: p.teams.map(t => t.id === teamId ? updater(t) : t) }
        : p
    ));
  }, [currentId]);

  const addTeam = useCallback((name: string, description: string, leadName: string) => {
    const teamId = `${currentId}-${name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;
    const config = inferTeamConfig(name, description, leadName);

    const newTeam: Team = {
      id: teamId, name, type: config.type, description, personaId: currentId,
      status: 'active', schedule: 'Configuring...',
      lead: { name: leadName, personality: config.personality, description: config.leadDesc },
      subAgents: [],
      artifacts: [],
      activity: [
        { id: `${teamId}-a0`, teamId, message: `${leadName} assigned as team lead`, timestamp: 'Just now', type: 'agent-spawn' },
        { id: `${teamId}-a1`, teamId, message: `Analyzing requirements: "${description.slice(0, 80)}..."`, timestamp: 'Just now', type: 'routine' },
      ],
      automations: [],
      integrations: [],
      terminal: {
        uptime: '< 1 minute', files: ['config.yaml'], activeProcesses: ['setup.py'],
        terminalLines: [
          '$ ssh agent@compute.spine.dev',
          `Connected to sandbox-${Math.random().toString(36).slice(2, 6)}`,
          `$ python3 setup.py --team "${name}" --lead "${leadName}"`,
          'Analyzing requirements...',
        ],
      },
      kpis: [
        { label: 'Phase', value: 'Setting up' },
        { label: 'Agents', value: 0 },
        { label: 'Artifacts', value: 0 },
        { label: 'Uptime', value: '< 1m' },
      ],
    };

    // Add team immediately
    setAllPersonas(prev => prev.map(p =>
      p.id === currentId
        ? {
            ...p,
            teams: [...p.teams, newTeam],
            metrics: { ...p.metrics, teamsActive: p.metrics.teamsActive + 1 },
            chatThreads: [
              ...p.chatThreads,
              {
                id: `${teamId}-chat`, label: name, teamId, lastActivity: 'Just now',
                messages: [
                  { id: `${teamId}-m1`, sender: 'system' as const, text: `${leadName}: I'm setting up the team now. Analyzing your description to understand what agents, tools, and integrations we need.`, timestamp: 'Just now', teamId },
                ],
              },
            ],
          }
        : p
    ));

    // ============ SETUP SIMULATION ============
    // Phase 1 (3s): Lead recommends agent structure
    const t1 = window.setTimeout(() => {
      const agentNames = config.agents.map(a => a.name).join(', ');
      setAllPersonas(prev => prev.map(p =>
        p.id === currentId ? {
          ...p,
          teams: p.teams.map(t => t.id !== teamId ? t : {
            ...t,
            activity: [
              { id: `${teamId}-a2`, teamId, message: `${leadName} recommends ${config.agents.length} sub-agents: ${agentNames}`, timestamp: '30 seconds ago', type: 'routine' },
              ...t.activity,
            ],
            kpis: [
              { label: 'Phase', value: 'Deploying' },
              { label: 'Agents', value: 0 },
              { label: 'Artifacts', value: 0 },
              { label: 'Uptime', value: '1m' },
            ],
            terminal: { ...t.terminal, terminalLines: [
              ...t.terminal.terminalLines,
              `Recommended agents: ${agentNames}`,
              '$ deploying agents...',
            ]},
          }),
          chatThreads: p.chatThreads.map(ct => ct.teamId !== teamId ? ct : {
            ...ct, lastActivity: '30s ago',
            messages: [...ct.messages, {
              id: `${teamId}-m2`, sender: 'system' as const, teamId,
              text: `${leadName}: Based on your description, I'm setting up ${config.agents.length} agents:\n\n${config.agents.map(a => `- **${a.name}** (${a.role}) — ${a.workspaceType}`).join('\n')}\n\nDeploying now...`,
              timestamp: '30s ago',
            }],
          }),
        } : p
      ));
    }, 3000);
    timersRef.current.push(t1);

    // Phase 2 (6s): First agent appears
    const t2 = window.setTimeout(() => {
      const agent1 = config.agents[0];
      const subAgent1: SubAgent = {
        id: `${teamId}-sa1`, name: agent1.name, role: agent1.role,
        status: 'running', progress: 15, skills: agent1.skills,
        startedAt: '1 minute ago',
        workspace: agent1.workspaceType === 'sandbox' ? {
          type: 'sandbox',
          terminalLines: ['$ initializing workspace...', `Setting up ${agent1.name}...`, '$ pip install -r requirements.txt', 'Installing dependencies...'],
          files: ['requirements.txt', 'config.yaml'],
        } : {
          type: 'canvas',
          blocks: [
            { id: 'b1', label: 'Load requirements', type: 'data', status: 'done' },
            { id: 'b2', label: 'Research & gather', type: 'search', status: 'running' },
            { id: 'b3', label: 'Analyze findings', type: 'analysis', status: 'queued' },
          ],
          edges: [{ from: 'b1', to: 'b2' }, { from: 'b2', to: 'b3' }],
        },
        artifacts: [],
      };

      setAllPersonas(prev => prev.map(p =>
        p.id === currentId ? {
          ...p,
          teams: p.teams.map(t => t.id !== teamId ? t : {
            ...t,
            subAgents: [subAgent1],
            activity: [
              { id: `${teamId}-a3`, teamId, message: `${agent1.name} deployed and starting work (${agent1.workspaceType})`, timestamp: '1 minute ago', type: 'agent-spawn' },
              ...t.activity,
            ],
            kpis: [
              { label: 'Phase', value: 'Working' },
              { label: 'Agents', value: 1, sparkline: [0, 0, 0, 0, 0, 0, 1] },
              { label: 'Artifacts', value: 0 },
              { label: 'Uptime', value: '2m' },
            ],
            terminal: { ...t.terminal, terminalLines: [
              ...t.terminal.terminalLines,
              `✓ ${agent1.name} deployed (${agent1.workspaceType})`,
            ]},
          }),
        } : p
      ));
    }, 6000);
    timersRef.current.push(t2);

    // Phase 3 (9s): Second agent + integrations
    const t3 = window.setTimeout(() => {
      const agent2 = config.agents[1];
      const subAgent2: SubAgent = {
        id: `${teamId}-sa2`, name: agent2.name, role: agent2.role,
        status: 'running', progress: 10, skills: agent2.skills,
        startedAt: 'Just now',
        workspace: agent2.workspaceType === 'sandbox' ? {
          type: 'sandbox',
          terminalLines: ['$ initializing workspace...', `Setting up ${agent2.name}...`],
          files: ['config.yaml'],
        } : {
          type: 'canvas',
          blocks: [
            { id: 'b1', label: 'Initialize', type: 'data', status: 'done' },
            { id: 'b2', label: 'Process', type: 'analysis', status: 'running' },
          ],
          edges: [{ from: 'b1', to: 'b2' }],
        },
        artifacts: [],
      };

      const integrations: Integration[] = config.integrations.map((int, i) => ({
        id: `${teamId}-int-${i}`, name: int.name, type: int.type, status: 'connected' as const, lastSync: 'Just now',
      }));

      setAllPersonas(prev => prev.map(p =>
        p.id === currentId ? {
          ...p,
          teams: p.teams.map(t => t.id !== teamId ? t : {
            ...t,
            subAgents: [...t.subAgents, subAgent2],
            integrations,
            automations: config.automations.map((auto, i) => ({
              id: `${teamId}-auto-${i}`, teamId, name: auto, schedule: 'Configuring...', enabled: true, nextRun: 'Pending',
            })),
            activity: [
              { id: `${teamId}-a4`, teamId, message: `${agent2.name} deployed. ${config.integrations.length} integrations connected.`, timestamp: 'Just now', type: 'agent-spawn' },
              ...t.activity,
            ],
            kpis: [
              { label: 'Phase', value: 'Working' },
              { label: 'Agents', value: 2, sparkline: [0, 0, 0, 0, 0, 1, 2] },
              { label: 'Artifacts', value: 0 },
              { label: 'Uptime', value: '3m' },
            ],
            terminal: { ...t.terminal, terminalLines: [
              ...t.terminal.terminalLines,
              `✓ ${agent2.name} deployed (${agent2.workspaceType})`,
              `✓ Connected: ${config.integrations.map(i => i.name).join(', ')}`,
              `✓ ${config.automations.length} automations configured`,
            ]},
          }),
        } : p
      ));
    }, 9000);
    timersRef.current.push(t3);

    // Phase 4 (13s): Third agent (if exists) + first agent shows progress + update first agent progress
    const t4 = window.setTimeout(() => {
      setAllPersonas(prev => prev.map(p =>
        p.id === currentId ? {
          ...p,
          teams: p.teams.map(t => {
            if (t.id !== teamId) return t;
            let agents = t.subAgents.map((a, i) => i === 0 ? { ...a, progress: 55 } : { ...a, progress: 30 });

            // Add third agent if exists
            if (config.agents.length > 2) {
              const agent3 = config.agents[2];
              agents = [...agents, {
                id: `${teamId}-sa3`, name: agent3.name, role: agent3.role,
                status: 'running' as const, progress: 5, skills: agent3.skills,
                startedAt: 'Just now', artifacts: [],
                workspace: agent3.workspaceType === 'sandbox' ? {
                  type: 'sandbox' as const,
                  terminalLines: ['$ initializing...', `Setting up ${agent3.name}...`],
                  files: ['config.yaml'],
                } : {
                  type: 'canvas' as const,
                  blocks: [{ id: 'b1', label: 'Initialize', type: 'data' as const, status: 'running' as const }],
                  edges: [],
                },
              }];
            }

            return {
              ...t, subAgents: agents,
              schedule: 'Daily at 8:00 AM',
              activity: [
                { id: `${teamId}-a5`, teamId, message: `${config.agents[0].name} is 55% complete — initial findings emerging`, timestamp: 'Just now', type: 'routine' as const },
                ...(config.agents.length > 2 ? [{ id: `${teamId}-a5b`, teamId, message: `${config.agents[2].name} deployed`, timestamp: 'Just now', type: 'agent-spawn' as const }] : []),
                ...t.activity,
              ],
              kpis: [
                { label: 'Phase', value: 'Active' },
                { label: 'Agents', value: agents.length, sparkline: [0, 0, 0, 0, 1, 2, agents.length] },
                { label: 'Artifacts', value: 0 },
                { label: 'Uptime', value: '5m' },
              ],
            };
          }),
          chatThreads: p.chatThreads.map(ct => ct.teamId !== teamId ? ct : {
            ...ct, lastActivity: 'Just now',
            messages: [...ct.messages, {
              id: `${teamId}-m3`, sender: 'system' as const, teamId,
              text: `${leadName}: All agents are deployed and working. ${config.agents[0].name} is making good progress — initial findings should be ready soon. Integrations are connected and automations are configured.`,
              timestamp: 'Just now',
            }],
          }),
        } : p
      ));
    }, 13000);
    timersRef.current.push(t4);

    // Phase 5 (18s): First artifact appears, first agent completes
    const t5 = window.setTimeout(() => {
      const artifact: Artifact = {
        id: `${teamId}-art1`, title: config.firstArtifact.title, type: config.firstArtifact.type,
        teamId, subAgentId: `${teamId}-sa1`, subAgentName: config.agents[0].name,
        createdAt: 'Just now', daysAgo: 0,
        preview: `# ${config.firstArtifact.title}\n\n## Overview\nThis initial analysis was generated by ${config.agents[0].name} based on the team's configuration.\n\n## Key Findings\n- Team "${name}" is now operational with ${config.agents.length} active agents\n- ${config.integrations.length} data sources connected\n- ${config.automations.length} automations configured\n\n## Next Steps\n1. Review initial findings and provide feedback\n2. Adjust agent priorities based on your goals\n3. Add additional data sources or integrations as needed`,
      };

      setAllPersonas(prev => prev.map(p =>
        p.id === currentId ? {
          ...p,
          metrics: { ...p.metrics, artifactsProducedThisWeek: p.metrics.artifactsProducedThisWeek + 1 },
          teams: p.teams.map(t => {
            if (t.id !== teamId) return t;
            return {
              ...t,
              artifacts: [artifact],
              subAgents: t.subAgents.map((a, i) =>
                i === 0 ? { ...a, status: 'completed' as const, progress: undefined, artifacts: [artifact] }
                : { ...a, progress: (a.progress || 0) + 25 }
              ),
              activity: [
                { id: `${teamId}-a7`, teamId, message: `"${config.firstArtifact.title}" promoted to team artifacts`, timestamp: 'Just now', type: 'artifact-promoted' as const },
                { id: `${teamId}-a6`, teamId, message: `${config.agents[0].name} completed — first deliverable ready`, timestamp: 'Just now', type: 'agent-complete' as const },
                ...t.activity,
              ],
              kpis: [
                { label: 'Phase', value: 'Active' },
                { label: 'Agents', value: t.subAgents.length, sparkline: [0, 0, 0, 1, 2, t.subAgents.length, t.subAgents.length] },
                { label: 'Artifacts', value: 1, sparkline: [0, 0, 0, 0, 0, 0, 1] },
                { label: 'Uptime', value: '8m' },
              ],
            };
          }),
          chatThreads: p.chatThreads.map(ct => ct.teamId !== teamId ? ct : {
            ...ct, lastActivity: 'Just now',
            messages: [...ct.messages, {
              id: `${teamId}-m4`, sender: 'system' as const, teamId,
              text: `${leadName}: First deliverable is ready — "${config.firstArtifact.title}". ${config.agents[0].name} has completed its initial pass. Other agents are still working. You can review the artifact in the Overview tab.`,
              timestamp: 'Just now',
            }],
          }),
        } : p
      ));
    }, 18000);
    timersRef.current.push(t5);

  }, [currentId]);

  const dismissAlert = useCallback((activityId: string) => {
    setAllPersonas(prev => prev.map(p =>
      p.id === currentId
        ? { ...p, teams: p.teams.map(t => ({ ...t, activity: t.activity.map(a => a.id === activityId ? { ...a, type: 'routine' as const } : a) })) }
        : p
    ));
  }, [currentId]);

  const approveArtifact = useCallback((artifactId: string) => {
    setAllPersonas(prev => prev.map(p =>
      p.id === currentId
        ? { ...p, teams: p.teams.map(t => ({ ...t, artifacts: t.artifacts.map(a => a.id === artifactId ? { ...a, pinned: true } : a) })) }
        : p
    ));
  }, [currentId]);

  return (
    <PersonaContext.Provider value={{ currentPersona, setPersona, addTeam, dismissAlert, approveArtifact, updateTeam }}>
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const ctx = useContext(PersonaContext);
  if (!ctx) throw new Error('usePersona must be inside PersonaProvider');
  return ctx;
}
