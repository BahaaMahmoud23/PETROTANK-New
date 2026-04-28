"use client";

import { useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  ToggleLeft,
  ToggleRight,
  X,
  Save,
  Filter,
} from "lucide-react";
import PageHeader from "@/components/dashboard/PageHeader";
import { mockCertifications, Certification } from "@/lib/mock-data";

const categories = [
  "All",
  "International Standards",
  "Saudi Regulatory Approvals",
  "Occupational Safety",
  "Compliance Commitment",
];

const statusColors: Record<string, string> = {
  active: "bg-green-50 text-green-700",
  pending: "bg-amber-50 text-amber-700",
  expired: "bg-red-50 text-red-600",
};

type ModalMode = "add" | "edit" | null;

const emptyCert: Omit<Certification, "id" | "createdAt"> = {
  title: "",
  category: "International Standards",
  organization: "",
  scope: "",
  status: "active",
  order: 1,
  isActive: true,
};

export default function CertificationsPage() {
  const [certs, setCerts] = useState<Certification[]>(mockCertifications);
  const [filter, setFilter] = useState("All");
  const [modal, setModal] = useState<ModalMode>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyCert);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = filter === "All" ? certs : certs.filter((c) => c.category === filter);

  function openAdd() {
    setForm({ ...emptyCert, order: certs.length + 1 });
    setEditingId(null);
    setModal("add");
  }

  function openEdit(cert: Certification) {
    const { id, createdAt, ...rest } = cert;
    setForm(rest);
    setEditingId(id);
    setModal("edit");
  }

  function closeModal() {
    setModal(null);
    setEditingId(null);
  }

  function handleSave() {
    if (modal === "add") {
      setCerts([...certs, { ...form, id: String(Date.now()), createdAt: new Date().toISOString().split("T")[0] }]);
    } else if (modal === "edit" && editingId) {
      setCerts(certs.map((c) => (c.id === editingId ? { ...c, ...form } : c)));
    }
    closeModal();
  }

  function toggleActive(id: string) {
    setCerts(certs.map((c) => (c.id === id ? { ...c, isActive: !c.isActive } : c)));
  }

  function handleDelete() {
    if (deleteId) {
      setCerts(certs.filter((c) => c.id !== deleteId));
      setDeleteId(null);
    }
  }

  return (
    <div>
      <PageHeader
        title="Certifications"
        description="Manage certifications and regulatory approvals."
        action={
          <button
            onClick={openAdd}
            className="flex items-center gap-2 bg-[#355486] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#2E4A78] transition"
          >
            <Plus size={16} />
            Add Certification
          </button>
        }
      />

      {/* Filter */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <Filter size={14} className="text-slate-400" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-xs font-medium px-3 py-1.5 rounded-full transition ${
              filter === cat
                ? "bg-[#355486] text-white"
                : "bg-white border border-slate-200 text-slate-600 hover:border-[#355486]/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <th className="px-4 py-3 text-left">Certification</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Organization</th>
                <th className="px-4 py-3 text-left">Cert. Status</th>
                <th className="px-4 py-3 text-left">Visibility</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((cert) => (
                <tr key={cert.id} className="hover:bg-slate-50/50 transition">
                  <td className="px-4 py-3">
                    <p className="font-semibold text-slate-900">{cert.title}</p>
                    <p className="text-xs text-slate-400 truncate max-w-xs">{cert.scope}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                      {cert.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-600 text-xs">{cert.organization}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${
                        statusColors[cert.status]
                      }`}
                    >
                      {cert.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button onClick={() => toggleActive(cert.id)} className="flex items-center gap-1.5">
                      {cert.isActive ? (
                        <>
                          <ToggleRight size={20} className="text-green-500" />
                          <span className="text-xs text-green-600 font-medium">Visible</span>
                        </>
                      ) : (
                        <>
                          <ToggleLeft size={20} className="text-slate-300" />
                          <span className="text-xs text-slate-400">Hidden</span>
                        </>
                      )}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 justify-end">
                      <button
                        onClick={() => openEdit(cert)}
                        className="p-1.5 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition"
                      >
                        <Edit2 size={15} />
                      </button>
                      <button
                        onClick={() => setDeleteId(cert.id)}
                        className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <h2 className="font-bold text-slate-900">
                {modal === "add" ? "Add Certification" : "Edit Certification"}
              </h2>
              <button onClick={closeModal} className="text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>
            <div className="px-6 py-5 space-y-4">
              {[
                { label: "Title", key: "title", placeholder: "e.g. ISO 9001:2015" },
                { label: "Organization", key: "organization", placeholder: "e.g. Bureau Veritas" },
                { label: "Scope", key: "scope", placeholder: "e.g. Quality Management System" },
              ].map(({ label, key, placeholder }) => (
                <div key={key}>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">{label}</label>
                  <input
                    type="text"
                    value={(form as Record<string, unknown>)[key] as string}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#355486]/30 focus:border-[#355486]"
                    placeholder={placeholder}
                  />
                </div>
              ))}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
                  >
                    {categories.filter((c) => c !== "All").map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Status</label>
                  <select
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value as Certification["status"] })}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
                  >
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="expired">Expired</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="certVisible"
                  checked={form.isActive}
                  onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
                  className="w-4 h-4 rounded"
                />
                <label htmlFor="certVisible" className="text-sm text-slate-700">Visible on website</label>
              </div>
            </div>
            <div className="flex gap-3 px-6 py-4 border-t border-slate-200">
              <button
                onClick={handleSave}
                className="flex-1 flex items-center justify-center gap-2 bg-[#355486] text-white text-sm font-semibold py-2 rounded-lg hover:bg-[#2E4A78] transition"
              >
                <Save size={15} />
                Save
              </button>
              <button onClick={closeModal} className="px-4 py-2 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
            <h2 className="font-bold text-slate-900 mb-2">Delete Certification?</h2>
            <p className="text-sm text-slate-500 mb-5">This certification will be removed permanently.</p>
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
