"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/contexts/LanguageContext";

export default function Header() {
  const { t, locale, setLocale } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hoverTop, setHoverTop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prevScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setIsScrolled(current > 80);
      if (current > 80) {
        setHidden(current > prevScrollY.current);
      } else {
        setHidden(false);
      }
      prevScrollY.current = current;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);
  useEffect(() => { if (hidden) setMobileOpen(false); }, [hidden]);

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.capabilities, href: "/capabilities" },
    { label: t.nav.certifications, href: "/certifications" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const toggleLang = () => setLocale(locale === "en" ? "ar" : ("en" as Locale));

  const navVisible = !hidden || hoverTop;

  return (
    <>
    {/* Hover zone — catches cursor at page-top when nav is hidden */}
    <div
      className="fixed inset-x-0 top-0 h-4 z-[52] pointer-events-auto"
      onMouseEnter={() => setHoverTop(true)}
      onMouseLeave={() => setHoverTop(false)}
      aria-hidden="true"
    />
    <header
      className={`fixed top-0 inset-x-0 z-50 ${
        isScrolled
          ? "border-b border-white/[0.08]"
          : "border-b border-transparent"
      }`}
      style={{
        transform: navVisible ? "translateY(0)" : "translateY(-100%)",
        backgroundColor: isScrolled ? "rgba(10, 25, 47, 0.85)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none",
        transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1), background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={() => setHoverTop(true)}
      onMouseLeave={() => setHoverTop(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* ── Logo ─────────────────────────────────── */}
          <Link href="/" aria-label="PETROTANK – Home" className="flex-shrink-0 cursor-pointer">
            <div className="relative h-12 w-44 sm:h-[52px] sm:w-48">
              <Image
                src="/images/logo.png"
                alt="PETROTANK"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* ── Desktop Nav ──────────────────────────── */}
          <nav
            className="hidden lg:flex items-center gap-0"
            aria-label="Main navigation"
          >
            {navLinks.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-200 cursor-pointer ${
                    active ? "text-white" : "text-white/75 hover:text-white"
                  }`}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-white"
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
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/25 text-white/75 hover:border-white/50 hover:text-white transition-all duration-200 cursor-pointer text-[13px] font-medium"
              aria-label={`Switch to ${locale === "en" ? "Arabic" : "English"}`}
            >
              <Globe size={14} aria-hidden="true" />
              {t.langToggleLabel}
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile drawer ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-white/[0.08]"
            style={{ backgroundColor: "rgba(10, 25, 47, 0.95)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
          >
            <nav className="max-w-7xl mx-auto px-4 py-3 space-y-0.5" aria-label="Mobile navigation">
              {navLinks.map(({ label, href }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      active ? "bg-white/10 text-white" : "text-white/75 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
              <div className="pt-2 pb-1 border-t border-white/[0.08] mt-2">
                <button
                  type="button"
                  onClick={toggleLang}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/20 text-sm font-medium text-white/75 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                >
                  <Globe size={16} className="opacity-75" />
                  {t.langToggleLabel}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
