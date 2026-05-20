import React from 'react';
import { Users, TrendingUp, AlertCircle, DollarSign } from 'lucide-react';
import KPICard from '../Common/KPICard';
import { formatCurrency } from '../../utils/helpers';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function AdminDashboard() {
  const revenueData = [
    { month: 'Jan', revenue: 125000, commissions: 10000 },
    { month: 'Feb', revenue: 160000, commissions: 12800 },
    { month: 'Mar', revenue: 210000, commissions: 16800 },
    { month: 'Apr', revenue: 280000, commissions: 22400 },
    { month: 'May', revenue: 350000, commissions: 28000 },
    { month: 'Jun', revenue: 420000, commissions: 33600 },
  ];

  const partnerPerformance = [
    { name: 'Partner A', deals: 12, revenue: 420000, commission: 33600 },
    { name: 'Partner B', deals: 8, revenue: 280000, commission: 22400 },
    { name: 'Partner C', deals: 6, revenue: 210000, commission: 16800 },
    { name: 'Partner D', deals: 4, revenue: 140000, commission: 11200 },
  ];

  const COLORS = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B'];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-1">System overview and key metrics</p>
      </div>

      {/* Main KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          icon={Users}
          title="Active Partners"
          value="24"
          subtitle="Approved partners"
          trend="+3"
        />
        <KPICard
          icon={TrendingUp}
          title="Total Referrals"
          value="156"
          subtitle="All-time referrals"
          trend="+12"
        />
        <KPICard
          icon={DollarSign}
          title="Total Revenue"
          value={formatCurrency(1540000)}
          subtitle="From all deals"
          trend="+8%"
        />
        <KPICard
          icon={AlertCircle}
          title="Pending Approvals"
          value="3"
          subtitle="New partners"
        />
      </div>

      {/* Alert Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 border border-red-200">
          <h3 className="font-semibold text-red-900 mb-2">Suspicious Activities</h3>
          <p className="text-2xl font-bold text-red-600">2</p>
          <p className="text-sm text-red-700 mt-2">Requires review</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 border border-yellow-200">
          <h3 className="font-semibold text-yellow-900 mb-2">Pending Commissions</h3>
          <p className="text-2xl font-bold text-yellow-600">{formatCurrency(125000)}</p>
          <p className="text-sm text-yellow-700 mt-2">Awaiting approval</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
          <h3 className="font-semibold text-green-900 mb-2">New Registrations</h3>
          <p className="text-2xl font-bold text-green-600">5</p>
          <p className="text-sm text-green-700 mt-2">This week</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Revenue & Commissions</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => formatCurrency(value)} />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#3B82F6" />
              <Line type="monotone" dataKey="commissions" stroke="#10B981" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Partners */}
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Partners</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={partnerPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => formatCurrency(value)} />
              <Legend />
              <Bar dataKey="revenue" fill="#3B82F6" />
              <Bar dataKey="commission" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4">Commission Breakdown</h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Paid</span>
              <span className="font-semibold text-green-600">$98,500</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Approved</span>
              <span className="font-semibold text-blue-600">$24,200</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Pending</span>
              <span className="font-semibold text-yellow-600">$48,400</span>
            </div>
            <div className="flex justify-between pt-3 border-t">
              <span className="font-semibold text-gray-900">Total</span>
              <span className="font-semibold text-gray-900">${(98500 + 24200 + 48400).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4">Deal Status</h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Won</span>
              <span className="font-semibold text-green-600">45 deals</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">In Progress</span>
              <span className="font-semibold text-blue-600">67 deals</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Lost</span>
              <span className="font-semibold text-red-600">18 deals</span>
            </div>
            <div className="flex justify-between pt-3 border-t">
              <span className="font-semibold text-gray-900">Conversion</span>
              <span className="font-semibold text-blue-600">28.8%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4">Partner Tiers</h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Gold</span>
              <span className="font-semibold">8 partners</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Silver</span>
              <span className="font-semibold">12 partners</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Bronze</span>
              <span className="font-semibold">4 partners</span>
            </div>
            <div className="flex justify-between pt-3 border-t">
              <span className="font-semibold text-gray-900">Total</span>
              <span className="font-semibold">24 partners</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
