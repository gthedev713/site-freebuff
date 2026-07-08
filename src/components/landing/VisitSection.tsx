import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

const WEEKDAYS = [
  { day: "Δευτέρα", short: "ΔΕΥ", hours: "08:00 – 14:30 & 17:00 – 20:30" },
  { day: "Τρίτη", short: "ΤΡΙ", hours: "08:00 – 14:30 & 17:00 – 20:30" },
  { day: "Τετάρτη", short: "ΤΕΤ", hours: "08:00 – 14:30" },
  { day: "Πέμπτη", short: "ΠΕΜ", hours: "08:00 – 14:30 & 17:00 – 20:30" },
  { day: "Παρασκευή", short: "ΠΑΡ", hours: "08:00 – 14:30 & 17:00 – 20:30" },
  { day: "Σάββατο", short: "ΣΑΒ", hours: "ΚΛΕΙΣΤΑ" },
  { day: "Κυριακή", short: "ΚΥΡ", hours: "ΚΛΕΙΣΤΑ" },
];

function getTodayIndex(): number {
  const now = new Date();
  const greekDay = (now.getDay() + 6) % 7;
  return greekDay;
}

export default function VisitSection() {
  const today = getTodayIndex();
  const [expandedDay, setExpandedDay] = useState<number>(today);

  return (
    <section id="visit" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-primary font-mono text-sm">❯ ssh xartomani@store</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-foreground mb-4">
              Ελάτε να γνωριστούμε
              <span className="block text-lg sm:text-xl font-mono italic font-normal text-primary mt-2">
                σας περιμένουμε
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-sans max-w-md">
              Στην καρδιά του Ωραιοκάστρου, η γειτονιά σας έχει το δικό της βιβλιοχαρτοπωλείο.
            </p>
            <div className="p-5 sm:p-6 rounded-xl border border-border/50 bg-card space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-mono font-semibold text-foreground mb-1">Διεύθυνση</div>
                  <div className="text-xs sm:text-sm font-mono text-muted-foreground">
                    Αλεξάνδρου Υψηλάντου 49<br />
                    Ωραιόκαστρο, Τ.Κ. 57013
                  </div>
                  <a
                    href="https://maps.google.com/?q=Αλεξάνδρου+Υψηλάντου+49+Ωραιόκαστρο"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-mono text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                    <span>Άνοιγμα σε χάρτη</span>
                  </a>
                </div>
              </div>
              <div className="border-t border-border/30 pt-4 flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-mono font-semibold text-foreground mb-1">Τηλέφωνο</div>
                  <a
                    href="tel:+302310698432"
                    className="text-sm font-mono text-primary hover:text-primary/80 transition-colors"
                  >
                    2310 698432
                  </a>
                  <div className="text-[11px] font-mono text-muted-foreground mt-1">
                    Καλέστε για παραγγελίες & πληροφορίες
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+302310698432"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-mono bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
              >
                <Phone className="h-4 w-4" />
                <span>2310 698432</span>
              </a>
              <a
                href="https://maps.google.com/?q=Αλεξάνδρου+Υψηλάντου+49+Ωραιόκαστρο"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-mono border border-border/60 text-foreground rounded hover:bg-muted/50 transition-all duration-200"
              >
                <MapPin className="h-4 w-4" />
                <span>Οδηγίες</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span>Βρείτε μας στο Instagram:</span>
              <a
                href="https://instagram.com/xartomani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                @xartomani
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-mono text-muted-foreground">
                Ωράριο Λειτουργίας
              </span>
            </div>
            <div className="space-y-2">
              {WEEKDAYS.map((wd, i) => {
                const isToday = i === today;
                const isExpanded = i === expandedDay;
                const isClosed = wd.hours === "ΚΛΕΙΣΤΑ";

                return (
                  <motion.div
                    key={wd.day}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`overflow-hidden rounded-lg border transition-all duration-200 cursor-pointer ${
                      isToday
                        ? "border-primary/60 bg-primary/10"
                        : "border-border/40 bg-card hover:border-border/70"
                    }`}
                    onClick={() => setExpandedDay(isExpanded ? -1 : i)}
                  >
                    <div className="flex items-center justify-between p-3 sm:p-4">
                      <div className="flex items-center gap-3">
                        {isToday && (
                          <span className="text-[9px] font-mono uppercase tracking-wider text-primary bg-primary/15 px-2 py-0.5 rounded">
                            Σήμερα
                          </span>
                        )}
                        <span
                          className={`text-sm font-mono ${
                            isToday
                              ? "font-bold text-primary"
                              : isClosed
                              ? "text-muted-foreground/50 line-through"
                              : "text-foreground"
                          }`}
                        >
                          {wd.day}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-mono ${
                            isClosed
                              ? "text-destructive"
                              : isToday
                              ? "text-primary font-medium"
                              : "text-muted-foreground"
                          }`}
                        >
                          {wd.hours}
                        </span>
                        <ChevronDown
                          className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="border-t border-border/30 px-3 sm:px-4 py-3"
                      >
                        <div className="text-[11px] font-mono text-muted-foreground space-y-1">
                          {isClosed ? (
                            <span>Το κατάστημα είναι κλειστό.</span>
                          ) : (
                            <>
                              <div className="flex justify-between">
                                <span>Πρωί:</span>
                                <span className="text-foreground/80">08:00 – 14:30</span>
                              </div>
                              {wd.hours.includes("17:00") && (
                                <div className="flex justify-between">
                                  <span>Απόγευμα:</span>
                                  <span className="text-foreground/80">17:00 – 20:30</span>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
            <div className="text-[11px] font-mono text-muted-foreground text-center pt-2">
              * Το ωράριο ενδέχεται να διαφέρει σε αργίες. Τηλεφωνήστε για επιβεβαίωση.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}