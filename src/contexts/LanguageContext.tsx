"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export type Locale = "en" | "ar";

export const content = {
  en: {
    nav: {
      home: "Home", about: "About Us", services: "Services",
      capabilities: "Capabilities", certifications: "Certifications", contact: "Contact",
    },
    langToggleLabel: "العربية",

    hero: {
      eyebrow: "VISION 2030  ·  FIRST BONDED STORAGE LICENSE HOLDER IN YANBU",
      h1Line1: "Leading Energy", h1Line2: "Logistics Hub",
      subtitle: "National Petroleum & Petrochemical Tank & Pipeline Co.",
      cta1: "Learn More", cta2: "Contact Us",
      metrics: [
        { value: "114,000 m³", label: "Bulk Liquid Storage" },
        { value: "8", label: "Storage Tanks" },
        { value: "Berths 6 & 8", label: "Vessels up to 300m LOA" },
        { value: "4,500 cbm/hr", label: "Pumping Capacity" },
      ],
    },

    statsBar: [
      { value: "669+", label: "Vessels Berthed" },
      { value: "13.8M MT", label: "Total Volume Handled" },
      { value: "SAR 270M+", label: "Invested in Infrastructure" },
      { value: "24/7", label: "Operations" },
    ],

    about: {
      label: "About PETROTANK",
      title: "Pioneering Excellence in Energy Logistics",
      p1: "Founded in 2020, PETROTANK is the first license holder for bonded storage in Yanbu, operating a state-of-the-art facility at King Fahd Industrial Port.",
      p2: "We deliver world-class petroleum storage, blending, and marine logistics solutions that meet the highest international standards.",
      cta: "Learn more about us",
    },

    facilityMetricsBar: {
      heading: "Operational Highlights",
      location: "King Fahd Industrial Port · Yanbu",
      items: [
        { value: "2020", label: "Year Founded", sub: "Yanbu, Saudi Arabia" },
        { value: "114,000 m³", label: "Storage Capacity", sub: "Bulk liquid" },
        { value: "8 Tanks", label: "Storage Units", sub: "6 FCR + 2 FD" },
        { value: "Berths 6 & 8", label: "Marine Berths", sub: "300m LOA / 15.5m draft" },
        { value: "4,500 cbm/hr", label: "Pumping Rate", sub: "Loading & unloading" },
        { value: "OCIMF MTMSA", label: "Certification", sub: "ISO 9001 · ISO 45001" },
      ],
    },

    coreValuesSection: {
      eyebrow: "Our Principles",
      title: "Core Values",
      titleLine2: "",
      description: "The principles that guide every decision, every operation, and every relationship at PETROTANK.",
      items: [
        { name: "Collaboration", description: "Building strong partnerships with clients, partners, and communities to deliver integrated energy solutions." },
        { name: "Excellence", description: "Pursuing the highest standards in every operation — from terminal management to customer service." },
        { name: "Integrity", description: "Operating with transparency, honesty, and ethical responsibility across all business relationships." },
        { name: "Innovation", description: "Embracing advanced technology, automation, and continuous improvement to lead the energy logistics sector." },
        { name: "Safety", description: "Maintaining the highest safety standards with zero-compromise policies to protect people, assets, and the environment." },
      ],
    },

    servicesHome: {
      eyebrow: "What We Offer",
      title: "Our Service Areas",
      ctaLink: "View All Services",
      metricBadges: ["114,000 m³", "4,500 cbm/hr", null, "4 Bays · 24/7", "SCADA"],
      featured: {
        tagline: "Our primary capability",
        title: "Storage Solutions",
        description: "114,000 m³ bulk liquid storage across 8 purpose-built tanks with advanced ATG monitoring, heating systems, and vapor recovery at King Fahd Industrial Port.",
        specs: ["114,000 m³ capacity", "8 tanks", "24/7 operation", "ATG monitoring"],
        cta: "Explore Storage",
      },
      items: [
        { title: "Marine Operations", description: "Berths 6 & 8 — 300m LOA / 15.5m draft, 4,500 cbm/hr high-speed loading arms." },
        { title: "Blending & Processing", description: "In-tank and in-line blending with automated controls for custom product specifications." },
        { title: "Truck Logistics", description: "4-bay loading station with automated metering, GPS-tracked dispatch, and 24/7 operations." },
        { title: "Automation & Control", description: "SCADA-integrated ATG, Variable Frequency Drives, and Motor Operated Valves." },
      ],
    },

    certificationsHome: {
      eyebrow: "Compliance & Standards",
      title: "Certified & Approved",
      ctaLink: "Full Certifications List",
      trust: "All certifications are maintained through regular third-party audits, continuous training programs, and a company-wide commitment to operational excellence.",
      groups: [
        { category: "International Standards", items: ["ISO 9001:2015", "ISO 45001", "OCIMF MTMSA", "API Standards"] },
        { category: "Saudi Regulatory Approvals", items: ["Ministry of Energy", "NCEC", "MAWANI", "Civil Defense", "ZATCA", "MOHRE"] },
        { category: "Occupational Safety", items: ["NEBOSH", "OSHA", "IOSH", "ILO Standards"] },
      ],
    },

    growthSection: {
      eyebrow: "Strategic Growth",
      title: "Growth Initiatives",
      subtitle: "Building tomorrow's energy infrastructure — from Yanbu to global corridors.",
      investmentLabel: "Investment",
      targetLabel: "Target",
      featured: {
        title: "Phase 1 Expansion",
        description: "SAR 350M+ investment in additional storage capacity and infrastructure upgrades to meet growing regional demand and consolidate Yanbu's role as a premier energy hub.",
        investment: "SAR 350M+",
        target: "2026",
      },
      items: [
        { title: "South Africa Hub", description: "Strategic partnerships with South African energy terminals — creating a direct trade corridor linking the Red Sea with sub-Saharan African markets." },
        { title: "Suez Corridor", description: "Positioning PETROTANK as the premier transit and storage hub for petroleum moving through the Suez Canal trade routes." },
        { title: "Vision 2030 Alignment", description: "Fully aligned with Saudi Arabia's Vision 2030 — supporting national energy security, industrial diversification, and private-sector transformation." },
      ],
    },

    statsSectionContent: {
      eyebrow: "Performance at Scale",
      title: "Key Statistics",
      description: "Numbers that reflect years of operational excellence at King Fahd Industrial Port.",
      items: [
        { label: "Bulk Liquid Storage", description: "Total capacity across 8 tanks" },
        { label: "Pumping Capacity", description: "Marine loading & unloading" },
        { label: "Vessels Berthed", description: "Cumulative marine operations" },
        { label: "Throughput Handled", description: "Total mass throughput to date" },
        { label: "Infrastructure Investment", description: "Capital deployed in facilities" },
        { label: "Expansion Investment", description: "Phase 1 expansion program" },
      ],
    },

    contactCtaSection: {
      eyebrow: "Get In Touch",
      title: "Ready to Work with Us?",
      description: "Whether you need bulk liquid storage, marine operations, or integrated energy logistics, our team at King Fahd Industrial Port is ready to support your operations.",
      cta1: "Contact Us",
      cta2: "Our Services",
      info: [
        { label: "Head Office", value: "King Fahd Industrial Port, Yanbu, Saudi Arabia" },
        { label: "Email", value: "info@petrotank.com.sa" },
        { label: "Business Hours", value: "Sunday – Thursday, 8:00 AM – 5:00 PM" },
      ],
    },

    footer: {
      company: "Company", services: "Services", contact: "Contact",
      description: "Saudi Arabia's leading bulk liquid terminal — 114,000 m³ storage capacity at King Fahd Industrial Port, Yanbu.",
      rights: "All rights reserved.",
      tagline: "Petroleum Storage · Marine Operations · Pipeline Transport · Yanbu, Saudi Arabia",
    },

    aboutPage: {
      hero: { label: "Our Company", title: "About PETROTANK", description: "Founded in 2020, PETROTANK is Saudi Arabia's first bonded storage license holder in Yanbu — redefining energy logistics at the heart of the Red Sea." },
      story: {
        eyebrow: "Our Story",
        title: "Born from a Vision, Built for the Future",
        p1: "PETROTANK was founded in 2020 with a singular mission: to become the premier petroleum and petrochemical storage and logistics operator in Yanbu — one of Saudi Arabia's most strategically important industrial cities on the Red Sea coast.",
        p2: "Operating at King Fahd Industrial Port (KFIP), we became the first company to secure a bonded storage license in Yanbu, giving our clients unparalleled access to customs-free petroleum product storage and distribution.",
        p3: "Today, with 8 storage tanks totaling 114,000 m³ of capacity, dedicated marine berths, and cutting-edge automation, PETROTANK has handled 13.8M MT of petroleum products and served 669+ vessel berthing operations.",
        statLabel: "Vessels Berthed Since 2020",
      },
      mission: {
        sectionLabel: "Purpose",
        missionLabel: "Our Mission",
        missionText: "To provide world-class petroleum and petrochemical storage, marine operations, and logistics services that empower our clients to trade efficiently and safely — while supporting Saudi Arabia's energy ambitions and contributing to regional economic development.",
        visionLabel: "Our Vision",
        visionText: "To be the leading energy logistics hub in the Arabian Peninsula — a trusted partner for global energy companies seeking access to the Red Sea corridor, connecting markets from Europe to Asia and Africa through innovative, safe, and sustainable operations aligned with Vision 2030.",
      },
      milestones: {
        label: "Our Journey",
        title: "Key Milestones",
        description: "From founding to operational excellence — a timeline of PETROTANK's growth.",
        items: [
          { year: "2020", title: "Company Founded", description: "PETROTANK was established in Yanbu, obtaining the first bonded storage license in the region and commencing operations at King Fahd Industrial Port." },
          { year: "2021", title: "ISO Certifications Achieved", description: "Successfully obtained ISO 9001:2015 Quality Management and ISO 45001 Occupational Health & Safety certifications, setting a strong foundation for operational excellence." },
          { year: "2022", title: "OCIMF MTMSA Certification", description: "Earned the internationally recognized OCIMF Marine Terminal Management and Self Assessment (MTMSA) certification, validating world-class marine operational standards." },
          { year: "2023", title: "Operational Excellence", description: "Surpassed 669 vessel berthing operations with a cumulative throughput of 13.8M MT handled, cementing PETROTANK's position as a premier energy logistics operator." },
          { year: "2024", title: "Phase 1 Expansion Launched", description: "Initiated the SAR 350M+ Phase 1 expansion program to increase storage capacity and enhance infrastructure, driven by growing regional and international demand." },
          { year: "2025", title: "Vision 2030 Alignment", description: "Fully integrated into Saudi Arabia's Vision 2030 strategic framework, contributing to national energy security, industrial diversification, and private-sector-led economic transformation." },
        ],
      },
      values: {
        label: "Our Principles",
        title: "Core Values",
        names: ["Collaboration", "Excellence", "Integrity", "Innovation", "Safety"],
      },
      facilities: {
        label: "Infrastructure",
        title: "Facilities Overview",
        description: "State-of-the-art infrastructure at King Fahd Industrial Port, Yanbu.",
        items: [
          { label: "Storage Capacity", value: "114,000 m³", sub: "Total bulk liquid storage" },
          { label: "Storage Tanks", value: "8 Tanks", sub: "6 FCR + 2 FD configuration" },
          { label: "Marine Berths", value: "Berths 6 & 8", sub: "King Fahd Industrial Port" },
          { label: "Pumping Rate", value: "4,500 cbm/hr", sub: "Marine loading / unloading" },
          { label: "Pipeline Network", value: "10,000+ m", sub: "Linear metres of pipeline" },
          { label: "Vessel Capacity", value: "300m LOA", sub: "15.5m draft capability" },
        ],
        ctaLabel: "Explore Our Capabilities",
      },
      commitment: {
        eyebrow: "Our Pledge",
        title: "Our Commitment",
        p1: "At PETROTANK, our commitment extends beyond commercial success. We are dedicated to safe and sustainable operations, continuous professional development, and the highest standards of environmental stewardship.",
        p2: "We invest in our people through NEBOSH, OSHA, and IOSH certified training programs, and maintain a culture of continuous improvement driven by regular audits, transparent documentation, and proactive risk management.",
        cta: "Our Certifications",
        items: [
          "Regular third-party audits and compliance reviews",
          "Continuous workforce safety training programs",
          "Comprehensive operational documentation systems",
          "Environmental protection and spill prevention protocols",
          "Proactive risk management and emergency response planning",
        ],
      },
    },

    servicesPage: {
      hero: { label: "Our Services", title: "Comprehensive Energy Logistics", description: "Five integrated service areas delivering complete petroleum and petrochemical logistics from storage to marine to land-side distribution." },
      inquireBtn: "Inquire About This Service",
      featuresHeading: "Key Features",
      specsHeading: "Technical Specifications",
      allServicesHeading: "All Services",
      services: [
        {
          title: "Storage Solutions", tagline: "World-Class Bulk Liquid Storage at Yanbu",
          description: "PETROTANK's storage facility at King Fahd Industrial Port offers 114,000 m³ of bulk liquid storage capacity across 8 purpose-built tanks. With advanced level monitoring, temperature control, and vapor recovery systems, we provide the highest standard of petroleum and petrochemical product storage.",
          features: ["114,000 m³ total storage capacity", "6 Floating Cone Roof (FCR) tanks", "2 Fixed Dome (FD) tanks", "Advanced ATG level monitoring", "Heating systems for viscous products", "Vapor recovery units (VRU)", "24/7 remote monitoring and control", "Multi-product segregation capability"],
          specs: [{ label: "Total Capacity", value: "114,000 m³" }, { label: "Tank Configuration", value: "6 FCR + 2 FD" }, { label: "Tank Count", value: "8 Tanks" }, { label: "Location", value: "King Fahd Industrial Port" }, { label: "Monitoring", value: "ATG + SCADA" }, { label: "Operation", value: "24/7" }],
        },
        {
          title: "Blending & Processing", tagline: "Precision Product Blending and Customization",
          description: "Our blending and processing service enables clients to achieve precise product specifications through in-tank and in-line blending systems. PETROTANK's automated blending technology ensures consistent quality and accurate composition for petroleum derivatives and specialty chemical products.",
          features: ["In-tank and in-line blending capability", "Automated ratio control systems", "Multi-component blending", "Quality sampling and laboratory testing", "Custom product specification achievement", "Batch and continuous blending modes", "Automated documentation and certificates", "Compatibility with wide product range"],
          specs: [{ label: "Blending Type", value: "In-Tank & In-Line" }, { label: "Control System", value: "Automated" }, { label: "Quality Testing", value: "On-Site Lab" }, { label: "Documentation", value: "Full Digital Records" }, { label: "Products", value: "Petroleum & Petrochemical" }, { label: "Batch Tracking", value: "Full Traceability" }],
        },
        {
          title: "Marine Operations", tagline: "Deep-Water Marine Terminal at King Fahd Industrial Port",
          description: "PETROTANK's dedicated marine berths at Berths 6 & 8 provide efficient, high-throughput vessel operations. With capability to handle vessels up to 300m LOA and 15.5m draft, and a combined pumping capacity of 4,500 cbm/hr, we support some of the largest petroleum tanker movements in the region.",
          features: ["Dedicated Berths 6 & 8 at KFIP", "Handles vessels up to 300m LOA", "Maximum 15.5m draft capability", "4,500 cbm/hr total pumping rate", "High-speed marine loading arms", "10,000+ linear metres of pipeline", "OCIMF MTMSA certified operations", "VHF/marine communication systems"],
          specs: [{ label: "Berths", value: "Berths 6 & 8, KFIP" }, { label: "Max Vessel LOA", value: "300m" }, { label: "Max Draft", value: "15.5m" }, { label: "Pumping Capacity", value: "4,500 cbm/hr" }, { label: "Pipeline Network", value: "10,000+ linear metres" }, { label: "Certification", value: "OCIMF MTMSA" }],
        },
        {
          title: "Truck Logistics", tagline: "Efficient Land-Side Distribution from Yanbu",
          description: "Our truck logistics facility provides seamless land-side product distribution with a modern 4-bay loading station, automated metering systems, and GPS-coordinated dispatch management. Operating 24/7, we ensure reliable, safe, and efficient product delivery across Saudi Arabia.",
          features: ["4-bay truck loading station", "Automated flow metering and billing", "GPS-tracked fleet coordination", "Multi-product loading capability", "24/7 loading operations", "ZATCA-compliant documentation", "Hazardous material handling protocols", "Driver safety induction program"],
          specs: [{ label: "Loading Bays", value: "4 Bays" }, { label: "Metering", value: "Automated" }, { label: "Fleet Tracking", value: "GPS Real-Time" }, { label: "Operation", value: "24/7" }, { label: "Documentation", value: "Digital / ZATCA" }, { label: "Safety", value: "Full HSE Protocol" }],
        },
        {
          title: "Automation & Control", tagline: "SCADA-Integrated Smart Terminal Management",
          description: "PETROTANK's operations are powered by a fully integrated automation and control infrastructure including SCADA, ATG systems, Variable Frequency Drives (VFD), and Motor Operated Valves (MOVs). This technology backbone ensures precise operational control and comprehensive data visibility across all terminal activities.",
          features: ["SCADA supervisory control system", "Automatic Tank Gauging (ATG)", "Variable Frequency Drives (VFD)", "Motor Operated Valves (MOVs)", "Real-time inventory management", "Remote monitoring dashboard", "Automated alarm and safety systems", "Digital maintenance management"],
          specs: [{ label: "Control System", value: "SCADA Integrated" }, { label: "Level Measurement", value: "ATG (Automatic)" }, { label: "Pump Control", value: "VFD" }, { label: "Valve Control", value: "MOVs" }, { label: "Monitoring", value: "24/7 Remote" }, { label: "Data Management", value: "Real-Time Digital" }],
        },
      ],
    },

    capabilitiesPage: {
      hero: {
        label: "Our Capabilities",
        title: "Operational Infrastructure & Technical Depth",
        description: "From storage infrastructure to marine operations and cutting-edge automation — a comprehensive overview of PETROTANK's technical capabilities.",
      },
      infrastructure: {
        sectionLabel: "Tank Farm",
        title: "Infrastructure Capabilities",
        description: "Eight purpose-built storage tanks with advanced monitoring and control systems.",
        items: [
          { label: "Total Storage Capacity", value: "114,000 m³", note: "Bulk liquid storage" },
          { label: "Storage Tanks", value: "8 Tanks", note: "6 FCR + 2 FD configuration" },
          { label: "ATG Monitoring", value: "Automatic", note: "Tank Gauging system" },
          { label: "Heating Systems", value: "Installed", note: "For viscous product handling" },
          { label: "MOVs", value: "Full Coverage", note: "Motor Operated Valves" },
          { label: "Vapor Recovery", value: "VRU Equipped", note: "Environmental protection" },
        ],
      },
      marine: {
        sectionLabel: "Marine Terminal",
        title: "Marine Infrastructure",
        description: "World-class marine terminal capabilities at King Fahd Industrial Port's Berths 6 & 8.",
        items: [
          { label: "Marine Berths", value: "Berths 6 & 8" },
          { label: "Max Vessel LOA", value: "300m" },
          { label: "Max Draft", value: "15.5m" },
          { label: "Pumping Capacity", value: "4,500 cbm/hr" },
          { label: "Pipeline Network", value: "10,000+ linear m" },
          { label: "Loading Arms", value: "High-Speed" },
        ],
      },
      landSide: {
        sectionLabel: "Road Transport",
        title: "Land-Side Logistics",
        description: "Efficient 4-bay truck loading facility with GPS tracking and 24/7 operations.",
        items: [
          "4-bay truck loading station with automated metering",
          "GPS-tracked fleet dispatch and coordination",
          "Multi-product handling capability",
          "24/7 continuous loading operations",
          "On-site warehousing and product management",
          "ZATCA-compliant documentation and invoicing",
        ],
      },
      technology: {
        sectionLabel: "Digital Infrastructure",
        title: "Technology & Automation",
        description: "SCADA-integrated smart terminal management for precision, safety, and efficiency.",
        items: [
          { name: "SCADA", description: "Supervisory Control and Data Acquisition — full terminal integration" },
          { name: "ATG", description: "Automatic Tank Gauging — real-time level, temperature, and density" },
          { name: "VFD", description: "Variable Frequency Drives — energy-efficient pump speed control" },
          { name: "MOVs", description: "Motor Operated Valves — remote-controlled product routing" },
        ],
      },
      sheq: {
        sectionLabel: "Safety, Health, Environment & Quality",
        title: "SHEQ Commitment",
        description: "Zero-compromise approach to safety and environmental protection across all operations.",
        items: [
          "OCIMF MTMSA certified marine terminal operations",
          "ISO 9001:2015 Quality Management System",
          "ISO 45001 Occupational Health & Safety",
          "Civil Defense and Emergency Response Protocols",
          "Regular internal and third-party safety audits",
          "NEBOSH / OSHA / IOSH trained workforce",
          "Environmental spill prevention and containment systems",
          "Continuous HSE performance monitoring and reporting",
        ],
      },
      performance: {
        eyebrow: "By the Numbers",
        title: "Operational Performance",
        metrics: [
          { label: "Vessels Berthed" },
          { label: "Total Throughput" },
          { label: "Storage Capacity" },
          { label: "Pumping Rate" },
        ],
      },
      expansion: {
        eyebrow: "Future Growth",
        title: "Phase 1 Expansion",
        p1: "PETROTANK has launched the SAR 350M+ Phase 1 expansion program to significantly increase storage capacity and enhance terminal infrastructure to meet growing regional and international energy demand.",
        p2: "The expansion will add new storage tanks, upgrade marine infrastructure, and expand land-side logistics capabilities — positioning PETROTANK as the premier energy logistics hub on the Red Sea coast by 2026.",
        investmentLabel: "Investment",
        yearLabel: "Target",
        highlightsTitle: "Expansion Highlights",
        highlights: [
          "Additional bulk liquid storage tanks",
          "Enhanced marine berth infrastructure",
          "Expanded pipeline network",
          "Additional truck loading bays",
          "Upgraded SCADA and automation systems",
          "Environmental management enhancements",
        ],
      },
      advantages: {
        label: "Why PETROTANK",
        title: "Competitive Advantages",
        description: "What sets PETROTANK apart in the Saudi and regional energy logistics market.",
        cta: "Partner with PETROTANK",
        items: [
          { title: "First Bonded Storage in Yanbu", description: "PETROTANK is the first and only bonded storage license holder in Yanbu — giving clients customs-free product storage and seamless international trade access." },
          { title: "Strategic Red Sea Location", description: "Located at King Fahd Industrial Port on the Red Sea, PETROTANK sits at the crossroads of global energy trade routes between Europe, Asia, and Africa." },
          { title: "International Compliance", description: "Full compliance with ISO 9001:2015, ISO 45001, and OCIMF MTMSA standards ensures clients receive internationally benchmarked service quality." },
          { title: "Advanced Automation", description: "SCADA-integrated operations with ATG, VFD, and MOV systems provide real-time visibility, efficiency, and operational precision across all terminal functions." },
        ],
      },
    },

    certificationsPage: {
      hero: {
        label: "Standards & Compliance",
        title: "Certifications & Approvals",
        description: "PETROTANK maintains the highest international standards and full Saudi regulatory compliance — a commitment to excellence, safety, and trust.",
      },
      intro: "From international ISO and OCIMF standards to full Saudi governmental approvals and occupational safety certifications, PETROTANK's compliance framework ensures every aspect of our operations meets or exceeds the most demanding international benchmarks.",
      international: {
        label: "Global Compliance",
        title: "International Standards",
        items: [
          { name: "ISO 9001:2015", body: "International Organization for Standardization", description: "Quality Management System certification ensuring consistent service delivery, customer satisfaction, and continuous improvement across all operations.", scope: "Full Terminal Operations", status: "Active" },
          { name: "ISO 45001", body: "International Organization for Standardization", description: "Occupational Health & Safety Management System standard covering risk management, worker safety, and systematic health and safety performance improvement.", scope: "All PETROTANK Personnel", status: "Active" },
          { name: "OCIMF MTMSA", body: "Oil Companies International Marine Forum", description: "Marine Terminal Management and Self Assessment — the internationally recognized benchmark for marine terminal safety and operational standards.", scope: "Marine Terminal Operations", status: "Active" },
          { name: "API Standards", body: "American Petroleum Institute", description: "Compliance with API recommended practices for the design, construction, operation, and maintenance of petroleum storage and handling facilities.", scope: "Storage & Equipment", status: "Compliant" },
        ],
      },
      saudi: {
        label: "Government Compliance",
        title: "Saudi Governmental & Regulatory Approvals",
        items: [
          { name: "Ministry of Energy", abbr: "MOE", description: "National regulatory approval for petroleum and petrochemical storage and logistics operations." },
          { name: "National Committee for Environmental Compliance", abbr: "NCEC", description: "Environmental compliance certification for hazardous material handling and spill prevention." },
          { name: "Saudi Ports Authority", abbr: "MAWANI", description: "Port authority approval for operations at King Fahd Industrial Port, Yanbu." },
          { name: "Saudi Civil Defense", abbr: "Civil Defense", description: "Fire safety, emergency response, and hazardous materials handling certification." },
          { name: "Zakat, Tax & Customs Authority", abbr: "ZATCA", description: "Customs bonded storage license — the first in Yanbu — enabling duty-free product storage." },
          { name: "Ministry of Human Resources", abbr: "MOHRE", description: "Labor compliance certification covering workforce rights, safety, and employment standards." },
        ],
      },
      safety: {
        label: "Personnel Safety",
        title: "Occupational Safety Certifications",
        items: [
          { name: "NEBOSH", body: "National Examination Board in Occupational Safety and Health", description: "International General Certificate in Occupational Health and Safety — awarded to PETROTANK safety professionals for advanced health and safety competency." },
          { name: "OSHA", body: "Occupational Safety and Health Administration", description: "OSHA certification covering industrial safety standards, hazard identification, and workplace safety management aligned with US and international standards." },
          { name: "IOSH", body: "Institution of Occupational Safety and Health", description: "Working Safely certification for all personnel — providing a foundation of safety awareness and hazard management throughout the organization." },
          { name: "ILO Standards", body: "International Labour Organization", description: "Compliance with ILO conventions on workplace safety, worker rights, and occupational health — ensuring international labor standards are upheld." },
        ],
      },
      compliance: {
        label: "Our Approach",
        title: "Compliance Commitment",
        description: "How PETROTANK maintains and continuously improves its compliance posture.",
        items: [
          { title: "Regular Audits", description: "Internal audits conducted quarterly and third-party audits annually across all operational departments and safety systems." },
          { title: "Workforce Training", description: "Continuous safety and professional training for all personnel, including NEBOSH, OSHA, and IOSH certification programs." },
          { title: "Continuous Improvement", description: "Formal corrective action processes and management review cycles ensure ongoing improvement in quality, safety, and environmental performance." },
          { title: "Documentation", description: "Comprehensive digital documentation systems capturing all operational activities, maintenance records, and compliance evidence." },
        ],
      },
    },

    contactPage: {
      hero: { label: "Get In Touch", title: "Contact PETROTANK", description: "Connect with our team at King Fahd Industrial Port, Yanbu to discuss your energy logistics needs." },
      formTitle: "Send Us a Message",
      formSubtitle: "Complete the form below and a member of our team will respond promptly.",
      fields: { name: "Full Name", email: "Email Address", company: "Company / Organization", subject: "Subject", message: "Message", placeholder: { name: "Your full name", email: "your@email.com", company: "Company name", message: "Tell us about your inquiry or requirements..." } },
      submitBtn: "Send Message",
      sending: "Sending…",
      successTitle: "Message Sent Successfully",
      successMsg: "Thank you for contacting PETROTANK. A member of our team will review your inquiry and respond within 1–2 business days.",
      sendAnother: "Send Another Message",
      selectSubject: "Select a subject",
      subjects: ["Storage Solutions Inquiry", "Marine Operations", "Blending & Processing", "Truck Logistics", "Automation & Control", "General Inquiry", "Partnership & Business Development", "Other"],
      infoTitle: "Contact Information",
      infoSubtitle: "Reach our team directly.",
      quickLinksTitle: "Quick Links",
      quickLinks: [
        { label: "Storage Solutions", href: "/services" },
        { label: "Marine Operations", href: "/services" },
        { label: "Certifications", href: "/certifications" },
      ],
      locationTitle: "Our Location",
      locationSub: "King Fahd Industrial Port (KFIP), Yanbu, Saudi Arabia",
      urgentTitle: "Need immediate operational support?",
      urgentBody: "Our terminal team is available Sunday – Thursday, 8:00 AM – 5:00 PM.",
      urgentNote: "For urgent operational matters, please contact us directly by phone or email.",
      info: [
        { label: "Head Office & Terminal", value: "King Fahd Industrial Port, Yanbu, Saudi Arabia", sub: "Berths 6 & 8, Industrial Zone" },
        { label: "Email", value: "info@petrotank.com.sa", sub: "We respond within 1–2 business days" },
        { label: "Phone", value: "+966 14 XXX XXXX", sub: "Available during business hours" },
        { label: "Business Hours", value: "Sunday – Thursday", sub: "8:00 AM – 5:00 PM (AST)" },
      ],
    },
  },

  /* ════════════════════════════════════════════════════════
     ARABIC
     ════════════════════════════════════════════════════════ */
  ar: {
    nav: {
      home: "الرئيسية", about: "من نحن", services: "خدماتنا",
      capabilities: "قدراتنا", certifications: "الشهادات", contact: "تواصل معنا",
    },
    langToggleLabel: "English",

    hero: {
      eyebrow: "رؤية 2030  ·  أول حامل رخصة تخزين مقيد في ينبع",
      h1Line1: "مركز لوجستي", h1Line2: "رائد للطاقة",
      subtitle: "الشركة الوطنية للمستودعات والأنابيب البترولية والبتروكيماوية",
      cta1: "اعرف المزيد", cta2: "تواصل معنا",
      metrics: [
        { value: "114,000 م³", label: "تخزين سائل ضخم" },
        { value: "8", label: "خزانات التخزين" },
        { value: "الرصيفان 6 و8", label: "سفن حتى 300م طولاً" },
        { value: "4,500 م³/س", label: "سعة الضخ" },
      ],
    },

    statsBar: [
      { value: "669+", label: "سفينة رست" },
      { value: "13.8M MT", label: "إجمالي الحجم المعالَج" },
      { value: "+270M ر.س", label: "استثمار في البنية التحتية" },
      { value: "24/7", label: "عمليات متواصلة" },
    ],

    about: {
      label: "عن بتروتانك",
      title: "ريادة التميز في اللوجستيات النفطية",
      p1: "تأسست شركة بتروتانك عام 2020، وهي أول حاملة رخصة للتخزين المقيد في ينبع، تدير منشأة متطورة في ميناء الملك فهد الصناعي.",
      p2: "نقدم حلول تخزين نفطي وخلط ولوجستيات بحرية بمستوى عالمي، تلبي أعلى المعايير الدولية.",
      cta: "اعرف المزيد عنّا",
    },

    facilityMetricsBar: {
      heading: "المؤشرات التشغيلية",
      location: "ميناء الملك فهد الصناعي · ينبع",
      items: [
        { value: "2020", label: "سنة التأسيس", sub: "ينبع، المملكة العربية السعودية" },
        { value: "114,000 م³", label: "طاقة التخزين", sub: "سائل ضخم" },
        { value: "8 خزانات", label: "وحدات التخزين", sub: "6 FCR + 2 FD" },
        { value: "الرصيفان 6 و8", label: "الأرصفة البحرية", sub: "300م طولاً / 15.5م غاطساً" },
        { value: "4,500 م³/س", label: "معدل الضخ", sub: "تحميل وتفريغ" },
        { value: "OCIMF MTMSA", label: "الشهادة", sub: "ISO 9001 · ISO 45001" },
      ],
    },

    coreValuesSection: {
      eyebrow: "مبادئنا",
      title: "القيم",
      titleLine2: "الجوهرية",
      description: "المبادئ التي توجّه كل قرار وكل عملية وكل علاقة في بتروتانك.",
      items: [
        { name: "التعاون", description: "بناء شراكات متينة مع العملاء والشركاء والمجتمعات لتقديم حلول طاقة متكاملة." },
        { name: "التميز", description: "السعي نحو أعلى المعايير في كل عملية، من إدارة المحطة إلى خدمة العملاء." },
        { name: "النزاهة", description: "العمل بشفافية وأمانة ومسؤولية أخلاقية في جميع علاقات العمل." },
        { name: "الابتكار", description: "تبني التقنيات المتطورة والأتمتة والتحسين المستمر لقيادة قطاع لوجستيات الطاقة." },
        { name: "السلامة", description: "الحفاظ على أعلى معايير السلامة بسياسات لا تقبل التنازل لحماية الأفراد والأصول والبيئة." },
      ],
    },

    servicesHome: {
      eyebrow: "ما نقدمه",
      title: "مجالات خدماتنا",
      ctaLink: "عرض جميع الخدمات",
      metricBadges: ["114,000 م³", "4,500 م³/س", null, "4 أرصفة · 24/7", "SCADA"],
      featured: {
        tagline: "قدرتنا الأساسية",
        title: "حلول التخزين",
        description: "تخزين سائل ضخم بطاقة 114,000 م³ عبر 8 خزانات متخصصة مع أنظمة ATG المتطورة وأنظمة التسخين واسترداد البخار في ميناء الملك فهد الصناعي.",
        specs: ["طاقة 114,000 م³", "8 خزانات", "تشغيل 24/7", "مراقبة ATG"],
        cta: "استكشف التخزين",
      },
      items: [
        { title: "العمليات البحرية", description: "الرصيفان 6 و8 — 300م طولاً / 15.5م غاطساً، أذرع تحميل عالية السرعة بسعة 4,500 م³/س." },
        { title: "الخلط والمعالجة", description: "الخلط داخل الخزان وعبر الخطوط مع أنظمة تحكم آلية لمواصفات منتجات مخصصة." },
        { title: "لوجستيات الشاحنات", description: "محطة تحميل رباعية الأرصفة مع عدادات آلية وتتبع GPS وتشغيل على مدار الساعة." },
        { title: "الأتمتة والتحكم", description: "ATG متكامل مع SCADA، مشغلات تردد متغير، وصمامات تشغيل آلية." },
      ],
    },

    certificationsHome: {
      eyebrow: "الامتثال والمعايير",
      title: "معتمدون ومرخصون",
      ctaLink: "قائمة الشهادات الكاملة",
      trust: "تُحافَظ على جميع الشهادات عبر عمليات تدقيق دورية وبرامج تدريب مستمرة والتزام شامل بمعايير التميز والسلامة.",
      groups: [
        { category: "معايير دولية", items: ["ISO 9001:2015", "ISO 45001", "OCIMF MTMSA", "API Standards"] },
        { category: "اعتمادات تنظيمية سعودية", items: ["وزارة الطاقة", "NCEC", "MAWANI", "الدفاع المدني", "ZATCA", "MOHRE"] },
        { category: "سلامة مهنية", items: ["NEBOSH", "OSHA", "IOSH", "ILO Standards"] },
      ],
    },

    growthSection: {
      eyebrow: "النمو الاستراتيجي",
      title: "مبادرات النمو",
      subtitle: "نبني بنية الطاقة التحتية لغد مشرق — من ينبع إلى الممرات العالمية.",
      investmentLabel: "الاستثمار",
      targetLabel: "الهدف",
      featured: {
        title: "توسعة المرحلة الأولى",
        description: "استثمار +350M ر.س في طاقة تخزين إضافية وترقيات البنية التحتية لتلبية الطلب الإقليمي المتنامي.",
        investment: "+350M ر.س",
        target: "2026",
      },
      items: [
        { title: "مركز جنوب أفريقيا", description: "شراكات استراتيجية مع محطات الطاقة الجنوب أفريقية — تُنشئ ممراً تجارياً يربط البحر الأحمر بأسواق أفريقيا جنوب الصحراء." },
        { title: "ممر قناة السويس", description: "تموضع بتروتانك كمركز عبور وتخزين رئيسي للنفط المتدفق عبر مسارات تجارة قناة السويس." },
        { title: "التوافق مع رؤية 2030", description: "توافق تام مع رؤية المملكة العربية السعودية 2030 — دعم أمن الطاقة الوطني والتنويع الصناعي والتحول القيادي للقطاع الخاص." },
      ],
    },

    statsSectionContent: {
      eyebrow: "الأداء على نطاق واسع",
      title: "إحصائيات رئيسية",
      description: "أرقام تعكس سنوات من التميز التشغيلي في ميناء الملك فهد الصناعي.",
      items: [
        { label: "التخزين السائل الضخم", description: "الطاقة الإجمالية عبر 8 خزانات" },
        { label: "سعة الضخ", description: "تحميل وتفريغ بحري" },
        { label: "السفن المرتسية", description: "العمليات البحرية التراكمية" },
        { label: "الإنتاجية المعالَجة", description: "إجمالي الكتلة المعالجة حتى الآن" },
        { label: "استثمار البنية التحتية", description: "رأس المال المنفق في المنشآت" },
        { label: "استثمار التوسعة", description: "برنامج توسعة المرحلة الأولى" },
      ],
    },

    contactCtaSection: {
      eyebrow: "تواصل معنا",
      title: "هل أنت مستعد للعمل معنا؟",
      description: "سواء احتجت إلى تخزين سائل ضخم أو عمليات بحرية أو لوجستيات طاقة متكاملة، فريقنا في ميناء الملك فهد الصناعي مستعد لدعم عملياتك.",
      cta1: "تواصل معنا",
      cta2: "خدماتنا",
      info: [
        { label: "المكتب الرئيسي", value: "ميناء الملك فهد الصناعي، ينبع، المملكة العربية السعودية" },
        { label: "البريد الإلكتروني", value: "info@petrotank.com.sa" },
        { label: "ساعات العمل", value: "الأحد – الخميس، 8:00 ص – 5:00 م" },
      ],
    },

    footer: {
      company: "الشركة", services: "الخدمات", contact: "تواصل معنا",
      description: "المحطة الرائدة للسوائل الضخمة في المملكة العربية السعودية — طاقة تخزين 114,000 م³ في ميناء الملك فهد الصناعي، ينبع.",
      rights: "جميع الحقوق محفوظة.",
      tagline: "تخزين نفطي · عمليات بحرية · نقل بالأنابيب · ينبع، المملكة العربية السعودية",
    },

    aboutPage: {
      hero: { label: "شركتنا", title: "عن بتروتانك", description: "تأسست عام 2020، وبتروتانك هي أول حاملة رخصة تخزين مقيد في ينبع — تُعيد تعريف لوجستيات الطاقة في قلب البحر الأحمر." },
      story: {
        eyebrow: "قصتنا",
        title: "وُلد من رؤية، بُني للمستقبل",
        p1: "تأسست بتروتانك عام 2020 بمهمة واحدة: أن تصبح المشغّل الرائد للتخزين والخدمات اللوجستية النفطية والبتروكيماوية في ينبع — إحدى أهم المدن الصناعية في المملكة العربية السعودية على ساحل البحر الأحمر.",
        p2: "في ميناء الملك فهد الصناعي، أصبحنا أول شركة تحصل على رخصة التخزين المقيد في ينبع، مما منح عملاءنا وصولاً لا مثيل له لتخزين المنتجات النفطية وتوزيعها معفاةً من الرسوم الجمركية.",
        p3: "اليوم، بـ8 خزانات تخزين بإجمالي طاقة 114,000 م³ وأرصفة بحرية مخصصة وأتمتة متطورة، تعاملت بتروتانك مع 13.8 مليون طن من المنتجات النفطية وخدمت 669+ عملية إرساء للسفن.",
        statLabel: "سفينة رست منذ 2020",
      },
      mission: {
        sectionLabel: "الغرض",
        missionLabel: "مهمتنا",
        missionText: "تقديم خدمات تخزين ولوجستيات نفطية وبتروكيماوية وعمليات بحرية بمستوى عالمي تُمكّن عملاءنا من التجارة بكفاءة وأمان — مع دعم طموحات المملكة العربية السعودية في مجال الطاقة والمساهمة في التنمية الاقتصادية الإقليمية.",
        visionLabel: "رؤيتنا",
        visionText: "أن نكون مركز لوجستيات الطاقة الرائد في شبه الجزيرة العربية — شريكاً موثوقاً لشركات الطاقة العالمية الساعية للوصول إلى ممر البحر الأحمر، وربط الأسواق من أوروبا إلى آسيا وأفريقيا من خلال عمليات مبتكرة وآمنة ومستدامة.",
      },
      milestones: {
        label: "مسيرتنا",
        title: "المحطات الرئيسية",
        description: "من التأسيس إلى التميز التشغيلي — مسيرة نمو بتروتانك.",
        items: [
          { year: "2020", title: "تأسيس الشركة", description: "تأسست بتروتانك في ينبع وحصلت على أول رخصة تخزين مقيد في المنطقة وبدأت العمليات في ميناء الملك فهد الصناعي." },
          { year: "2021", title: "الحصول على شهادات ISO", description: "حصلت بنجاح على شهادتي ISO 9001:2015 لإدارة الجودة وISO 45001 للصحة والسلامة المهنية." },
          { year: "2022", title: "شهادة OCIMF MTMSA", description: "نالت شهادة تقييم وإدارة المحطات البحرية المعترف بها دولياً من OCIMF، التي تُثبت معايير التشغيل البحري العالمية." },
          { year: "2023", title: "التميز التشغيلي", description: "تجاوزت 669 عملية إرساء للسفن بإجمالي إنتاجية 13.8 مليون طن مناولة." },
          { year: "2024", title: "إطلاق توسعة المرحلة الأولى", description: "إطلاق برنامج توسعة المرحلة الأولى باستثمار +350M ر.س لزيادة طاقة التخزين والبنية التحتية." },
          { year: "2025", title: "التوافق مع رؤية 2030", description: "اندماج كامل في الإطار الاستراتيجي لرؤية المملكة العربية السعودية 2030 والمساهمة في أمن الطاقة الوطني." },
        ],
      },
      values: {
        label: "مبادئنا",
        title: "القيم الجوهرية",
        names: ["التعاون", "التميز", "النزاهة", "الابتكار", "السلامة"],
      },
      facilities: {
        label: "البنية التحتية",
        title: "نظرة عامة على المنشأة",
        description: "بنية تحتية متطورة في ميناء الملك فهد الصناعي، ينبع.",
        items: [
          { label: "طاقة التخزين", value: "114,000 م³", sub: "إجمالي التخزين السائل الضخم" },
          { label: "خزانات التخزين", value: "8 خزانات", sub: "6 FCR + 2 FD" },
          { label: "الأرصفة البحرية", value: "الرصيفان 6 و8", sub: "ميناء الملك فهد الصناعي" },
          { label: "معدل الضخ", value: "4,500 م³/س", sub: "تحميل / تفريغ بحري" },
          { label: "شبكة الأنابيب", value: "+10,000 م", sub: "أمتار خطية من الأنابيب" },
          { label: "طاقة السفينة", value: "300م طولاً", sub: "15.5م غاطساً" },
        ],
        ctaLabel: "استكشف قدراتنا",
      },
      commitment: {
        eyebrow: "تعهدنا",
        title: "التزامنا",
        p1: "في بتروتانك، التزامنا يمتد أبعد من النجاح التجاري. نحن مكرّسون للعمليات الآمنة والمستدامة والتطوير المهني المستمر وأعلى معايير الإشراف البيئي.",
        p2: "نستثمر في كوادرنا من خلال برامج التدريب المعتمدة من NEBOSH وOSHA وIOSH، ونحافظ على ثقافة التحسين المستمر مدفوعة بعمليات تدقيق منتظمة وتوثيق شفاف وإدارة استباقية للمخاطر.",
        cta: "شهاداتنا",
        items: [
          "عمليات تدقيق دورية من طرف ثالث ومراجعات الامتثال",
          "برامج تدريب سلامة مستمرة للكوادر",
          "أنظمة توثيق تشغيلية شاملة",
          "بروتوكولات الحماية البيئية ومنع الانسكاب",
          "إدارة استباقية للمخاطر وتخطيط الاستجابة للطوارئ",
        ],
      },
    },

    servicesPage: {
      hero: { label: "خدماتنا", title: "لوجستيات طاقة شاملة", description: "خمسة مجالات خدمة متكاملة تقدم لوجستيات نفطية وبتروكيماوية كاملة من التخزين إلى العمليات البحرية وحتى التوزيع البري." },
      inquireBtn: "استفسر عن هذه الخدمة",
      featuresHeading: "الميزات الرئيسية",
      specsHeading: "المواصفات الفنية",
      allServicesHeading: "جميع الخدمات",
      services: [
        {
          title: "حلول التخزين", tagline: "تخزين سائل ضخم عالمي المستوى في ينبع",
          description: "تقدم منشأة بتروتانك في ميناء الملك فهد الصناعي طاقة تخزين سائل ضخم 114,000 م³ عبر 8 خزانات متخصصة. بمراقبة المستوى المتقدمة وأنظمة التحكم في درجة الحرارة وأنظمة استرداد البخار، نوفر أعلى معايير تخزين المنتجات النفطية والبتروكيماوية.",
          features: ["114,000 م³ طاقة إجمالية", "6 خزانات ذات سقف مخروطي عائم (FCR)", "2 خزانات ذات قبة ثابتة (FD)", "مراقبة ATG متطورة للمستوى", "أنظمة تسخين للمنتجات اللزجة", "وحدات استرداد البخار (VRU)", "مراقبة وتحكم عن بعد على مدار الساعة", "إمكانية فصل منتجات متعددة"],
          specs: [{ label: "الطاقة الإجمالية", value: "114,000 م³" }, { label: "تكوين الخزانات", value: "6 FCR + 2 FD" }, { label: "عدد الخزانات", value: "8 خزانات" }, { label: "الموقع", value: "ميناء الملك فهد الصناعي" }, { label: "المراقبة", value: "ATG + SCADA" }, { label: "التشغيل", value: "24/7" }],
        },
        {
          title: "الخلط والمعالجة", tagline: "خلط المنتجات بدقة وتخصيصها",
          description: "تمكّن خدمة الخلط والمعالجة لدينا العملاء من تحقيق مواصفات منتجات دقيقة عبر أنظمة الخلط داخل الخزان وعبر الخطوط. تضمن تقنية الخلط الآلي لدى بتروتانك جودة ثابتة وتركيبة دقيقة للمشتقات النفطية والمنتجات الكيميائية المتخصصة.",
          features: ["إمكانية الخلط داخل الخزان وعبر الخطوط", "أنظمة تحكم آلي في النسب", "خلط متعدد المكونات", "أخذ عينات الجودة والاختبارات المختبرية", "تحقيق مواصفات المنتج المخصصة", "أوضاع الخلط الدفعي والمستمر", "توثيق آلي وشهادات", "توافق مع مجموعة واسعة من المنتجات"],
          specs: [{ label: "نوع الخلط", value: "داخل الخزان وعبر الخطوط" }, { label: "نظام التحكم", value: "آلي" }, { label: "اختبار الجودة", value: "مختبر في الموقع" }, { label: "التوثيق", value: "سجلات رقمية كاملة" }, { label: "المنتجات", value: "نفطي وبتروكيماوي" }, { label: "تتبع الدفعات", value: "تتبع كامل" }],
        },
        {
          title: "العمليات البحرية", tagline: "محطة بحرية للمياه العميقة في ميناء الملك فهد الصناعي",
          description: "تقدم أرصفة بتروتانك البحرية المخصصة في الرصيفين 6 و8 عمليات سفن فعالة وعالية الإنتاجية. مع إمكانية استيعاب سفن يصل طولها إلى 300م وغاطس 15.5م وسعة ضخ إجمالية 4,500 م³/س، ندعم بعض أكبر حركات ناقلات النفط في المنطقة.",
          features: ["أرصفة مخصصة 6 و8 في KFIP", "استيعاب سفن حتى 300م طولاً", "أقصى غاطس 15.5م", "معدل ضخ إجمالي 4,500 م³/س", "أذرع تحميل بحرية عالية السرعة", "شبكة أنابيب +10,000 متر خطي", "عمليات معتمدة OCIMF MTMSA", "أنظمة اتصال VHF/بحرية"],
          specs: [{ label: "الأرصفة", value: "الرصيفان 6 و8، KFIP" }, { label: "أقصى طول للسفينة", value: "300م" }, { label: "أقصى غاطس", value: "15.5م" }, { label: "سعة الضخ", value: "4,500 م³/س" }, { label: "شبكة الأنابيب", value: "+10,000 متر خطي" }, { label: "الشهادة", value: "OCIMF MTMSA" }],
        },
        {
          title: "لوجستيات الشاحنات", tagline: "توزيع برّي فعّال من ينبع",
          description: "توفر منشأة لوجستيات الشاحنات لدينا توزيعاً برياً سلساً للمنتجات بمحطة تحميل حديثة رباعية الأرصفة وأنظمة عداد آلية وإدارة إيفاد منسقة بـGPS. تعمل على مدار الساعة لضمان توصيل موثوق وآمن وفعّال في جميع أنحاء المملكة العربية السعودية.",
          features: ["محطة تحميل شاحنات رباعية الأرصفة", "عداد تدفق آلي وفوترة", "تنسيق أسطول عبر GPS", "إمكانية تحميل منتجات متعددة", "تشغيل تحميل 24/7", "توثيق متوافق مع ZATCA", "بروتوكولات مناولة المواد الخطرة", "برنامج تعريفي بالسلامة للسائقين"],
          specs: [{ label: "أرصفة التحميل", value: "4 أرصفة" }, { label: "العداد", value: "آلي" }, { label: "تتبع الأسطول", value: "GPS آني" }, { label: "التشغيل", value: "24/7" }, { label: "التوثيق", value: "رقمي / ZATCA" }, { label: "السلامة", value: "بروتوكول HSE كامل" }],
        },
        {
          title: "الأتمتة والتحكم", tagline: "إدارة محطة ذكية متكاملة مع SCADA",
          description: "تعمل عمليات بتروتانك بنظام بنية تحتية متكاملة للأتمتة والتحكم يشمل SCADA وأنظمة ATG ومشغلات التردد المتغير (VFD) والصمامات الآلية (MOVs). تضمن هذه الخلفية التقنية تحكماً تشغيلياً دقيقاً ورؤية بيانات شاملة عبر جميع أنشطة المحطة.",
          features: ["نظام تحكم وإشراف SCADA", "قياس المستوى الآلي للخزانات (ATG)", "مشغلات التردد المتغير (VFD)", "الصمامات الآلية (MOVs)", "إدارة المخزون الآنية", "لوحة مراقبة عن بعد", "أنظمة إنذار وسلامة آلية", "إدارة الصيانة الرقمية"],
          specs: [{ label: "نظام التحكم", value: "SCADA متكامل" }, { label: "قياس المستوى", value: "ATG (آلي)" }, { label: "التحكم بالضخ", value: "VFD" }, { label: "التحكم بالصمامات", value: "MOVs" }, { label: "المراقبة", value: "24/7 عن بعد" }, { label: "إدارة البيانات", value: "رقمي آني" }],
        },
      ],
    },

    capabilitiesPage: {
      hero: {
        label: "قدراتنا",
        title: "البنية التحتية التشغيلية والعمق التقني",
        description: "من البنية التحتية للتخزين إلى العمليات البحرية والأتمتة المتطورة — نظرة شاملة على القدرات التقنية لبتروتانك.",
      },
      infrastructure: {
        sectionLabel: "مزرعة الخزانات",
        title: "قدرات البنية التحتية",
        description: "ثمانية خزانات تخزين متخصصة مع أنظمة مراقبة وتحكم متطورة.",
        items: [
          { label: "إجمالي طاقة التخزين", value: "114,000 م³", note: "تخزين سائل ضخم" },
          { label: "خزانات التخزين", value: "8 خزانات", note: "6 FCR + 2 FD" },
          { label: "مراقبة ATG", value: "آلي", note: "نظام قياس الخزانات" },
          { label: "أنظمة التسخين", value: "مركبة", note: "لمناولة المنتجات اللزجة" },
          { label: "MOVs", value: "تغطية كاملة", note: "الصمامات الآلية" },
          { label: "استرداد البخار", value: "مجهز بـ VRU", note: "الحماية البيئية" },
        ],
      },
      marine: {
        sectionLabel: "المحطة البحرية",
        title: "البنية التحتية البحرية",
        description: "قدرات محطة بحرية عالمية المستوى في الرصيفين 6 و8 بميناء الملك فهد الصناعي.",
        items: [
          { label: "الأرصفة البحرية", value: "الرصيفان 6 و8" },
          { label: "أقصى طول للسفينة", value: "300م" },
          { label: "أقصى غاطس", value: "15.5م" },
          { label: "سعة الضخ", value: "4,500 م³/س" },
          { label: "شبكة الأنابيب", value: "+10,000 متر خطي" },
          { label: "أذرع التحميل", value: "عالية السرعة" },
        ],
      },
      landSide: {
        sectionLabel: "النقل البري",
        title: "اللوجستيات البرية",
        description: "منشأة تحميل شاحنات فعّالة رباعية الأرصفة مع تتبع GPS وتشغيل 24/7.",
        items: [
          "محطة تحميل شاحنات رباعية الأرصفة مع عداد آلي",
          "تنسيق إيفاد الأسطول عبر GPS",
          "إمكانية مناولة منتجات متعددة",
          "تشغيل تحميل متواصل 24/7",
          "التخزين في الموقع وإدارة المنتجات",
          "توثيق وفوترة متوافقة مع ZATCA",
        ],
      },
      technology: {
        sectionLabel: "البنية التحتية الرقمية",
        title: "التكنولوجيا والأتمتة",
        description: "إدارة محطة ذكية متكاملة مع SCADA للدقة والسلامة والكفاءة.",
        items: [
          { name: "SCADA", description: "التحكم الإشرافي واكتساب البيانات — تكامل كامل للمحطة" },
          { name: "ATG", description: "قياس المستوى الآلي للخزانات — المستوى والحرارة والكثافة في الوقت الفعلي" },
          { name: "VFD", description: "مشغلات التردد المتغير — تحكم موفر للطاقة في سرعة المضخات" },
          { name: "MOVs", description: "الصمامات الآلية — توجيه المنتجات بالتحكم عن بعد" },
        ],
      },
      sheq: {
        sectionLabel: "السلامة والصحة والبيئة والجودة",
        title: "الالتزام بمعايير SHEQ",
        description: "نهج لا يقبل التنازل تجاه السلامة والحماية البيئية في جميع العمليات.",
        items: [
          "عمليات محطة بحرية معتمدة OCIMF MTMSA",
          "نظام إدارة الجودة ISO 9001:2015",
          "الصحة والسلامة المهنية ISO 45001",
          "بروتوكولات الدفاع المدني والاستجابة للطوارئ",
          "عمليات تدقيق داخلية ومن طرف ثالث بشكل منتظم",
          "كوادر مدربة على NEBOSH / OSHA / IOSH",
          "أنظمة منع الانسكاب البيئي واحتوائه",
          "مراقبة وإعداد تقارير أداء HSE بشكل مستمر",
        ],
      },
      performance: {
        eyebrow: "بالأرقام",
        title: "الأداء التشغيلي",
        metrics: [
          { label: "السفن المرتسية" },
          { label: "إجمالي الإنتاجية" },
          { label: "طاقة التخزين" },
          { label: "معدل الضخ" },
        ],
      },
      expansion: {
        eyebrow: "النمو المستقبلي",
        title: "توسعة المرحلة الأولى",
        p1: "أطلقت بتروتانك برنامج توسعة المرحلة الأولى باستثمار +350M ر.س لزيادة طاقة التخزين وتعزيز البنية التحتية للمحطة لتلبية الطلب المتنامي على الطاقة إقليمياً ودولياً.",
        p2: "ستضيف التوسعة خزانات تخزين جديدة وترقية البنية التحتية البحرية وتوسيع قدرات اللوجستيات البرية — لتتموضع بتروتانك كمركز لوجستي رائد للطاقة على ساحل البحر الأحمر بحلول 2026.",
        investmentLabel: "الاستثمار",
        yearLabel: "الهدف",
        highlightsTitle: "أبرز التوسعة",
        highlights: [
          "خزانات تخزين سائل ضخم إضافية",
          "تعزيز البنية التحتية للأرصفة البحرية",
          "توسيع شبكة الأنابيب",
          "أرصفة تحميل شاحنات إضافية",
          "ترقية أنظمة SCADA والأتمتة",
          "تحسينات في الإدارة البيئية",
        ],
      },
      advantages: {
        label: "لماذا بتروتانك",
        title: "المزايا التنافسية",
        description: "ما يميز بتروتانك في سوق لوجستيات الطاقة السعودية والإقليمية.",
        cta: "شاركنا بتروتانك",
        items: [
          { title: "أول تخزين مقيد في ينبع", description: "بتروتانك هي أول وأوحد حاملة رخصة تخزين مقيد في ينبع — مما يمنح العملاء تخزين المنتجات معفاةً من الرسوم الجمركية وسهولة الوصول للتجارة الدولية." },
          { title: "موقع استراتيجي على البحر الأحمر", description: "تقع بتروتانك في ميناء الملك فهد الصناعي على البحر الأحمر، في ملتقى مسارات التجارة العالمية للطاقة بين أوروبا وآسيا وأفريقيا." },
          { title: "الامتثال الدولي", description: "الامتثال الكامل لمعايير ISO 9001:2015 وISO 45001 وOCIMF MTMSA يضمن للعملاء جودة الخدمة وفق مرجعيات دولية." },
          { title: "الأتمتة المتطورة", description: "العمليات المتكاملة مع SCADA وأنظمة ATG وVFD وMOV توفر رؤية آنية وكفاءة ودقة تشغيلية عبر جميع وظائف المحطة." },
        ],
      },
    },

    certificationsPage: {
      hero: {
        label: "المعايير والامتثال",
        title: "الشهادات والاعتمادات",
        description: "تحافظ بتروتانك على أعلى المعايير الدولية والامتثال التنظيمي السعودي الكامل — التزام بالتميز والسلامة والثقة.",
      },
      intro: "من معايير ISO وOCIMF الدولية إلى الاعتمادات الحكومية السعودية الكاملة وشهادات السلامة المهنية، يضمن إطار الامتثال في بتروتانك أن كل جانب من عملياتنا يلبّي أو يتجاوز أكثر المعايير الدولية صرامة.",
      international: {
        label: "الامتثال العالمي",
        title: "المعايير الدولية",
        items: [
          { name: "ISO 9001:2015", body: "المنظمة الدولية للتوحيد القياسي", description: "شهادة نظام إدارة الجودة التي تضمن تقديم الخدمات باستمرار ورضا العملاء والتحسين المستمر في جميع العمليات.", scope: "عمليات المحطة الكاملة", status: "سارية" },
          { name: "ISO 45001", body: "المنظمة الدولية للتوحيد القياسي", description: "معيار نظام إدارة الصحة والسلامة المهنية الذي يغطي إدارة المخاطر وسلامة العمال والتحسين المنهجي لأداء الصحة والسلامة.", scope: "جميع موظفي بتروتانك", status: "سارية" },
          { name: "OCIMF MTMSA", body: "المنتدى البحري الدولي لشركات النفط", description: "تقييم وإدارة المحطات البحرية — المرجع الدولي المعترف به لمعايير السلامة والتشغيل في المحطات البحرية.", scope: "عمليات المحطة البحرية", status: "سارية" },
          { name: "معايير API", body: "معهد البترول الأمريكي", description: "الامتثال للممارسات الموصى بها من API لتصميم وبناء وتشغيل وصيانة منشآت تخزين ومناولة البترول.", scope: "التخزين والمعدات", status: "ممتثل" },
        ],
      },
      saudi: {
        label: "الامتثال الحكومي",
        title: "الاعتمادات والتصاريح السعودية والتنظيمية",
        items: [
          { name: "وزارة الطاقة", abbr: "MOE", description: "اعتماد تنظيمي وطني لعمليات تخزين ولوجستيات البترول والبتروكيماويات." },
          { name: "اللجنة الوطنية للامتثال البيئي", abbr: "NCEC", description: "شهادة الامتثال البيئي لمناولة المواد الخطرة ومنع الانسكاب." },
          { name: "الهيئة السعودية للموانئ", abbr: "MAWANI", description: "اعتماد هيئة الميناء للعمليات في ميناء الملك فهد الصناعي، ينبع." },
          { name: "الدفاع المدني السعودي", abbr: "الدفاع المدني", description: "شهادة السلامة من الحرائق والاستجابة للطوارئ ومناولة المواد الخطرة." },
          { name: "هيئة الزكاة والضريبة والجمارك", abbr: "ZATCA", description: "رخصة التخزين المقيد الجمركي — الأولى في ينبع — التي تتيح تخزين المنتجات معفاةً من الرسوم الجمركية." },
          { name: "وزارة الموارد البشرية", abbr: "MOHRE", description: "شهادة الامتثال العمالي التي تغطي حقوق العمال والسلامة ومعايير التوظيف." },
        ],
      },
      safety: {
        label: "سلامة الموظفين",
        title: "شهادات السلامة المهنية",
        items: [
          { name: "NEBOSH", body: "المجلس الوطني لامتحانات السلامة والصحة المهنية", description: "الشهادة الدولية العامة في الصحة والسلامة المهنية — مُمنوحة لمتخصصي السلامة في بتروتانك للكفاءة المتقدمة في مجال الصحة والسلامة." },
          { name: "OSHA", body: "إدارة السلامة والصحة المهنية", description: "شهادة OSHA التي تغطي معايير السلامة الصناعية وتحديد المخاطر وإدارة بيئة العمل وفق المعايير الأمريكية والدولية." },
          { name: "IOSH", body: "مؤسسة الصحة والسلامة المهنية", description: "شهادة 'العمل بأمان' لجميع الموظفين — توفر أساساً من الوعي بالسلامة وإدارة المخاطر في جميع أنحاء المنظمة." },
          { name: "معايير ILO", body: "منظمة العمل الدولية", description: "الامتثال لاتفاقيات منظمة العمل الدولية بشأن سلامة بيئة العمل وحقوق العمال والصحة المهنية." },
        ],
      },
      compliance: {
        label: "نهجنا",
        title: "الالتزام بالامتثال",
        description: "كيف تحافظ بتروتانك على مستوى امتثالها وتحسّنه باستمرار.",
        items: [
          { title: "عمليات تدقيق منتظمة", description: "تُجرى عمليات تدقيق داخلية ربع سنوية وعمليات تدقيق من طرف ثالث سنوياً في جميع الأقسام التشغيلية وأنظمة السلامة." },
          { title: "تدريب الكوادر", description: "تدريب مستمر في مجال السلامة والمهارات المهنية لجميع الموظفين، بما يشمل برامج شهادات NEBOSH وOSHA وIOSH." },
          { title: "التحسين المستمر", description: "تضمن عمليات الإجراءات التصحيحية الرسمية ودورات مراجعة الإدارة التحسين المستمر في الجودة والسلامة والأداء البيئي." },
          { title: "التوثيق", description: "أنظمة توثيق رقمية شاملة تسجّل جميع الأنشطة التشغيلية وسجلات الصيانة وأدلة الامتثال." },
        ],
      },
    },

    contactPage: {
      hero: { label: "تواصل معنا", title: "اتصل ببتروتانك", description: "تواصل مع فريقنا في ميناء الملك فهد الصناعي، ينبع لمناقشة احتياجاتك في مجال لوجستيات الطاقة." },
      formTitle: "أرسل لنا رسالة",
      formSubtitle: "أكمل النموذج أدناه وسيرد عليك أحد أعضاء فريقنا في أقرب وقت.",
      fields: { name: "الاسم الكامل", email: "عنوان البريد الإلكتروني", company: "الشركة / المؤسسة", subject: "الموضوع", message: "الرسالة", placeholder: { name: "اسمك الكامل", email: "بريدك@الإلكتروني.com", company: "اسم الشركة", message: "أخبرنا عن استفسارك أو متطلباتك..." } },
      submitBtn: "إرسال الرسالة",
      sending: "جارٍ الإرسال…",
      successTitle: "تم إرسال الرسالة بنجاح",
      successMsg: "شكراً على تواصلك مع بتروتانك. سيراجع أحد أعضاء فريقنا استفسارك ويرد عليك خلال 1-2 يوم عمل.",
      sendAnother: "إرسال رسالة أخرى",
      selectSubject: "اختر موضوعاً",
      subjects: ["استفسار حلول التخزين", "العمليات البحرية", "الخلط والمعالجة", "لوجستيات الشاحنات", "الأتمتة والتحكم", "استفسار عام", "الشراكة وتطوير الأعمال", "أخرى"],
      infoTitle: "معلومات التواصل",
      infoSubtitle: "تواصل مع فريقنا مباشرة.",
      quickLinksTitle: "روابط سريعة",
      quickLinks: [
        { label: "حلول التخزين", href: "/services" },
        { label: "العمليات البحرية", href: "/services" },
        { label: "الشهادات", href: "/certifications" },
      ],
      locationTitle: "موقعنا",
      locationSub: "ميناء الملك فهد الصناعي (KFIP)، ينبع، المملكة العربية السعودية",
      urgentTitle: "هل تحتاج إلى دعم تشغيلي فوري؟",
      urgentBody: "فريق محطتنا متاح من الأحد إلى الخميس، من 8:00 صباحاً حتى 5:00 مساءً.",
      urgentNote: "للأمور التشغيلية العاجلة، يرجى التواصل معنا مباشرة عبر الهاتف أو البريد الإلكتروني.",
      info: [
        { label: "المكتب الرئيسي والمحطة", value: "ميناء الملك فهد الصناعي، ينبع، المملكة العربية السعودية", sub: "الرصيفان 6 و8، المنطقة الصناعية" },
        { label: "البريد الإلكتروني", value: "info@petrotank.com.sa", sub: "نرد خلال 1-2 يوم عمل" },
        { label: "الهاتف", value: "+966 14 XXX XXXX", sub: "متاح خلال ساعات العمل" },
        { label: "ساعات العمل", value: "الأحد – الخميس", sub: "8:00 ص – 5:00 م (بتوقيت الرياض)" },
      ],
    },
  },
} as const;

export type T = typeof content.en;

interface LangCtx {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: T;
  isRTL: boolean;
}

const LanguageContext = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("pt-locale", next);
      document.documentElement.setAttribute("dir", next === "ar" ? "rtl" : "ltr");
      document.documentElement.setAttribute("lang", next);
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("pt-locale") as Locale | null;
    if (saved === "ar" || saved === "en") setLocale(saved);
  }, [setLocale]);

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t: content[locale] as T, isRTL: locale === "ar" }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be inside <LanguageProvider>");
  return ctx;
}
