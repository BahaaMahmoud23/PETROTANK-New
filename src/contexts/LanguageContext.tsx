"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export type Locale = "en" | "ar";

/* ─────────────────────────────────────────────────────────
   Full bilingual content dictionary
   ───────────────────────────────────────────────────────── */
export const content = {
  en: {
    /* ── Navigation ──────────────────────────────── */
    nav: {
      home: "Home", about: "About Us", services: "Services",
      capabilities: "Capabilities", certifications: "Certifications", contact: "Contact",
    },
    langToggleLabel: "العربية",

    /* ── Hero ─────────────────────────────────────── */
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

    /* ── Stats bar (homepage floating) ──────────── */
    statsBar: [
      { value: "669+", label: "Vessels Berthed" },
      { value: "13.8M MT", label: "Total Volume Handled" },
      { value: "SAR 270M+", label: "Invested in Infrastructure" },
      { value: "24/7", label: "Operations" },
    ],

    /* ── About snapshot (homepage) ───────────────── */
    about: {
      label: "About PetroTank",
      title: "Pioneering Excellence in Energy Logistics",
      p1: "Founded in 2020, PetroTank is the first license holder for bonded storage in Yanbu, operating a state-of-the-art facility at King Fahd Industrial Port.",
      p2: "We deliver world-class petroleum storage, blending, and marine logistics solutions that meet the highest international standards.",
      cta: "Learn more about us",
    },

    /* ── Facility metrics bar ─────────────────────── */
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

    /* ── Core values ──────────────────────────────── */
    coreValuesSection: {
      eyebrow: "Our Principles",
      title: "Core Values",
      description: "The principles that guide every decision, every operation, and every relationship at PETROTANK.",
      items: [
        { name: "Collaboration", description: "Building strong partnerships with clients, partners, and communities to deliver integrated energy solutions." },
        { name: "Excellence", description: "Pursuing the highest standards in every operation — from terminal management to customer service." },
        { name: "Integrity", description: "Operating with transparency, honesty, and ethical responsibility across all business relationships." },
        { name: "Innovation", description: "Embracing advanced technology, automation, and continuous improvement to lead the energy logistics sector." },
        { name: "Safety", description: "Maintaining the highest safety standards with zero-compromise policies to protect people, assets, and the environment." },
      ],
    },

    /* ── Services (homepage section) ─────────────── */
    servicesHome: {
      eyebrow: "What We Offer",
      title: "Our Service Areas",
      ctaLink: "View All Services",
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

    /* ── Certifications (homepage section) ───────── */
    certificationsHome: {
      eyebrow: "Compliance & Standards",
      title: "Certified & Approved",
      ctaLink: "Full Certifications List",
      trust: "All certifications are maintained through regular third-party audits, continuous training programs, and a company-wide commitment to operational excellence.",
    },

    /* ── Growth initiatives ───────────────────────── */
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

    /* ── Stats section ────────────────────────────── */
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

    /* ── Contact CTA (homepage) ───────────────────── */
    contactCtaSection: {
      eyebrow: "Get In Touch",
      title: "Ready to Work with Us?",
      description: "Whether you need bulk liquid storage, marine operations, or integrated energy logistics, our team at King Fahd Industrial Port is ready to support your operations.",
      cta1: "Contact Us",
      cta2: "Our Services",
      info: [
        { label: "Head Office", value: "King Fahd Industrial Port, Yanbu, Saudi Arabia", sub: "" },
        { label: "Email", value: "info@petrotank.com.sa", sub: "" },
        { label: "Business Hours", value: "Sunday – Thursday", sub: "8:00 AM – 5:00 PM (AST)" },
      ],
    },

    /* ── Footer ───────────────────────────────────── */
    footer: {
      company: "Company", services: "Services", contact: "Contact",
      description: "Saudi Arabia's leading bulk liquid terminal — 114,000 m³ storage capacity at King Fahd Industrial Port, Yanbu.",
      rights: "All rights reserved.",
      tagline: "Petroleum Storage · Marine Operations · Pipeline Transport · Yanbu, Saudi Arabia",
    },

    /* ── Page: About ──────────────────────────────── */
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
        missionText: "To provide world-class petroleum and petrochemical storage, marine operations, and logistics services from our strategically located facility at King Fahd Industrial Port — enabling safe, efficient, and compliant energy trade across the Red Sea and beyond.",
        visionLabel: "Our Vision",
        visionText: "To be recognized as the leading integrated energy logistics hub in the MENA region — setting industry benchmarks for operational excellence, safety, and sustainable growth aligned with Saudi Vision 2030.",
      },
      milestones: {
        label: "Our Journey",
        title: "Key Milestones",
        items: [
          { year: "2020", title: "Company Founded", description: "PETROTANK established in Yanbu, obtaining the first bonded storage license in the region." },
          { year: "2021", title: "ISO Certifications", description: "Achieved ISO 9001:2015 Quality Management and ISO 45001 Occupational Health & Safety certifications." },
          { year: "2022", title: "OCIMF MTMSA", description: "Earned the internationally recognized OCIMF Marine Terminal Management and Self Assessment certification." },
          { year: "2023", title: "Operational Excellence", description: "Surpassed 669 vessel berthing operations with 13.8M MT cumulative throughput handled." },
          { year: "2024", title: "Phase 1 Expansion", description: "Initiated the SAR 350M+ Phase 1 expansion program to increase storage capacity and infrastructure." },
          { year: "2025", title: "Vision 2030 Alignment", description: "Fully integrated into Saudi Arabia's Vision 2030 strategic framework, contributing to national energy security." },
        ],
      },
      values: {
        label: "What We Stand For",
        title: "Core Values",
        names: ["Collaboration", "Excellence", "Integrity", "Innovation", "Safety"],
      },
      facilities: {
        label: "Infrastructure",
        title: "Facility Overview",
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
    },

    /* ── Page: Services ───────────────────────────── */
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

    /* ── Page: Contact ────────────────────────────── */
    contactPage: {
      hero: { label: "Get In Touch", title: "Contact PETROTANK", description: "Connect with our team at King Fahd Industrial Port, Yanbu to discuss your energy logistics needs." },
      formTitle: "Send Us a Message",
      formSubtitle: "Fill in the form and our team will get back to you within 1–2 business days.",
      fields: { name: "Full Name", email: "Email Address", company: "Company / Organization", subject: "Subject", message: "Message", placeholder: { name: "Your full name", email: "your@email.com", company: "Company name", message: "Tell us about your inquiry or requirements..." } },
      submitBtn: "Send Message",
      sending: "Sending…",
      successTitle: "Message Sent",
      successMsg: "Thank you for your message. We'll get back to you within 1–2 business days.",
      sendAnother: "Send Another Message",
      subjects: ["Storage Solutions Inquiry", "Marine Operations", "Blending & Processing", "Truck Logistics", "Automation & Control", "General Inquiry", "Partnership & Business Development", "Other"],
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
        { value: "الرصيفان 6 و 8", label: "سفن حتى 300م طولاً" },
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
        { value: "الرصيفان 6 و 8", label: "الأرصفة البحرية", sub: "300م طولاً / 15.5م غاطساً" },
        { value: "4,500 م³/س", label: "معدل الضخ", sub: "تحميل وتفريغ" },
        { value: "OCIMF MTMSA", label: "الشهادة", sub: "ISO 9001 · ISO 45001" },
      ],
    },

    coreValuesSection: {
      eyebrow: "مبادئنا",
      title: "القيم الجوهرية",
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
      featured: {
        tagline: "قدرتنا الأساسية",
        title: "حلول التخزين",
        description: "تخزين سائل ضخم بطاقة 114,000 م³ عبر 8 خزانات متخصصة مع أنظمة ATG المتطورة وأنظمة التسخين واسترداد البخار في ميناء الملك فهد الصناعي.",
        specs: ["طاقة 114,000 م³", "8 خزانات", "تشغيل 24/7", "مراقبة ATG"],
        cta: "استكشف التخزين",
      },
      items: [
        { title: "العمليات البحرية", description: "الرصيفان 6 و 8 — 300م طولاً / 15.5م غاطساً، أذرع تحميل عالية السرعة بسعة 4,500 م³/س." },
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
        { label: "المكتب الرئيسي", value: "ميناء الملك فهد الصناعي، ينبع، المملكة العربية السعودية", sub: "" },
        { label: "البريد الإلكتروني", value: "info@petrotank.com.sa", sub: "" },
        { label: "ساعات العمل", value: "الأحد – الخميس", sub: "8:00 ص – 5:00 م" },
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
        missionText: "تقديم خدمات تخزين ولوجستيات نفطية وبتروكيماوية وعمليات بحرية بمستوى عالمي من منشأتنا الاستراتيجية في ميناء الملك فهد الصناعي — لتمكين التجارة الآمنة والفعّالة والممتثلة للمعايير عبر البحر الأحمر وما وراءه.",
        visionLabel: "رؤيتنا",
        visionText: "أن نكون المركز اللوجستي المتكامل للطاقة الرائد في منطقة الشرق الأوسط وشمال أفريقيا — نضع معايير المرجعية للتميز التشغيلي والسلامة والنمو المستدام المتوافق مع رؤية السعودية 2030.",
      },
      milestones: {
        label: "مسيرتنا",
        title: "المحطات الرئيسية",
        items: [
          { year: "2020", title: "تأسيس الشركة", description: "تأسست بتروتانك في ينبع وحصلت على أول رخصة تخزين مقيد في المنطقة." },
          { year: "2021", title: "شهادات ISO", description: "حصلت على شهادتي ISO 9001:2015 لإدارة الجودة وISO 45001 للصحة والسلامة المهنية." },
          { year: "2022", title: "OCIMF MTMSA", description: "نالت شهادة تقييم وإدارة المحطات البحرية المعترف بها دولياً من OCIMF." },
          { year: "2023", title: "التميز التشغيلي", description: "تجاوزت 669 عملية إرساء للسفن بإجمالي إنتاجية 13.8 مليون طن مناولة." },
          { year: "2024", title: "توسعة المرحلة الأولى", description: "إطلاق برنامج التوسعة بالمرحلة الأولى باستثمار +350M ر.س لزيادة طاقة التخزين والبنية التحتية." },
          { year: "2025", title: "التوافق مع رؤية 2030", description: "اندماج كامل في الإطار الاستراتيجي لرؤية المملكة العربية السعودية 2030." },
        ],
      },
      values: {
        label: "ما نؤمن به",
        title: "القيم الجوهرية",
        names: ["التعاون", "التميز", "النزاهة", "الابتكار", "السلامة"],
      },
      facilities: {
        label: "البنية التحتية",
        title: "نظرة عامة على المنشأة",
        items: [
          { label: "طاقة التخزين", value: "114,000 م³", sub: "إجمالي التخزين السائل الضخم" },
          { label: "خزانات التخزين", value: "8 خزانات", sub: "6 FCR + 2 FD" },
          { label: "الأرصفة البحرية", value: "الرصيفان 6 و 8", sub: "ميناء الملك فهد الصناعي" },
          { label: "معدل الضخ", value: "4,500 م³/س", sub: "تحميل / تفريغ بحري" },
          { label: "شبكة الأنابيب", value: "+10,000 م", sub: "أمتار خطية من الأنابيب" },
          { label: "طاقة السفينة", value: "300م طولاً", sub: "15.5م غاطساً" },
        ],
        ctaLabel: "استكشف قدراتنا",
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
          description: "تعمل عمليات بتروتانك بنظام بنية تحتية متكاملة للأتمتة والتحكم يشمل SCADA وأنظمة ATG ومشغلات التردد المتغير (VFD) والصمامات ذات التشغيل الآلي (MOVs). تضمن هذه الخلفية التقنية تحكماً تشغيلياً دقيقاً ورؤية بيانات شاملة عبر جميع أنشطة المحطة.",
          features: ["نظام تحكم وإشراف SCADA", "قياس المستوى الآلي للخزانات (ATG)", "مشغلات التردد المتغير (VFD)", "الصمامات ذات التشغيل الآلي (MOVs)", "إدارة المخزون الآنية", "لوحة مراقبة عن بعد", "أنظمة إنذار وسلامة آلية", "إدارة الصيانة الرقمية"],
          specs: [{ label: "نظام التحكم", value: "SCADA متكامل" }, { label: "قياس المستوى", value: "ATG (آلي)" }, { label: "التحكم بالضخ", value: "VFD" }, { label: "التحكم بالصمامات", value: "MOVs" }, { label: "المراقبة", value: "24/7 عن بعد" }, { label: "إدارة البيانات", value: "رقمي آني" }],
        },
      ],
    },

    contactPage: {
      hero: { label: "تواصل معنا", title: "اتصل ببتروتانك", description: "تواصل مع فريقنا في ميناء الملك فهد الصناعي، ينبع لمناقشة احتياجاتك في مجال لوجستيات الطاقة." },
      formTitle: "أرسل لنا رسالة",
      formSubtitle: "أكمل النموذج وسيرد عليك فريقنا خلال 1-2 يوم عمل.",
      fields: { name: "الاسم الكامل", email: "عنوان البريد الإلكتروني", company: "الشركة / المؤسسة", subject: "الموضوع", message: "الرسالة", placeholder: { name: "اسمك الكامل", email: "بريدك@الإلكتروني.com", company: "اسم الشركة", message: "أخبرنا عن استفسارك أو متطلباتك..." } },
      submitBtn: "إرسال الرسالة",
      sending: "جارٍ الإرسال…",
      successTitle: "تم إرسال الرسالة",
      successMsg: "شكراً على رسالتك. سيرد عليك فريقنا خلال 1-2 يوم عمل.",
      sendAnother: "إرسال رسالة أخرى",
      subjects: ["استفسار حلول التخزين", "العمليات البحرية", "الخلط والمعالجة", "لوجستيات الشاحنات", "الأتمتة والتحكم", "استفسار عام", "الشراكة وتطوير الأعمال", "أخرى"],
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
