import React, { useEffect } from 'react';
import { useCommissionStore } from '../../store/authStore';
import { formatCurrency, formatDate } from '../../utils/helpers';
import StatusBadge from '../Common/StatusBadge';
import { DollarSign, TrendingUp } from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function Commissions() {
  const commissions = useCommissionStore((state) => state.commissions);
  const { totalEarned, totalPending, totalPaid } = useCommissionStore();

  const monthlyData = [
    { month: 'Jan', earned: 400, paid: 200 },
    { month: 'Feb', earned: 640, paid: 400 },
    { month: 'Mar', earned: 960, paid: 640 },
    { month: 'Apr', earned: 1200, paid: 800 },
    { month: 'May', earned: 1440, paid: 1200 },
    { month: 'Jun', earned: 1760, paid: 1600 },
  ];

  const statusDistribution = [
    { status: 'Paid', count: commissions.filter(c => c.status === 'Paid').length, color: '#10B981' },
    { status: 'Approved', count: commissions.filter(c => c.status === 'Approved').length, color: '#3B82F6' },
    { status: 'Pending Review', count: commissions.filter(c => c.status === 'Pending Review').length, color: '#F59E0B' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Commission Tracking</h1>
        <p className="text-gray-600 mt-1">Monitor your earnings and commission status</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-700 font-medium">Total Earned</p>
              <p className="text-3xl font-bold text-green-600 mt-2">{formatCurrency(totalEarned)}</p>
            </div>
            <DollarSign className="text-green-600" size={40} />
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-700 font-medium">Pending Approval</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">{formatCurrency(totalPending)}</p>
            </div>
            <TrendingUp className="text-blue-600" size={40} />
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-700 font-medium">Paid Out</p>
              <p className="text-3xl font-bold text-purple-600 mt-2">{formatCurrency(totalPaid)}</p>
            </div>
            <DollarSign className="text-purple-600" size={40} />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Commission</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="earned" stroke="#3B82F6" />
              <Line type="monotone" dataKey="paid" stroke="#10B981" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Distribution</h3>
          <div className="space-y-4">
            {statusDistribution.map(item => (
              <div key={item.status}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{item.status}</span>
                  <span className="text-sm font-semibold text-gray-900">{item.count}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${(item.count / commissions.length) * 100 || 0}%`, backgroundColor: item.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commission Table */}
      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Commissions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Lead ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {commissions.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                    No commissions yet
                  </td>
                </tr>
              ) : (
                commissions.map(commission => (
                  <tr key={commission.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{commission.leadId}</td>
                    <td className="px-6 py-4 font-semibold text-green-600">{formatCurrency(commission.amount)}</td>
                    <td className="px-6 py-4">
                      <StatusBadge status={commission.status} />
                    </td>
                    <td className="px-6 py-4 text-gray-600">{formatDate(commission.date)}</td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                        View Invoice
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
