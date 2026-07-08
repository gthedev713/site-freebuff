import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Pencil,
  Gift,
  Palette,
  Backpack,
  Star,
  Heart,
  Sparkles,
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
  span: "sm" | "md" | "lg" | "xl";
}

const SERVICES: Service[] = [
  {
    icon: <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Βιβλία",
    description: "Χιλιάδες τίτλοι για κάθε ηλικία και γούστο — λογοτεχνία, παιδικά, εκπαιδευτικά και ξενόγλωσσα.",
    accent: "from-amber-600/20 to-amber-600/5",
    span: "xl",
  },
  {
    icon: <Pencil className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Σχολικά Είδη",
    description: "Ολοκληρωμένη γκάμα σχολικών ειδών για όλες τις τάξεις — από τετράδια μέχρι κασετίνες και σχολικές τσάντες.",
    accent: "from-green-600/20 to-green-600/5",
    span: "md",
  },
  {
    icon: <Palette className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Γραφική Ύλη",
    description: "Επαγγελματικά και καλλιτεχνικά είδη γραφείου: στυλό, μαρκαδόροι, χαρτικά και είδη ζωγραφικής.",
    accent: "from-amber-500/20 to-amber-500/5",
    span: "sm",
  },
  {
    icon: <Gift className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Είδη Δώρων",
    description: "Μοναδικά δώρα και συσκευασίες για κάθε περίσταση — ξεχωρίστε με την προσωπική μας πινελιά.",
    accent: "from-rose-600/20 to-rose-600/5",
    span: "sm",
  },
  {
    icon: <Backpack className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Τσάντες & Αξεσουάρ",
    description: "Σχολικές τσάντες, κασετίνες, παγούρια και όλα τα απαραίτητα για τη σχολική χρονιά.",
    accent: "from-blue-600/20 to-blue-600/5",
    span: "md",
  },
  {
    icon: <Star className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Προσωπική Εξυπηρέτηση",
    description: "Η Ευαγγελία και η ομάδα μας σας συμβουλεύουν προσωπικά για κάθε επιλογή — με γνώση και αγάπη.",
    accent: "from-amber-700/20 to-amber-700/5",
    span: "sm",
  },
  {
    icon: <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Παραγγελίες",
    description: "Δεν έχετε το βιβλίο που θέλετε; Το παραγγέλνουμε εμείς! Καλέστε μας ή περάστε από το κατάστημα.",
    accent: "from-green-500/20 to-green-500/5",
    span: "sm",
  },
  {
    icon: <Heart className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Τοπική Κοινότητα",
    description: "Στηρίζουμε την τοπική κοινωνία του Ωραιοκάστρου με δράσεις, εκδηλώσεις και αγάπη για το βιβλίο.",
    accent: "from-rose-500/20 to-rose-500/5",
    span: "sm",
  },
];

function TiltCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setShine({ x, y });
      setRotate({
        x: (y - 50) * 0.1,
        y: (50 - x) * 0.1,
      });
    },
    []
  );

  const onMouseLeave = useCallback(() => {
    setShine({ x: 50, y: 50 });
    setRotate({ x: 0, y: 0 });
  }, []);

  const spanClass =
    service.span === "xl"
      ? "col-span-2 row-span-2"
      : service.span === "lg"
      ? "col-span-2"
      : service.span === "md"
      ? "col-span-1 sm:col-span-1"
      : "col-span-1";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      className={`relative ${spanClass} overflow-hidden rounded-xl border border-border/50 bg-card p-5 sm:p-6 group cursor-default`}
    >
      <div
        className="shine-overlay"
        style={{
          "--shine-x": `${shine.x}%`,
          "--shine-y": `${shine.y}%`,
        } as React.CSSProperties}
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            {service.icon}
          </span>
          <h3 className="font-mono font-bold text-sm sm:text-base text-foreground">
            {service.title}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed flex-1">
          {service.description}
        </p>
        <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>❯ μάθετε περισσότερα</span>
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-primary font-mono text-sm">❯ ls -la υπηρεσίες/</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-foreground mb-4"
        >
          Οι υπηρεσίες μας
          <span className="block text-lg sm:text-xl font-mono italic font-normal text-primary mt-2">
            ό,τι χρειάζεστε, σε ένα μέρος
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-muted-foreground font-sans max-w-xl"
        >
          15+ χρόνια στο Ωραιόκαστρο, προσφέρουμε τα πάντα για το σχολείο, το γραφείο και την ψυχαγωγία σας.
        </motion.p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[180px]">
          {SERVICES.map((service, i) => (
            <TiltCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}