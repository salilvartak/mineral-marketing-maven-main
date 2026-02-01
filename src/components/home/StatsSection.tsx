import { useEffect, useState, useRef } from "react";
import { Calendar, Weight, Users, Factory } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 2011,
    label: "Established",
    suffix: "",
    isYear: true,
  },
  {
    icon: Weight,
    value: 50000,
    label: "Annual Capacity",
    suffix: " MT",
    isYear: false,
  },
  {
    icon: Users,
    value: 500,
    label: "Happy Clients",
    suffix: "+",
    isYear: false,
  },
  {
    icon: Factory,
    value: 8,
    label: "Plants & Mines",
    suffix: "",
    isYear: false,
  },
];

const useCountUp = (end: number, duration: number = 2000, isYear: boolean = false) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    
    let startTime: number;
    const startValue = isYear ? 2000 : 0;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentValue = Math.floor(startValue + (end - startValue) * progress);
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [hasStarted, end, duration, isYear]);

  return { count, setHasStarted };
};

export const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} isVisible={isVisible} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ stat, isVisible, delay }: { stat: typeof stats[0]; isVisible: boolean; delay: number }) => {
  const { count, setHasStarted } = useCountUp(stat.value, 2000, stat.isYear);
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setHasStarted(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay, setHasStarted]);

  const Icon = stat.icon;

  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
        <Icon className="h-8 w-8 text-accent" />
      </div>
      <div className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-2">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <p className="text-primary-foreground/70">{stat.label}</p>
    </div>
  );
};
