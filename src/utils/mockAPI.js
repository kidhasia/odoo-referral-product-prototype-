/**
 * Mock API Service
 * Used for development/testing without a real backend
 * Replace with actual API service when backend is ready
 */

// Simulate network delay
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// Mock data
const mockPartners = [
  { id: 1, name: 'Alex Johnson', email: 'alex@partner.com', status: 'Approved', tier: 'Gold' },
  { id: 2, name: 'Sarah Smith', email: 'sarah@partner.com', status: 'Approved', tier: 'Silver' },
];

const mockLeads = [
  {
    id: 1,
    leadId: 'LEAD-001',
    companyName: 'Tech Solutions Inc',
    contactPerson: 'John Doe',
    email: 'john@techsolutions.com',
    status: 'Proposal Sent',
    estimatedBudget: 15000,
  },
];

const mockCommissions = [
  { id: 1, partnerId: 1, leadId: 'LEAD-002', amount: 3500, status: 'Paid' },
  { id: 2, partnerId: 2, leadId: 'LEAD-001', amount: 1200, status: 'Approved' },
];

// Mock API functions
export const mockAPI = {
  // Auth
  auth: {
    login: async (email, password) => {
      await delay();
      return { token: 'mock_token_' + Date.now(), user: { email, id: 1 } };
    },
    register: async (data) => {
      await delay();
      return { success: true, message: 'Registration successful' };
    },
  },

  // Partners
  partners: {
    getAll: async () => {
      await delay();
      return mockPartners;
    },
    getById: async (id) => {
      await delay();
      return mockPartners.find(p => p.id === id);
    },
    create: async (data) => {
      await delay();
      const newPartner = { ...data, id: mockPartners.length + 1 };
      mockPartners.push(newPartner);
      return newPartner;
    },
    update: async (id, data) => {
      await delay();
      const partner = mockPartners.find(p => p.id === id);
      Object.assign(partner, data);
      return partner;
    },
    delete: async (id) => {
      await delay();
      const index = mockPartners.findIndex(p => p.id === id);
      mockPartners.splice(index, 1);
      return { success: true };
    },
  },

  // Leads
  leads: {
    getAll: async (filters) => {
      await delay();
      let results = [...mockLeads];
      if (filters?.status) {
        results = results.filter(l => l.status === filters.status);
      }
      return results;
    },
    getById: async (id) => {
      await delay();
      return mockLeads.find(l => l.id === id);
    },
    create: async (data) => {
      await delay();
      const newLead = { ...data, id: mockLeads.length + 1 };
      mockLeads.push(newLead);
      return newLead;
    },
    update: async (id, data) => {
      await delay();
      const lead = mockLeads.find(l => l.id === id);
      Object.assign(lead, data);
      return lead;
    },
    delete: async (id) => {
      await delay();
      const index = mockLeads.findIndex(l => l.id === id);
      mockLeads.splice(index, 1);
      return { success: true };
    },
  },

  // Commissions
  commissions: {
    getAll: async (filters) => {
      await delay();
      let results = [...mockCommissions];
      if (filters?.status) {
        results = results.filter(c => c.status === filters.status);
      }
      return results;
    },
    approve: async (id) => {
      await delay();
      const commission = mockCommissions.find(c => c.id === id);
      commission.status = 'Approved';
      return commission;
    },
  },

  // Analytics
  analytics: {
    getDashboard: async () => {
      await delay();
      return {
        totalPartners: 24,
        totalLeads: 156,
        totalRevenue: 1540000,
        conversionRate: 28.8,
      };
    },
  },
};

export default mockAPI;
