import { useEffect, useState } from "react";

interface useIntersectionObserverProps {
    root?: null;
    rootMargin?: string;
    threshold?: number;
    onInterset: IntersectionObserverCallback;
}

const useIntersectionObserver = ({
  root,
  rootMargin,
  threshold,
  onInterset
}: useIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if(!target) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onInterset,
      {root, rootMargin, threshold}
    );

    observer.observe(target);

    return () => observer.unobserve(target);
  }, [onInterset, root, rootMargin, target, threshold]);

  return { setTarget };
};

export default useIntersectionObserver;