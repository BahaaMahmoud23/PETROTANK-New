"use client";

import { useState } from "react";
import { Upload, Trash2, Copy, Filter, ImageIcon, FileVideo, FileText, X } from "lucide-react";
import PageHeader from "@/components/dashboard/PageHeader";
import { mockMedia, MediaItem } from "@/lib/mock-data";

const typeIcons = {
  image: ImageIcon,
  video: FileVideo,
  pdf: FileText,
};

const typeColors = {
  image: "bg-blue-50 text-blue-600",
  video: "bg-purple-50 text-purple-600",
  pdf: "bg-red-50 text-red-600",
};

export default function MediaPage() {
  const [media, setMedia] = useState<MediaItem[]>(mockMedia);
  const [filter, setFilter] = useState<"all" | "image" | "video" | "pdf">("all");
  const [copied, setCopied] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = filter === "all" ? media : media.filter((m) => m.type === filter);

  function copyUrl(url: string, id: string) {
    navigator.clipboard.writeText(url).catch(() => {});
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  }

  function handleDelete() {
    if (deleteId) {
      setMedia(media.filter((m) => m.id !== deleteId));
      setDeleteId(null);
    }
  }

  return (
    <div>
      <PageHeader
        title="Media Library"
        description="Upload and manage images, videos, and documents."
        action={
          <label className="flex items-center gap-2 bg-[#355486] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#2E4A78] transition cursor-pointer">
            <Upload size={16} />
            Upload Media
            <input type="file" className="hidden" multiple accept="image/*,video/*,.pdf" />
          </label>
        }
      />

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-5 text-sm text-amber-800">
        <strong>Note:</strong> File uploads require Cloudinary or cloud storage integration. Currently showing local files from <code>/public/images/</code>.
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-5">
        <Filter size={14} className="text-slate-400" />
        {(["all", "image", "video", "pdf"] as const).map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`text-xs font-medium px-3 py-1.5 rounded-full capitalize transition ${
              filter === type
                ? "bg-[#355486] text-white"
                : "bg-white border border-slate-200 text-slate-600 hover:border-[#355486]/30"
            }`}
          >
            {type === "all" ? "All Files" : `${type}s`}
          </button>
        ))}
        <span className="ml-auto text-xs text-slate-400">{filtered.length} files</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filtered.map((item) => {
          const TypeIcon = typeIcons[item.type];
          return (
            <div
              key={item.id}
              className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Preview */}
              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden relative">
                {item.type === "image" ? (
                  <img
                    src={item.url}
                    alt={item.altText}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`p-4 rounded-xl ${typeColors[item.type]}`}>
                    <TypeIcon size={28} />
                  </div>
                )}

                {/* Overlay actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    onClick={() => copyUrl(item.url, item.id)}
                    className="p-2 bg-white rounded-lg hover:bg-slate-100 transition"
                    title="Copy URL"
                  >
                    {copied === item.id ? (
                      <span className="text-xs font-bold text-green-600 px-1">Copied!</span>
                    ) : (
                      <Copy size={14} className="text-slate-700" />
                    )}
                  </button>
                  <button
                    onClick={() => setDeleteId(item.id)}
                    className="p-2 bg-white rounded-lg hover:bg-red-50 transition"
                    title="Delete"
                  >
                    <Trash2 size={14} className="text-red-500" />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-3">
                <p className="text-xs font-semibold text-slate-900 truncate">{item.filename}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className={`text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded ${typeColors[item.type]}`}>
                    {item.type}
                  </span>
                  <span className="text-[10px] text-slate-400">{item.size}</span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Upload Placeholder */}
        <label className="aspect-video flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:border-[#355486]/40 hover:bg-slate-50/50 transition group col-span-1 min-h-[120px]">
          <Upload size={20} className="text-slate-300 group-hover:text-[#355486]/50 mb-1" />
          <span className="text-xs text-slate-400">Upload</span>
          <input type="file" className="hidden" multiple accept="image/*,video/*,.pdf" />
        </label>
      </div>

      {/* Delete Confirmation */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
            <h2 className="font-bold text-slate-900 mb-2">Delete File?</h2>
            <p className="text-sm text-slate-500 mb-5">This file will be permanently removed from the library.</p>
            <div className="flex gap-3">
              <button onClick={handleDelete} className="flex-1 bg-red-500 text-white text-sm font-semibold py-2 rounded-lg hover:bg-red-600 transition">Delete</button>
              <button onClick={() => setDeleteId(null)} className="flex-1 border border-slate-200 text-sm text-slate-600 py-2 rounded-lg hover:bg-slate-50 transition">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
