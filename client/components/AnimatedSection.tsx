import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedSection({ children, className = "" }: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.05, once: true });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
}
