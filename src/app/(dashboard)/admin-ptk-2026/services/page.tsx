"use client";

import { useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  ToggleLeft,
  ToggleRight,
  GripVertical,
  X,
  Save,
} from "lucide-react";
import PageHeader from "@/components/dashboard/PageHeader";
import { mockServices, Service } from "@/lib/mock-data";

const categoryColors: Record<string, string> = {
  Storage: "bg-blue-50 text-blue-700",
  Marine: "bg-teal-50 text-teal-700",
  Logistics: "bg-orange-50 text-orange-700",
  Processing: "bg-purple-50 text-purple-700",
};

type ModalMode = "add" | "edit" | null;

const emptyService: Omit<Service, "id" | "createdAt"> = {
  title: "",
  slug: "",
  shortDescription: "",
  category: "Storage",
  icon: "Layers",
  order: 1,
  isActive: true,
};

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>(mockServices);
  const [modal, setModal] = useState<ModalMode>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyService);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  function openAdd() {
    setForm({ ...emptyService, order: services.length + 1 });
    setEditingId(null);
    setModal("add");
  }

  function openEdit(service: Service) {
    const { id, createdAt, ...rest } = service;
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
      const newService: Service = {
        ...form,
        id: String(Date.now()),
        createdAt: new Date().toISOString().split("T")[0],
      };
      setServices([...services, newService]);
    } else if (modal === "edit" && editingId) {
      setServices(
        services.map((s) => (s.id === editingId ? { ...s, ...form } : s))
      );
    }
    closeModal();
  }

  function toggleActive(id: string) {
    setServices(services.map((s) => (s.id === id ? { ...s, isActive: !s.isActive } : s)));
  }

  function confirmDelete(id: string) {
    setDeleteId(id);
  }

  function handleDelete() {
    if (deleteId) {
      setServices(services.filter((s) => s.id !== deleteId));
      setDeleteId(null);
    }
  }

  return (
    <div>
      <PageHeader
        title="Services"
        description="Manage all services displayed on the public website."
        action={
          <button
            onClick={openAdd}
            className="flex items-center gap-2 bg-[#355486] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#2E4A78] transition"
          >
            <Plus size={16} />
            Add Service
          </button>
        }
      />

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <th className="px-4 py-3 text-left w-8" />
                <th className="px-4 py-3 text-left">Service</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Order</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Created</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-slate-50/50 transition">
                  <td className="px-4 py-3 text-slate-300">
                    <GripVertical size={16} />
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-semibold text-slate-900">{service.title}</p>
                    <p className="text-xs text-slate-400 truncate max-w-xs">
                      {service.shortDescription}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${
                        categoryColors[service.category] || "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {service.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{service.order}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => toggleActive(service.id)}
                      className="flex items-center gap-1.5 transition"
                    >
                      {service.isActive ? (
                        <>
                          <ToggleRight size={20} className="text-green-500" />
                          <span className="text-xs text-green-600 font-medium">Active</span>
                        </>
                      ) : (
                        <>
                          <ToggleLeft size={20} className="text-slate-300" />
                          <span className="text-xs text-slate-400">Inactive</span>
                        </>
                      )}
                    </button>
                  </td>
                  <td className="px-4 py-3 text-slate-400 text-xs">{service.createdAt}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 justify-end">
                      <button
                        onClick={() => openEdit(service)}
                        className="p-1.5 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition"
                        title="Edit"
                      >
                        <Edit2 size={15} />
                      </button>
                      <button
                        onClick={() => confirmDelete(service.id)}
                        className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition"
                        title="Delete"
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

      {/* Add/Edit Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <h2 className="font-bold text-slate-900">
                {modal === "add" ? "Add Service" : "Edit Service"}
              </h2>
              <button onClick={closeModal} className="text-slate-400 hover:text-slate-600 transition">
                <X size={20} />
              </button>
            </div>
            <div className="px-6 py-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Title</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#355486]/30 focus:border-[#355486]"
                  placeholder="Service title"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Slug</label>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value.toLowerCase().replace(/\s+/g, "-") })}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#355486]/30 focus:border-[#355486]"
                  placeholder="service-slug"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Short Description</label>
                <textarea
                  value={form.shortDescription}
                  onChange={(e) => setForm({ ...form, shortDescription: e.target.value })}
                  rows={3}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#355486]/30 focus:border-[#355486]"
                  placeholder="Brief description..."
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#355486]/30"
                  >
                    <option>Storage</option>
                    <option>Marine</option>
                    <option>Logistics</option>
                    <option>Processing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Order</label>
                  <input
                    type="number"
                    value={form.order}
                    onChange={(e) => setForm({ ...form, order: Number(e.target.value) })}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#355486]/30"
                    min={1}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={form.isActive}
                  onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
                  className="w-4 h-4 rounded"
                />
                <label htmlFor="isActive" className="text-sm text-slate-700">Active (visible on website)</label>
              </div>
            </div>
            <div className="flex gap-3 px-6 py-4 border-t border-slate-200">
              <button
                onClick={handleSave}
                className="flex-1 flex items-center justify-center gap-2 bg-[#355486] text-white text-sm font-semibold py-2 rounded-lg hover:bg-[#2E4A78] transition"
              >
                <Save size={15} />
                Save Service
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition"
              >
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
            <h2 className="font-bold text-slate-900 mb-2">Delete Service?</h2>
            <p className="text-sm text-slate-500 mb-5">
              This action cannot be undone. The service will be removed from the website.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleDelete}
                className="flex-1 bg-red-500 text-white text-sm font-semibold py-2 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 border border-slate-200 text-sm text-slate-600 py-2 rounded-lg hover:bg-slate-50 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
