"use client";

import { motion } from "framer-motion";
import { TrendingUp, Globe, Ship, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const cardIcons = [TrendingUp, Globe, Ship, Target];
const cardBadges = ["Growth", "Global", "Maritime", "KSA 2030"];

export default function GrowthInitiatives() {
  const { t } = useLanguage();
  const g = t.growthSection;

  const allCards = [
    {
      icon: TrendingUp,
      badge: cardBadges[0],
      title: g.featured.title,
      description: g.featured.description,
      metrics: { investment: g.featured.investment, target: g.featured.target },
    },
    ...g.items.map(({ title, description }, i) => ({
      icon: cardIcons[i + 1],
      badge: cardBadges[i + 1],
      title,
      description,
      metrics: null as null,
    })),
  ];

  return (
    <section
      className="py-24 bg-canvas relative overflow-hidden"
      aria-labelledby="growth-heading"
    >
      <div className="absolute top-0 end-0 w-[500px] h-[500px] rounded-full opacity-[0.04] bg-teal blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal block mb-3"
          >
            {g.eyebrow}
          </motion.span>
          <motion.h2
            id="growth-heading"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-3xl md:text-4xl font-bold text-ink mb-4"
          >
            {g.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted text-base max-w-2xl mx-auto"
          >
            {g.subtitle}
          </motion.p>
        </div>

        {/* Featured banner image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="rounded-2xl overflow-hidden mb-10 shadow-lg shadow-primary/8"
          style={{ aspectRatio: "21/7" }}
        >
          <img
            src="/images/industry/CurrentFacilityAreial.webp"
            alt="PETROTANK facility aerial view"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* 4 cards — 2×2 on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allCards.map(({ icon: Icon, badge, title, description, metrics }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              {/* Icon + badge row */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-surface-blue flex items-center justify-center group-hover:bg-teal/10 transition-colors">
                  <Icon
                    size={20}
                    className="text-primary group-hover:text-teal transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-teal bg-teal/10 border border-teal/20 px-2.5 py-1 rounded-full">
                  {badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-ink mb-2">{title}</h3>

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed">{description}</p>

              {/* Investment/target metrics — Phase 1 only */}
              {metrics && (
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-6">
                  <div>
                    <p className="text-lg font-bold text-primary leading-none">{metrics.investment}</p>
                    <p className="text-[10px] text-muted mt-1 uppercase tracking-wider">{g.investmentLabel}</p>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div>
                    <p className="text-lg font-bold text-ink leading-none">{metrics.target}</p>
                    <p className="text-[10px] text-muted mt-1 uppercase tracking-wider">{g.targetLabel}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
