"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Building, HardHat, CheckCircle2, Shield, ShieldCheck, ClipboardCheck, RefreshCw, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const itemUp    = { hidden: { opacity: 0, y: 22 },  visible: { opacity: 1, y: 0,  transition: { duration: 0.52, ease } } };
const itemLeft  = { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.52, ease } } };
const itemRight = { hidden: { opacity: 0, x: 24 },  visible: { opacity: 1, x: 0, transition: { duration: 0.52, ease } } };

const safetyIcons = [Shield, ShieldCheck, CheckCircle2, Users];
const complianceIcons = [ClipboardCheck, Users, RefreshCw, Shield];

function StatusBadge({ status }: { status: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal bg-teal/10 border border-teal/20 px-2.5 py-1 rounded-full status-active">
      <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" />
      {status}
    </span>
  );
}

function SectionTitle({ icon: Icon, label, title, id, iconColor, iconBg }: {
  icon: React.ElementType; label: string; title: string; id: string; iconColor: string; iconBg: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease }}
      className="flex items-center gap-4 mb-12"
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
        <Icon size={22} className={iconColor} />
      </div>
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.15em] block mb-1 label-shimmer">{label}</span>
        <h2 id={id} className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-ink via-primary to-secondary bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
    </motion.div>
  );
}

export default function CertificationsPage() {
  const { t, isRTL } = useLanguage();
  const cp = t.certificationsPage;

  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: pageRef, offset: ["start start", "end end"] });
  const introY = useTransform(scrollYProgress, [0, 0.15], ["0%", "8%"]);

  return (
    <div ref={pageRef}>
      <PageHero
        label={cp.hero.label}
        title={cp.hero.title}
        description={cp.hero.description}
        imageUrl="/images/industry/engineer-site.jpg"
      />

      {/* Intro */}
      <section className="relative py-16 bg-white border-b border-border overflow-hidden">
        <motion.div
          style={{ y: introY }}
          className="absolute inset-0 bg-gradient-to-r from-surface-blue/60 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div className="absolute -end-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-teal/4 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-muted text-lg leading-relaxed max-w-3xl"
          >
            {cp.intro}
          </motion.p>
        </div>
      </section>

      {/* International Standards */}
      <section className="relative py-24 bg-canvas overflow-hidden" aria-labelledby="intl-standards-heading">
        <div className="absolute -top-24 -end-24 w-96 h-96 rounded-full bg-primary/4 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionTitle
            icon={Globe}
            label={cp.international.label}
            title={cp.international.title}
            id="intl-standards-heading"
            iconColor="text-primary"
            iconBg="bg-surface-blue"
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {cp.international.items.map(({ name, body, description, scope, status }, i) => (
              <motion.div
                key={name}
                variants={i % 2 === 0 ? itemLeft : itemRight}
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                className="relative bg-white border border-border rounded-2xl overflow-hidden group"
              >
                <div className="h-[3px] bg-gradient-to-r from-primary/70 via-secondary/60 to-teal/50" />
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: "0 0 0 1.5px rgba(53,84,134,0.15), 0 22px 44px -12px rgba(53,84,134,0.12)" }} aria-hidden="true" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/20 via-transparent to-transparent" aria-hidden="true" />
                <div className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-surface-blue flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <span className="text-xs font-bold text-primary text-center leading-tight px-1">{name.split(" ")[0]}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-1">{name}</h3>
                  <p className="text-xs text-teal font-medium mb-3">{body}</p>
                  <p className="text-sm text-muted leading-relaxed mb-4">{description}</p>
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted">{isRTL ? "النطاق:" : "Scope:"}</span>
                      <span className="text-xs font-semibold text-ink">{scope}</span>
                    </div>
                    <StatusBadge status={status} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Saudi Approvals */}
      <section className="relative py-24 bg-white overflow-hidden" aria-labelledby="saudi-approvals-heading">
        <div className="absolute -bottom-20 -start-20 w-80 h-80 rounded-full bg-teal/4 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionTitle
            icon={Building}
            label={cp.saudi.label}
            title={cp.saudi.title}
            id="saudi-approvals-heading"
            iconColor="text-teal"
            iconBg="bg-teal/10"
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {cp.saudi.items.map(({ name, abbr, description }) => (
              <motion.div
                key={abbr}
                variants={itemUp}
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                className="relative bg-canvas border border-border rounded-xl overflow-hidden group"
              >
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: "0 0 0 1.5px rgba(94,171,179,0.2), 0 16px 32px -8px rgba(94,171,179,0.12)" }} aria-hidden="true" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-teal/6 via-transparent to-transparent" aria-hidden="true" />
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/8 flex items-center justify-center mb-4">
                    <span className="text-xs font-bold text-primary">{abbr.split(" ")[0]}</span>
                  </div>
                  <h3 className="font-bold text-ink text-sm mb-1">{abbr}</h3>
                  <p className="text-xs text-teal font-medium mb-3">{name}</p>
                  <p className="text-sm text-muted leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Occupational Safety */}
      <section className="relative py-24 bg-canvas overflow-hidden" aria-labelledby="safety-certs-heading">
        <div className="absolute top-1/2 -end-16 w-72 h-72 rounded-full bg-secondary/4 blur-3xl pointer-events-none -translate-y-1/2" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionTitle
            icon={HardHat}
            label={cp.safety.label}
            title={cp.safety.title}
            id="safety-certs-heading"
            iconColor="text-secondary"
            iconBg="bg-secondary/10"
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {cp.safety.items.map(({ name, body, description }, i) => {
              const Icon = safetyIcons[i];
              return (
                <motion.div
                  key={name}
                  variants={i % 2 === 0 ? itemLeft : itemRight}
                  whileHover={{ y: -4, transition: { duration: 0.22 } }}
                  className="relative bg-white border border-border rounded-xl overflow-hidden group"
                >
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: "0 0 0 1.5px rgba(61,108,152,0.15), 0 16px 32px -8px rgba(61,108,152,0.1)" }} aria-hidden="true" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none bg-gradient-to-br from-secondary/5 via-transparent to-transparent" aria-hidden="true" />
                  <div className="flex items-start gap-5 p-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <Icon size={22} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-ink text-base">{name}</h3>
                      <p className="text-xs text-teal font-medium mb-2">{body}</p>
                      <p className="text-sm text-muted leading-relaxed">{description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Compliance Commitment */}
      <section className="relative py-24 bg-primary overflow-hidden" aria-labelledby="compliance-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/60 via-primary to-secondary/25 pointer-events-none" aria-hidden="true" />
        <div className="absolute -top-32 end-0 w-[500px] h-[500px] rounded-full bg-white/4 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 -start-16 w-72 h-72 rounded-full bg-teal/10 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={cp.compliance.label}
            title={cp.compliance.title}
            description={cp.compliance.description}
            light
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {cp.compliance.items.map(({ title, description }, i) => {
              const Icon = complianceIcons[i];
              return (
                <motion.div
                  key={title}
                  variants={itemUp}
                  whileHover={{ y: -4, transition: { duration: 0.22 } }}
                  className="flex items-start gap-5 bg-white/10 border border-white/15 rounded-xl p-6 hover:bg-white/[0.14] hover:border-white/25 transition-all duration-300 group backdrop-blur-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-teal/20 transition-colors">
                    <Icon size={20} className="text-teal-light" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base mb-2">{title}</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
