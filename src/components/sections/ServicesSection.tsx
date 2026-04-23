"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceImages = [
  "/images/industry/storage-tanks.jpg",
  "/images/industry/ShipatBerth_cb8f1ea3.webp",
  "/images/industry/HeatingStation_2289a74c.jpg",
  "/images/industry/TruckBay_1e9ca1b2.webp",
  "/images/industry/SCADARoom_e40117d5.webp",
];

const serviceMetrics = [
  "114,000 m³",
  "4,500 cbm/hr",
  null,
  "4 Bays · 24/7",
  "SCADA",
];

export default function ServicesSection() {
  const { t, isRTL } = useLanguage();
  const s = t.servicesHome;

  return (
    <section className="py-24 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ─────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div>
            <motion.span
              initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal block mb-3 label-shimmer"
            >
              {s.eyebrow}
            </motion.span>
            <motion.h2
              id="services-heading"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-3xl md:text-4xl font-bold text-ink"
            >
              {s.title}
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-teal transition-colors cursor-pointer group">
              {s.ctaLink}
              <ArrowRight size={15} className={`group-hover:translate-x-0.5 transition-transform ${isRTL ? "scale-x-[-1]" : ""}`} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        {/* ── Bento image grid ────────────────────────── */}
        <div className="grid grid-cols-3 gap-3">

          {/* ── FEATURED: Storage Solutions (2 cols × tall) ─ */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="col-span-2 row-span-1"
            style={{ height: 380 }}
          >
            <Link
              href="/services"
              className="group relative flex h-full rounded-2xl overflow-hidden cursor-pointer"
              aria-label={s.featured.title}
            >
              {/* Image */}
              <Image
                src={serviceImages[0]}
                alt={s.featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />

              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929]/95 via-[#0a1929]/50 to-[#0a1929]/10" />
              {/* Left side extra coverage for RTL or left-default */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1929]/70 via-transparent to-transparent" />

              {/* Metric badge — top right */}
              <div className="absolute top-5 end-5 flex items-center gap-2 bg-black/35 backdrop-blur-md border border-white/15 rounded-full px-3.5 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                <span className="text-xs font-bold text-white tracking-wide">{serviceMetrics[0]}</span>
              </div>

              {/* Content at bottom */}
              <div className="absolute bottom-0 inset-x-0 p-7 md:p-9">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-light block mb-2">
                  {s.featured.tagline}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  {s.featured.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed mb-4 max-w-lg line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {s.featured.description}
                </p>

                {/* Spec chips */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {s.featured.specs.map((spec) => (
                    <span key={spec} className="text-[11px] text-white/60 border border-white/15 rounded-full px-3 py-0.5">
                      {spec}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-light opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  {s.featured.cta}
                  <ArrowRight size={14} className={isRTL ? "scale-x-[-1]" : ""} aria-hidden="true" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* ── Marine Operations (1 col × full height) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{ height: 380 }}
          >
            <ServiceCard
              href="/services"
              image={serviceImages[1]}
              title={s.items[0].title}
              description={s.items[0].description}
              metric={serviceMetrics[1]}
              index={1}
            />
          </motion.div>

          {/* ── Bottom 3 cards ─────────────────────────── */}
          {[1, 2, 3].map((idx) => (
            <motion.div
              key={s.items[idx].title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              style={{ height: 260 }}
            >
              <ServiceCard
                href="/services"
                image={serviceImages[idx + 1]}
                title={s.items[idx].title}
                description={s.items[idx].description}
                metric={serviceMetrics[idx + 1]}
                index={idx + 1}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Reusable card ─────────────────────────────────────── */
function ServiceCard({
  href, image, title, description, metric, index,
}: {
  href: string; image: string; title: string; description: string;
  metric: string | null; index: number;
}) {
  const { isRTL } = useLanguage();
  const delays = [0, 80, 160, 240];

  return (
    <Link
      href={href}
      className="group relative flex h-full rounded-2xl overflow-hidden cursor-pointer"
      aria-label={title}
      style={{ animationDelay: `${delays[index] ?? 0}ms` }}
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929]/90 via-[#0a1929]/40 to-transparent" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-t from-[#0a1929]/95 via-[#0a1929]/55 to-[#355486]/15" />

      {/* Metric badge */}
      {metric && (
        <div className="absolute top-4 end-4 bg-black/35 backdrop-blur-md border border-white/15 rounded-full px-3 py-1">
          <span className="text-[11px] font-bold text-white">{metric}</span>
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 inset-x-0 p-5">
        <h3 className="font-bold text-white text-base leading-tight mb-2">{title}</h3>

        {/* Description slides up on hover */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 overflow-hidden">
          <div className="min-h-0">
            <p className="text-white/65 text-xs leading-relaxed pt-0.5 pb-3">{description}</p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-teal-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowRight size={11} className={isRTL ? "scale-x-[-1]" : ""} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
