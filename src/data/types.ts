export type TeamType = 'monitoring' | 'research' | 'content' | 'bd';

export type ArtifactType = 'report' | 'spreadsheet' | 'memo' | 'document' | 'deck' | 'data-table';

export type WorkspaceType = 'canvas' | 'sandbox';

export type SubAgentStatus = 'running' | 'completed' | 'idle' | 'error';

export type BlockType = 'prompt' | 'table' | 'memo' | 'slides' | 'browseruse' | 'app' | 'data' | 'analysis' | 'web-scrape' | 'search';

export interface CanvasBlock {
  id: string;
  label: string;
  type: BlockType;
  status: 'done' | 'running' | 'queued';
}

export interface CanvasEdge {
  from: string;
  to: string;
}

export interface CanvasWorkspace {
  type: 'canvas';
  blocks: CanvasBlock[];
  edges: CanvasEdge[];
}

export interface SandboxWorkspace {
  type: 'sandbox';
  terminalLines: string[];
  files: string[];
}

export interface SubAgent {
  id: string;
  name: string;
  role: string;
  status: SubAgentStatus;
  workspace: CanvasWorkspace | SandboxWorkspace;
  artifacts: Artifact[];
  startedAt: string;
  completedAt?: string;
  progress?: number; // 0-100
  skills?: string[];
}

export interface TeamTerminal {
  uptime: string;
  files: string[];
  activeProcesses: string[];
  terminalLines: string[];
}

export interface Artifact {
  id: string;
  title: string;
  type: ArtifactType;
  teamId: string;
  subAgentId?: string;
  subAgentName?: string;
  createdAt: string;
  daysAgo: number;
  pinned?: boolean;
  preview?: string;
}

export interface ActivityItem {
  id: string;
  teamId: string;
  message: string;
  timestamp: string;
  type?: 'agent-spawn' | 'agent-complete' | 'artifact-promoted' | 'alert' | 'routine';
}

export interface Automation {
  id: string;
  teamId: string;
  name: string;
  schedule: string;
  enabled: boolean;
  lastRun?: string;
  nextRun?: string;
}

export interface Integration {
  id: string;
  name: string;
  type: 'api' | 'data' | 'messaging' | 'storage' | 'crm' | 'social' | 'email';
  status: 'connected' | 'error' | 'pending';
  lastSync?: string;
}

export interface TeamLead {
  name: string;
  personality: string;
  description: string;
}

export interface Team {
  id: string;
  name: string;
  type: TeamType;
  description: string;
  personaId: string;
  status: 'active' | 'paused' | 'idle';
  schedule: string;
  lead: TeamLead;
  subAgents: SubAgent[];
  artifacts: Artifact[];
  activity: ActivityItem[];
  automations: Automation[];
  integrations: Integration[];
  terminal: TeamTerminal;
  kpis: KPI[];
  deadline?: { label: string; date: string; daysLeft: number };
  lastChecked?: string;
}

export interface KPI {
  label: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  sparkline?: number[];
}

export interface SuggestedAction {
  id: string;
  text: string;
  personaId: string;
}

export interface DashboardMetrics {
  teamsActive: number;
  tasksCompletedThisWeek: number;
  artifactsProducedThisWeek: number;
  nextScheduledRun: string;
}

export interface IMessageLink {
  label: string;
  teamId?: string;
  artifactId?: string;
}

export interface IMessageBubble {
  sender: 'user' | 'system';
  text: string;
  time: string;
  link?: IMessageLink;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'system';
  text: string;
  timestamp: string;
  teamId?: string;
  link?: IMessageLink;
}

export interface ChatThread {
  id: string;
  label: string;
  teamId?: string; // undefined = all-teams thread
  messages: ChatMessage[];
  lastActivity: string;
}

export interface Persona {
  id: string;
  name: string;
  role: string;
  avatar: string;
  teams: Team[];
  metrics: DashboardMetrics;
  suggestedActions: SuggestedAction[];
  imessages: IMessageBubble[];
  chatThreads: ChatThread[];
}
