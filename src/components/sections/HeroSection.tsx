"use client";

import { motion } from "framer-motion";
import { ArrowRight, Droplets, Container, Anchor, Gauge } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const metricIcons = [Droplets, Container, Anchor, Gauge];

export default function HeroSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0d1c2e]"
      style={{ minHeight: "calc(100vh - 72px)", marginTop: "72px" }}
      aria-label="Hero"
    >
      {/* ── Background video ──────────────────────── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-55"
        aria-hidden="true"
      >
        <source src="/images/Hero Section Bg Video.mp4" type="video/mp4" />
      </video>

      {/* ── Overlay layers ────────────────────────── */}
      {/* Left-heavy brand gradient — mirrors for RTL */}
      <div
        className="absolute inset-0"
        style={{
          background: isRTL
            ? "linear-gradient(to left, rgba(13,28,46,0.96) 0%, rgba(46,74,120,0.85) 40%, rgba(53,84,134,0.35) 70%, transparent 100%)"
            : "linear-gradient(to right, rgba(13,28,46,0.96) 0%, rgba(46,74,120,0.85) 40%, rgba(53,84,134,0.35) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      {/* Bottom darkening */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0d1c2e]/80 via-transparent to-[#0d1c2e]/25"
        aria-hidden="true"
      />

      {/* ── Content ───────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full py-20 lg:py-28">
        <div className="max-w-2xl w-full">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal mb-5"
          >
            {t.hero.eyebrow}
          </motion.p>

          {/* H1 — two lines, reference-sized */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-[clamp(2.8rem,6vw,5rem)] font-bold text-white leading-[1.05] tracking-tight mb-4"
          >
            {t.hero.h1Line1}
            <br />
            {t.hero.h1Line2}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15px] text-white/70 mb-8 font-normal"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* ── 4 Metric pills ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex flex-wrap gap-3 mb-9"
          >
            {t.hero.metrics.map(({ value, label }, i) => {
              const Icon = metricIcons[i];
              return (
                <div
                  key={label}
                  className="flex items-center gap-2.5 bg-white/10 border border-white/15 backdrop-blur-sm rounded-lg px-4 py-2.5"
                >
                  <div className="w-7 h-7 rounded-full border border-teal/40 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-teal-light" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-[13px] leading-tight">{value}</p>
                    <p className="text-white/55 text-[11px] leading-tight">{label}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* ── CTAs ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg text-[14px] font-semibold transition-all duration-200 shadow-lg shadow-primary/30 cursor-pointer"
            >
              {t.hero.cta1}
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white hover:border-white/50 hover:bg-white/8 px-6 py-3 rounded-lg text-[14px] font-semibold transition-all duration-200 cursor-pointer"
            >
              {t.hero.cta2}
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom fade into stats bar ────────────── */}
      <div
        className="absolute bottom-0 inset-x-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0d1c2e 0%, transparent 100%)" }}
        aria-hidden="true"
      />
    </section>
  );
}
