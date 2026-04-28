"use client";

import { useState } from "react";
import { Save, Globe, Mail, Phone, MapPin, Clock, Link2, FileText } from "lucide-react";
import PageHeader from "@/components/dashboard/PageHeader";
import { mockSiteSettings } from "@/lib/mock-data";

export default function SettingsPage() {
  const [settings, setSettings] = useState(mockSiteSettings);
  const [saved, setSaved] = useState(false);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  function update(key: keyof typeof settings, value: string) {
    setSettings({ ...settings, [key]: value });
  }

  const sections = [
    {
      title: "General",
      icon: Globe,
      fields: [
        { label: "Site Name", key: "siteName" as const, placeholder: "e.g. PETROTANK" },
        { label: "Company Full Name", key: "companyName" as const, placeholder: "Legal company name" },
        { label: "Footer Text", key: "footerText" as const, placeholder: "© 2026 PETROTANK. All rights reserved." },
      ],
    },
    {
      title: "Contact Information",
      icon: Mail,
      fields: [
        { label: "Email Address", key: "email" as const, placeholder: "info@example.com" },
        { label: "Phone Number", key: "phone" as const, placeholder: "+966 14 000 0000" },
        { label: "Address", key: "address" as const, placeholder: "Full address" },
        { label: "Business Hours", key: "businessHours" as const, placeholder: "Sun – Thu: 8AM – 5PM" },
      ],
    },
    {
      title: "Social Links",
      icon: Link2,
      fields: [
        { label: "LinkedIn URL", key: "socialLinkedIn" as const, placeholder: "https://linkedin.com/company/..." },
        { label: "Twitter/X URL", key: "socialTwitter" as const, placeholder: "https://twitter.com/..." },
      ],
    },
    {
      title: "Default SEO",
      icon: FileText,
      fields: [
        { label: "Default SEO Title", key: "defaultSeoTitle" as const, placeholder: "Site-wide default title" },
        { label: "Default SEO Description", key: "defaultSeoDescription" as const, placeholder: "Site-wide default description" },
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        title="Settings"
        description="Configure global website settings and company information."
      />

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 text-sm text-amber-800">
        <strong>Phase 2 — Mock UI:</strong> Settings are saved in local state. Database integration (Phase 3) will persist and serve these values dynamically.
      </div>

      <form onSubmit={handleSave} className="space-y-5">
        {sections.map(({ title, icon: Icon, fields }) => (
          <div key={title} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
              <div className="p-2 rounded-lg bg-[#355486]/10">
                <Icon size={15} className="text-[#355486]" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm">{title}</h3>
            </div>
            <div className="px-5 py-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fields.map(({ label, key, placeholder }) => (
                <div key={key} className={key === "address" || key === "defaultSeoDescription" ? "sm:col-span-2" : ""}>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">{label}</label>
                  {key === "address" || key === "defaultSeoDescription" ? (
                    <textarea
                      value={settings[key]}
                      onChange={(e) => update(key, e.target.value)}
                      rows={2}
                      placeholder={placeholder}
                      className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#355486]/30 focus:border-[#355486]"
                    />
                  ) : (
                    <input
                      type="text"
                      value={settings[key]}
                      onChange={(e) => update(key, e.target.value)}
                      placeholder={placeholder}
                      className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#355486]/30 focus:border-[#355486]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Google Maps */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
            <div className="p-2 rounded-lg bg-[#355486]/10">
              <MapPin size={15} className="text-[#355486]" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">Google Maps Embed</h3>
          </div>
          <div className="px-5 py-5">
            <label className="block text-xs font-semibold text-slate-700 mb-1">Embed URL</label>
            <input
              type="text"
              value={settings.googleMapEmbed}
              onChange={(e) => update("googleMapEmbed", e.target.value)}
              placeholder="https://maps.google.com/maps?q=...&output=embed"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#355486]/30 focus:border-[#355486]"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#355486] text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-[#2E4A78] transition"
          >
            <Save size={15} />
            Save Settings
          </button>
          {saved && (
            <span className="text-sm text-green-600 font-medium animate-pulse">
              ✓ Settings saved successfully
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
