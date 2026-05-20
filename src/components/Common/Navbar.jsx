import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { LogOut, Bell, User, Settings } from 'lucide-react';

export default function Navbar() {
  const user = useAuthStore((state) => state.user);
  const role = useAuthStore((state) => state.role);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow">
      <div className="px-6 py-4 flex items-center justify-between">
        <Link to={role === 'admin' ? '/admin' : '/dashboard'} className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">B</span>
          </div>
          <span className="font-bold text-lg text-gray-900">BeaverHub</span>
        </Link>

        <div className="flex items-center gap-6">
          <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-2">
            <img src={`https://ui-avatars.com/api/?name=${user?.name}&background=0d8abc&color=fff`} alt="Avatar" className="w-8 h-8 rounded-full" />
            <div className="text-sm">
              <p className="font-semibold text-gray-900">{user?.name}</p>
              <p className="text-gray-500">{role}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
