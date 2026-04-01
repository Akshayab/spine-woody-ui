import { useEffect, useState } from 'react';

export default function CountUp({ end, duration = 1200 }: { end: number; duration?: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  return <>{value}</>;
}
