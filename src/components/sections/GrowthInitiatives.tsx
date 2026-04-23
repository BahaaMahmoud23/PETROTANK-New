"use client";

import { motion } from "framer-motion";
import { TrendingUp, Globe, Ship, Target } from "lucide-react";

const featured = {
  icon: TrendingUp,
  num: "01",
  title: "Phase 1 Expansion",
  description:
    "SAR 350M+ investment in additional storage capacity and infrastructure upgrades to meet growing regional demand and consolidate Yanbu's role as a premier energy hub.",
  investment: "SAR 350M+",
  target: "2026",
};

const others = [
  {
    icon: Globe,
    num: "02",
    title: "South Africa Hub",
    description:
      "Strategic partnerships with South African energy terminals — creating a direct trade corridor linking the Red Sea with sub-Saharan African markets.",
  },
  {
    icon: Ship,
    num: "03",
    title: "Suez Corridor",
    description:
      "Positioning PETROTANK as the premier transit and storage hub for petroleum moving through the Suez Canal trade routes.",
  },
  {
    icon: Target,
    num: "04",
    title: "Vision 2030 Alignment",
    description:
      "Fully aligned with Saudi Arabia's Vision 2030 — supporting national energy security, industrial diversification, and private-sector transformation.",
  },
];

export default function GrowthInitiatives() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      aria-labelledby="growth-heading"
      style={{ background: "#1E2D3D" }}
    >
      {/* Subtle background element */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, #5EABB3 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 xl:gap-24 items-start">

          {/* ── Left: Header + Featured initiative ── */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal block mb-4"
            >
              Strategic Growth
            </motion.span>
            <motion.h2
              id="growth-heading"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-3xl md:text-4xl font-bold text-white mb-3"
            >
              Growth Initiatives
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/45 text-base leading-relaxed mb-10 max-w-sm"
            >
              Building tomorrow&apos;s energy infrastructure — from Yanbu to global corridors.
            </motion.p>

            {/* Featured initiative card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              {/* Top accent */}
              <div
                className="h-[2px]"
                style={{
                  backgroundImage: "linear-gradient(90deg, #5EABB3, transparent)",
                }}
              />
              <div className="p-8">
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(94,171,179,0.15)" }}
                  >
                    <featured.icon size={20} className="text-teal" aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-bold text-teal/50 uppercase tracking-[0.2em] pt-3">
                    {featured.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{featured.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6">{featured.description}</p>

                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-2xl font-bold text-teal leading-none">{featured.investment}</p>
                    <p className="text-[10px] text-white/30 mt-1 uppercase tracking-wider">Investment</p>
                  </div>
                  <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.12)" }} />
                  <div>
                    <p className="text-2xl font-bold text-white leading-none">{featured.target}</p>
                    <p className="text-[10px] text-white/30 mt-1 uppercase tracking-wider">Target</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right: 3 other initiatives stacked ── */}
          <div className="lg:pt-24 space-y-0 divide-y" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            {others.map(({ icon: Icon, num, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-start gap-5 py-7 first:pt-0 cursor-default"
              >
                <span
                  className="text-4xl font-bold leading-none shrink-0 tabular-nums"
                  style={{ color: "rgba(255,255,255,0.06)" }}
                >
                  {num}
                </span>
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(94,171,179,0.12)" }}
                    >
                      <Icon size={15} className="text-teal" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-white text-sm group-hover:text-teal-light transition-colors">
                      {title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
