"use client";

import { motion } from "framer-motion";
import { ArrowRight, Droplets, Container, Anchor, Gauge } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, stagger } from "@/lib/animations";

const metricIcons = [Droplets, Container, Anchor, Gauge];

export default function HeroSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0d1c2e]"
      style={{ minHeight: "100vh" }}
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
      <div
        className="absolute inset-0"
        style={{
          background: isRTL
            ? "linear-gradient(to left, rgba(13,28,46,0.96) 0%, rgba(46,74,120,0.85) 40%, rgba(53,84,134,0.35) 70%, transparent 100%)"
            : "linear-gradient(to right, rgba(13,28,46,0.96) 0%, rgba(46,74,120,0.85) 40%, rgba(53,84,134,0.35) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0d1c2e]/80 via-transparent to-[#0d1c2e]/25"
        aria-hidden="true"
      />
      {/* Top scrim — ensures transparent navbar stays readable */}
      <div
        className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/35 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Content ───────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full pt-28 pb-20 lg:pt-32 lg:pb-24" style={{ minHeight: "100vh" }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-2xl w-full"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal mb-5"
          >
            {t.hero.eyebrow}
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(2.8rem,6vw,5rem)] font-bold text-white leading-[1.05] tracking-tight mb-4"
          >
            {t.hero.h1Line1}
            <br />
            {t.hero.h1Line2}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-[15px] text-white/70 mb-9 font-normal"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* ── 4 Metric cards in one equal row ──────── */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-9"
          >
            {t.hero.metrics.map(({ value, label }, i) => {
              const Icon = metricIcons[i];
              return (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="flex items-center gap-2.5 bg-white/10 border border-white/15 backdrop-blur-sm rounded-xl px-4 py-3 min-h-[58px]"
                >
                  <div className="w-7 h-7 rounded-full border border-teal/40 flex items-center justify-center shrink-0">
                    <Icon size={13} className="text-teal-light" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-bold text-[12px] leading-tight whitespace-nowrap">{value}</p>
                    <p className="text-white/55 text-[10px] leading-tight">{label}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ── CTAs ─────────────────────────────── */}
          <motion.div
            variants={fadeUp}
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
        </motion.div>
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
