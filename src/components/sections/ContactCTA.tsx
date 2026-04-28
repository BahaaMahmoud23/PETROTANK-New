"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const infoIcons = [MapPin, Mail, Clock];

export default function ContactCTA() {
  const { t, isRTL } = useLanguage();
  const c = t.contactCtaSection;

  return (
    <section className="py-24 bg-white" aria-labelledby="contact-cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-10 md:p-14">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-light block mb-4"
              >
                {c.eyebrow}
              </motion.span>
              <motion.h2
                id="contact-cta-heading"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                {c.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-white/70 text-base leading-relaxed mb-8 max-w-md"
              >
                {c.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-teal hover:text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer group"
                >
                  {c.cta1}
                  <ArrowRight size={16} className={`group-hover:translate-x-0.5 transition-transform ${isRTL ? "scale-x-[-1]" : ""}`} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer"
                >
                  {c.cta2}
                </Link>
              </motion.div>
            </div>

            <div className="bg-white/10 border-s border-white/10 p-10 md:p-14 flex flex-col justify-center">
              <ul className="space-y-6">
                {c.info.map(({ label, value }, i) => {
                  const Icon = infoIcons[i];
                  const isEmail = value.includes("@");
                  return (
                    <li key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-teal-light" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-0.5">{label}</p>
                        {isEmail ? (
                          <a href={`mailto:${value}`} className="text-white text-sm hover:text-teal-light transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="text-white text-sm">{value}</p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
