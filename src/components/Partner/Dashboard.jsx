import React, { useEffect, useState } from 'react';
import { DollarSign, TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { useLeadsStore, useCommissionStore } from '../../store/authStore';
import { mockLeadsData, formatCurrency } from '../../utils/helpers';
import KPICard from '../Common/KPICard';
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

export default function PartnerDashboard() {
  const setLeads = useLeadsStore((state) => state.setLeads);
  const leads = useLeadsStore((state) => state.leads);
  const setCommissions = useCommissionStore((state) => state.setCommissions);
  const { totalEarned, totalPending, totalPaid } = useCommissionStore();

  useEffect(() => {
    // Initialize with mock data
    setLeads(mockLeadsData);

    // Mock commission data
    const mockCommissions = [
      { id: 1, leadId: 'LEAD-002', amount: 3500, status: 'Paid', date: '2024-01-18' },
      { id: 2, leadId: 'LEAD-001', amount: 1200, status: 'Approved', date: '2024-01-19' },
    ];
    setCommissions(mockCommissions);
  }, []);

  const totalLeads = leads.length;
  const qualifiedLeads = leads.filter(l => l.probability >= 50).length;
  const convertedLeads = leads.filter(l => l.status === 'Won').length;

  // Revenue data for chart
  const revenueData = [
    { month: 'Jan', revenue: 5000, commission: 400 },
    { month: 'Feb', revenue: 8000, commission: 640 },
    { month: 'Mar', revenue: 12000, commission: 960 },
    { month: 'Apr', revenue: 15000, commission: 1200 },
    { month: 'May', revenue: 18000, commission: 1440 },
    { month: 'Jun', revenue: 22000, commission: 1760 },
  ];

  // Lead status distribution
  const leadDistribution = [
    { name: 'New Lead', value: leads.filter(l => l.status === 'New Lead').length },
    { name: 'In Progress', value: leads.filter(l => ['Contacted', 'Discovery Meeting', 'Proposal Sent'].includes(l.status)).length },
    { name: 'Won', value: leads.filter(l => l.status === 'Won').length },
    { name: 'Lost', value: leads.filter(l => l.status === 'Lost').length },
  ];

  const COLORS = ['#3B82F6', '#8B5CF6', '#10B981', '#EF4444'];

  const conversionRate = totalLeads > 0 ? ((convertedLeads / totalLeads) * 100).toFixed(1) : 0;
  const avgDealSize = leads.length > 0 ? leads.reduce((sum, l) => sum + (l.estimatedBudget || 0), 0) / leads.length : 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's your performance overview.</p>
      </div>

      {/* Main KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <KPICard
          icon={TrendingUp}
          title="Total Leads"
          value={totalLeads}
          subtitle="Active referrals"
        />
        <KPICard
          icon={CheckCircle}
          title="Qualified Leads"
          value={qualifiedLeads}
          subtitle={`${((qualifiedLeads / totalLeads) * 100 || 0).toFixed(0)}% of total`}
        />
        <KPICard
          icon={DollarSign}
          title="Total Revenue"
          value={formatCurrency(leads.reduce((sum, l) => sum + (l.projectValue || 0), 0))}
          subtitle="From closed deals"
          trend="+12%"
        />
        <KPICard
          icon={DollarSign}
          title="Commission Earned"
          value={formatCurrency(totalEarned)}
          subtitle="All-time earnings"
        />
        <KPICard
          icon={Clock}
          title="Pending Commission"
          value={formatCurrency(totalPending)}
          subtitle="Awaiting processing"
        />
      </div>

      {/* Commission Status Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-6 border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm font-medium">Commission Approved</h3>
              <p className="text-2xl font-bold text-green-600">{formatCurrency(totalEarned)}</p>
            </div>
            <CheckCircle className="text-green-600" size={32} />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm font-medium">Under Review</h3>
              <p className="text-2xl font-bold text-blue-600">{formatCurrency(totalPending)}</p>
            </div>
            <Clock className="text-blue-600" size={32} />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm font-medium">Paid Out</h3>
              <p className="text-2xl font-bold text-purple-600">{formatCurrency(totalPaid)}</p>
            </div>
            <DollarSign className="text-purple-600" size={32} />
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue & Commission</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#3B82F6" />
              <Line type="monotone" dataKey="commission" stroke="#10B981" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Lead Distribution */}
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={leadDistribution} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
                {leadDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">Conversion Rate</h4>
          <p className="text-3xl font-bold text-blue-600">{conversionRate}%</p>
          <p className="text-xs text-blue-700 mt-2">{convertedLeads} of {totalLeads} leads converted</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
          <h4 className="text-sm font-semibold text-purple-900 mb-2">Average Deal Size</h4>
          <p className="text-3xl font-bold text-purple-600">{formatCurrency(avgDealSize)}</p>
          <p className="text-xs text-purple-700 mt-2">Based on estimated budgets</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
          <h4 className="text-sm font-semibold text-green-900 mb-2">Active Projects</h4>
          <p className="text-3xl font-bold text-green-600">{leads.filter(l => ['Won', 'Active'].includes(l.status)).length}</p>
          <p className="text-xs text-green-700 mt-2">Ongoing implementations</p>
        </div>
      </div>
    </div>
  );
}
