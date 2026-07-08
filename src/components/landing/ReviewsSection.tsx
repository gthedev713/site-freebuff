import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Review {
  id: number;
  text: string;
  author: string;
  date: string;
  rating: number;
  platform: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    text: "Εξαιρετικό βιβλιοπωλείο! Πάντα ευγενικοί και πρόθυμοι να σε βοηθήσουν. Μεγάλη ποικιλία σε βιβλία και σχολικά είδη. Το συστήνω ανεπιφύλακτα!",
    author: "Μαρία Κ.",
    date: "πριν 2 μήνες",
    rating: 5,
    platform: "Google Maps",
  },
  {
    id: 2,
    text: "Το καλύτερο βιβλιοχαρτοπωλείο στο Ωραιόκαστρο! Η Ευαγγελία πάντα με διάθεση να σε εξυπηρετήσει και να σε συμβουλέψει για την καλύτερη επιλογή.",
    author: "Γιώργος Π.",
    date: "πριν 3 μήνες",
    rating: 5,
    platform: "Google Maps",
  },
  {
    id: 3,
    text: "Εδώ και 15 χρόνια προμηθεύομαι τα σχολικά είδη των παιδιών μου. Άριστη ποιότητα, εξαιρετικές τιμές και πάντα φιλική εξυπηρέτηση!",
    author: "Ελένη Δ.",
    date: "πριν 1 μήνα",
    rating: 5,
    platform: "Google Maps",
  },
  {
    id: 4,
    text: "Υπέροχο μαγαζί! Βρίσκεις τα πάντα σε βιβλία, γραφική ύλη και δώρα. Η ιδιοκτήτρια είναι πραγματικά φιλόξενη και εξυπηρετική.",
    author: "Αντώνης Μ.",
    date: "πριν 2 εβδομάδες",
    rating: 5,
    platform: "Google Maps",
  },
  {
    id: 5,
    text: "Πάντα ευχάριστη εμπειρία! Το Χαρτομάνι είναι ο ορισμός του γειτονικού βιβλιοπωλείου. Ζεστή ατμόσφαιρα και υπέροχη εξυπηρέτηση.",
    author: "Σοφία Τ.",
    date: "πριν 3 εβδομάδες",
    rating: 5,
    platform: "Google Maps",
  },
];

const cardVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 400 : -400,
    opacity: 0,
    rotateY: dir > 0 ? 15 : -15,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -400 : 400,
    opacity: 0,
    rotateY: dir > 0 ? -15 : 15,
    scale: 0.9,
  }),
};

export default function ReviewsSection() {
  const [[current, direction], setPage] = useState([0, 0]);

  const paginate = useCallback((newDirection: number) => {
    setPage(([prev]) => {
      const next = (prev + newDirection + REVIEWS.length) % REVIEWS.length;
      return [next, newDirection];
    });
  }, []);

  const review = REVIEWS[current];

  return (
    <section id="reviews" className="relative py-20 sm:py-28 bg-card border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-primary font-mono text-sm">❯ grep -r κριτικές reviews/</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-foreground">
              Τι λένε οι πελάτες μας
              <span className="block text-lg sm:text-xl font-mono italic font-normal text-primary mt-2">
                η γνώμη τους μετράει
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-sans max-w-md">
              Η φήμη μας χτίζεται μέρα με τη μέρα, χάρη στην εμπιστοσύνη της τοπικής κοινότητας.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-2xl font-mono font-bold text-foreground">4.9</span>
              <span className="text-xs font-mono text-muted-foreground">/ 5.0</span>
            </div>
            <div className="text-[11px] font-mono text-muted-foreground">
              Βασισμένο σε κριτικές από{" "}
              <span className="text-primary">Google Maps</span>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => paginate(-1)}
                className="p-2.5 rounded-lg border border-border/50 bg-background/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                aria-label="Προηγούμενη κριτική"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="p-2.5 rounded-lg border border-border/50 bg-background/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                aria-label="Επόμενη κριτική"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <span className="text-xs font-mono text-muted-foreground ml-2">
                {current + 1} / {REVIEWS.length}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[320px] sm:h-[360px] perspective-[1000px]"
          >
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={review.id}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  rotateY: { duration: 0.4 },
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="absolute inset-0 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 sm:p-8 flex flex-col"
              >
                <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-primary/20 mb-4" />
                <p className="text-sm sm:text-base text-foreground/90 font-sans leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-border/30 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-mono font-semibold text-foreground">
                      {review.author}
                    </div>
                    <div className="text-[11px] font-mono text-muted-foreground">
                      {review.date} · {review.platform}
                    </div>
                  </div>
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}