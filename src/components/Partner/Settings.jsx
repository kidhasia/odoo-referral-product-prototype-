import React, { useState } from 'react';
import { Save, Edit2 } from 'lucide-react';

export default function Settings() {
  const [isEditing, setIsEditing] = useState(false);
  const [settings, setSettings] = useState({
    companyName: 'My Company',
    email: 'contact@mycompany.com',
    phone: '+1-555-0100',
    website: 'www.mycompany.com',
    notificationsEmail: true,
    notificationsSMS: false,
    paymentMethod: 'Bank Transfer',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // API call would go here
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Manage your account preferences</p>
        </div>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Edit2 size={18} /> Edit
          </button>
        )}
      </div>

      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Profile Information</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="companyName"
                  value={settings.companyName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 font-medium">{settings.companyName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 font-medium">{settings.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={settings.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 font-medium">{settings.phone}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
              {isEditing ? (
                <input
                  type="url"
                  name="website"
                  value={settings.website}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 font-medium">{settings.website}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Notification Preferences</h3>
        <div className="space-y-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="notificationsEmail"
              checked={settings.notificationsEmail}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-4 h-4 rounded border-gray-300"
            />
            <span className="ml-3 text-gray-700">
              Receive email notifications for lead updates
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="notificationsSMS"
              checked={settings.notificationsSMS}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-4 h-4 rounded border-gray-300"
            />
            <span className="ml-3 text-gray-700">
              Receive SMS notifications for urgent matters
            </span>
          </label>
        </div>
      </div>

      {/* Payment Settings */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment Settings</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Payment Method</label>
          {isEditing ? (
            <select
              name="paymentMethod"
              value={settings.paymentMethod}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="PayPal">PayPal</option>
              <option value="Wise">Wise</option>
            </select>
          ) : (
            <p className="text-gray-900 font-medium">{settings.paymentMethod}</p>
          )}
        </div>
      </div>

      {/* Save Button */}
      {isEditing && (
        <div className="flex gap-3">
          <button
            onClick={() => setIsEditing(false)}
            className="px-6 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2"
          >
            <Save size={18} /> Save Changes
          </button>
        </div>
      )}

      {/* Danger Zone */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-red-900 mb-4">Danger Zone</h3>
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Delete Account
        </button>
      </div>
    </div>
  );
}
