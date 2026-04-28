"use client";

import { useState } from "react";
import { FileText, Edit2, Eye, ChevronDown, ChevronUp, Save, X } from "lucide-react";
import PageHeader from "@/components/dashboard/PageHeader";

const pages = [
  {
    slug: "/",
    label: "Home",
    sections: ["Hero", "Stats Bar", "About Snapshot", "Facility Metrics", "Core Values", "Services Preview", "Certifications Preview", "Growth Initiatives", "Contact CTA"],
  },
  {
    slug: "/about",
    label: "About Us",
    sections: ["Our Story", "Mission & Vision", "Core Values", "Milestones Timeline", "Facilities Overview", "Commitment Section"],
  },
  {
    slug: "/services",
    label: "Services",
    sections: ["Service Tabs", "Service Details", "Features List", "Technical Specifications", "CTA Section"],
  },
  {
    slug: "/capabilities",
    label: "Capabilities",
    sections: ["Infrastructure", "Marine Infrastructure", "Land-Side Logistics", "Technology & Automation", "SHEQ", "Operational Performance"],
  },
  {
    slug: "/certifications",
    label: "Certifications",
    sections: ["International Standards", "Saudi Regulatory Approvals", "Occupational Safety", "Compliance Commitment"],
  },
  {
    slug: "/contact",
    label: "Contact",
    sections: ["Contact Form", "Contact Information", "Google Map", "Business Hours"],
  },
];

type EditState = { pageSlug: string; section: string } | null;

export default function ContentPage() {
  const [expanded, setExpanded] = useState<string | null>("/");
  const [editing, setEditing] = useState<EditState>(null);
  const [draftValue, setDraftValue] = useState("");

  function togglePage(slug: string) {
    setExpanded(expanded === slug ? null : slug);
    setEditing(null);
  }

  function startEdit(pageSlug: string, section: string) {
    setEditing({ pageSlug, section });
    setDraftValue(`[${section}] content — connect to database to edit live content.`);
  }

  function cancelEdit() {
    setEditing(null);
    setDraftValue("");
  }

  return (
    <div>
      <PageHeader
        title="Pages Content"
        description="Manage editable content for all public website pages."
      />

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 text-sm text-amber-800">
        <strong>Phase 2 — Mock UI:</strong> Form editing is stubbed. Connect Prisma + PostgreSQL (Phase 3) to enable live content editing.
      </div>

      <div className="space-y-3">
        {pages.map((page) => (
          <div key={page.slug} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Page Header */}
            <button
              onClick={() => togglePage(page.slug)}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50 transition"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#355486]/10">
                  <FileText size={16} className="text-[#355486]" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-900 text-sm">{page.label}</p>
                  <p className="text-xs text-slate-400">{page.slug}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400">{page.sections.length} sections</span>
                <a
                  href={page.slug}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition"
                >
                  <Eye size={14} />
                </a>
                {expanded === page.slug ? (
                  <ChevronUp size={16} className="text-slate-400" />
                ) : (
                  <ChevronDown size={16} className="text-slate-400" />
                )}
              </div>
            </button>

            {/* Sections */}
            {expanded === page.slug && (
              <div className="border-t border-slate-100 divide-y divide-slate-100">
                {page.sections.map((section) => {
                  const isEditing =
                    editing?.pageSlug === page.slug && editing?.section === section;

                  return (
                    <div key={section} className="px-5 py-3">
                      {!isEditing ? (
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-slate-700">{section}</p>
                          <button
                            onClick={() => startEdit(page.slug, section)}
                            className="flex items-center gap-1.5 text-xs text-[#355486] hover:text-[#2E4A78] font-medium transition"
                          >
                            <Edit2 size={12} />
                            Edit
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-slate-900">{section}</p>
                          <textarea
                            value={draftValue}
                            onChange={(e) => setDraftValue(e.target.value)}
                            rows={3}
                            className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#355486]/30 focus:border-[#355486] text-slate-700"
                          />
                          <div className="flex gap-2">
                            <button className="flex items-center gap-1.5 bg-[#355486] text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-[#2E4A78] transition">
                              <Save size={12} />
                              Save
                            </button>
                            <button
                              onClick={cancelEdit}
                              className="flex items-center gap-1.5 text-slate-500 hover:text-slate-700 text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition"
                            >
                              <X size={12} />
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
