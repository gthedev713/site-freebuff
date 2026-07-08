import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Υπηρεσίες", href: "#services" },
  { label: "Γιατί Εμείς", href: "#why-us" },
  { label: "Κριτικές", href: "#reviews" },
  { label: "Επικοινωνία", href: "#visit" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-[0_2px_20px_oklch(0_0_0_/_0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-primary font-mono text-lg sm:text-xl font-bold tracking-tight group-hover:animate-crt-glow transition-all">
              Χαρτομάνι
            </span>
            <span className="text-[10px] font-mono text-muted-foreground hidden sm:inline-block border border-border/60 rounded px-1.5 py-0.5 leading-none">
              v1.0
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+302310698432"
              className="flex items-center gap-2 px-4 py-2 text-sm font-mono text-primary border border-primary/40 rounded hover:bg-primary/10 transition-all duration-200"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>2310 698432</span>
            </a>
            <a
              href="https://maps.google.com/?q=Αλεξάνδρου+Υψηλάντου+49+Ωραιόκαστρο"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-mono bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-all duration-200"
            >
              <MapPin className="h-3.5 w-3.5" />
              <span>Οδηγίες</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Μενού"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/60 bg-background/98 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-mono text-muted-foreground hover:text-primary hover:bg-muted/50 rounded transition-all"
                >
                  $ cd /{link.label.toLowerCase().replace(/\s/g, "-")}
                </a>
              ))}
              <div className="pt-3 border-t border-border/40 flex flex-col gap-2">
                <a
                  href="tel:+302310698432"
                  className="flex items-center gap-2 px-3 py-2.5 text-sm font-mono text-primary border border-primary/40 rounded hover:bg-primary/10 transition-all"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>2310 698432</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Αλεξάνδρου+Υψηλάντου+49+Ωραιόκαστρο"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 text-sm font-mono bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-all"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Οδηγίες</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}