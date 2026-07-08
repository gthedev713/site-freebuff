import { Phone, MapPin, Instagram, Heart } from "lucide-react";

const QUICK_LINKS = [
  { label: "Υπηρεσίες", href: "#services" },
  { label: "Γιατί Εμείς", href: "#why-us" },
  { label: "Κριτικές", href: "#reviews" },
  { label: "Επικοινωνία", href: "#visit" },
];

const CONTACT_INFO: Array<{
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}> = [
  {
    icon: <MapPin className="h-4 w-4 text-primary" />,
    label: "Διεύθυνση",
    value: "Αλ. Υψηλάντου 49, Ωραιόκαστρο 57013",
    href: "https://maps.google.com/?q=Αλεξάνδρου+Υψηλάντου+49+Ωραιόκαστρο",
  },
  {
    icon: <Phone className="h-4 w-4 text-primary" />,
    label: "Τηλέφωνο",
    value: "2310 698432",
    href: "tel:+302310698432",
  },
  {
    icon: <Instagram className="h-4 w-4 text-primary" />,
    label: "Instagram",
    value: "@xartomani",
    href: "https://instagram.com/xartomani",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-background/95">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-mono font-bold text-primary">Χαρτομάνι</span>
              <span className="text-[10px] font-mono text-muted-foreground border border-border/60 rounded px-1.5 py-0.5">
                beta
              </span>
            </div>
            <p className="text-xs sm:text-sm font-mono text-muted-foreground leading-relaxed max-w-xs">
              Βιβλιοχαρτοπωλείο στο Ωραιόκαστρο. 15+ χρόνια δίπλα σας — βιβλία, σχολικά είδη, γραφική ύλη και δώρα.
            </p>
            <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-3 w-3 text-primary fill-primary" />
              <span>in Ωραιόκαστρο</span>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-semibold text-foreground">
              <span className="text-primary">❯</span> Επικοινωνία
            </h3>
            <ul className="space-y-3">
              {CONTACT_INFO.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 group"
                  >
                    <span className="mt-0.5 shrink-0">{item.icon}</span>
                    <div>
                      <div className="text-[11px] font-mono text-muted-foreground">{item.label}</div>
                      <div className="text-xs sm:text-sm font-mono text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-semibold text-foreground">
              <span className="text-primary">❯</span> Πλοήγηση
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <span className="text-primary/50 group-hover:text-primary transition-colors">~</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-border/30">
              <div className="text-[11px] font-mono text-muted-foreground mb-2">Ωράριο:</div>
              <div className="text-[11px] font-mono text-foreground/80">
                Δευτ–Τρί–Πέμ–Παρ: 08:00–14:30 & 17:00–20:30
              </div>
              <div className="text-[11px] font-mono text-foreground/80">
                Τετάρτη: 08:00–14:30
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] font-mono text-muted-foreground">
            © {new Date().getFullYear()} Χαρτομάνι. Με επιφύλαξη παντός δικαιώματος.
          </div>
          <div className="text-[11px] font-mono text-muted-foreground flex items-center gap-2">
            <span>Ιδιοκτήτρια: Ευαγγελία Κέπετζη</span>
            <span className="text-border">|</span>
            <a
              href="https://instagram.com/xartomani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}