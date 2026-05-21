# BeaverHub Referral Partner System - React Application

A complete React-based referral and partner management ecosystem for BeaverHub. This application provides comprehensive partner registration, lead management, commission tracking, and analytics.

## Features

### Partner Portal
- **Dashboard**: Overview of KPIs, revenue, and commission metrics
- **Lead Management**: Create, view, edit, and manage referral leads
- **Commission Tracking**: Monitor earnings with detailed breakdown
- **Analytics**: Performance insights and conversion metrics
- **Reports**: Generate and export PDF/Excel reports
- **Settings**: Profile and notification preferences

### Admin Dashboard
- **System Overview**: Real-time metrics and performance tracking
- **Partner Management**: Approve, manage, and monitor partners
- **Lead Management**: Review and manage all referral leads
- **Commission Management**: Approve and process commissions
- **Analytics**: Platform-wide insights and revenue tracking 

## Tech Stack

- **Frontend Framework**: React 18.2.0
- **Routing**: React Router v6
- **State Management**: Zustand
- **UI Components**: Lucide React Icons
- **Charts & Graphs**: Recharts
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast

## Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── Partner/
│   │   ├── Dashboard.jsx
│   │   ├── MyLeads.jsx
│   │   ├── LeadDetailModal.jsx
│   │   ├── AddLeadModal.jsx
│   │   ├── Commissions.jsx
│   │   ├── Analytics.jsx
│   │   ├── Reports.jsx
│   │   └── Settings.jsx
│   ├── Admin/
│   │   ├── Dashboard.jsx
│   │   ├── Partners.jsx
│   │   ├── Leads.jsx
│   │   └── Commissions.jsx
│   └── Common/
│       ├── Navbar.jsx
│       ├── Sidebar.jsx
│       ├── KPICard.jsx
│       ├── StatusBadge.jsx
│       └── LeadsTable.jsx
├── store/
│   └── authStore.js (Zustand stores)
├── utils/
│   ├── constants.js
│   └── helpers.js
├── App.jsx
├── index.jsx
└── index.css
```

## Installation

1. **Navigate to the project directory**:
   ```bash
   cd referral-programme-v.10
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open in browser**:
   ```
   http://localhost:3000
   ```

## Usage

### Login Credentials

**Partner Account:**
- Email: Any email (e.g., `partner@example.com`)
- Password: Any password
- Role: Select "Referral Partner"

**Admin Account:**
- Email: Any email (e.g., `admin@example.com`)
- Password: Any password
- Role: Select "Admin"

### Partner Workflow

1. Login to access the Partner Dashboard
2. View KPIs and performance metrics
3. Navigate to "My Leads" to:
   - View all submitted leads
   - Add new leads with detailed information
   - Edit lead details and status
   - Track conversion progress
4. Check "Commissions" to:
   - View earned commissions
   - Track payment status
   - View commission history
5. Access "Analytics" for:
   - Lead conversion funnels
   - Industry distribution
   - Performance metrics
6. Generate "Reports" in PDF/Excel format

### Admin Workflow

1. Login and access Admin Dashboard
2. View platform-wide metrics and revenue
3. Navigate to "Partners" to:
   - Approve new partner registrations
   - Monitor partner performance
   - View partner tier status
4. Use "All Leads" to:
   - Review all referral leads
   - Detect duplicate leads
   - Bulk process leads
5. Manage "Commissions" to:
   - Approve commission requests
   - Process payments
   - Generate invoices
6. View "Analytics" for strategic insights

## Key Features Implementation

### Commission Calculation

Commission tiers based on deal value:
- Under $5,000: 5%
- $5,000 - $20,000: 8%
- Above $20,000: 10%

### Lead Status Pipeline

- New Lead → Contacted → Discovery Meeting → Requirement Gathering → Proposal Sent → Negotiation → Won/Lost/On Hold

### Payment Status

- Awaiting Payment → Partially Paid → Fully Paid / Overdue

### Commission Status

- Pending Review → Approved → Processing → Paid

## Components Overview

### Authentication
- `Login.jsx`: User login with role selection
- `Register.jsx`: Multi-step partner registration form

### Partner Components
- **Dashboard**: KPI cards, revenue charts, lead distribution
- **MyLeads**: Lead table with CRUD operations and modals
- **Commissions**: Commission tracking with charts and status
- **Analytics**: Performance insights with conversion metrics
- **Reports**: Report generation and export functionality
- **Settings**: Account and notification preferences

### Admin Components
- **Dashboard**: System overview with revenue and partner metrics
- **Partners**: Partner approval and tier management
- **Leads**: Lead management with bulk operations
- **Commissions**: Commission approval and payment processing

### Common Components
- **Navbar**: Top navigation with user info and notifications
- **Sidebar**: Navigation menu (responsive)
- **KPICard**: Reusable metric card component
- **StatusBadge**: Color-coded status indicator
- **LeadsTable**: Searchable and filterable leads table

## State Management (Zustand)

The app uses Zustand for lightweight state management:

```javascript
// Auth Store
useAuthStore - user, role, login/logout methods

// Leads Store
useLeadsStore - leads array, filtering, CRUD operations

// Commission Store
useCommissionStore - commissions, totals (earned/pending/paid)

// Notification Store
useNotificationStore - notifications array, add/remove methods
```

## Mock Data

The application comes with mock data for demonstration:
- 2 sample leads with full details
- Commission history
- Partner performance metrics
- Charts and analytics data

## Styling

- **Framework**: Tailwind CSS v3.3.6
- **Colors**: Blue primary color with gradient support
- **Responsive**: Mobile-first design with breakpoints
- **Icons**: Lucide React for consistent iconography

## API Integration Points

The application is ready for backend integration at:
- `src/utils/api.js` (create for API calls)
- Replace Zustand store with actual API responses
- Authentication endpoints for login/register
- Lead CRUD operations
- Commission management
- Partner approval workflow

## Build for Production

```bash
npm run build
```

This creates an optimized build in the `build/` directory.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Future Enhancements

- [ ] Real backend integration with Odoo API
- [ ] Email notifications system
- [ ] SMS notification support
- [ ] Mobile app (React Native)
- [ ] Advanced analytics with predictive models
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Video tutorials and onboarding
- [ ] Leaderboard and gamification
- [ ] Multi-level referral system

## Troubleshooting

**Port 3000 already in use:**
```bash
npm start -- --port 3001
```

**Clear cache:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build issues:**
```bash
npm run build -- --verbose
```

## Support

For issues or questions, please contact the development team.

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**License**: Proprietary
