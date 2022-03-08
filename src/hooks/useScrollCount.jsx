import { useRef, useEffect, useCallback } from 'react';

const useScrollCount = (end, start = 0, dot = false, duration = 3000) => {
  const element = useRef();
  const observer = useRef(null);
  const stepTime = Math.abs(Math.floor(duration / (end - start)));

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        let currentNumber = start;
        const counter = setInterval(() => {
          dot ? (currentNumber += 0.1) : (currentNumber += 1);
          current.innerHTML = dot ? currentNumber.toFixed(1) : currentNumber;
          if (currentNumber >= end - 0.1) {
            clearInterval(counter);
            observer.current.disconnect(element.current);
          }
        }, stepTime);
      }
    },
    [end, start, dot, stepTime, element],
  );

  useEffect(() => {
    if (element.current) {
      observer.current = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.current.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
  };
};

export default useScrollCount;
