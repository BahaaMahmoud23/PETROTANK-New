"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Globe,
  Building,
  HardHat,
  CheckCircle2,
  Shield,
  ShieldCheck,
  ClipboardCheck,
  RefreshCw,
  Users,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import { useRef } from "react";

/* ── Animation variants ───────────────────────────────── */
const ease = [0.25, 0.46, 0.45, 0.94] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease } },
};

const itemLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.52, ease } },
};

const itemRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.52, ease } },
};

/* ── Data ─────────────────────────────────────────────── */
const internationalCerts = [
  {
    name: "ISO 9001:2015",
    body: "International Organization for Standardization",
    description:
      "Quality Management System certification ensuring consistent service delivery, customer satisfaction, and continuous improvement across all operations.",
    scope: "Full Terminal Operations",
    status: "Active",
  },
  {
    name: "ISO 45001",
    body: "International Organization for Standardization",
    description:
      "Occupational Health & Safety Management System standard covering risk management, worker safety, and systematic health and safety performance improvement.",
    scope: "All PETROTANK Personnel",
    status: "Active",
  },
  {
    name: "OCIMF MTMSA",
    body: "Oil Companies International Marine Forum",
    description:
      "Marine Terminal Management and Self Assessment — the internationally recognized benchmark for marine terminal safety and operational standards.",
    scope: "Marine Terminal Operations",
    status: "Active",
  },
  {
    name: "API Standards",
    body: "American Petroleum Institute",
    description:
      "Compliance with API recommended practices for the design, construction, operation, and maintenance of petroleum storage and handling facilities.",
    scope: "Storage & Equipment",
    status: "Compliant",
  },
];

const saudiApprovals = [
  {
    name: "Ministry of Energy",
    abbr: "MOE",
    description: "National regulatory approval for petroleum and petrochemical storage and logistics operations.",
  },
  {
    name: "National Committee for Environmental Compliance",
    abbr: "NCEC",
    description: "Environmental compliance certification for hazardous material handling and spill prevention.",
  },
  {
    name: "Saudi Ports Authority",
    abbr: "MAWANI",
    description: "Port authority approval for operations at King Fahd Industrial Port, Yanbu.",
  },
  {
    name: "Saudi Civil Defense",
    abbr: "Civil Defense",
    description: "Fire safety, emergency response, and hazardous materials handling certification.",
  },
  {
    name: "Zakat, Tax & Customs Authority",
    abbr: "ZATCA",
    description: "Customs bonded storage license — the first in Yanbu — enabling duty-free product storage.",
  },
  {
    name: "Ministry of Human Resources",
    abbr: "MOHRE",
    description: "Labor compliance certification covering workforce rights, safety, and employment standards.",
  },
];

const safetyCerts = [
  {
    name: "NEBOSH",
    body: "National Examination Board in Occupational Safety and Health",
    description:
      "International General Certificate in Occupational Health and Safety — awarded to PETROTANK safety professionals for advanced health and safety competency.",
    icon: Shield,
  },
  {
    name: "OSHA",
    body: "Occupational Safety and Health Administration",
    description:
      "OSHA certification covering industrial safety standards, hazard identification, and workplace safety management aligned with US and international standards.",
    icon: ShieldCheck,
  },
  {
    name: "IOSH",
    body: "Institution of Occupational Safety and Health",
    description:
      "Working Safely certification for all personnel — providing a foundation of safety awareness and hazard management throughout the organization.",
    icon: CheckCircle2,
  },
  {
    name: "ILO Standards",
    body: "International Labour Organization",
    description:
      "Compliance with ILO conventions on workplace safety, worker rights, and occupational health — ensuring international labor standards are upheld.",
    icon: Users,
  },
];

const complianceCommitments = [
  {
    icon: ClipboardCheck,
    title: "Regular Audits",
    description:
      "Internal audits conducted quarterly and third-party audits annually across all operational departments and safety systems.",
  },
  {
    icon: Users,
    title: "Workforce Training",
    description:
      "Continuous safety and professional training for all personnel, including NEBOSH, OSHA, and IOSH certification programs.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description:
      "Formal corrective action processes and management review cycles ensure ongoing improvement in quality, safety, and environmental performance.",
  },
  {
    icon: Shield,
    title: "Documentation",
    description:
      "Comprehensive digital documentation systems capturing all operational activities, maintenance records, and compliance evidence.",
  },
];

/* ── Reusable sub-components ─────────────────────────── */

function IsoBadge({ size = "md" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? 40 : 48;
  const cls = size === "sm" ? "w-10 h-10" : "w-12 h-12";
  return (
    <div className={`iso-float absolute top-4 right-4 z-10 ${cls} rounded-full overflow-hidden shadow-lg ring-2 ring-yellow-400/45`}>
      <Image
        src="/images/iso.png"
        alt="ISO Certified"
        width={dim}
        height={dim}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal bg-teal/10 border border-teal/20 px-2.5 py-1 rounded-full status-active">
      <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" />
      {status}
    </span>
  );
}

function SectionTitle({
  icon: Icon,
  label,
  title,
  id,
  iconColor,
  iconBg,
}: {
  icon: React.ElementType;
  label: string;
  title: string;
  id: string;
  iconColor: string;
  iconBg: string;
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
        <span className="text-xs font-semibold uppercase tracking-[0.15em] block mb-1 label-shimmer">
          {label}
        </span>
        <h2
          id={id}
          className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-ink via-primary to-secondary bg-clip-text text-transparent"
        >
          {title}
        </h2>
      </div>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────────────── */
export default function CertificationsPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: pageRef, offset: ["start start", "end end"] });
  const introY = useTransform(scrollYProgress, [0, 0.15], ["0%", "8%"]);

  return (
    <div ref={pageRef}>
      <PageHero
        label="Standards & Compliance"
        title="Certifications & Approvals"
        description="PETROTANK maintains the highest international standards and full Saudi regulatory compliance — a commitment to excellence, safety, and trust."
        imageUrl="/images/industry/engineer-site.jpg"
      />

      {/* ── Intro ───────────────────────────────────────── */}
      <section className="relative py-16 bg-white border-b border-border overflow-hidden">
        <motion.div
          style={{ y: introY }}
          className="absolute inset-0 bg-gradient-to-r from-surface-blue/60 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-teal/4 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-muted text-lg leading-relaxed max-w-3xl"
          >
            From international ISO and OCIMF standards to full Saudi governmental approvals and occupational
            safety certifications, PETROTANK&apos;s compliance framework ensures every aspect of our operations
            meets or exceeds the most demanding international benchmarks.
          </motion.p>
        </div>
      </section>

      {/* ── International Standards ─────────────────────── */}
      <section className="relative py-24 bg-canvas overflow-hidden" aria-labelledby="intl-standards-heading">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/4 blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionTitle
            icon={Globe}
            label="Global Compliance"
            title="International Standards"
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
            {internationalCerts.map(({ name, body, description, scope, status }, i) => (
              <motion.div
                key={name}
                variants={i % 2 === 0 ? itemLeft : itemRight}
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                className="relative bg-white border border-border rounded-2xl overflow-hidden group"
              >
                {/* Top gradient bar */}
                <div className="h-[3px] bg-gradient-to-r from-primary/70 via-secondary/60 to-teal/50" />

                {/* Hover glow ring */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: "0 0 0 1.5px rgba(53,84,134,0.15), 0 22px 44px -12px rgba(53,84,134,0.12)" }}
                  aria-hidden="true"
                />
                {/* Hover shine */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/20 via-transparent to-transparent"
                  aria-hidden="true"
                />

                {/* ISO Badge */}
                <IsoBadge size="md" />

                <div className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-surface-blue flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <span className="text-xs font-bold text-primary text-center leading-tight px-1">
                        {name.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-1 pr-16">{name}</h3>
                  <p className="text-xs text-teal font-medium mb-3">{body}</p>
                  <p className="text-sm text-muted leading-relaxed mb-4">{description}</p>
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted">Scope:</span>
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

      {/* ── Saudi Approvals ─────────────────────────────── */}
      <section className="relative py-24 bg-white overflow-hidden" aria-labelledby="saudi-approvals-heading">
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal/4 blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionTitle
            icon={Building}
            label="Government Compliance"
            title="Saudi Governmental & Regulatory Approvals"
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
            {saudiApprovals.map(({ name, abbr, description }) => (
              <motion.div
                key={abbr}
                variants={itemUp}
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                className="relative bg-canvas border border-border rounded-xl overflow-hidden group"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: "0 0 0 1.5px rgba(94,171,179,0.2), 0 16px 32px -8px rgba(94,171,179,0.12)" }}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none bg-gradient-to-br from-teal/6 via-transparent to-transparent"
                  aria-hidden="true"
                />

                {/* ISO Badge (sm) */}
                <IsoBadge size="sm" />

                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/8 flex items-center justify-center mb-4">
                    <span className="text-xs font-bold text-primary">{abbr.split(" ")[0]}</span>
                  </div>
                  <h3 className="font-bold text-ink text-sm mb-1 pr-12">{abbr}</h3>
                  <p className="text-xs text-teal font-medium mb-3">{name}</p>
                  <p className="text-sm text-muted leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Occupational Safety ─────────────────────────── */}
      <section className="relative py-24 bg-canvas overflow-hidden" aria-labelledby="safety-certs-heading">
        <div className="absolute top-1/2 -right-16 w-72 h-72 rounded-full bg-secondary/4 blur-3xl pointer-events-none -translate-y-1/2" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionTitle
            icon={HardHat}
            label="Personnel Safety"
            title="Occupational Safety Certifications"
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
            {safetyCerts.map(({ name, body, description, icon: Icon }, i) => (
              <motion.div
                key={name}
                variants={i % 2 === 0 ? itemLeft : itemRight}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                className="relative bg-white border border-border rounded-xl overflow-hidden group"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: "0 0 0 1.5px rgba(61,108,152,0.15), 0 16px 32px -8px rgba(61,108,152,0.1)" }}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none bg-gradient-to-br from-secondary/5 via-transparent to-transparent"
                  aria-hidden="true"
                />

                {/* ISO Badge (sm) */}
                <IsoBadge size="sm" />

                <div className="flex items-start gap-5 p-6 pr-16">
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
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Compliance Commitment ───────────────────────── */}
      <section className="relative py-24 bg-primary overflow-hidden" aria-labelledby="compliance-heading">
        {/* Layered gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/60 via-primary to-secondary/25 pointer-events-none" aria-hidden="true" />
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-white/4 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 -left-16 w-72 h-72 rounded-full bg-teal/10 blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Approach"
            title="Compliance Commitment"
            description="How PETROTANK maintains and continuously improves its compliance posture."
            light
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {complianceCommitments.map(({ icon: Icon, title, description }) => (
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
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
