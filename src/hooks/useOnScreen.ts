import { useState, useEffect, useRef } from 'react';
import type { MutableRefObject } from 'react';

export const useOnScreen = <T extends Element,>(options?: IntersectionObserverInit): [MutableRefObject<T | null>, boolean] => {
  const ref = useRef<T | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Set state to the current intersection status (true if intersecting, false if not)
      setIsOnScreen(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isOnScreen];
};