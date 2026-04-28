"use client";

import { useRouter } from "next/navigation";
import { Menu, Bell, LogOut, User, ChevronDown } from "lucide-react";
import { useState } from "react";

interface TopbarProps {
  onMenuToggle: () => void;
  title: string;
}

export default function Topbar({ onMenuToggle, title }: TopbarProps) {
  const router = useRouter();
  const [profileOpen, setProfileOpen] = useState(false);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-6 shrink-0">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition text-slate-600"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-base font-semibold text-slate-900">{title}</h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-slate-100 transition text-slate-500 hover:text-slate-700">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-lg hover:bg-slate-100 transition"
          >
            <div className="w-7 h-7 rounded-full bg-[#355486] flex items-center justify-center">
              <User size={14} className="text-white" />
            </div>
            <span className="text-sm font-medium text-slate-700 hidden sm:block">Admin</span>
            <ChevronDown size={14} className="text-slate-400" />
          </button>

          {profileOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setProfileOpen(false)}
              />
              <div className="absolute right-0 mt-1 w-48 bg-white border border-slate-200 rounded-xl shadow-lg z-20 overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-100">
                  <p className="text-xs font-semibold text-slate-900">Administrator</p>
                  <p className="text-xs text-slate-500 truncate">admin@petrotank.com</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition"
                >
                  <LogOut size={14} />
                  Sign out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
