import React from 'react';
import { Download, Filter } from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
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

export default function Analytics() {
  const leadFunnelData = [
    { stage: 'New Leads', count: 150 },
    { stage: 'Contacted', count: 120 },
    { stage: 'Meeting', count: 85 },
    { stage: 'Proposal', count: 60 },
    { stage: 'Won', count: 45 },
  ];

  const industryData = [
    { name: 'Technology', value: 35 },
    { name: 'Finance', value: 25 },
    { name: 'Healthcare', value: 20 },
    { name: 'Other', value: 20 },
  ];

  const COLORS = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B'];

  const conversionMetrics = [
    { metric: 'Lead to Meeting', percentage: 70.8 },
    { metric: 'Meeting to Proposal', percentage: 50 },
    { metric: 'Proposal to Won', percentage: 75 },
    { metric: 'Overall Conversion', percentage: 30 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">Detailed performance insights and metrics</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Download size={18} /> Export Report
        </button>
      </div>

      {/* Conversion Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {conversionMetrics.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h4 className="text-sm font-medium text-gray-600 mb-2">{item.metric}</h4>
            <p className="text-3xl font-bold text-blue-600">{item.percentage}%</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lead Conversion Funnel */}
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Conversion Funnel</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={leadFunnelData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="stage" type="category" width={80} />
              <Tooltip />
              <Bar dataKey="count" fill="#3B82F6" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Industry Distribution */}
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Industry Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={industryData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name} (${value})`} outerRadius={100} fill="#8884d8" dataKey="value">
                {industryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-600">Average Deal Cycle</span>
              <span className="font-semibold text-gray-900">45 days</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-600">Average Deal Value</span>
              <span className="font-semibold text-gray-900">$18,500</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-600">Total Active Deals</span>
              <span className="font-semibold text-gray-900">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Win Rate</span>
              <span className="font-semibold text-gray-900">30%</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-600">Response Rate</span>
              <span className="font-semibold text-gray-900">65%</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-600">Meeting Rate</span>
              <span className="font-semibold text-gray-900">42%</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-600">Proposal Rate</span>
              <span className="font-semibold text-gray-900">35%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Customer Satisfaction</span>
              <span className="font-semibold text-gray-900">4.8/5.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
