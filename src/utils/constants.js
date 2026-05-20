export const LEAD_STATUSES = [
  'New Lead',
  'Contacted',
  'Discovery Meeting',
  'Requirement Gathering',
  'Proposal Sent',
  'Negotiation',
  'Won',
  'Lost',
  'On Hold',
];

export const COMMISSION_STATUS = [
  'Pending Review',
  'Approved',
  'Processing',
  'Paid',
  'Rejected',
];

export const PROJECT_STATUS = [
  'Active',
  'Completed',
  'Delayed',
  'Cancelled',
];

export const PAYMENT_STATUS = [
  'Awaiting Payment',
  'Partially Paid',
  'Fully Paid',
  'Overdue',
];

export const COMMISSION_TIERS = [
  { min: 0, max: 5000, percentage: 5 },
  { min: 5000, max: 20000, percentage: 8 },
  { min: 20000, max: Infinity, percentage: 10 },
];

export const INDUSTRIES = [
  'Technology',
  'Finance',
  'Healthcare',
  'Retail',
  'Manufacturing',
  'Education',
  'Logistics',
  'Real Estate',
  'Hospitality',
  'Other',
];

export const PAYMENT_METHODS = [
  'Bank Transfer',
  'PayPal',
  'Wise',
  'Stripe',
];

export const ROLES = {
  PARTNER: 'partner',
  ADMIN: 'admin',
  SALES_MANAGER: 'sales_manager',
  FINANCE: 'finance',
};
