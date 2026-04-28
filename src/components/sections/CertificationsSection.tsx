"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, CheckCircle2, Globe, Landmark, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, stagger } from "@/lib/animations";

const groupAccents = ["#355486", "#5EABB3", "#3D6C98"];
const groupIcons = [Globe, Landmark, ShieldCheck];

export default function CertificationsSection() {
  const { t, isRTL } = useLanguage();
  const c = t.certificationsHome;

  return (
    <section className="relative py-24 bg-canvas overflow-hidden" aria-labelledby="certifications-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[11px] font-semibold uppercase tracking-[0.2em] block mb-3 text-teal"
            >
              {c.eyebrow}
            </motion.span>
            <motion.h2
              id="certifications-heading"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl font-bold text-ink"
            >
              {c.title}
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-teal transition-colors group cursor-pointer"
            >
              {c.ctaLink}
              <ArrowRight size={15} className={`group-hover:translate-x-0.5 transition-transform ${isRTL ? "scale-x-[-1]" : ""}`} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {c.groups.map(({ category, items }, gi) => {
            const accent = groupAccents[gi];
            const GroupIcon = groupIcons[gi];
            return (
              <motion.div
                key={category}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="relative bg-white border border-border rounded-2xl overflow-hidden shadow-sm group cursor-default hover:shadow-lg hover:border-border-strong transition-shadow duration-300"
              >
                <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${accent}DD, ${accent}55)` }} />
                <div className="p-7 pt-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${accent}18` }}
                    >
                      <GroupIcon size={18} style={{ color: accent }} />
                    </div>
                    <h3 className="font-semibold text-ink text-sm leading-snug">{category}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span
                          className="w-[18px] h-[18px] rounded flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${accent}15` }}
                        >
                          <Check size={10} style={{ color: accent }} />
                        </span>
                        <span className="text-sm font-medium text-ink">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-4 p-6 bg-surface-blue border border-border rounded-xl"
        >
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <CheckCircle2 size={17} className="text-primary" />
          </div>
          <p className="text-sm text-muted leading-relaxed">{c.trust}</p>
        </motion.div>
      </div>
    </section>
  );
}
