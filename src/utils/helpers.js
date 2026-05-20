export const calculateCommission = (dealValue) => {
  if (dealValue < 5000) return dealValue * 0.05;
  if (dealValue < 20000) return dealValue * 0.08;
  return dealValue * 0.10;
};

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value || 0);
};

export const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

export const getStatusColor = (status) => {
  const statusColors = {
    'New Lead': 'bg-blue-100 text-blue-800',
    'Contacted': 'bg-yellow-100 text-yellow-800',
    'Discovery Meeting': 'bg-purple-100 text-purple-800',
    'Requirement Gathering': 'bg-indigo-100 text-indigo-800',
    'Proposal Sent': 'bg-cyan-100 text-cyan-800',
    'Negotiation': 'bg-orange-100 text-orange-800',
    'Won': 'bg-green-100 text-green-800',
    'Lost': 'bg-red-100 text-red-800',
    'On Hold': 'bg-gray-100 text-gray-800',
    'Pending Review': 'bg-yellow-100 text-yellow-800',
    'Approved': 'bg-blue-100 text-blue-800',
    'Processing': 'bg-cyan-100 text-cyan-800',
    'Paid': 'bg-green-100 text-green-800',
    'Rejected': 'bg-red-100 text-red-800',
    'Active': 'bg-green-100 text-green-800',
    'Completed': 'bg-green-100 text-green-800',
    'Delayed': 'bg-red-100 text-red-800',
    'Cancelled': 'bg-gray-100 text-gray-800',
    'Awaiting Payment': 'bg-yellow-100 text-yellow-800',
    'Partially Paid': 'bg-blue-100 text-blue-800',
    'Fully Paid': 'bg-green-100 text-green-800',
    'Overdue': 'bg-red-100 text-red-800',
  };
  return statusColors[status] || 'bg-gray-100 text-gray-800';
};

export const mockLeadsData = [
  {
    id: 1,
    leadId: 'LEAD-001',
    companyName: 'Tech Solutions Inc',
    contactPerson: 'John Doe',
    email: 'john@techsolutions.com',
    phone: '+1-555-0101',
    industry: 'Technology',
    country: 'USA',
    employees: 250,
    requiredModules: ['CRM', 'Sales', 'Inventory'],
    estimatedBudget: 15000,
    expectedUsers: 25,
    leadSource: 'LinkedIn',
    status: 'Proposal Sent',
    probability: 75,
    projectValue: 0,
    partnerCommission: 0,
    paymentStatus: 'Awaiting Payment',
    projectStatus: 'Active',
    submittedDate: '2024-01-15',
    lastUpdated: '2024-01-20',
    assignedSalesperson: 'Alice Smith',
    notes: 'High-priority lead, very responsive team',
  },
  {
    id: 2,
    leadId: 'LEAD-002',
    companyName: 'Finance Corp',
    contactPerson: 'Jane Smith',
    email: 'jane@financecorp.com',
    phone: '+1-555-0102',
    industry: 'Finance',
    country: 'USA',
    employees: 500,
    requiredModules: ['Accounting', 'CRM', 'HR'],
    estimatedBudget: 35000,
    expectedUsers: 50,
    leadSource: 'Referral',
    status: 'Won',
    probability: 100,
    projectValue: 35000,
    partnerCommission: 3500,
    paymentStatus: 'Fully Paid',
    projectStatus: 'Completed',
    submittedDate: '2023-11-10',
    lastUpdated: '2024-01-18',
    assignedSalesperson: 'Bob Johnson',
    notes: 'Successfully implemented, client very satisfied',
  },
];
