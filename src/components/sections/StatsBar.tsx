"use client";

import { motion } from "framer-motion";
import { Ship, Container, TrendingUp, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const statIcons = [Ship, Container, TrendingUp, Clock];

export default function StatsBar() {
  const { t } = useLanguage();

  return (
    /* Sits immediately after the hero; negative top-margin creates the floating overlap */
    <div className="relative z-20 px-4 sm:px-6 lg:px-8 -mt-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="bg-white rounded-2xl shadow-xl shadow-ink/10 border border-border overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {t.statsBar.map(({ value, label }, i) => {
              const Icon = statIcons[i];
              const isLast = i === t.statsBar.length - 1;
              return (
                <div
                  key={label}
                  className={`flex items-center gap-4 px-6 py-6 min-h-[80px] ${
                    !isLast ? "border-b lg:border-b-0 lg:border-e border-border" : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-surface-blue flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-primary" aria-hidden="true" />
                  </div>
                  {/* Text */}
                  <div className="min-w-0 overflow-hidden">
                    <p className="text-xl font-bold text-ink leading-tight truncate">{value}</p>
                    <p className="text-[11px] text-muted mt-0.5 font-medium whitespace-nowrap">{label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
