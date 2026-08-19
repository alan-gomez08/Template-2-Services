import { useEffect, useRef, useState, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ScrollReveal({ children }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 blur-none' 
          : 'opacity-0 translate-y-16 scale-95 blur-[6px]'
      }`}
    >
      {children}
    </div>
  );
}