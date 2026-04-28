"use client";

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
  BarChart,
  Bar,
} from "recharts";
import { Users, Eye, Activity, TrendingDown } from "lucide-react";
import StatsCard from "@/components/dashboard/StatsCard";
import PageHeader from "@/components/dashboard/PageHeader";
import {
  mockStats,
  mockTrafficData,
  mockDeviceData,
  mockTopPages,
  mockTrafficSources,
} from "@/lib/mock-data";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics"
        description="Website traffic and visitor behavior overview."
      />

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
          label="Conv. Rate"
          value={`${mockStats.conversionRate}%`}
          change="0.3%"
          positive
          icon={Activity}
          iconColor="text-green-600"
          iconBg="bg-green-50"
        />
        <StatsCard
          label="Bounce Rate"
          value={`${mockStats.bounceRate}%`}
          change="1.2%"
          positive={false}
          icon={TrendingDown}
          iconColor="text-red-500"
          iconBg="bg-red-50"
        />
      </div>

      {/* Traffic Chart */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <div className="mb-4">
          <h3 className="font-semibold text-slate-900 text-sm">Traffic Over Time</h3>
          <p className="text-xs text-slate-500">Visitors & page views — April 2026</p>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={mockTrafficData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#94a3b8" }} />
            <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} />
            <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }} />
            <Line type="monotone" dataKey="visitors" stroke="#355486" strokeWidth={2.5} dot={{ r: 3 }} name="Visitors" />
            <Line type="monotone" dataKey="pageViews" stroke="#5EABB3" strokeWidth={2.5} dot={{ r: 3 }} name="Page Views" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Device Breakdown */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="mb-4">
            <h3 className="font-semibold text-slate-900 text-sm">Visitors by Device</h3>
            <p className="text-xs text-slate-500">Desktop · Mobile · Tablet</p>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={mockDeviceData} cx="50%" cy="50%" innerRadius={55} outerRadius={90} paddingAngle={3} dataKey="value">
                {mockDeviceData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Legend iconType="circle" iconSize={8} formatter={(v) => <span style={{ fontSize: 12, color: "#64748b" }}>{v}</span>} />
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Top Pages */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="mb-4">
            <h3 className="font-semibold text-slate-900 text-sm">Top Pages</h3>
            <p className="text-xs text-slate-500">Most visited pages this month</p>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={mockTopPages} layout="vertical" margin={{ left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
              <XAxis type="number" tick={{ fontSize: 11, fill: "#94a3b8" }} />
              <YAxis type="category" dataKey="label" tick={{ fontSize: 11, fill: "#64748b" }} width={80} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }} />
              <Bar dataKey="views" fill="#355486" radius={[0, 4, 4, 0]} name="Page Views" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Traffic Sources Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200">
          <h3 className="font-semibold text-slate-900 text-sm">Traffic Sources</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <th className="px-5 py-3 text-left">Source</th>
                <th className="px-5 py-3 text-right">Visitors</th>
                <th className="px-5 py-3 text-right">Share</th>
                <th className="px-5 py-3 text-left w-48">Distribution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockTrafficSources.map((source) => (
                <tr key={source.source} className="hover:bg-slate-50/50 transition">
                  <td className="px-5 py-3 font-medium text-slate-900">{source.source}</td>
                  <td className="px-5 py-3 text-right text-slate-600">{source.visitors.toLocaleString()}</td>
                  <td className="px-5 py-3 text-right text-slate-600">{source.percentage}%</td>
                  <td className="px-5 py-3">
                    <div className="w-full bg-slate-100 rounded-full h-1.5">
                      <div
                        className="bg-[#355486] h-1.5 rounded-full"
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
