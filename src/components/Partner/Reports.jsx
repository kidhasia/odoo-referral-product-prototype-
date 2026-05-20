import React, { useState } from 'react';
import { Download, FileText } from 'lucide-react';

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState('revenue');

  const reports = [
    { id: 'revenue', name: 'Revenue Report', icon: FileText },
    { id: 'commission', name: 'Commission Report', icon: FileText },
    { id: 'leads', name: 'Lead Performance', icon: FileText },
    { id: 'monthly', name: 'Monthly Activity', icon: FileText },
  ];

  const reportContent = {
    revenue: {
      title: 'Revenue Report',
      description: 'Detailed breakdown of all revenue generated through your referrals',
      metrics: [
        { label: 'Total Revenue', value: '$88,000' },
        { label: 'Average Deal Size', value: '$18,500' },
        { label: 'Highest Deal', value: '$35,000' },
        { label: 'Lowest Deal', value: '$2,500' },
      ],
    },
    commission: {
      title: 'Commission Report',
      description: 'Track your commission earnings and payment status',
      metrics: [
        { label: 'Total Commission', value: '$7,040' },
        { label: 'Paid', value: '$5,200' },
        { label: 'Pending Approval', value: '$1,840' },
        { label: 'Rejection Rate', value: '0%' },
      ],
    },
    leads: {
      title: 'Lead Performance Report',
      description: 'Analysis of your lead submissions and conversion rates',
      metrics: [
        { label: 'Total Leads', value: '45' },
        { label: 'Conversion Rate', value: '30%' },
        { label: 'Average Time to Close', value: '45 days' },
        { label: 'Quality Score', value: '8.5/10' },
      ],
    },
    monthly: {
      title: 'Monthly Activity Report',
      description: 'Summary of your activities for this month',
      metrics: [
        { label: 'Leads Submitted', value: '8' },
        { label: 'Commission Generated', value: '$1,760' },
        { label: 'Active Deals', value: '12' },
        { label: 'Closed Deals', value: '2' },
      ],
    },
  };

  const currentReport = reportContent[selectedReport];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600 mt-1">Generate and export detailed performance reports</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Download size={18} /> Export as PDF
        </button>
      </div>

      {/* Report Selection */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {reports.map(report => (
          <button
            key={report.id}
            onClick={() => setSelectedReport(report.id)}
            className={`p-4 rounded-lg border-2 transition text-left ${
              selectedReport === report.id
                ? 'bg-blue-50 border-blue-500'
                : 'bg-white border-gray-200 hover:border-gray-300'
            }`}
          >
            <FileText className={selectedReport === report.id ? 'text-blue-600' : 'text-gray-600'} size={24} />
            <p className={`font-semibold mt-2 ${selectedReport === report.id ? 'text-blue-600' : 'text-gray-900'}`}>
              {report.name}
            </p>
          </button>
        ))}
      </div>

      {/* Report Content */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentReport.title}</h2>
        <p className="text-gray-600 mb-8">{currentReport.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {currentReport.metrics.map((metric, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4">
              <p className="text-gray-600 text-sm mb-2">{metric.label}</p>
              <p className="text-3xl font-bold text-blue-600">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Export Options */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Export Options</h3>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-2">
              <Download size={16} /> PDF
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-2">
              <Download size={16} /> Excel
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-2">
              <Download size={16} /> CSV
            </button>
          </div>
        </div>
      </div>

      {/* Report Schedule */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Scheduled Reports</h3>
        <p className="text-gray-600 mb-4">Receive reports automatically every month</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Enable Monthly Reports
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
            Configure Settings
          </button>
        </div>
      </div>
    </div>
  );
}
