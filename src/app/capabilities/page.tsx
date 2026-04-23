"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Anchor,
  Truck,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Trophy,
  CheckCircle2,
  Activity,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const infrastructureCapabilities = [
  { label: "Total Storage Capacity", value: "114,000 m³", note: "Bulk liquid storage" },
  { label: "Storage Tanks", value: "8 Tanks", note: "6 FCR + 2 FD configuration" },
  { label: "ATG Monitoring", value: "Automatic", note: "Tank Gauging system" },
  { label: "Heating Systems", value: "Installed", note: "For viscous product handling" },
  { label: "MOVs", value: "Full Coverage", note: "Motor Operated Valves" },
  { label: "Vapor Recovery", value: "VRU Equipped", note: "Environmental protection" },
];

const marineCapabilities = [
  { label: "Marine Berths", value: "Berths 6 & 8" },
  { label: "Max Vessel LOA", value: "300m" },
  { label: "Max Draft", value: "15.5m" },
  { label: "Pumping Capacity", value: "4,500 cbm/hr" },
  { label: "Pipeline Network", value: "10,000+ linear m" },
  { label: "Loading Arms", value: "High-Speed" },
];

const landSide = [
  "4-bay truck loading station with automated metering",
  "GPS-tracked fleet dispatch and coordination",
  "Multi-product handling capability",
  "24/7 continuous loading operations",
  "On-site warehousing and product management",
  "ZATCA-compliant documentation and invoicing",
];

const technologyStack = [
  { name: "SCADA", description: "Supervisory Control and Data Acquisition — full terminal integration" },
  { name: "ATG", description: "Automatic Tank Gauging — real-time level, temperature, and density" },
  { name: "VFD", description: "Variable Frequency Drives — energy-efficient pump speed control" },
  { name: "MOVs", description: "Motor Operated Valves — remote-controlled product routing" },
];

const sheqItems = [
  "OCIMF MTMSA certified marine terminal operations",
  "ISO 9001:2015 Quality Management System",
  "ISO 45001 Occupational Health & Safety",
  "Civil Defense and Emergency Response Protocols",
  "Regular internal and third-party safety audits",
  "NEBOSH / OSHA / IOSH trained workforce",
  "Environmental spill prevention and containment systems",
  "Continuous HSE performance monitoring and reporting",
];

const performanceMetrics = [
  { target: 669, suffix: "+", label: "Vessels Berthed" },
  { target: 13.8, decimals: 1, suffix: "M MT", label: "Total Throughput" },
  { target: 114000, suffix: " m³", label: "Storage Capacity" },
  { target: 4500, suffix: " cbm/hr", label: "Pumping Rate" },
];

const competitiveAdvantages = [
  {
    icon: Trophy,
    title: "First Bonded Storage in Yanbu",
    description:
      "PETROTANK is the first and only bonded storage license holder in Yanbu — giving clients customs-free product storage and seamless international trade access.",
  },
  {
    icon: Anchor,
    title: "Strategic Red Sea Location",
    description:
      "Located at King Fahd Industrial Port on the Red Sea, PETROTANK sits at the crossroads of global energy trade routes between Europe, Asia, and Africa.",
  },
  {
    icon: ShieldCheck,
    title: "International Compliance",
    description:
      "Full compliance with ISO 9001:2015, ISO 45001, and OCIMF MTMSA standards ensures clients receive internationally benchmarked service quality.",
  },
  {
    icon: Cpu,
    title: "Advanced Automation",
    description:
      "SCADA-integrated operations with ATG, VFD, and MOV systems provide real-time visibility, efficiency, and operational precision across all terminal functions.",
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        label="Our Capabilities"
        title="Operational Infrastructure & Technical Depth"
        description="From storage infrastructure to marine operations and cutting-edge automation — a comprehensive overview of PETROTANK's technical capabilities."
        imageUrl="/images/industry/SateliteView_460f9634.webp"
      />

      {/* Infrastructure Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Tank Farm"
            title="Infrastructure Capabilities"
            description="Eight purpose-built storage tanks with advanced monitoring and control systems."
            align="left"
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {infrastructureCapabilities.map(({ label, value, note }) => (
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

      {/* Marine Infrastructure */}
      <section className="py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="Marine Terminal"
                title="Marine Infrastructure"
                description="World-class marine terminal capabilities at King Fahd Industrial Port's Berths 6 & 8."
                align="left"
              />
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-10 grid grid-cols-2 gap-5"
              >
                {marineCapabilities.map(({ label, value }) => (
                  <motion.div
                    key={label}
                    variants={itemVariants}
                    className="bg-white border border-border rounded-xl p-5"
                  >
                    <p className="text-lg font-bold text-primary">{value}</p>
                    <p className="text-xs text-muted mt-1">{label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-primary/10"
            >
              <img
                src="/images/industry/MLA_fa5da4a5.webp"
                alt="Marine loading arm operations at King Fahd Industrial Port"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Land-Side Logistics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-primary/10"
            >
              <img
                src="/images/industry/TruckBay_1e9ca1b2.webp"
                alt="Truck bay loading operations"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <div>
              <SectionHeader
                label="Road Transport"
                title="Land-Side Logistics"
                description="Efficient 4-bay truck loading facility with GPS tracking and 24/7 operations."
                align="left"
              />
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 space-y-3"
              >
                {landSide.map((item) => (
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

      {/* Technology & Automation */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Digital Infrastructure"
            title="Technology & Automation"
            description="SCADA-integrated smart terminal management for precision, safety, and efficiency."
            light
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {technologyStack.map(({ name, description }) => (
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
                label="Safety, Health, Environment & Quality"
                title="SHEQ Commitment"
                description="Zero-compromise approach to safety and environmental protection across all operations."
                align="left"
              />
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 space-y-3"
              >
                {sheqItems.map((item) => (
                  <motion.li key={item} variants={itemVariants} className="flex items-start gap-3">
                    <ShieldCheck size={16} className="text-teal shrink-0 mt-0.5" />
                    <span className="text-sm text-ink">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-primary/10"
            >
              <img
                src="/images/industry/inspection.jpg"
                alt="Safety inspection and quality management"
                className="w-full h-full object-cover"
                loading="lazy"
              />
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
              By the Numbers
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              Operational Performance
            </motion.h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {performanceMetrics.map(({ target, suffix, decimals, label }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="text-center bg-white/5 border border-white/10 rounded-xl p-7"
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <AnimatedCounter target={target} suffix={suffix} decimals={decimals} />
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
                Future Growth
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-5">Phase 1 Expansion</h2>
              <p className="text-muted text-base leading-relaxed mb-5">
                PETROTANK has launched the SAR 350M+ Phase 1 expansion program to significantly increase
                storage capacity and enhance terminal infrastructure to meet growing regional and international
                energy demand.
              </p>
              <p className="text-muted text-base leading-relaxed mb-8">
                The expansion will add new storage tanks, upgrade marine infrastructure, and expand land-side
                logistics capabilities — positioning PETROTANK as the premier energy logistics hub on the
                Red Sea coast by 2026.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">SAR 350M+</p>
                  <p className="text-xs text-muted mt-0.5">Investment</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">2026</p>
                  <p className="text-xs text-muted mt-0.5">Target Completion</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="bg-canvas border border-border rounded-2xl p-8"
            >
              <h3 className="font-bold text-ink text-lg mb-6 flex items-center gap-2">
                <TrendingUp size={20} className="text-teal" />
                Expansion Highlights
              </h3>
              {[
                "Additional bulk liquid storage tanks",
                "Enhanced marine berth infrastructure",
                "Expanded pipeline network",
                "Additional truck loading bays",
                "Upgraded SCADA and automation systems",
                "Environmental management enhancements",
              ].map((item) => (
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
            label="Why PETROTANK"
            title="Competitive Advantages"
            description="What sets PETROTANK apart in the Saudi and regional energy logistics market."
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {competitiveAdvantages.map(({ icon: Icon, title, description }) => (
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
            ))}
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
              Partner with PETROTANK
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
