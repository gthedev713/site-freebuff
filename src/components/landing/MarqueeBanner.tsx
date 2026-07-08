const ITEMS = [
  "📚 \"Εξαιρετικό βιβλιοπωλείο, πάντα ευγενικοί και εξυπηρετικοί!\"",
  "⭐ 4.9 ★ — Κορυφαίες κριτικές από την κοινότητα του Ωραιοκάστρου",
  "📖 \"Περισσότερα από 15 χρόνια προμηθεύομαι σχολικά είδη από εδώ!\"",
  "📍 Αλ. Υψηλάντου 49, Ωραιόκαστρο — Απέναντι από την πλατεία",
  "📚 \"Η καλύτερη συλλογή βιβλίων στην περιοχή!\"",
  "📦 1.000+ τίτλοι βιβλίων σε απόθεμα",
  "✏️ \"Σχολικά είδη σε εξαιρετικές τιμές, το προτείνω ανεπιφύλακτα!\"",
  "📞 2310 698432 — Καλέστε για παραγγελίες",
  "🎁 \"Βρίσκω πάντα το τέλειο δώρο εδώ!\"",
  "📚 15+ χρόνια προσφοράς στην τοπική κοινότητα",
];

export default function MarqueeBanner() {
  return (
    <section className="relative overflow-hidden border-y border-border/40 bg-background/95">
      <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      <div className="py-3 sm:py-4 overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap w-max">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <span className="text-primary">◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}