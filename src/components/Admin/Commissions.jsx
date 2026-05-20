import React from 'react';
import { DollarSign, CheckCircle, Clock } from 'lucide-react';
import StatusBadge from '../Common/StatusBadge';
import { formatCurrency } from '../../utils/helpers';

export default function AdminCommissions() {
  const [commissions] = React.useState([
    { id: 1, partnerId: 1, partnerName: 'Alex Johnson', leadId: 'LEAD-002', amount: 3500, status: 'Paid', invoiceDate: '2024-01-18', dueDate: '2024-01-25' },
    { id: 2, partnerId: 2, partnerName: 'Sarah Smith', leadId: 'LEAD-001', amount: 1200, status: 'Approved', invoiceDate: '2024-01-19', dueDate: '2024-01-26' },
    { id: 3, partnerId: 1, partnerName: 'Alex Johnson', leadId: 'LEAD-003', amount: 2100, status: 'Pending Review', invoiceDate: '2024-01-20', dueDate: '2024-01-27' },
  ]);

  const [selectedStatus, setSelectedStatus] = React.useState('All');

  const filteredCommissions = selectedStatus === 'All' 
    ? commissions 
    : commissions.filter(c => c.status === selectedStatus);

  const totalCommissions = commissions.reduce((sum, c) => sum + c.amount, 0);
  const paidTotal = commissions.filter(c => c.status === 'Paid').reduce((sum, c) => sum + c.amount, 0);
  const pendingTotal = commissions.filter(c => c.status !== 'Paid').reduce((sum, c) => sum + c.amount, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Commission Management</h1>
        <p className="text-gray-600 mt-1">Approve and manage partner commissions</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-700 font-medium">Total Commissions</p>
              <p className="text-3xl font-bold text-purple-600 mt-2">{formatCurrency(totalCommissions)}</p>
            </div>
            <DollarSign className="text-purple-600" size={40} />
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-700 font-medium">Paid Out</p>
              <p className="text-3xl font-bold text-green-600 mt-2">{formatCurrency(paidTotal)}</p>
            </div>
            <CheckCircle className="text-green-600" size={40} />
          </div>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 border border-yellow-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-yellow-700 font-medium">Pending</p>
              <p className="text-3xl font-bold text-yellow-600 mt-2">{formatCurrency(pendingTotal)}</p>
            </div>
            <Clock className="text-yellow-600" size={40} />
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="flex gap-2 flex-wrap">
        {['All', 'Pending Review', 'Approved', 'Paid', 'Rejected'].map(status => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedStatus === status
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Commissions Table */}
      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Partner</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Lead ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Invoice Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCommissions.map(commission => (
                <tr key={commission.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{commission.partnerName}</td>
                  <td className="px-6 py-4 text-gray-600">{commission.leadId}</td>
                  <td className="px-6 py-4 font-semibold text-green-600">{formatCurrency(commission.amount)}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={commission.status} />
                  </td>
                  <td className="px-6 py-4 text-gray-600">{commission.invoiceDate}</td>
                  <td className="px-6 py-4 text-gray-600">{commission.dueDate}</td>
                  <td className="px-6 py-4">
                    {commission.status === 'Pending Review' && (
                      <div className="flex gap-2">
                        <button className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 font-medium">
                          Approve
                        </button>
                        <button className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200 font-medium">
                          Reject
                        </button>
                      </div>
                    )}
                    {commission.status === 'Approved' && (
                      <button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 font-medium">
                        Process Payment
                      </button>
                    )}
                    {commission.status === 'Paid' && (
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                        View Invoice
                      </button>
                    )}
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
