"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/contexts/LanguageContext";

export default function Header() {
  const { t, locale, setLocale, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.capabilities, href: "/capabilities" },
    { label: t.nav.certifications, href: "/certifications" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const toggleLang = () => setLocale(locale === "en" ? "ar" : ("en" as Locale));

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-sm border-b border-border" : "border-b border-border/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* ── Logo ─────────────────────────────────── */}
          <Link href="/" aria-label="PETROTANK – Home" className="flex-shrink-0 cursor-pointer">
            <div className="relative h-11 w-40 sm:h-12 sm:w-44">
              <Image
                src="/images/logo.jpeg"
                alt="PETROTANK"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* ── Desktop Nav ──────────────────────────── */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            aria-label="Main navigation"
          >
            {navLinks.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 text-[14px] font-medium transition-colors duration-200 cursor-pointer ${
                    active ? "text-primary" : "text-ink hover:text-primary"
                  }`}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-primary"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Language toggle + mobile menu ─────────── */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              type="button"
              onClick={toggleLang}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border hover:border-primary/30 hover:bg-surface-blue transition-all duration-200 cursor-pointer group"
              aria-label={`Switch to ${locale === "en" ? "Arabic" : "English"}`}
            >
              <Globe size={15} className="text-muted group-hover:text-primary transition-colors" />
              <span className="text-[13px] font-medium text-ink group-hover:text-primary transition-colors">
                {t.langToggleLabel}
              </span>
              <ChevronDown size={13} className="text-muted group-hover:text-primary transition-colors" />
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-ink hover:bg-canvas transition-colors cursor-pointer"
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile drawer ────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white border-t border-border shadow-lg"
          >
            <nav className="max-w-7xl mx-auto px-4 py-3 space-y-0.5" aria-label="Mobile navigation">
              {navLinks.map(({ label, href }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      active ? "bg-surface-blue text-primary" : "text-ink hover:bg-canvas hover:text-primary"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
              <div className="pt-2 pb-1 border-t border-border mt-2">
                <button
                  type="button"
                  onClick={toggleLang}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border text-sm font-medium text-ink hover:bg-canvas transition-colors cursor-pointer"
                >
                  <Globe size={16} className="text-muted" />
                  {t.langToggleLabel}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
