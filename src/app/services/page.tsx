"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplets,
  FlaskConical,
  Anchor,
  Truck,
  Cpu,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

const services = [
  {
    id: "storage",
    icon: Droplets,
    title: "Storage Solutions",
    tagline: "World-Class Bulk Liquid Storage at Yanbu",
    description:
      "PETROTANK's storage facility at King Fahd Industrial Port offers 114,000 m³ of bulk liquid storage capacity across 8 purpose-built tanks. With advanced level monitoring, temperature control, and vapor recovery systems, we provide the highest standard of petroleum and petrochemical product storage.",
    features: [
      "114,000 m³ total storage capacity",
      "6 Floating Cone Roof (FCR) tanks",
      "2 Fixed Dome (FD) tanks",
      "Advanced ATG level monitoring",
      "Heating systems for viscous products",
      "Vapor recovery units (VRU)",
      "24/7 remote monitoring and control",
      "Multi-product segregation capability",
    ],
    specs: [
      { label: "Total Capacity", value: "114,000 m³" },
      { label: "Tank Configuration", value: "6 FCR + 2 FD" },
      { label: "Tank Count", value: "8 Tanks" },
      { label: "Location", value: "King Fahd Industrial Port" },
      { label: "Monitoring", value: "ATG + SCADA" },
      { label: "Operation", value: "24/7" },
    ],
    image:
      "/images/industry/storage-tanks.jpg",
    color: "text-primary",
    bg: "bg-surface-blue",
  },
  {
    id: "blending",
    icon: FlaskConical,
    title: "Blending & Processing",
    tagline: "Precision Product Blending and Customization",
    description:
      "Our blending and processing service enables clients to achieve precise product specifications through in-tank and in-line blending systems. PETROTANK's automated blending technology ensures consistent quality and accurate composition for petroleum derivatives and specialty chemical products.",
    features: [
      "In-tank and in-line blending capability",
      "Automated ratio control systems",
      "Multi-component blending",
      "Quality sampling and laboratory testing",
      "Custom product specification achievement",
      "Batch and continuous blending modes",
      "Automated documentation and certificates",
      "Compatibility with wide product range",
    ],
    specs: [
      { label: "Blending Type", value: "In-Tank & In-Line" },
      { label: "Control System", value: "Automated" },
      { label: "Quality Testing", value: "On-Site Lab" },
      { label: "Documentation", value: "Full Digital Records" },
      { label: "Products", value: "Petroleum & Petrochemical" },
      { label: "Batch Tracking", value: "Full Traceability" },
    ],
    image:
      "/images/industry/HeatingStation_2289a74c.jpg",
    color: "text-teal",
    bg: "bg-teal/10",
  },
  {
    id: "marine",
    icon: Anchor,
    title: "Marine Operations",
    tagline: "Deep-Water Marine Terminal at King Fahd Industrial Port",
    description:
      "PETROTANK's dedicated marine berths at Berths 6 & 8 of King Fahd Industrial Port provide efficient, high-throughput vessel operations. With capability to handle vessels up to 300m LOA and 15.5m draft, and a combined pumping capacity of 4,500 cbm/hr, we support some of the largest petroleum tanker movements in the region.",
    features: [
      "Dedicated Berths 6 & 8 at KFIP",
      "Handles vessels up to 300m LOA",
      "Maximum 15.5m draft capability",
      "4,500 cbm/hr total pumping rate",
      "High-speed marine loading arms",
      "10,000+ linear metres of pipeline",
      "OCIMF MTMSA certified operations",
      "VHF/marine communication systems",
    ],
    specs: [
      { label: "Berths", value: "Berths 6 & 8, KFIP" },
      { label: "Max Vessel LOA", value: "300m" },
      { label: "Max Draft", value: "15.5m" },
      { label: "Pumping Capacity", value: "4,500 cbm/hr" },
      { label: "Pipeline Network", value: "10,000+ linear metres" },
      { label: "Certification", value: "OCIMF MTMSA" },
    ],
    image:
      "/images/industry/ShipatBerth_cb8f1ea3.webp",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    id: "truck",
    icon: Truck,
    title: "Truck Logistics",
    tagline: "Efficient Land-Side Distribution from Yanbu",
    description:
      "Our truck logistics facility provides seamless land-side product distribution with a modern 4-bay loading station, automated metering systems, and GPS-coordinated dispatch management. Operating 24/7, we ensure reliable, safe, and efficient product delivery to destinations across Saudi Arabia and the region.",
    features: [
      "4-bay truck loading station",
      "Automated flow metering and billing",
      "GPS-tracked fleet coordination",
      "Multi-product loading capability",
      "24/7 loading operations",
      "ZATCA-compliant documentation",
      "Hazardous material handling protocols",
      "Driver safety induction program",
    ],
    specs: [
      { label: "Loading Bays", value: "4 Bays" },
      { label: "Metering", value: "Automated" },
      { label: "Fleet Tracking", value: "GPS Real-Time" },
      { label: "Operation", value: "24/7" },
      { label: "Documentation", value: "Digital / ZATCA" },
      { label: "Safety", value: "Full HSE Protocol" },
    ],
    image:
      "/images/industry/TruckBay_1e9ca1b2.webp",
    color: "text-primary-dark",
    bg: "bg-primary-dark/10",
  },
  {
    id: "automation",
    icon: Cpu,
    title: "Automation & Control",
    tagline: "SCADA-Integrated Smart Terminal Management",
    description:
      "PETROTANK's operations are powered by a fully integrated automation and control infrastructure including SCADA, ATG systems, Variable Frequency Drives (VFD), and Motor Operated Valves (MOVs). This technology backbone ensures precise operational control, rapid response, and comprehensive data visibility across all terminal activities.",
    features: [
      "SCADA supervisory control system",
      "Automatic Tank Gauging (ATG)",
      "Variable Frequency Drives (VFD)",
      "Motor Operated Valves (MOVs)",
      "Real-time inventory management",
      "Remote monitoring dashboard",
      "Automated alarm and safety systems",
      "Digital maintenance management",
    ],
    specs: [
      { label: "Control System", value: "SCADA Integrated" },
      { label: "Level Measurement", value: "ATG (Automatic)" },
      { label: "Pump Control", value: "VFD" },
      { label: "Valve Control", value: "MOVs" },
      { label: "Monitoring", value: "24/7 Remote" },
      { label: "Data Management", value: "Real-Time Digital" },
    ],
    image:
      "/images/industry/SCADARoom_e40117d5.webp",
    color: "text-teal",
    bg: "bg-teal/10",
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(services[0].id);
  const current = services.find((s) => s.id === activeService)!;

  return (
    <>
      <PageHero
        label="Our Services"
        title="Comprehensive Energy Logistics"
        description="Five integrated service areas delivering complete petroleum and petrochemical logistics from storage to marine to land-side distribution."
        imageUrl="/images/industry/tanks-aerial.jpg"
      />

      {/* Service Selector */}
      <section className="py-4 bg-white sticky top-20 z-30 border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex flex-wrap gap-2"
            aria-label="Service navigation"
            role="tablist"
          >
            {services.map(({ id, icon: Icon, title }) => (
              <button
                key={id}
                onClick={() => setActiveService(id)}
                role="tab"
                aria-selected={activeService === id}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeService === id
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-canvas border border-border text-muted hover:border-teal/40 hover:text-primary"
                }`}
              >
                <Icon size={16} aria-hidden="true" />
                {title}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Service Detail */}
      <section className="py-20 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
              {/* Left: Content */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-xl ${current.bg} flex items-center justify-center`}>
                    <current.icon size={24} className={current.color} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal">
                    {current.tagline}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-ink mb-5">{current.title}</h2>
                <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
                  {current.description}
                </p>

                <h3 className="text-base font-bold text-ink mb-4">Key Features</h3>
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
                  Inquire About This Service
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Right: Image + Specs */}
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-primary/10">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="bg-white border border-border rounded-xl p-6">
                  <h3 className="text-sm font-bold text-ink mb-4 uppercase tracking-wider">
                    Technical Specifications
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

      {/* All services list */}
      <section className="py-16 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-ink mb-6">All Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map(({ id, icon: Icon, title, color, bg }) => (
              <button
                key={id}
                onClick={() => {
                  setActiveService(id);
                  window.scrollTo({ top: 200, behavior: "smooth" });
                }}
                className={`flex flex-col items-center text-center p-5 rounded-xl border transition-all cursor-pointer group ${
                  activeService === id
                    ? "border-primary bg-surface-blue"
                    : "border-border hover:border-teal/30 hover:bg-canvas"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center mb-3`}>
                  <Icon size={20} className={color} />
                </div>
                <span
                  className={`text-xs font-semibold ${
                    activeService === id ? "text-primary" : "text-ink group-hover:text-primary"
                  } transition-colors`}
                >
                  {title}
                </span>
                <ChevronRight
                  size={14}
                  className={`mt-2 transition-colors ${
                    activeService === id ? "text-teal" : "text-border group-hover:text-teal"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
