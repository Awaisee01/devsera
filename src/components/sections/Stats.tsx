import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const stats = [
  { number: "50+", label: "Expert Designers & Developers" },
  { number: "500M+", label: "Investments Raised by Clients" },
  { number: "35%", label: "Boost in Conversions" },
  { number: "200+", label: "Projects Delivered" },
];

function Counter({ end, duration = 2000 }: { end: string; duration?: number }) {
  const [count, setCount] = useState("0");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  useEffect(() => {
    if (inView) {
      // Extract number from end string (e.g., "50+" -> 50)
      const numericEnd = parseInt(end.replace(/[^\d]/g, ''));
      
      if (numericEnd) {
        let start = 0;
        const increment = numericEnd / (duration / 50);
        const timer = setInterval(() => {
          start += increment;
          if (start >= numericEnd) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start) + end.replace(/\d+/g, ''));
          }
        }, 50);
        
        return () => clearInterval(timer);
      } else {
        setCount(end);
      }
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <section className="py-16 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center stats-item"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              data-testid={`stat-item-${index}`}
            >
              <div className="text-4xl font-light text-premium mb-2" data-testid={`stat-number-${index}`}>
                <Counter end={stat.number} />
              </div>
              <div className="text-text-secondary" data-testid={`stat-label-${index}`}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
