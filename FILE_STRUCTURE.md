# Project File Structure - BeaverHub Referral System

## Complete Directory Tree

```
referral-programme-v.10/
│
├── public/
│   └── index.html                    # Main HTML entry point
│
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.jsx             # User login form
│   │   │   └── Register.jsx          # Partner registration form
│   │   │
│   │   ├── Partner/
│   │   │   ├── Dashboard.jsx         # Partner dashboard
│   │   │   ├── MyLeads.jsx           # Lead management
│   │   │   ├── LeadDetailModal.jsx   # Lead detail view
│   │   │   ├── AddLeadModal.jsx      # Add lead form
│   │   │   ├── Commissions.jsx       # Commission tracking
│   │   │   ├── Analytics.jsx         # Performance analytics
│   │   │   ├── Reports.jsx           # Report generation
│   │   │   └── Settings.jsx          # Partner settings
│   │   │
│   │   ├── Admin/
│   │   │   ├── Dashboard.jsx         # Admin dashboard
│   │   │   ├── Partners.jsx          # Partner management
│   │   │   ├── Leads.jsx             # Lead management
│   │   │   └── Commissions.jsx       # Commission management
│   │   │
│   │   └── Common/
│   │       ├── Navbar.jsx            # Top navigation bar
│   │       ├── Sidebar.jsx           # Side navigation menu
│   │       ├── KPICard.jsx           # KPI metric card
│   │       ├── StatusBadge.jsx       # Status badge component
│   │       └── LeadsTable.jsx        # Reusable leads table
│   │
│   ├── store/
│   │   └── authStore.js              # Zustand state management
│   │
│   ├── utils/
│   │   ├── constants.js              # System constants
│   │   ├── helpers.js                # Helper functions
│   │   ├── api.js                    # API service (production)
│   │   ├── validation.js             # Form validation
│   │   ├── storage.js                # LocalStorage utilities
│   │   └── mockAPI.js                # Mock API (development)
│   │
│   ├── App.jsx                       # Main app component
│   ├── index.jsx                     # React entry point
│   └── index.css                     # Global styles
│
├── Configuration Files
│   ├── package.json                  # Dependencies & scripts
│   ├── tailwind.config.js            # Tailwind configuration
│   ├── postcss.config.js             # PostCSS configuration
│   ├── vite.config.js                # Vite configuration
│   ├── .env.example                  # Environment variables template
│   └── .gitignore                    # Git ignore rules
│
└── Documentation Files
    ├── README.md                     # Main project documentation
    ├── DEVELOPMENT.md                # Development guide
    ├── IMPLEMENTATION.md             # Implementation summary
    └── FILE_STRUCTURE.md             # This file

```

## File Descriptions

### Core Application Files

#### src/App.jsx
- Main application component
- Route configuration and layout
- Authentication guard
- Role-based routing (Partner/Admin)

#### src/index.jsx
- React application entry point
- Mounts App component to DOM
- Strict mode enabled

#### src/index.css
- Global styles
- Tailwind imports
- Custom scrollbar styling

### Authentication Components

#### Login.jsx
- User authentication form
- Role selection (Partner/Admin)
- Email & password validation
- Redirect to dashboard after login

#### Register.jsx
- Multi-step registration wizard (4 steps)
- Personal information collection
- Business details
- Payment method setup
- Security verification

### Partner Components

#### Dashboard.jsx
- KPI cards (leads, revenue, commissions)
- Monthly revenue chart
- Lead distribution pie chart
- Performance metrics
- Commission status breakdown

#### MyLeads.jsx
- Lead table with search/filter
- Add new lead modal
- View lead details
- Edit lead information
- Delete lead functionality

#### LeadDetailModal.jsx
- Detailed lead information view
- Editable lead fields
- Status tracking
- Commission information
- Notes section

#### AddLeadModal.jsx
- Form to add new leads
- Validation for required fields
- Contact information collection
- Company details
- Budget and probability input

#### Commissions.jsx
- Commission overview cards
- Monthly commission chart
- Status distribution
- Commission history table
- Invoice viewing

#### Analytics.jsx
- Lead conversion funnel
- Industry distribution chart
- Conversion metrics
- Performance summary
- Export functionality

#### Reports.jsx
- Report type selection
- Report metrics display
- Export options (PDF/Excel/CSV)
- Scheduled reports
- Report history

#### Settings.jsx
- Profile information management
- Notification preferences
- Payment method selection
- Account preferences

### Admin Components

#### Dashboard.jsx
- System overview metrics
- Partner and revenue statistics
- Top performing partners
- Alert section (suspicious activity)
- Revenue and commission charts
- Commission breakdown
- Deal status metrics
- Partner tier distribution

#### Partners.jsx
- Partner management table
- Approve/reject registrations
- Partner tier classification
- Search and filter functionality
- Partner performance metrics
- Revenue tracking

#### Leads.jsx
- All leads management
- Lead status tracking
- Spam detection
- Bulk operations
- Invoice generation
- Lead assignment

#### Commissions.jsx
- Commission approval workflow
- Payment processing
- Commission history
- Status distribution
- Invoice management
- Payout tracking

### Common Components

#### Navbar.jsx
- Top navigation bar
- User profile menu
- Notifications bell
- Logout functionality
- Company branding

#### Sidebar.jsx
- Side navigation menu
- Role-based menu items
- Active route highlighting
- Mobile responsive
- Collapsible menu

#### KPICard.jsx
- Reusable metric card
- Icon display
- Trend indicator
- Subtitle support
- Responsive design

#### StatusBadge.jsx
- Color-coded status indicator
- Multiple status types
- Consistent styling
- Small, medium, large sizes

#### LeadsTable.jsx
- Data table component
- Search functionality
- Filter by status
- Pagination support
- Action buttons (view/edit/delete)
- Responsive table

### State Management

#### authStore.js
Contains 4 Zustand stores:

1. **useAuthStore**
   - user (current user object)
   - role (partner/admin)
   - isAuthenticated (boolean)
   - login(user, role) method
   - logout() method
   - register(user, role) method

2. **useLeadsStore**
   - leads (array)
   - filteredLeads (array)
   - selectedLead (object)
   - setLeads() method
   - addLead() method
   - updateLead() method
   - deleteLead() method
   - filterLeads() method

3. **useCommissionStore**
   - commissions (array)
   - totalEarned (number)
   - totalPending (number)
   - totalPaid (number)
   - setCommissions() method

4. **useNotificationStore**
   - notifications (array)
   - addNotification() method
   - removeNotification() method
   - clearNotifications() method

### Utilities

#### constants.js
- LEAD_STATUSES array
- COMMISSION_STATUS array
- PROJECT_STATUS array
- PAYMENT_STATUS array
- COMMISSION_TIERS array
- INDUSTRIES array
- PAYMENT_METHODS array
- ROLES object

#### helpers.js
- calculateCommission(dealValue) function
- formatCurrency(value) function
- formatDate(date) function
- getStatusColor(status) function
- mockLeadsData array

#### api.js
- Axios instance with interceptors
- authAPI object
- partnersAPI object
- leadsAPI object
- commissionsAPI object
- analyticsAPI object
- reportsAPI object

#### validation.js
- validateEmail(email) function
- validatePhone(phone) function
- validateURL(url) function
- validatePassword(password) function
- validateLeadForm(lead) function
- validateRegistrationForm(data) function

#### storage.js
- setAuthToken() method
- getAuthToken() method
- removeAuthToken() method
- setUserData() method
- getUserData() method
- removeUserData() method
- setPreferences() method
- getPreferences() method
- clear() method

#### mockAPI.js
- Mock auth service
- Mock partners service
- Mock leads service
- Mock commissions service
- Mock analytics service
- Simulated network delay

### Configuration Files

#### package.json
- Project metadata
- Dependencies list
- Dev dependencies
- NPM scripts
- Browser compatibility

#### tailwind.config.js
- Tailwind CSS theme customization
- Color palette extension
- Plugin configuration

#### postcss.config.js
- PostCSS plugin configuration
- Tailwind CSS integration
- Autoprefixer setup

#### vite.config.js
- Vite build configuration
- React plugin setup
- Development server config
- Build optimization

#### .env.example
- Environment variables template
- API configuration
- Odoo settings
- Feature flags
- Security keys

#### .gitignore
- Node modules exclusion
- Build directories
- Environment files
- IDE settings
- OS specific files

### Documentation Files

#### README.md
- Project overview
- Features list
- Technology stack
- Installation instructions
- Usage guide
- Troubleshooting

#### DEVELOPMENT.md
- Development setup
- File structure explanation
- Available scripts
- Backend integration guide
- Customization instructions
- Performance optimization
- Deployment guides

#### IMPLEMENTATION.md
- Implementation summary
- Completed features
- Project structure detail
- Component descriptions
- State management overview
- API endpoints reference
- Next steps for integration

## File Statistics

- **Total Components**: 21
- **Utility Files**: 6
- **Configuration Files**: 6
- **Documentation Files**: 4
- **Total Files**: 37+

## Lines of Code

- **Components**: ~3,500 LOC
- **Utilities**: ~600 LOC
- **Configuration**: ~200 LOC
- **Total**: ~4,300 LOC

## Styling

- **CSS Classes Used**: Tailwind utility classes
- **Custom CSS**: Minimal (index.css)
- **Icons**: Lucide React (~60 icons used)
- **Colors**: Primary blue with extensions

## Dependencies

### Production
- react@18.2.0
- react-dom@18.2.0
- react-router-dom@6.20.0
- axios@1.6.2
- recharts@2.10.3
- lucide-react@0.294.0
- date-fns@2.30.0
- zustand@4.4.1
- clsx@2.0.0
- react-hot-toast@2.4.1

### Development
- @types/react@18.2.37
- @types/react-dom@18.2.15
- react-scripts@5.0.1
- tailwindcss@3.3.6
- autoprefixer@10.4.16
- postcss@8.4.31

## Next Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Connect Backend**
   - Update API endpoints
   - Implement authentication
   - Connect to Odoo

---

For detailed information, refer to README.md and DEVELOPMENT.md
