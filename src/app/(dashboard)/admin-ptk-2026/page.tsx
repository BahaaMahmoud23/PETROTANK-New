"use client";

import Link from "next/link";
import {
  Users,
  Eye,
  MessageCircle,
  TrendingUp,
  Activity,
  ArrowUpRight,
  Plus,
  Upload,
  Search,
  Layers,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import StatsCard from "@/components/dashboard/StatsCard";
import {
  mockStats,
  mockTrafficData,
  mockDeviceData,
  mockMessages,
} from "@/lib/mock-data";

const quickActions = [
  { href: "/admin-ptk-2026/content", label: "Edit Homepage", icon: Eye, color: "bg-blue-50 text-blue-600" },
  { href: "/admin-ptk-2026/services", label: "Add Service", icon: Plus, color: "bg-green-50 text-green-600" },
  { href: "/admin-ptk-2026/media", label: "Upload Media", icon: Upload, color: "bg-purple-50 text-purple-600" },
  { href: "/admin-ptk-2026/messages", label: "View Messages", icon: MessageCircle, color: "bg-orange-50 text-orange-600" },
  { href: "/admin-ptk-2026/seo", label: "Update SEO", icon: Search, color: "bg-teal-50 text-teal-600" },
  { href: "/admin-ptk-2026/services", label: "Manage Services", icon: Layers, color: "bg-slate-50 text-slate-600" },
];

export default function DashboardOverview() {
  const newMessages = mockMessages.filter((m) => m.status === "new");

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatsCard
          label="Total Visitors"
          value={mockStats.totalVisitors.toLocaleString()}
          change="12.4%"
          positive
          icon={Users}
        />
        <StatsCard
          label="Page Views"
          value={mockStats.pageViews.toLocaleString()}
          change="8.7%"
          positive
          icon={Eye}
          iconColor="text-[#5EABB3]"
          iconBg="bg-[#5EABB3]/10"
        />
        <StatsCard
          label="Messages"
          value={mockStats.contactMessages}
          change="3 new"
          positive
          icon={MessageCircle}
          iconColor="text-orange-600"
          iconBg="bg-orange-50"
        />
        <StatsCard
          label="New Leads"
          value={mockStats.newLeads}
          change="2.1%"
          positive
          icon={TrendingUp}
          iconColor="text-green-600"
          iconBg="bg-green-50"
        />
        <StatsCard
          label="Conv. Rate"
          value={`${mockStats.conversionRate}%`}
          change="0.3%"
          positive
          icon={Activity}
          iconColor="text-purple-600"
          iconBg="bg-purple-50"
        />
        <StatsCard
          label="Bounce Rate"
          value={`${mockStats.bounceRate}%`}
          change="1.2%"
          positive={false}
          icon={ArrowUpRight}
          iconColor="text-red-500"
          iconBg="bg-red-50"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Traffic Chart */}
        <div className="xl:col-span-2 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-slate-900 text-sm">Traffic Overview</h3>
              <p className="text-xs text-slate-500">Visitors & page views – last 30 days</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={mockTrafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#94a3b8" }} />
              <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} />
              <Tooltip
                contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }}
              />
              <Line
                type="monotone"
                dataKey="visitors"
                stroke="#355486"
                strokeWidth={2}
                dot={false}
                name="Visitors"
              />
              <Line
                type="monotone"
                dataKey="pageViews"
                stroke="#5EABB3"
                strokeWidth={2}
                dot={false}
                name="Page Views"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Device Breakdown */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="mb-4">
            <h3 className="font-semibold text-slate-900 text-sm">Visitors by Device</h3>
            <p className="text-xs text-slate-500">Last 30 days</p>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={mockDeviceData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
              >
                {mockDeviceData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Legend
                iconType="circle"
                iconSize={8}
                formatter={(value) => (
                  <span style={{ fontSize: 12, color: "#64748b" }}>{value}</span>
                )}
              />
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Quick Actions */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <h3 className="font-semibold text-slate-900 text-sm mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {quickActions.map(({ href, label, icon: Icon, color }) => (
              <Link
                key={href + label}
                href={href}
                className="flex flex-col items-center gap-2 p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition group"
              >
                <div className={`p-2.5 rounded-xl ${color}`}>
                  <Icon size={18} />
                </div>
                <span className="text-xs font-medium text-slate-600 group-hover:text-slate-900 text-center">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Messages */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900 text-sm">Recent Messages</h3>
            <Link
              href="/admin-ptk-2026/messages"
              className="text-xs text-[#355486] hover:underline font-medium"
            >
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {newMessages.slice(0, 3).map((msg) => (
              <div key={msg.id} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#355486]/10 flex items-center justify-center shrink-0 text-xs font-bold text-[#355486]">
                  {msg.fullName.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-slate-900 truncate">{msg.fullName}</p>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  </div>
                  <p className="text-xs text-slate-500 truncate">{msg.subject}</p>
                  <p className="text-xs text-slate-400">{msg.company}</p>
                </div>
              </div>
            ))}
            {newMessages.length === 0 && (
              <p className="text-sm text-slate-400 text-center py-4">No new messages</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
