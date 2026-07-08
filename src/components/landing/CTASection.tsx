import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative overflow-hidden rounded-2xl border border-amber-600/30 bg-gradient-to-br from-amber-900/40 via-background to-green-900/30 p-8 sm:p-12 md:p-16"
        >
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.2'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-primary font-mono text-sm">❯ ./επικοινωνία.sh</span>
              <span className="h-4 w-[1px] bg-primary/40" />
              <span className="text-[10px] font-mono text-muted-foreground">running...</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-foreground mb-4">
              Έτοιμοι να σας εξυπηρετήσουμε
              <span className="block text-lg sm:text-xl font-mono italic font-normal text-primary mt-2">
                περάστε από το κατάστημα ή καλέστε μας
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-sans mb-8 max-w-lg mx-auto leading-relaxed">
              Στο Χαρτομάνι, κάθε πελάτης είναι φίλος. Είτε χρειάζεστε ένα βιβλίο, είτε σχολικά είδη, είτε απλά μια συμβουλή — είμαστε εδώ.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+302310698432"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-mono bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25"
              >
                <Phone className="h-4 w-4" />
                <span>2310 698432</span>
              </a>
              <a
                href="https://maps.google.com/?q=Αλεξάνδρου+Υψηλάντου+49+Ωραιόκαστρο"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-mono border border-border/60 text-foreground rounded-lg hover:bg-muted/50 transition-all duration-200"
              >
                <MapPin className="h-4 w-4" />
                <span>Οδηγίες μέσω Google Maps</span>
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-[11px] font-mono text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Ανοιχτά Δευτέρα–Παρασκευή</span>
              <span className="text-border">|</span>
              <span>Αλ. Υψηλάντου 49, Ωραιόκαστρο</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}