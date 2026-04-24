"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useLanguage } from "@/contexts/LanguageContext";

const statsData = [
  { prefix: "",     target: 114000, suffix: " m³",    decimals: 0 },
  { prefix: "",     target: 4500,   suffix: " cbm/hr", decimals: 0 },
  { prefix: "",     target: 669,    suffix: "+",       decimals: 0 },
  { prefix: "",     target: 13.8,   suffix: "M MT",    decimals: 1 },
  { prefix: "SAR ", target: 270,    suffix: "M+",      decimals: 0 },
  { prefix: "SAR ", target: 350,    suffix: "M+",      decimals: 0 },
];

export default function StatsSection() {
  const { t } = useLanguage();
  const s = t.statsSectionContent;

  return (
    <section
      className="py-24 relative overflow-hidden"
      aria-labelledby="stats-heading"
      style={{ background: "#355486" }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.8) 0px, rgba(255,255,255,0.8) 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-light block mb-3"
            >
              {s.eyebrow}
            </motion.span>
            <motion.h2
              id="stats-heading"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              {s.title}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/35 text-sm max-w-xs leading-relaxed"
          >
            {s.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.08)" }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 lg:col-span-2 p-8 md:p-10"
            style={{ background: "#355486" }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-light mb-3">
              {s.items[0].label}
            </p>
            <p className="text-5xl md:text-7xl font-bold text-white leading-none tabular-nums">
              <AnimatedCounter target={statsData[0].target} prefix={statsData[0].prefix} suffix={statsData[0].suffix} />
            </p>
            <p className="text-white/35 text-xs mt-3">{s.items[0].description}</p>
          </motion.div>

          {statsData.slice(1).map(({ prefix, target, suffix, decimals }, i) => (
            <motion.div
              key={s.items[i + 1].label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i + 1) * 0.07 }}
              className="p-6 md:p-8 group hover:bg-white/[0.04] transition-colors"
              style={{ background: "#355486" }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-light mb-2">
                {s.items[i + 1].label}
              </p>
              <p className="text-3xl md:text-4xl font-bold text-white leading-none tabular-nums">
                <AnimatedCounter target={target} prefix={prefix} suffix={suffix} decimals={decimals} />
              </p>
              <p className="text-white/30 text-[11px] mt-2">{s.items[i + 1].description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
