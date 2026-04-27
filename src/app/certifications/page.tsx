"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Building, HardHat, ClipboardCheck, Shield, ShieldCheck, Users, RefreshCw } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, stagger } from "@/lib/animations";

const tabIcons = [Globe, Building, HardHat] as const;
const complianceIcons = [ClipboardCheck, Users, RefreshCw, Shield];

// Map tab index → accent color tokens
const tabColors = [
  { bg: "bg-surface-blue", text: "text-primary", badge: "text-primary bg-surface-blue border-primary/20" },
  { bg: "bg-teal/10",      text: "text-teal",    badge: "text-teal bg-teal/10 border-teal/20" },
  { bg: "bg-secondary/10", text: "text-secondary",badge: "text-secondary bg-secondary/10 border-secondary/20" },
];

// ── Reusable cert card ──────────────────────────────────
interface CertCardProps {
  abbr: string;
  title: string;
  issuer?: string;
  description: string;
  footer?: { label: string; value: string };
  status?: string;
  colorIdx: number;
}

function CertCard({ abbr, title, issuer, description, footer, status, colorIdx }: CertCardProps) {
  const c = tabColors[colorIdx];
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4, boxShadow: "0 12px 40px -8px rgba(53,84,134,0.14)", transition: { duration: 0.25 } }}
      className="bg-white border border-border rounded-2xl overflow-hidden flex flex-col h-full transition-colors duration-200 hover:border-border-strong"
    >
      {/* Image placeholder / accent top */}
      <div className={`${c.bg} flex items-center justify-center h-[72px] px-6 shrink-0`}>
        <span className={`text-lg font-bold ${c.text} text-center leading-tight`}>{abbr}</span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-ink text-base mb-1 leading-snug">{title}</h3>
        {issuer && <p className={`text-xs font-medium ${c.text} mb-3`}>{issuer}</p>}
        <p className="text-sm text-muted leading-relaxed flex-1">{description}</p>

        {(footer || status) && (
          <div className="pt-4 mt-4 border-t border-border flex items-center justify-between gap-2 flex-wrap">
            {footer && (
              <div>
                <span className="text-xs text-muted">{footer.label}: </span>
                <span className="text-xs font-semibold text-ink">{footer.value}</span>
              </div>
            )}
            {status && (
              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold border px-2.5 py-1 rounded-full shrink-0 ${c.badge}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {status}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ── Page ────────────────────────────────────────────────
export default function CertificationsPage() {
  const { t, isRTL } = useLanguage();
  const cp = t.certificationsPage;
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: cp.international.label, icon: Globe, id: "international" },
    { label: cp.saudi.label,         icon: Building, id: "saudi" },
    { label: cp.safety.label,        icon: HardHat, id: "safety" },
  ];

  return (
    <div>
      <PageHero
        label={cp.hero.label}
        title={cp.hero.title}
        description={cp.hero.description}
        imageUrl="/images/industry/engineer-site.jpg"
      />

      {/* ── Sticky tab navigation ─────────────────────── */}
      <section className="py-4 bg-white sticky top-[72px] z-30 border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex gap-2 overflow-x-auto scrollbar-hide pb-0.5"
            role="tablist"
            aria-label={isRTL ? "تنقل الشهادات" : "Certification categories"}
          >
            {tabs.map(({ label, icon: Icon, id }, i) => (
              <button
                key={id}
                role="tab"
                aria-selected={activeTab === i}
                onClick={() => setActiveTab(i)}
                className={`inline-flex shrink-0 items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeTab === i
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-canvas border border-border text-muted hover:border-teal/40 hover:text-primary"
                }`}
              >
                <Icon size={16} aria-hidden="true" />
                {label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* ── Tab content ───────────────────────────────── */}
      <section className="py-20 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* ── Tab 0: International Standards ──── */}
              {activeTab === 0 && (
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {cp.international.items.map(({ name, body, description, scope, status }) => (
                    <CertCard
                      key={name}
                      abbr={name.split(" ")[0]}
                      title={name}
                      issuer={body}
                      description={description}
                      footer={scope ? { label: isRTL ? "النطاق" : "Scope", value: scope } : undefined}
                      status={status}
                      colorIdx={0}
                    />
                  ))}
                </motion.div>
              )}

              {/* ── Tab 1: Saudi Approvals ─────────── */}
              {activeTab === 1 && (
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {cp.saudi.items.map(({ name, abbr, description }) => (
                    <CertCard
                      key={abbr}
                      abbr={abbr.split(" ")[0]}
                      title={abbr}
                      issuer={name}
                      description={description}
                      colorIdx={1}
                    />
                  ))}
                </motion.div>
              )}

              {/* ── Tab 2: Safety Certifications ───── */}
              {activeTab === 2 && (
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {cp.safety.items.map(({ name, body, description }) => (
                    <CertCard
                      key={name}
                      abbr={name.split(" ")[0]}
                      title={name}
                      issuer={body}
                      description={description}
                      colorIdx={2}
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Compliance Commitment ─────────────────────── */}
      <section className="relative py-24 bg-primary overflow-hidden" aria-labelledby="compliance-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/60 via-primary to-secondary/25 pointer-events-none" aria-hidden="true" />
        <div className="absolute -top-32 end-0 w-[500px] h-[500px] rounded-full bg-white/4 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={cp.compliance.label}
            title={cp.compliance.title}
            description={cp.compliance.description}
            light
          />
          <motion.div
            variants={stagger}
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
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="flex items-start gap-5 bg-white/10 border border-white/15 rounded-xl p-6 hover:bg-white/[0.14] hover:border-white/25 transition-all duration-300 group"
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
