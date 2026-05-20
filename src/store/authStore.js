import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  role: null, // 'partner', 'admin', null
  isAuthenticated: false,
  
  login: (user, role) => set({ user, role, isAuthenticated: true }),
  logout: () => set({ user: null, role: null, isAuthenticated: false }),
  register: (user, role) => set({ user, role, isAuthenticated: true }),
}));

const useLeadsStore = create((set) => ({
  leads: [],
  filteredLeads: [],
  selectedLead: null,
  
  setLeads: (leads) => set({ leads, filteredLeads: leads }),
  addLead: (lead) => set((state) => {
    const newLeads = [...state.leads, { ...lead, id: Date.now() }];
    return { leads: newLeads, filteredLeads: newLeads };
  }),
  updateLead: (id, updatedLead) => set((state) => {
    const newLeads = state.leads.map(l => l.id === id ? { ...l, ...updatedLead } : l);
    return { leads: newLeads, filteredLeads: newLeads };
  }),
  deleteLead: (id) => set((state) => {
    const newLeads = state.leads.filter(l => l.id !== id);
    return { leads: newLeads, filteredLeads: newLeads };
  }),
  setSelectedLead: (lead) => set({ selectedLead: lead }),
  filterLeads: (filters) => set((state) => {
    const filtered = state.leads.filter(lead => {
      if (filters.status && lead.status !== filters.status) return false;
      if (filters.industry && lead.industry !== filters.industry) return false;
      if (filters.search && !lead.companyName?.toLowerCase().includes(filters.search.toLowerCase())) return false;
      return true;
    });
    return { filteredLeads: filtered };
  }),
}));

const useCommissionStore = create((set) => ({
  commissions: [],
  totalEarned: 0,
  totalPending: 0,
  totalPaid: 0,
  
  setCommissions: (commissions) => {
    const total = commissions.reduce((sum, c) => sum + (c.amount || 0), 0);
    const pending = commissions.filter(c => c.status === 'Pending Review' || c.status === 'Approved').reduce((sum, c) => sum + (c.amount || 0), 0);
    const paid = commissions.filter(c => c.status === 'Paid').reduce((sum, c) => sum + (c.amount || 0), 0);
    set({ commissions, totalEarned: total, totalPending: pending, totalPaid: paid });
  },
}));

const useNotificationStore = create((set) => ({
  notifications: [],
  
  addNotification: (notification) => set((state) => ({
    notifications: [{ id: Date.now(), ...notification }, ...state.notifications],
  })),
  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter(n => n.id !== id),
  })),
  clearNotifications: () => set({ notifications: [] }),
}));

export { useAuthStore, useLeadsStore, useCommissionStore, useNotificationStore };
