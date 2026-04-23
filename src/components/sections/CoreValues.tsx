"use client";

import { motion } from "framer-motion";
import { Users, Star, Scale, Lightbulb, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Users,
    name: "Collaboration",
    description:
      "Building strong partnerships with clients, partners, and communities to deliver integrated energy solutions.",
  },
  {
    icon: Star,
    name: "Excellence",
    description:
      "Pursuing the highest standards in every operation — from terminal management to customer service.",
  },
  {
    icon: Scale,
    name: "Integrity",
    description:
      "Operating with transparency, honesty, and ethical responsibility across all business relationships.",
  },
  {
    icon: Lightbulb,
    name: "Innovation",
    description:
      "Embracing advanced technology, automation, and continuous improvement to lead the energy logistics sector.",
  },
  {
    icon: ShieldCheck,
    name: "Safety",
    description:
      "Maintaining the highest safety standards with zero-compromise policies to protect people, assets, and the environment.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-canvas" aria-labelledby="values-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16 xl:gap-24 items-start">

          {/* ── Left: Editorial header column ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal block mb-4">
              Our Principles
            </span>
            <h2
              id="values-heading"
              className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-5"
            >
              Core
              <br />
              Values
            </h2>
            <p className="text-muted text-base leading-relaxed mb-8 max-w-xs">
              The principles that guide every decision, every operation, and every relationship at
              PETROTANK.
            </p>

            {/* Decorative teal rule */}
            <div className="w-10 h-0.5 bg-teal mb-8" />

            {/* Value name index */}
            <ul className="space-y-2" aria-hidden="true">
              {values.map((v, i) => (
                <li key={v.name} className="flex items-center gap-3 text-sm">
                  <span className="text-[10px] font-bold text-teal/50 tabular-nums w-5">
                    0{i + 1}
                  </span>
                  <span className="text-muted/60 font-medium">{v.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Right: Value rows ── */}
          <div className="space-y-0 divide-y divide-border">
            {values.map(({ icon: Icon, name, description }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-start gap-6 py-7 group cursor-default"
              >
                {/* Number */}
                <span className="text-[11px] font-bold text-border tabular-nums pt-1 shrink-0 group-hover:text-teal transition-colors">
                  0{i + 1}
                </span>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 group-hover:border-teal/30 group-hover:bg-teal/5 transition-all duration-200">
                  <Icon size={20} className="text-primary group-hover:text-teal transition-colors" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="pt-0.5">
                  <h3 className="font-bold text-ink text-base mb-1.5 group-hover:text-primary transition-colors">
                    {name}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
