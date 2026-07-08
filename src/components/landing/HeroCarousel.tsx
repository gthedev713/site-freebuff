import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen, MapPin } from "lucide-react";

interface Slide {
  id: number;
  tagline: string;
  headlineMain: string;
  headlineItalic: string;
  subtitle: string;
  gradient: string;
  icon: React.ReactNode;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    tagline: "❯ τοπικό βιβλιοχαρτοπωλείο _",
    headlineMain: "Χαρτομάνι",
    headlineItalic: "Ο κόσμος του βιβλίου",
    subtitle: "Ανακαλύψτε χιλιάδες τίτλους, σχολικά είδη και μοναδικά δώρα στο Ωραιόκαστρο.",
    gradient: "from-amber-600/20 via-background to-transparent",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    id: 2,
    tagline: "❯ από την Ευαγγελία Κέπετζη _",
    headlineMain: "Αγάπη για το βιβλίο",
    headlineItalic: "από το 2000",
    subtitle: "Μια οικογενειακή επιχείρηση με παράδοση, φροντίδα και προσωπική εξυπηρέτηση.",
    gradient: "from-green-900/30 via-background to-transparent",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    id: 3,
    tagline: "❯ Αλ. Υψηλάντου 49, Ωραιόκαστρο _",
    headlineMain: "Ελάτε στο κατάστημα",
    headlineItalic: "σας περιμένουμε",
    subtitle: "Σχολικά είδη, γραφική ύλη, βιβλία και δώρα — όλα σε ένα μέρος.",
    gradient: "from-amber-800/30 via-background to-transparent",
    icon: <MapPin className="h-6 w-6" />,
  },
];

export default function HeroCarousel() {
  const [[current, direction], setPage] = useState([0, 0]);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([prev]) => {
        const next = (prev + newDirection + SLIDES.length) % SLIDES.length;
        return [next, newDirection];
      });
    },
    []
  );

  const goTo = useCallback((index: number) => {
    setPage(([prev]) => [index, index > prev ? 1 : -1]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  const slide = SLIDES[current];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 300 : -300 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -300 : 300 }),
  };

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-background z-0" />

      {/* Ken Burns Background */}
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0 z-0"
        >
          {/* Animated pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-background to-green-900/10">
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary font-mono text-sm">{slide.tagline}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-mono font-bold tracking-tight text-foreground mb-2">
                {slide.headlineMain}
                <span className="block text-2xl sm:text-3xl md:text-4xl font-mono italic font-normal text-primary mt-2">
                  {slide.headlineItalic}
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground font-sans max-w-lg leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-mono bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
                >
                  <span>Περιηγηθείτε</span>
                  <span className="text-primary-foreground/60">→</span>
                </a>
                <a
                  href="tel:+302310698432"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-mono border border-border/60 text-foreground rounded hover:bg-muted/50 transition-all duration-200"
                >
                  <span>Καλέστε μας</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-background/60 backdrop-blur-sm border border-border/40 text-foreground hover:bg-background/80 hover:text-primary transition-all"
        aria-label="Προηγούμενο"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-background/60 backdrop-blur-sm border border-border/40 text-foreground hover:bg-background/80 hover:text-primary transition-all"
        aria-label="Επόμενο"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 ${
              i === current
                ? "w-8 h-2 bg-primary rounded-full"
                : "w-2 h-2 bg-muted-foreground/40 rounded-full hover:bg-muted-foreground/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-20 hidden sm:flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono text-muted-foreground">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent"
        />
      </div>
    </section>
  );
}