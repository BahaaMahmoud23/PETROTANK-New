"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "2020", label: "Year Founded", sub: "Yanbu, Saudi Arabia" },
  { value: "114,000 m³", label: "Storage Capacity", sub: "Bulk liquid" },
  { value: "8 Tanks", label: "Storage Units", sub: "6 FCR + 2 FD" },
  { value: "Berths 6 & 8", label: "Marine Berths", sub: "300m LOA / 15.5m draft" },
  { value: "4,500 cbm/hr", label: "Pumping Rate", sub: "Loading & unloading" },
  { value: "OCIMF MTMSA", label: "Certification", sub: "ISO 9001 · ISO 45001" },
];

export default function FacilityMetrics() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="metrics-heading"
      style={{ background: "#1a2d4a" }}
    >
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row — minimal */}
        <div className="border-b border-white/10 py-6 flex items-center justify-between">
          <h2
            id="metrics-heading"
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal"
          >
            Operational Highlights
          </h2>
          <span className="text-[11px] text-white/25 uppercase tracking-widest">
            King Fahd Industrial Port · Yanbu
          </span>
        </div>

        {/* Metrics grid — 6 columns, separated by vertical lines */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {metrics.map(({ value, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`py-9 px-6 ${
                i < metrics.length - 1
                  ? "border-r border-white/8"
                  : ""
              } first:pl-0 last:pr-0 group`}
            >
              <p className="text-2xl lg:text-3xl font-bold text-white leading-none mb-1.5 group-hover:text-teal-light transition-colors duration-300">
                {value}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-teal mb-1">
                {label}
              </p>
              <p className="text-[10px] text-white/30">{sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
