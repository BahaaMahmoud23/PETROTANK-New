"use client";

import { motion } from "framer-motion";
import { Building2, Anchor, Truck, Cpu, ShieldCheck, TrendingUp, Trophy, CheckCircle2, Activity } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const advantageIcons = [Trophy, Anchor, ShieldCheck, Cpu];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const performanceData = [
  { target: 669,    decimals: 0, suffix: "+" },
  { target: 13.8,   decimals: 1, suffix: "M MT" },
  { target: 114000, decimals: 0, suffix: " m³" },
  { target: 4500,   decimals: 0, suffix: " cbm/hr" },
];

export default function CapabilitiesPage() {
  const { t, isRTL } = useLanguage();
  const cp = t.capabilitiesPage;

  return (
    <>
      <PageHero
        label={cp.hero.label}
        title={cp.hero.title}
        description={cp.hero.description}
        imageUrl="/images/industry/SateliteView_460f9634.webp"
      />

      {/* Infrastructure */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={cp.infrastructure.sectionLabel}
            title={cp.infrastructure.title}
            description={cp.infrastructure.description}
            align="left"
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {cp.infrastructure.items.map(({ label, value, note }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="bg-canvas border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal">{label}</span>
                </div>
                <p className="text-xl font-bold text-ink">{value}</p>
                <p className="text-sm text-muted mt-0.5">{note}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Marine */}
      <section className="py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label={cp.marine.sectionLabel}
                title={cp.marine.title}
                description={cp.marine.description}
                align="left"
              />
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-10 grid grid-cols-2 gap-5"
              >
                {cp.marine.items.map(({ label, value }) => (
                  <motion.div key={label} variants={itemVariants} className="bg-white border border-border rounded-xl p-5">
                    <p className="text-lg font-bold text-primary">{value}</p>
                    <p className="text-xs text-muted mt-1">{label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-primary/10"
            >
              <img src="/images/industry/MLA_fa5da4a5.webp" alt="Marine loading arm operations" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Land-Side */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-primary/10"
            >
              <img src="/images/industry/TruckBay_1e9ca1b2.webp" alt="Truck bay loading operations" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
            <div>
              <SectionHeader
                label={cp.landSide.sectionLabel}
                title={cp.landSide.title}
                description={cp.landSide.description}
                align="left"
              />
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 space-y-3"
              >
                {cp.landSide.items.map((item) => (
                  <motion.li key={item} variants={itemVariants} className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-teal shrink-0 mt-0.5" />
                    <span className="text-sm text-ink">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={cp.technology.sectionLabel}
            title={cp.technology.title}
            description={cp.technology.description}
            light
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {cp.technology.items.map(({ name, description }) => (
              <motion.div
                key={name}
                variants={itemVariants}
                className="bg-white/10 border border-white/15 rounded-xl p-6 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block bg-teal/20 text-teal-light text-sm font-bold px-3 py-1 rounded-full">
                    {name}
                  </span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SHEQ */}
      <section className="py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                label={cp.sheq.sectionLabel}
                title={cp.sheq.title}
                description={cp.sheq.description}
                align="left"
              />
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 space-y-3"
              >
                {cp.sheq.items.map((item) => (
                  <motion.li key={item} variants={itemVariants} className="flex items-start gap-3">
                    <ShieldCheck size={16} className="text-teal shrink-0 mt-0.5" />
                    <span className="text-sm text-ink">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-primary/10"
            >
              <img src="/images/industry/inspection.jpg" alt="Safety inspection" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operational Performance */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-teal block mb-3"
            >
              {cp.performance.eyebrow}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              {cp.performance.title}
            </motion.h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {cp.performance.metrics.map(({ label }, i) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="text-center bg-white/5 border border-white/10 rounded-xl p-7"
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <AnimatedCounter
                    target={performanceData[i].target}
                    suffix={performanceData[i].suffix}
                    decimals={performanceData[i].decimals}
                  />
                </p>
                <p className="text-sm text-white/50">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Phase 1 Expansion */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal block mb-3">
                {cp.expansion.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-5">{cp.expansion.title}</h2>
              <p className="text-muted text-base leading-relaxed mb-5">{cp.expansion.p1}</p>
              <p className="text-muted text-base leading-relaxed mb-8">{cp.expansion.p2}</p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">SAR 350M+</p>
                  <p className="text-xs text-muted mt-0.5">{cp.expansion.investmentLabel}</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">2026</p>
                  <p className="text-xs text-muted mt-0.5">{cp.expansion.yearLabel}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="bg-canvas border border-border rounded-2xl p-8"
            >
              <h3 className="font-bold text-ink text-lg mb-6 flex items-center gap-2">
                <TrendingUp size={20} className="text-teal" />
                {cp.expansion.highlightsTitle}
              </h3>
              {cp.expansion.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 mb-3 last:mb-0">
                  <Activity size={15} className="text-teal shrink-0 mt-0.5" />
                  <span className="text-sm text-ink">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={cp.advantages.label}
            title={cp.advantages.title}
            description={cp.advantages.description}
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {cp.advantages.items.map(({ title, description }, i) => {
              const Icon = advantageIcons[i];
              return (
                <motion.div
                  key={title}
                  variants={itemVariants}
                  className="bg-white border border-border rounded-xl p-7 hover:border-teal/30 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-surface-blue flex items-center justify-center shrink-0 group-hover:bg-teal/10 transition-colors">
                      <Icon size={22} className="text-primary group-hover:text-teal transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-ink text-base mb-2">{title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-semibold text-sm transition-colors cursor-pointer"
            >
              {cp.advantages.cta}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
