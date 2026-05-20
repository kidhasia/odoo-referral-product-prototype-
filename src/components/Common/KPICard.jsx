import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function KPICard({ icon: Icon, title, value, subtitle, trend, trendDirection = 'up' }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-blue-100 rounded-lg">
          {Icon && <Icon size={24} className="text-blue-600" />}
        </div>
        {trend && (
          <div className={`flex items-center gap-1 ${trendDirection === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trendDirection === 'up' ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
            <span className="text-sm font-semibold">{trend}</span>
          </div>
        )}
      </div>
      <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      {subtitle && <p className="text-gray-500 text-xs mt-2">{subtitle}</p>}
    </div>
  );
}
