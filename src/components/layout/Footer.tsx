"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const certBadges = ["ISO 9001:2015", "ISO 45001", "OCIMF MTMSA", "Customs Bonded"];

export default function Footer() {
  const { t, isRTL } = useLanguage();
  const year = new Date().getFullYear();

  const companyLinks = [
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.capabilities, href: "/capabilities" },
    { name: t.nav.certifications, href: "/certifications" },
    { name: t.nav.contact, href: "/contact" },
  ];

  const serviceLinks = [
    { name: isRTL ? "حلول التخزين" : "Storage Solutions", href: "/services" },
    { name: isRTL ? "الخلط والمعالجة" : "Blending & Processing", href: "/services" },
    { name: isRTL ? "العمليات البحرية" : "Marine Operations", href: "/services" },
    { name: isRTL ? "لوجستيات الشاحنات" : "Truck Logistics", href: "/services" },
    { name: isRTL ? "الأتمتة والتحكم" : "Automation & Control", href: "/services" },
  ];

  return (
    <footer className="bg-ink text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 cursor-pointer" aria-label="PETROTANK Home">
              <div className="relative h-12 w-44 sm:h-14 sm:w-52">
                <Image
                  src="/images/logo.jpeg"
                  alt="PETROTANK"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-white/55 text-sm leading-relaxed max-w-sm mb-6">
              {t.footer.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {certBadges.map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-medium text-teal/75 border border-teal/25 rounded-md px-2.5 py-1"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs font-semibold text-white/35 uppercase tracking-widest mb-5">
              {t.footer.company}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href + link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-teal transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service links */}
          <div>
            <h3 className="text-xs font-semibold text-white/35 uppercase tracking-widest mb-5">
              {t.footer.services}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-teal transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-xs font-semibold text-white/35 uppercase tracking-widest mb-5">
              {t.footer.contact}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/55">
                <MapPin size={14} className="text-teal shrink-0 mt-0.5" aria-hidden="true" />
                <span>{isRTL ? "ميناء الملك فهد الصناعي، ينبع، المملكة العربية السعودية" : "King Fahd Industrial Port, Yanbu, Saudi Arabia"}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/55">
                <Mail size={14} className="text-teal shrink-0" aria-hidden="true" />
                <a href="mailto:info@petrotank.com.sa" className="hover:text-teal transition-colors cursor-pointer">
                  info@petrotank.com.sa
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/55">
                <Clock size={14} className="text-teal shrink-0 mt-0.5" aria-hidden="true" />
                <span>{isRTL ? "الأحد – الخميس: 8:00 ص – 5:00 م" : "Sun – Thu: 8:00 AM – 5:00 PM"}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/28">
            &copy; {year} PETROTANK. {t.footer.rights}
          </p>
          <p className="text-xs text-white/18">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
