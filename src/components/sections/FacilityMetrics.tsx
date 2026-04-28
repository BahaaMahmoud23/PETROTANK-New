"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FacilityMetrics() {
  const { t } = useLanguage();
  const { heading, location, items } = t.facilityMetricsBar;

  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="metrics-heading"
      style={{ background: "#1a2d4a" }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-white/10 py-6 flex items-center justify-between">
          <h2
            id="metrics-heading"
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal"
          >
            {heading}
          </h2>
          <span className="text-[11px] text-white/25 uppercase tracking-widest">
            {location}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {items.map(({ value, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`py-8 px-4 flex flex-col justify-center min-h-[100px] ${
                i < items.length - 1 ? "border-e border-white/8" : ""
              } first:ps-0 last:pe-0 group overflow-hidden`}
            >
              <p className="text-2xl lg:text-base font-bold text-white leading-none mb-1.5 group-hover:text-teal-light transition-colors duration-300 truncate">
                {value}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-teal mb-0.5 truncate">
                {label}
              </p>
              <p className="text-[9px] text-white/30 truncate">{sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
