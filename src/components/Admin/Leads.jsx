import React from 'react';
import { Search, Filter, CheckCircle, AlertCircle } from 'lucide-react';
import LeadsTable from '../Common/LeadsTable';
import { mockLeadsData } from '../../utils/helpers';
import StatusBadge from '../Common/StatusBadge';

export default function AdminLeads() {
  const [leads] = React.useState(mockLeadsData);
  const [search, setSearch] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('All');

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.companyName?.toLowerCase().includes(search.toLowerCase()) ||
      lead.contactPerson?.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const wonDeals = leads.filter(l => l.status === 'Won').length;
  const duplicateFlags = leads.filter(l => l.companyName === 'Duplicate Check').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">All Leads Management</h1>
        <p className="text-gray-600 mt-1">Review, manage, and process all referral leads</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <p className="text-sm text-blue-700 font-medium">Total Leads</p>
          <p className="text-3xl font-bold text-blue-600">{leads.length}</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-700 font-medium">Won Deals</p>
              <p className="text-3xl font-bold text-green-600">{wonDeals}</p>
            </div>
            <CheckCircle className="text-green-600" size={32} />
          </div>
        </div>
        <div className="bg-red-50 rounded-lg p-4 border border-red-200">
          <p className="text-sm text-red-700 font-medium">Flagged Duplicates</p>
          <p className="text-3xl font-bold text-red-600">0</p>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
          <p className="text-sm text-yellow-700 font-medium">Awaiting Action</p>
          <p className="text-3xl font-bold text-yellow-600">{leads.filter(l => ['New Lead', 'Contacted'].includes(l.status)).length}</p>
        </div>
      </div>

      {/* Leads Table */}
      <LeadsTable
        leads={filteredLeads}
        onViewDetails={(lead) => console.log('View:', lead)}
      />

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-left">
            <p className="font-semibold text-gray-900">Bulk Process</p>
            <p className="text-sm text-gray-600 mt-1">Update multiple leads at once</p>
          </button>
          <button className="p-4 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-left">
            <p className="font-semibold text-gray-900">Detect Duplicates</p>
            <p className="text-sm text-gray-600 mt-1">Find and merge duplicate leads</p>
          </button>
          <button className="p-4 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-left">
            <p className="font-semibold text-gray-900">Generate Invoices</p>
            <p className="text-sm text-gray-600 mt-1">Create invoices for won deals</p>
          </button>
        </div>
      </div>
    </div>
  );
}
