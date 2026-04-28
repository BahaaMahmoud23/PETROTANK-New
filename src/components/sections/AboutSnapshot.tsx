"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSnapshot() {
  const { t } = useLanguage();
  const { label, title, p1, p2, cta } = t.about;

  return (
    <section
      className="py-20 bg-white"
      aria-labelledby="about-snapshot-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          3-column reference layout (matches screenshot):
          [label + bold title]  |  [paragraphs + link]  |  [facility image]
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.1fr] gap-8 lg:gap-12 items-start">

          {/* ── Col 1: label + big title ─────────── */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-teal block mb-4">
              {label}
            </span>
            <h2
              id="about-snapshot-heading"
              className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-ink leading-tight"
            >
              {title}
            </h2>
          </motion.div>

          {/* ── Col 2: paragraphs + link ──────────── */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            <p className="text-[15px] text-muted leading-[1.75]">{p1}</p>
            <p className="text-[15px] text-muted leading-[1.75]">{p2}</p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary hover:text-teal font-semibold text-[14px] transition-colors cursor-pointer group mt-1"
            >
              {cta}
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </Link>
          </motion.div>

          {/* ── Col 3: facility image ─────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-primary/10"
          >
            <Image
              src="/images/industry/CurrentFacilityAreial.webp"
              alt="PETROTANK aerial facility view at King Fahd Industrial Port"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 38vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
