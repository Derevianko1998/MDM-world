import { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
}

export const Counter = ({ from, to, duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate: (value) => setCount(Math.floor(value)),
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
};