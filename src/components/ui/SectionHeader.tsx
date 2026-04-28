"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/animations";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "left" ? "text-start items-start" : "text-center items-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease }}
      className={`flex flex-col gap-3 ${alignClass}`}
    >
      {label && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-[0.15em] ${
            light ? "text-teal-light" : "text-teal"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-muted"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
