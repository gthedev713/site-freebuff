import { motion } from "framer-motion";
import { BookOpen, Users, CalendarCheck, Award } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  number: string;
  label: string;
  suffix: string;
  color: string;
}

const STATS: Stat[] = [
  {
    icon: <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />,
    number: "15+",
    label: "Χρόνια προσφοράς",
    suffix: "στην τοπική κοινότητα",
    color: "group-hover:bg-amber-600",
  },
  {
    icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
    number: "1K+",
    label: "Ικανοποιημένοι πελάτες",
    suffix: "μας εμπιστεύονται κάθε χρόνο",
    color: "group-hover:bg-green-600",
  },
  {
    icon: <CalendarCheck className="h-5 w-5 sm:h-6 sm:w-6" />,
    number: "5/7",
    label: "Ημέρες λειτουργίας",
    suffix: "με πρωινό & απογευματινό ωράριο",
    color: "group-hover:bg-amber-700",
  },
  {
    icon: <Award className="h-5 w-5 sm:h-6 sm:w-6" />,
    number: "4.9",
    label: "Μέση βαθμολογία",
    suffix: "σε κριτικές πελατών",
    color: "group-hover:bg-green-700",
  },
];

function StatBlock({ stat, index }: { stat: Stat; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 sm:p-8 cursor-default"
    >
      <div
        className={`absolute inset-0 ${stat.color} opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out`}
      />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
            {stat.icon}
          </span>
          <span className="text-muted-foreground/30 group-hover:text-white/40 transition-colors duration-500 text-sm font-mono">
            [{index + 1}]
          </span>
        </div>
        <div className="text-4xl sm:text-5xl font-mono font-bold text-foreground group-hover:text-white transition-colors duration-500 mb-1">
          {stat.number}
        </div>
        <div className="text-sm sm:text-base font-mono font-medium text-foreground/80 group-hover:text-white/90 transition-colors duration-500 mb-1">
          {stat.label}
        </div>
        <div className="text-xs sm:text-sm text-muted-foreground group-hover:text-white/70 transition-colors duration-500">
          {stat.suffix}
        </div>
        <div className="mt-4 flex items-center gap-1 text-primary group-hover:text-white transition-colors duration-500">
          <span className="text-xs font-mono">❯</span>
          <motion.span
            initial={{ x: 0 }}
            className="inline-block text-xs font-mono"
            whileHover={{ x: 4 }}
          >
            δείτε περισσότερα
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="text-primary font-mono text-sm">❯ cat why-us.txt</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-foreground mb-4"
          >
            Γιατί να μας προτιμήσετε
            <span className="block text-lg sm:text-xl font-mono italic font-normal text-primary mt-2">
              η γειτονιά σας, η παρέα σας
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-muted-foreground font-sans max-w-lg mx-auto"
          >
            Απόδειξη ότι η ποιότητα και η προσωπική φροντίδα κάνουν τη διαφορά.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <StatBlock key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}