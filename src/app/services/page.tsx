"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, FlaskConical, Anchor, Truck, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceStatics = [
  { id: "storage", icon: Droplets, color: "text-primary", bg: "bg-surface-blue", image: "/images/industry/storage-tanks.webp" },
  { id: "blending", icon: FlaskConical, color: "text-teal", bg: "bg-teal/10", image: "/images/industry/HeatingStation_2289a74c.jpg" },
  { id: "marine", icon: Anchor, color: "text-secondary", bg: "bg-secondary/10", image: "/images/industry/ShipatBerth_cb8f1ea3.webp" },
  { id: "truck", icon: Truck, color: "text-primary-dark", bg: "bg-primary-dark/10", image: "/images/industry/TruckBay_1e9ca1b2.webp" },
  { id: "automation", icon: Cpu, color: "text-teal", bg: "bg-teal/10", image: "/images/industry/SCADARoom_e40117d5.webp" },
];

export default function ServicesPage() {
  const { t, isRTL } = useLanguage();
  const sp = t.servicesPage;
  const [activeIndex, setActiveIndex] = useState(0);

  const current = sp.services[activeIndex];
  const currentStatic = serviceStatics[activeIndex];

  return (
    <>
      <PageHero
        label={sp.hero.label}
        title={sp.hero.title}
        description={sp.hero.description}
        imageUrl="/images/industry/tanks-aerial.jpg"
      />

      {/* Service Selector */}
      <section className="py-4 bg-white sticky top-[72px] z-30 border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex gap-2 overflow-x-auto scrollbar-hide pb-0.5"
            aria-label={isRTL ? "تنقل الخدمات" : "Service navigation"}
            role="tablist"
          >
            {sp.services.map(({ title }, i) => {
              const { id, icon: Icon } = serviceStatics[i];
              return (
                <button
                  key={id}
                  onClick={() => setActiveIndex(i)}
                  role="tab"
                  aria-selected={activeIndex === i}
                  className={`inline-flex shrink-0 items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${activeIndex === i
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-canvas border border-border text-muted hover:border-teal/40 hover:text-primary"
                    }`}
                >
                  <Icon size={16} aria-hidden="true" />
                  {title}
                </button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Service Detail */}
      <section className="py-20 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-xl ${currentStatic.bg} flex items-center justify-center`}>
                    <currentStatic.icon size={24} className={currentStatic.color} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal">
                    {current.tagline}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-ink mb-5">{current.title}</h2>
                <p className="text-muted text-base md:text-lg leading-relaxed mb-8">{current.description}</p>

                <h3 className="text-base font-bold text-ink mb-4">{sp.featuresHeading}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {current.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-teal shrink-0 mt-0.5" />
                      <span className="text-sm text-ink">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors cursor-pointer group"
                >
                  {sp.inquireBtn}
                  <ArrowRight size={16} className={`group-hover:translate-x-0.5 transition-transform ${isRTL ? "scale-x-[-1]" : ""}`} />
                </Link>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-primary/10">
                  <img
                    src={currentStatic.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="bg-white border border-border rounded-xl p-6">
                  <h3 className="text-sm font-bold text-ink mb-4 uppercase tracking-wider">
                    {sp.specsHeading}
                  </h3>
                  <dl className="grid grid-cols-2 gap-4">
                    {current.specs.map(({ label, value }) => (
                      <div key={label}>
                        <dt className="text-xs text-muted uppercase tracking-wide mb-0.5">{label}</dt>
                        <dd className="text-sm font-semibold text-primary">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

    </>
  );
}
