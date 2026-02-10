import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedCard({ children, delay = 0, className = "" }: AnimatedCardProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, once: true });

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
