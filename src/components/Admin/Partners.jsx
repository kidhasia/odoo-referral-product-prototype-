import React, { useState } from 'react';
import { Search, Filter, CheckCircle, XCircle, Clock, Edit2 } from 'lucide-react';

export default function AdminPartners() {
  const [partners, setPartners] = useState([
    { id: 1, name: 'Alex Johnson', email: 'alex@partner.com', status: 'Approved', tier: 'Gold', revenue: 420000, commission: 33600, joinDate: '2023-06-15' },
    { id: 2, name: 'Sarah Smith', email: 'sarah@partner.com', status: 'Approved', tier: 'Silver', revenue: 280000, commission: 22400, joinDate: '2023-08-20' },
    { id: 3, name: 'Michael Chen', email: 'michael@partner.com', status: 'Pending', tier: 'Bronze', revenue: 0, commission: 0, joinDate: '2024-01-10' },
  ]);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const handleApprove = (id) => {
    setPartners(partners.map(p => p.id === id ? { ...p, status: 'Approved' } : p));
  };

  const handleReject = (id) => {
    setPartners(partners.filter(p => p.id !== id));
  };

  const filteredPartners = partners.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.email.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || p.status === filter;
    return matchesSearch && matchesFilter;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle className="text-green-600" size={18} />;
      case 'Pending':
        return <Clock className="text-yellow-600" size={18} />;
      case 'Rejected':
        return <XCircle className="text-red-600" size={18} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Partner Management</h1>
        <p className="text-gray-600 mt-1">Manage all referral partners and their approvals</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <p className="text-sm text-blue-700 font-medium">Total Partners</p>
          <p className="text-3xl font-bold text-blue-600">24</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <p className="text-sm text-green-700 font-medium">Approved</p>
          <p className="text-3xl font-bold text-green-600">20</p>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
          <p className="text-sm text-yellow-700 font-medium">Pending Review</p>
          <p className="text-3xl font-bold text-yellow-600">3</p>
        </div>
        <div className="bg-red-50 rounded-lg p-4 border border-red-200">
          <p className="text-sm text-red-700 font-medium">Rejected</p>
          <p className="text-3xl font-bold text-red-600">1</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Status</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Partners Table */}
      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Email</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Tier</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Commission</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPartners.map(partner => (
                <tr key={partner.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{partner.name}</td>
                  <td className="px-6 py-4 text-gray-600">{partner.email}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(partner.status)}
                      <span className="text-sm font-medium">{partner.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      partner.tier === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                      partner.tier === 'Silver' ? 'bg-gray-100 text-gray-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {partner.tier}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900 font-medium">${partner.revenue.toLocaleString()}</td>
                  <td className="px-6 py-4 text-green-600 font-medium">${partner.commission.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    {partner.status === 'Pending' && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleApprove(partner.id)}
                          className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 font-medium"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(partner.id)}
                          className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200 font-medium"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                    {partner.status === 'Approved' && (
                      <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                        <Edit2 size={16} /> Edit
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
