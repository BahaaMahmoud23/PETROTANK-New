"use client";

import { useState } from "react";
import {
  Mail,
  Archive,
  Trash2,
  MailOpen,
  Search,
  Filter,
  Download,
  X,
} from "lucide-react";
import PageHeader from "@/components/dashboard/PageHeader";
import { mockMessages, Message } from "@/lib/mock-data";

const statusColors: Record<Message["status"], string> = {
  new: "bg-blue-50 text-blue-700",
  read: "bg-slate-100 text-slate-600",
  archived: "bg-amber-50 text-amber-700",
};

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [filter, setFilter] = useState<"all" | Message["status"]>("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Message | null>(null);

  const filtered = messages.filter((m) => {
    const matchesFilter = filter === "all" || m.status === filter;
    const matchesSearch =
      !search ||
      m.fullName.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      m.subject.toLowerCase().includes(search.toLowerCase()) ||
      m.company.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  function markRead(id: string) {
    setMessages(messages.map((m) => (m.id === id ? { ...m, status: "read" } : m)));
  }

  function archive(id: string) {
    setMessages(messages.map((m) => (m.id === id ? { ...m, status: "archived" } : m)));
  }

  function remove(id: string) {
    setMessages(messages.filter((m) => m.id !== id));
    if (selected?.id === id) setSelected(null);
  }

  function openMessage(msg: Message) {
    setSelected(msg);
    if (msg.status === "new") markRead(msg.id);
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  const counts = {
    all: messages.length,
    new: messages.filter((m) => m.status === "new").length,
    read: messages.filter((m) => m.status === "read").length,
    archived: messages.filter((m) => m.status === "archived").length,
  };

  return (
    <div>
      <PageHeader
        title="Contact Messages"
        description="Manage inquiries submitted through the contact form."
        action={
          <button className="flex items-center gap-2 border border-slate-200 text-slate-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-50 transition">
            <Download size={15} />
            Export CSV
          </button>
        }
      />

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search messages..."
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#355486]/30 focus:border-[#355486]"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={14} className="text-slate-400" />
          {(["all", "new", "read", "archived"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full capitalize transition ${
                filter === s
                  ? "bg-[#355486] text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-[#355486]/30"
              }`}
            >
              {s === "all" ? "All" : s} ({counts[s]})
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Message List */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="divide-y divide-slate-100">
            {filtered.length === 0 && (
              <div className="p-8 text-center text-slate-400 text-sm">No messages found</div>
            )}
            {filtered.map((msg) => (
              <button
                key={msg.id}
                onClick={() => openMessage(msg)}
                className={`w-full text-left px-4 py-3.5 hover:bg-slate-50 transition ${
                  selected?.id === msg.id ? "bg-slate-50 border-l-2 border-[#355486]" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#355486]/10 flex items-center justify-center shrink-0 text-xs font-bold text-[#355486]">
                    {msg.fullName.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-slate-900 truncate">{msg.fullName}</p>
                      {msg.status === "new" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-slate-500 truncate">{msg.subject}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize ${statusColors[msg.status]}`}
                      >
                        {msg.status}
                      </span>
                      <span className="text-[10px] text-slate-400">{formatDate(msg.createdAt)}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-3 bg-white rounded-xl border border-slate-200 shadow-sm">
          {selected ? (
            <div className="h-full flex flex-col">
              <div className="flex items-start justify-between px-5 py-4 border-b border-slate-200">
                <div>
                  <h3 className="font-bold text-slate-900">{selected.subject}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {selected.fullName} · {selected.company} · {selected.email}
                  </p>
                  <p className="text-xs text-slate-400">{formatDate(selected.createdAt)}</p>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => archive(selected.id)}
                    className="p-1.5 rounded-lg hover:bg-amber-50 text-slate-400 hover:text-amber-600 transition"
                    title="Archive"
                  >
                    <Archive size={15} />
                  </button>
                  <button
                    onClick={() => { remove(selected.id); }}
                    className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition"
                    title="Delete"
                  >
                    <Trash2 size={15} />
                  </button>
                  <button
                    onClick={() => setSelected(null)}
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>
              <div className="flex-1 px-5 py-4 overflow-y-auto">
                <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{selected.message}</p>
              </div>
              <div className="px-5 py-3 border-t border-slate-100 flex gap-2">
                <a
                  href={`mailto:${selected.email}`}
                  className="flex items-center gap-2 bg-[#355486] text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-[#2E4A78] transition"
                >
                  <Mail size={13} />
                  Reply via Email
                </a>
                {selected.status === "new" && (
                  <button
                    onClick={() => markRead(selected.id)}
                    className="flex items-center gap-2 border border-slate-200 text-slate-600 text-xs font-medium px-4 py-2 rounded-lg hover:bg-slate-50 transition"
                  >
                    <MailOpen size={13} />
                    Mark Read
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center">
              <Mail size={32} className="text-slate-200 mb-3" />
              <p className="text-sm text-slate-400">Select a message to view</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
