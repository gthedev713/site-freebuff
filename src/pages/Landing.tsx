import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import HeroCarousel from "@/components/landing/HeroCarousel";
import MarqueeBanner from "@/components/landing/MarqueeBanner";
import ServicesSection from "@/components/landing/ServicesSection";
import StatsSection from "@/components/landing/StatsSection";
import ReviewsSection from "@/components/landing/ReviewsSection";
import VisitSection from "@/components/landing/VisitSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function Landing() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      <Header />
      <HeroCarousel />
      <MarqueeBanner />
      <ServicesSection />
      <StatsSection />
      <ReviewsSection />
      <VisitSection />
      <CTASection />
      <Footer />
    </motion.div>
  );
}