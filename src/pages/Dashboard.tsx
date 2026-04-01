import { motion } from 'framer-motion';
import { usePersona } from '../context/PersonaContext';
import SteeringInput from '../components/SteeringInput';
import TeamCard from '../components/TeamCard';
import CountUp from '../components/CountUp';

export default function Dashboard() {
  const { currentPersona } = usePersona();
  const { metrics } = currentPersona;
  const runningAgents = currentPersona.teams.reduce((sum, t) => sum + t.subAgents.filter(a => a.status === 'running').length, 0);

  return (
    <div className="max-w-[1200px] mx-auto px-10 py-10">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-8">
        <h1 className="text-3xl font-light tracking-tight" style={{ color: 'var(--c-text-primary)' }}>{currentPersona.name}</h1>
        <div className="flex items-center gap-6 mt-3">
          <Metric label="teams" value={metrics.teamsActive} />
          <Metric label="agents running" value={runningAgents} />
          <Metric label="artifacts" value={metrics.artifactsProducedThisWeek} />
          <div className="text-[11px] font-mono" style={{ color: 'var(--c-text-muted)' }}>
            <span style={{ opacity: 0.5 }} className="mr-1.5">NEXT</span>{metrics.nextScheduledRun}
          </div>
        </div>
      </motion.div>

      <SteeringInput />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {currentPersona.teams.map((team, i) => (
          <TeamCard key={team.id} team={team} index={i} />
        ))}
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg font-mono font-semibold" style={{ color: 'var(--c-text-primary)' }}><CountUp end={value} duration={800} /></span>
      <span className="text-[10px] font-mono uppercase tracking-[0.12em]" style={{ color: 'var(--c-text-muted)', opacity: 0.6 }}>{label}</span>
    </div>
  );
}
