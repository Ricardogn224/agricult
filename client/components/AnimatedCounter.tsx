import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
}: AnimatedCounterProps) {
  const { ref, isInView } = useInView({ threshold: 0.5, once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isInView, end, duration]);

  return (
    <div ref={ref}>
      {prefix}
      {count}
      {suffix}
    </div>
  );
}
