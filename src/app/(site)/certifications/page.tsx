"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Building,
  HardHat,
  FileText,
  ClipboardCheck,
  Users,
  RefreshCw,
  Shield,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, stagger } from "@/lib/animations";
import { certifications, certCategories, type CertCategory } from "@/content/certifications";

const TAB_ICONS = [Globe, Building, HardHat, FileText] as const;
const COMPLIANCE_ICONS = [ClipboardCheck, Users, RefreshCw, Shield] as const;

const STATUS_STYLES: Record<string, string> = {
  Active:    "text-emerald-700 bg-emerald-50 border-emerald-200",
  Certified: "text-primary bg-surface-blue border-primary/20",
  Approved:  "text-teal bg-teal/10 border-teal/20",
  Compliant: "text-secondary bg-secondary/10 border-secondary/20",
  Licensed:  "text-amber-700 bg-amber-50 border-amber-200",
};

// ── Logo card ──────────────────────────────────────────
interface CertCardProps {
  cert: (typeof certifications)[0];
}

function LogoCard({ cert }: CertCardProps) {
  const statusStyle = cert.status ? (STATUS_STYLES[cert.status] ?? STATUS_STYLES.Approved) : null;

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5, boxShadow: "0 16px 48px -8px rgba(53,84,134,0.15)" }}
      transition={{ duration: 0.25 }}
      className="bg-white border border-border rounded-2xl overflow-hidden flex flex-col h-full shadow-sm hover:border-border-strong transition-colors duration-200"
    >
      {/* Logo area */}
      <div className="h-40 bg-canvas flex items-center justify-center p-8 border-b border-border shrink-0">
        <img
          src={cert.image}
          alt={cert.title}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement;
            el.style.display = "none";
          }}
        />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-ink text-base mb-1 leading-snug">{cert.title}</h3>
        <p className="text-xs text-primary font-medium mb-3 leading-snug">{cert.subtitle}</p>
        <p className="text-sm text-muted leading-relaxed flex-1">{cert.description}</p>

        {statusStyle && (
          <div className="pt-4 mt-4 border-t border-border">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-semibold border px-2.5 py-1 rounded-full ${statusStyle}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {cert.status}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ── License / document card (wider preview) ────────────
function LicenseCard({ cert }: CertCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5, boxShadow: "0 16px 48px -8px rgba(53,84,134,0.15)" }}
      transition={{ duration: 0.25 }}
      className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:border-border-strong transition-colors duration-200"
    >
      {/* Document preview */}
      <div className="w-full bg-canvas border-b border-border flex items-center justify-center p-6 min-h-[280px]">
        <img
          src={cert.image}
          alt={cert.title}
          className="max-w-full max-h-full object-contain"
          loading="lazy"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement;
            el.style.display = "none";
          }}
        />
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-bold text-ink text-base mb-1">{cert.title}</h3>
        <p className="text-xs text-primary font-medium mb-3">{cert.subtitle}</p>
        <p className="text-sm text-muted leading-relaxed">{cert.description}</p>
      </div>
    </motion.div>
  );
}

// ── Page ────────────────────────────────────────────────
export default function CertificationsPage() {
  const { t } = useLanguage();
  const cp = t.certificationsPage;
  const [activeTab, setActiveTab] = useState<CertCategory>("international");

  const visibleCerts = certifications.filter((c) => c.category === activeTab);
  const isLicenseTab = activeTab === "licenses";

  const gridClass = (() => {
    if (isLicenseTab) return "grid-cols-1 md:grid-cols-2";
    if (activeTab === "saudi") return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    if (activeTab === "safety") return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  })();

  return (
    <div>
      <PageHero
        label={cp.hero.label}
        title={cp.hero.title}
        description={cp.hero.description}
        imageUrl="/images/industry/engineer-site.jpg"
      />

      {/* ── Category tab navigation ──────────────────── */}
      <section className="py-4 bg-white sticky top-[72px] z-30 border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex gap-2 overflow-x-auto scrollbar-hide pb-0.5"
            role="tablist"
            aria-label="Certification categories"
          >
            {certCategories.map(({ id, label, shortLabel }, i) => {
              const Icon = TAB_ICONS[i];
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(id)}
                  className={`inline-flex shrink-0 items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-canvas border border-border text-muted hover:border-teal/40 hover:text-primary"
                  }`}
                >
                  <Icon size={16} aria-hidden="true" />
                  <span className="hidden md:inline">{label}</span>
                  <span className="md:hidden">{shortLabel}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* ── Certificates grid ────────────────────────── */}
      <section className="py-20 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className={`grid gap-6 ${gridClass}`}
              >
                {visibleCerts.map((cert) =>
                  isLicenseTab ? (
                    <LicenseCard key={cert.id} cert={cert} />
                  ) : (
                    <LogoCard key={cert.id} cert={cert} />
                  )
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Compliance Commitment ────────────────────── */}
      <section
        className="relative py-24 bg-primary overflow-hidden"
        aria-labelledby="compliance-heading"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary-dark/60 via-primary to-secondary/25 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -top-32 end-0 w-[500px] h-[500px] rounded-full bg-white/4 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
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
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {cp.compliance.items.map(({ title, description }, i) => {
              const Icon = COMPLIANCE_ICONS[i];
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
