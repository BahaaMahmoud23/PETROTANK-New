"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Layers,
  Award,
  ImageIcon,
  MessageCircle,
  BarChart2,
  Search,
  Settings,
  X,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin-ptk-2026", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/admin-ptk-2026/content", label: "Pages Content", icon: FileText },
  { href: "/admin-ptk-2026/services", label: "Services", icon: Layers },
  { href: "/admin-ptk-2026/certifications", label: "Certifications", icon: Award },
  { href: "/admin-ptk-2026/media", label: "Media Library", icon: ImageIcon },
  { href: "/admin-ptk-2026/messages", label: "Messages", icon: MessageCircle, badge: 2 },
  { href: "/admin-ptk-2026/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/admin-ptk-2026/seo", label: "SEO Settings", icon: Search },
  { href: "/admin-ptk-2026/settings", label: "Settings", icon: Settings },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href) && href !== "/admin-ptk-2026";
  };

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-[#1e293b] text-white z-30 flex flex-col transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0 lg:static lg:z-auto"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#355486] flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-sm leading-none">PETROTANK</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Admin Portal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-slate-400 hover:text-white transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 px-3 mb-2">
            Main
          </p>
          <ul className="space-y-0.5">
            {navItems.map(({ href, label, icon: Icon, exact, badge }) => {
              const active = isActive(href, exact) || (exact && pathname === href);
              const activeCheck = exact
                ? pathname === href
                : pathname === href || pathname.startsWith(href + "/");

              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                      activeCheck
                        ? "bg-[#355486] text-white"
                        : "text-slate-300 hover:bg-white/8 hover:text-white"
                    )}
                  >
                    <Icon size={17} className="shrink-0" />
                    <span className="flex-1">{label}</span>
                    {badge && (
                      <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        {badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10">
          <p className="text-[10px] text-slate-500">v1.0.0 · Phase 2</p>
        </div>
      </aside>
    </>
  );
}
