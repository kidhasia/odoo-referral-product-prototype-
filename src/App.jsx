import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import Navbar from './components/Common/Navbar';
import Sidebar from './components/Common/Sidebar';

// Auth
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

// Partner
import PartnerDashboard from './components/Partner/Dashboard';
import MyLeads from './components/Partner/MyLeads';
import Commissions from './components/Partner/Commissions';
import Analytics from './components/Partner/Analytics';
import Reports from './components/Partner/Reports';
import PartnerSettings from './components/Partner/Settings';

// Admin
import AdminDashboard from './components/Admin/Dashboard';
import AdminPartners from './components/Admin/Partners';
import AdminLeads from './components/Admin/Leads';
import AdminCommissions from './components/Admin/Commissions';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const role = useAuthStore((state) => state.role);

  if (!isAuthenticated) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen bg-gray-100">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
          <main className="flex-1 overflow-auto">
            <div className="p-4 md:p-8">
              <Routes>
                {/* Partner Routes */}
                {role === 'partner' && (
                  <>
                    <Route path="/dashboard" element={<PartnerDashboard />} />
                    <Route path="/leads" element={<MyLeads />} />
                    <Route path="/commissions" element={<Commissions />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={<PartnerSettings />} />
                    <Route path="*" element={<Navigate to="/dashboard" replace />} />
                  </>
                )}

                {/* Admin Routes */}
                {role === 'admin' && (
                  <>
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/partners" element={<AdminPartners />} />
                    <Route path="/admin/leads" element={<AdminLeads />} />
                    <Route path="/admin/commissions" element={<AdminCommissions />} />
                    <Route path="*" element={<Navigate to="/admin" replace />} />
                  </>
                )}
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
