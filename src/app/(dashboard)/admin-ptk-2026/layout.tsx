"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

const pageTitles: Record<string, string> = {
  "/admin-ptk-2026": "Dashboard Overview",
  "/admin-ptk-2026/content": "Pages Content",
  "/admin-ptk-2026/services": "Services",
  "/admin-ptk-2026/certifications": "Certifications",
  "/admin-ptk-2026/media": "Media Library",
  "/admin-ptk-2026/messages": "Contact Messages",
  "/admin-ptk-2026/analytics": "Analytics",
  "/admin-ptk-2026/seo": "SEO Settings",
  "/admin-ptk-2026/settings": "Settings",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Dashboard";

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Topbar
          onMenuToggle={() => setSidebarOpen(true)}
          title={title}
        />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
