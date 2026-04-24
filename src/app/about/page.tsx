"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Building2,
  Award,
  Anchor,
  Droplets,
  Activity,
  Users,
  Star,
  Scale,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const coreValueIcons = [Users, Star, Scale, Lightbulb, ShieldCheck];
const facilityIcons = [Droplets, Building2, Anchor, Activity, Award, Building2];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function AboutPage() {
  const { t, isRTL } = useLanguage();
  const a = t.aboutPage;

  return (
    <>
      <PageHero
        label={a.hero.label}
        title={a.hero.title}
        description={a.hero.description}
        imageUrl="/images/industry/Expansion_cce40571.webp"
      />

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal block mb-3">
                {a.story.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6 leading-tight">
                {a.story.title}
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed mb-5">{a.story.p1}</p>
              <p className="text-muted text-base leading-relaxed mb-5">{a.story.p2}</p>
              <p className="text-muted text-base leading-relaxed">{a.story.p3}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-primary/10">
                <img
                  src="/images/industry/CurrentFacilityAreial.webp"
                  alt="PETROTANK facility operations"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -start-5 bg-primary text-white rounded-xl p-5 shadow-lg max-w-[200px]">
                <p className="text-3xl font-bold">669+</p>
                <p className="text-xs text-white/70 mt-1">{a.story.statLabel}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={a.mission.sectionLabel}
            title={`${a.mission.missionLabel} & ${a.mission.visionLabel}`}
            description={isRTL ? "المبادئ التوجيهية وراء كل قرار في بتروتانك." : "The guiding principles behind every decision at PETROTANK."}
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="bg-white border border-border rounded-2xl p-8 hover:border-primary/20 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-blue flex items-center justify-center mb-5">
                <Activity size={22} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-4">{a.mission.missionLabel}</h3>
              <p className="text-muted leading-relaxed">{a.mission.missionText}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="bg-primary border border-primary rounded-2xl p-8 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5">
                <Star size={22} className="text-teal-light" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{a.mission.visionLabel}</h3>
              <p className="text-white/70 leading-relaxed">{a.mission.visionText}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label={a.values.label} title={a.values.title} />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5"
          >
            {a.values.names.map((name, i) => {
              const Icon = coreValueIcons[i];
              return (
                <motion.div
                  key={name}
                  variants={itemVariants}
                  className="group flex flex-col items-center text-center bg-canvas border border-border rounded-xl p-6 hover:border-teal/30 hover:shadow-md transition-all cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface-blue flex items-center justify-center mb-3">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <span className="font-bold text-ink text-sm">{name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={a.milestones.label}
            title={a.milestones.title}
            description={a.milestones.description}
          />

          <div className="mt-16 relative">
            <div className="absolute start-4 md:start-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-0.5" />

            <div className="space-y-10">
              {a.milestones.items.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? (isRTL ? 30 : -30) : (isRTL ? -30 : 30) }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55 }}
                  className={`relative flex flex-col md:flex-row gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  <div className="absolute start-4 md:start-1/2 w-3 h-3 rounded-full bg-teal border-2 border-white shadow-md md:-translate-x-1.5 translate-y-6" />

                  <div
                    className={`ms-12 md:ms-0 md:w-[calc(50%-28px)] bg-white border border-border rounded-xl p-6 hover:border-teal/30 hover:shadow-md transition-all ${index % 2 === 0 ? "md:me-14" : "md:ms-14"
                      }`}
                  >
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal bg-teal/10 px-3 py-1 rounded-full mb-3">
                      {milestone.year}
                    </span>
                    <h3 className="font-bold text-ink text-base mb-2">{milestone.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{milestone.description}</p>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-28px)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={a.facilities.label}
            title={a.facilities.title}
            description={a.facilities.description}
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {a.facilities.items.map(({ label, value, sub }, i) => {
              const Icon = facilityIcons[i];
              return (
                <motion.div
                  key={label}
                  variants={itemVariants}
                  className="group flex items-start gap-4 bg-canvas border border-border rounded-xl p-6 hover:border-teal/30 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-surface-blue flex items-center justify-center shrink-0 group-hover:bg-teal/10 transition-colors">
                    <Icon size={22} className="text-primary group-hover:text-teal transition-colors" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-ink">{value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal mt-0.5">{label}</p>
                    <p className="text-sm text-muted mt-1">{sub}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-light block mb-3">
                {a.commitment.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">{a.commitment.title}</h2>
              <p className="text-white/70 text-base leading-relaxed mb-5">{a.commitment.p1}</p>
              <p className="text-white/70 text-base leading-relaxed mb-8">{a.commitment.p2}</p>
              <Link
                href="/certifications"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-teal hover:text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all cursor-pointer"
              >
                {a.commitment.cta}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="space-y-4"
            >
              {a.commitment.items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-teal-light shrink-0 mt-0.5" />
                  <span className="text-white/75 text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
