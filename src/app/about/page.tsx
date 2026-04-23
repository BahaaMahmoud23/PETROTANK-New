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

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description:
      "PETROTANK was established in Yanbu, Saudi Arabia, obtaining the first bonded storage license in the region and commencing operations at King Fahd Industrial Port.",
  },
  {
    year: "2021",
    title: "ISO Certifications Achieved",
    description:
      "Successfully obtained ISO 9001:2015 Quality Management and ISO 45001 Occupational Health & Safety certifications, setting a strong foundation for operational excellence.",
  },
  {
    year: "2022",
    title: "OCIMF MTMSA Certification",
    description:
      "Earned the internationally recognized OCIMF Marine Terminal Management and Self Assessment (MTMSA) certification, validating world-class marine operational standards.",
  },
  {
    year: "2023",
    title: "Operational Excellence",
    description:
      "Surpassed 669 vessel berthing operations with a cumulative throughput of 13.8M MT handled, cementing PETROTANK's position as a premier energy logistics operator.",
  },
  {
    year: "2024",
    title: "Phase 1 Expansion Launched",
    description:
      "Initiated the SAR 350M+ Phase 1 expansion program to increase storage capacity and enhance infrastructure, driven by growing regional and international demand.",
  },
  {
    year: "2025",
    title: "Vision 2030 Alignment",
    description:
      "Fully integrated into Saudi Arabia's Vision 2030 strategic framework, contributing to national energy security, industrial diversification, and private-sector-led economic transformation.",
  },
];

const coreValues = [
  { icon: Users, name: "Collaboration", color: "text-primary", bg: "bg-surface-blue" },
  { icon: Star, name: "Excellence", color: "text-teal", bg: "bg-teal/10" },
  { icon: Scale, name: "Integrity", color: "text-secondary", bg: "bg-secondary/10" },
  { icon: Lightbulb, name: "Innovation", color: "text-primary", bg: "bg-surface-blue" },
  { icon: ShieldCheck, name: "Safety", color: "text-teal", bg: "bg-teal/10" },
];

const facilities = [
  { icon: Droplets, label: "Storage Capacity", value: "114,000 m³", sub: "Total bulk liquid storage" },
  { icon: Building2, label: "Storage Tanks", value: "8 Tanks", sub: "6 FCR + 2 FD configuration" },
  { icon: Anchor, label: "Marine Berths", value: "Berths 6 & 8", sub: "King Fahd Industrial Port" },
  { icon: Activity, label: "Pumping Rate", value: "4,500 cbm/hr", sub: "Marine loading / unloading" },
  { icon: Award, label: "Pipeline Network", value: "10,000+ m", sub: "Linear metres of pipeline" },
  { icon: Building2, label: "Vessel Capacity", value: "300m LOA", sub: "15.5m draft capability" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Our Company"
        title="About PETROTANK"
        description="Founded in 2020, PETROTANK is Saudi Arabia's first bonded storage license holder in Yanbu — redefining energy logistics at the heart of the Red Sea."
        imageUrl="/images/industry/CurrentFacilityAreial_6ef4288b.webp"
      />

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal block mb-3">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6 leading-tight">
                Born from a Vision, Built for the Future
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed mb-5">
                PETROTANK was founded in 2020 with a singular mission: to become the premier petroleum and
                petrochemical storage and logistics operator in Yanbu — one of Saudi Arabia&apos;s most strategically
                important industrial cities on the Red Sea coast.
              </p>
              <p className="text-muted text-base leading-relaxed mb-5">
                Operating at King Fahd Industrial Port (KFIP), we became the first company to secure a bonded
                storage license in Yanbu, giving our clients unparalleled access to customs-free petroleum product
                storage and distribution — a critical advantage for international trade flows.
              </p>
              <p className="text-muted text-base leading-relaxed">
                Today, with 8 storage tanks totaling 114,000 m³ of capacity, dedicated marine berths, and
                cutting-edge automation, PETROTANK has handled 13.8M MT of petroleum products and served 669+
                vessel berthing operations — all while maintaining the highest international safety and quality
                standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-primary/10">
                <img
                  src="/images/industry/CurrentFacility_ceda4b07.webp"
                  alt="PETROTANK facility operations"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-primary text-white rounded-xl p-5 shadow-lg max-w-[200px]">
                <p className="text-3xl font-bold">669+</p>
                <p className="text-xs text-white/70 mt-1">Vessels Berthed Since 2020</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Purpose"
            title="Mission & Vision"
            description="The guiding principles behind every decision at PETROTANK."
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
              <h3 className="text-xl font-bold text-ink mb-4">Our Mission</h3>
              <p className="text-muted leading-relaxed">
                To provide world-class petroleum and petrochemical storage, marine operations, and logistics
                services that empower our clients to trade efficiently and safely — while supporting Saudi
                Arabia&apos;s energy ambitions and contributing to regional economic development.
              </p>
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
              <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/70 leading-relaxed">
                To be the leading energy logistics hub in the Arabian Peninsula — a trusted partner for
                global energy companies seeking access to the Red Sea corridor, connecting markets from Europe
                to Asia and Africa through innovative, safe, and sustainable operations aligned with Vision 2030.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Our Principles" title="Core Values" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5"
          >
            {coreValues.map(({ icon: Icon, name, color, bg }) => (
              <motion.div
                key={name}
                variants={itemVariants}
                className="group flex flex-col items-center text-center bg-canvas border border-border rounded-xl p-6 hover:border-teal/30 hover:shadow-md transition-all cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-3`}>
                  <Icon size={22} className={color} />
                </div>
                <span className="font-bold text-ink text-sm">{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Journey"
            title="Key Milestones"
            description="From founding to operational excellence — a timeline of PETROTANK's growth."
          />

          <div className="mt-16 relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-0.5" />

            <div className="space-y-10">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55 }}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-teal border-2 border-white shadow-md md:-translate-x-1.5 translate-y-6" />

                  {/* Content card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-28px)] bg-white border border-border rounded-xl p-6 hover:border-teal/30 hover:shadow-md transition-all ${
                      index % 2 === 0 ? "md:mr-14" : "md:ml-14"
                    }`}
                  >
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal bg-teal/10 px-3 py-1 rounded-full mb-3">
                      {milestone.year}
                    </span>
                    <h3 className="font-bold text-ink text-base mb-2">{milestone.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{milestone.description}</p>
                  </div>

                  {/* Spacer */}
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
            label="Infrastructure"
            title="Facilities Overview"
            description="State-of-the-art infrastructure at King Fahd Industrial Port, Yanbu."
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {facilities.map(({ icon: Icon, label, value, sub }) => (
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
            ))}
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
                Our Pledge
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Our Commitment</h2>
              <p className="text-white/70 text-base leading-relaxed mb-5">
                At PETROTANK, our commitment extends beyond commercial success. We are dedicated to safe and
                sustainable operations, continuous professional development, and the highest standards of
                environmental stewardship.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                We invest in our people through NEBOSH, OSHA, and IOSH certified training programs, and
                maintain a culture of continuous improvement driven by regular audits, transparent documentation,
                and proactive risk management.
              </p>
              <Link
                href="/certifications"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-teal hover:text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all cursor-pointer"
              >
                Our Certifications
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="space-y-4"
            >
              {[
                "Regular third-party audits and compliance reviews",
                "Continuous workforce safety training programs",
                "Comprehensive operational documentation systems",
                "Environmental protection and spill prevention protocols",
                "Proactive risk management and emergency response planning",
              ].map((item) => (
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
