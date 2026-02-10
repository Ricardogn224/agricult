import { useEffect, useRef, useState } from 'react';

export function useInView(options = { threshold: 0.1, once: true }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.once && ref.current) {
          observer.unobserve(ref.current);
        }
      } else if (!options.once) {
        setIsInView(false);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isInView };
}
