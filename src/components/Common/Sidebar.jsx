import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import {
  LayoutDashboard,
  Briefcase,
  DollarSign,
  BarChart3,
  Users,
  Settings,
  Menu,
  X,
  FileText,
  Home,
} from 'lucide-react';

export default function Sidebar({ isOpen, setIsOpen }) {
  const role = useAuthStore((state) => state.role);
  const location = useLocation();

  const partnerMenuItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard', active: location.pathname === '/dashboard' },
    { icon: Briefcase, label: 'My Leads', href: '/leads', active: location.pathname.startsWith('/leads') },
    { icon: DollarSign, label: 'Commissions', href: '/commissions', active: location.pathname === '/commissions' },
    { icon: BarChart3, label: 'Analytics', href: '/analytics', active: location.pathname === '/analytics' },
    { icon: FileText, label: 'Reports', href: '/reports', active: location.pathname === '/reports' },
    { icon: Settings, label: 'Settings', href: '/settings', active: location.pathname === '/settings' },
  ];

  const adminMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin', active: location.pathname === '/admin' },
    { icon: Users, label: 'Partners', href: '/admin/partners', active: location.pathname.startsWith('/admin/partners') },
    { icon: Briefcase, label: 'All Leads', href: '/admin/leads', active: location.pathname.startsWith('/admin/leads') },
    { icon: DollarSign, label: 'Commissions', href: '/admin/commissions', active: location.pathname === '/admin/commissions' },
    { icon: BarChart3, label: 'Analytics', href: '/admin/analytics', active: location.pathname === '/admin/analytics' },
    { icon: Settings, label: 'Settings', href: '/admin/settings', active: location.pathname === '/admin/settings' },
  ];

  const menuItems = role === 'admin' ? adminMenuItems : partnerMenuItems;

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-20 left-4 z-40 p-2 bg-white rounded-lg shadow"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`fixed left-0 top-16 h-[calc(100vh-64px)] bg-gray-900 text-white w-64 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:z-0 z-30 overflow-y-auto`}>
        <div className="p-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  item.active
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 md:hidden z-20 top-16"
        />
      )}
    </>
  );
}
