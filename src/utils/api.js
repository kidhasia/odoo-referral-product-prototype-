/**
 * API Service Module
 * Handles all HTTP requests to the backend
 * Replace with actual API endpoints
 */

import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle responses
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

/**
 * Authentication APIs
 */
export const authAPI = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  register: (data) => api.post('/auth/register', data),
  logout: () => api.post('/auth/logout'),
};

/**
 * Partners APIs
 */
export const partnersAPI = {
  getAll: () => api.get('/partners'),
  getById: (id) => api.get(`/partners/${id}`),
  create: (data) => api.post('/partners', data),
  update: (id, data) => api.put(`/partners/${id}`, data),
  delete: (id) => api.delete(`/partners/${id}`),
  approve: (id) => api.post(`/partners/${id}/approve`),
  reject: (id, reason) => api.post(`/partners/${id}/reject`, { reason }),
};

/**
 * Leads APIs
 */
export const leadsAPI = {
  getAll: (filters) => api.get('/leads', { params: filters }),
  getById: (id) => api.get(`/leads/${id}`),
  create: (data) => api.post('/leads', data),
  update: (id, data) => api.put(`/leads/${id}`, data),
  delete: (id) => api.delete(`/leads/${id}`),
  changeStatus: (id, status) => api.patch(`/leads/${id}/status`, { status }),
};

/**
 * Commissions APIs
 */
export const commissionsAPI = {
  getAll: (filters) => api.get('/commissions', { params: filters }),
  getById: (id) => api.get(`/commissions/${id}`),
  approve: (id) => api.post(`/commissions/${id}/approve`),
  reject: (id, reason) => api.post(`/commissions/${id}/reject`, { reason }),
  processPayment: (id, details) => api.post(`/commissions/${id}/payment`, details),
};

/**
 * Analytics APIs
 */
export const analyticsAPI = {
  getDashboard: () => api.get('/analytics/dashboard'),
  getLeadAnalytics: (params) => api.get('/analytics/leads', { params }),
  getRevenueAnalytics: (params) => api.get('/analytics/revenue', { params }),
  getPerformanceMetrics: () => api.get('/analytics/performance'),
};

/**
 * Reports APIs
 */
export const reportsAPI = {
  generate: (type, filters) => api.post('/reports/generate', { type, filters }),
  download: (reportId, format) => api.get(`/reports/${reportId}`, { params: { format } }),
  getScheduled: () => api.get('/reports/scheduled'),
  scheduleReport: (data) => api.post('/reports/schedule', data),
};

export default api;
