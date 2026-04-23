"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const certGroups = [
  {
    category: "International Standards",
    accent: "#355486",
    items: ["ISO 9001:2015", "ISO 45001", "OCIMF MTMSA", "API Standards"],
  },
  {
    category: "Saudi Regulatory Approvals",
    accent: "#5EABB3",
    items: ["Ministry of Energy", "NCEC", "MAWANI", "Civil Defense", "ZATCA", "MOHRE"],
  },
  {
    category: "Occupational Safety",
    accent: "#3D6C98",
    items: ["NEBOSH", "OSHA", "IOSH", "ILO Standards"],
  },
];

export default function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const blob1Y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-canvas overflow-hidden"
      aria-labelledby="certifications-heading"
    >
      {/* Parallax background blobs */}
      <motion.div
        style={{ y: blob1Y }}
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-teal/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: blob2Y }}
        className="absolute -bottom-24 -left-24 w-[380px] h-[380px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-semibold uppercase tracking-[0.2em] block mb-3 label-shimmer"
            >
              Compliance &amp; Standards
            </motion.span>
            <motion.h2
              id="certifications-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold"
            >
              <span className="text-ink">Certified </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-teal bg-clip-text text-transparent">
                &amp; Approved
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28 }}
          >
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-teal transition-colors group"
            >
              Full Certifications List
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* 3 certification columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {certGroups.map(({ category, accent, items }, gi) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: gi * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className="relative bg-white border border-border rounded-2xl overflow-hidden group cursor-default"
            >
              {/* Hover shadow ring – rendered via CSS so it doesn't add DOM children */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `0 0 0 1.5px ${accent}2A, 0 22px 44px -12px ${accent}1A` }}
                aria-hidden="true"
              />

              {/* Hover shine */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/30 via-transparent to-transparent"
                aria-hidden="true"
              />

              {/* Accent top bar */}
              <div
                className="h-[3px]"
                style={{ background: `linear-gradient(90deg, ${accent}DD, ${accent}55)` }}
              />

              {/* ISO Badge — top-right floating stamp */}
              <div className="absolute top-4 right-4 z-10 iso-float" aria-label="ISO Certified badge">
                <div className="w-11 h-11 rounded-full overflow-hidden shadow-lg ring-2 ring-yellow-400/45">
                  <Image
                    src="/images/iso.png"
                    alt="ISO 9001 Certified"
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="p-7 pt-5">
                <h3 className="font-bold text-ink text-sm mb-5 pr-14">{category}</h3>

                <ul className="space-y-2.5">
                  {items.map((item, ii) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.12 + ii * 0.07 + 0.18 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 size={14} className="shrink-0" style={{ color: accent }} />
                      <span className="text-sm font-medium text-ink">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.36 }}
          className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-4 p-6 bg-surface-blue border border-border rounded-xl"
        >
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 status-active">
            <CheckCircle2 size={17} className="text-primary" />
          </div>
          <p className="text-sm text-muted leading-relaxed">
            All certifications are maintained through regular third-party audits, continuous training programs,
            and a company-wide commitment to operational excellence and safety standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
