"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

export default function PageHero({ label, title, description, imageUrl }: PageHeroProps) {
  const defaultImage = "/images/industry/tanks-aerial.jpg";

  return (
    <section className="relative min-h-[54vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl || defaultImage}
          alt={title}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E4A78]/96 via-[#355486]/88 to-[#355486]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2E4A78]/50 via-transparent to-transparent" />
        {/* Top scrim for readable transparent navbar */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
        <div className="max-w-3xl">
          {label && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal-light border border-teal/30 bg-teal/10 rounded-full px-4 py-1.5"
            >
              {label}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
