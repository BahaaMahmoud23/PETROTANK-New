"use client";

import { useState } from "react";
import { Search, Edit2, Save, X, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import PageHeader from "@/components/dashboard/PageHeader";
import { mockSeoPages, type SeoPage } from "@/lib/mock-data";

export default function SeoPage() {
  const [pages, setPages] = useState<SeoPage[]>(mockSeoPages);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [editing, setEditing] = useState<string | null>(null);
  const [draft, setDraft] = useState<SeoPage | null>(null);

  function toggleExpand(slug: string) {
    setExpanded(expanded === slug ? null : slug);
    setEditing(null);
    setDraft(null);
  }

  function startEdit(page: SeoPage) {
    setEditing(page.pageSlug);
    setDraft({ ...page });
  }

  function cancelEdit() {
    setEditing(null);
    setDraft(null);
  }

  function saveEdit() {
    if (!draft) return;
    setPages(pages.map((p) => (p.pageSlug === draft.pageSlug ? { ...draft, updatedAt: new Date().toISOString().split("T")[0] } : p)));
    setEditing(null);
    setDraft(null);
  }

  return (
    <div>
      <PageHeader
        title="SEO Settings"
        description="Manage meta titles, descriptions, and indexing for all pages."
      />

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 text-sm text-amber-800">
        <strong>Phase 2 — Mock UI:</strong> Changes are stored in local state. Connect to database (Phase 3) to persist SEO settings and serve them dynamically to Next.js metadata.
      </div>

      <div className="space-y-3">
        {pages.map((page) => (
          <div key={page.pageSlug} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Header */}
            <button
              onClick={() => toggleExpand(page.pageSlug)}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50 transition"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#355486]/10">
                  <Search size={15} className="text-[#355486]" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-900 text-sm">{page.label}</p>
                  <p className="text-xs text-slate-400 truncate max-w-sm">{page.metaTitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${page.robotsIndex ? "bg-green-400" : "bg-red-400"}`} />
                  <span className="text-xs text-slate-400">
                    {page.robotsIndex ? "Indexed" : "No-index"}
                  </span>
                </div>
                <span className="text-xs text-slate-400">Updated {page.updatedAt}</span>
                <a
                  href={page.pageSlug}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition"
                >
                  <ExternalLink size={13} />
                </a>
                {expanded === page.pageSlug ? (
                  <ChevronUp size={16} className="text-slate-400" />
                ) : (
                  <ChevronDown size={16} className="text-slate-400" />
                )}
              </div>
            </button>

            {/* Expanded Content */}
            {expanded === page.pageSlug && (
              <div className="border-t border-slate-100 px-5 py-5">
                {editing !== page.pageSlug ? (
                  /* View Mode */
                  <div className="space-y-3">
                    {[
                      { label: "Meta Title", value: page.metaTitle },
                      { label: "Meta Description", value: page.metaDescription },
                      { label: "Keywords", value: page.keywords },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <p className="text-xs font-semibold text-slate-500 mb-0.5">{label}</p>
                        <p className="text-sm text-slate-700">{value}</p>
                      </div>
                    ))}
                    <div className="flex items-center gap-6 mt-2">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${page.robotsIndex ? "bg-green-400" : "bg-red-400"}`} />
                        <span className="text-xs text-slate-600">{page.robotsIndex ? "Index" : "No-Index"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${page.robotsFollow ? "bg-green-400" : "bg-red-400"}`} />
                        <span className="text-xs text-slate-600">{page.robotsFollow ? "Follow" : "No-Follow"}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => startEdit(page)}
                      className="flex items-center gap-1.5 text-sm font-medium text-[#355486] hover:text-[#2E4A78] transition mt-2"
                    >
                      <Edit2 size={13} />
                      Edit SEO
                    </button>
                  </div>
                ) : (
                  /* Edit Mode */
                  draft && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Meta Title <span className="text-slate-400 font-normal">({draft.metaTitle.length}/60)</span>
                        </label>
                        <input
                          type="text"
                          value={draft.metaTitle}
                          onChange={(e) => setDraft({ ...draft, metaTitle: e.target.value })}
                          maxLength={60}
                          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#355486]/30 focus:border-[#355486]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Meta Description <span className="text-slate-400 font-normal">({draft.metaDescription.length}/160)</span>
                        </label>
                        <textarea
                          value={draft.metaDescription}
                          onChange={(e) => setDraft({ ...draft, metaDescription: e.target.value })}
                          maxLength={160}
                          rows={3}
                          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#355486]/30 focus:border-[#355486]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Keywords</label>
                        <input
                          type="text"
                          value={draft.keywords}
                          onChange={(e) => setDraft({ ...draft, keywords: e.target.value })}
                          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#355486]/30 focus:border-[#355486]"
                          placeholder="keyword1, keyword2, keyword3"
                        />
                      </div>
                      <div className="flex items-center gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={draft.robotsIndex}
                            onChange={(e) => setDraft({ ...draft, robotsIndex: e.target.checked })}
                            className="w-4 h-4 rounded"
                          />
                          <span className="text-sm text-slate-700">Allow Indexing</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={draft.robotsFollow}
                            onChange={(e) => setDraft({ ...draft, robotsFollow: e.target.checked })}
                            className="w-4 h-4 rounded"
                          />
                          <span className="text-sm text-slate-700">Allow Following</span>
                        </label>
                      </div>
                      <div className="flex gap-2 pt-1">
                        <button
                          onClick={saveEdit}
                          className="flex items-center gap-1.5 bg-[#355486] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#2E4A78] transition"
                        >
                          <Save size={14} />
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="flex items-center gap-1.5 text-slate-600 border border-slate-200 text-sm px-4 py-2 rounded-lg hover:bg-slate-50 transition"
                        >
                          <X size={14} />
                          Cancel
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
