# BeaverHub Referral System - Development Setup Guide

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git
- Modern web browser (Chrome, Firefox, Safari, Edge)

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env.local
```

Edit `.env.local` with your settings.

### 3. Start Development Server
```bash
npm start
```

The application will open at `http://localhost:3000`

## Development Workflow

### File Structure
```
referral-programme-v.10/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── store/          # Zustand stores
│   ├── utils/          # Utilities and helpers
│   ├── App.jsx         # Main app component
│   ├── index.jsx       # Entry point
│   └── index.css       # Global styles
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind config
└── README.md           # Documentation
```

### Available Scripts

```bash
# Start development server (port 3000)
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject configuration (not recommended)
npm run eject
```

## Testing the Application

### Partner Account Flow
1. Go to Login page
2. Select "Referral Partner" role
3. Enter any email and password
4. Click Login
5. Explore Dashboard, Leads, Commissions, Analytics, and Reports

### Admin Account Flow
1. Go to Login page
2. Select "Admin" role
3. Enter any email and password
4. Click Login
5. View all admin features and manage partners/leads/commissions

## Backend Integration

### API Endpoints to Connect

```
Authentication:
POST /api/auth/login
POST /api/auth/register
POST /api/auth/logout

Partners:
GET /api/partners/
POST /api/partners/
GET /api/partners/:id
PUT /api/partners/:id
DELETE /api/partners/:id

Leads:
GET /api/leads/
POST /api/leads/
GET /api/leads/:id
PUT /api/leads/:id
DELETE /api/leads/:id

Commissions:
GET /api/commissions/
POST /api/commissions/
GET /api/commissions/:id
PUT /api/commissions/:id (approve/reject)

Analytics:
GET /api/analytics/dashboard
GET /api/analytics/leads
GET /api/analytics/revenue
```

### Connecting to Odoo

1. Install Odoo RPC Library
2. Create API service in `src/utils/odoo-api.js`
3. Update store actions to call real endpoints
4. Configure CORS in Odoo settings

Example API Service:
```javascript
// src/utils/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT,
});

// Add token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
```

## Customization

### Styling
- Modify `tailwind.config.js` for theme colors
- Update `src/index.css` for global styles
- Use Tailwind classes in components

### Adding New Pages
1. Create component in `src/components/`
2. Add route in `src/App.jsx`
3. Update sidebar navigation in `src/components/Common/Sidebar.jsx`

### Changing Colors
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
        600: '#your-darker-color',
      },
    },
  },
}
```

## Performance Optimization

### Code Splitting
- React Router handles route-based code splitting
- Implement lazy loading for heavy components

### Build Optimization
```bash
npm run build
```

### Bundle Analysis
```bash
npm install -D @next/bundle-analyzer
```

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Troubleshooting

### Port Already in Use
```bash
# Use different port
npm start -- --port 3001

# Or kill process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Tailwind Classes Not Working
```bash
# Rebuild Tailwind
npm run build:css
```

### Browser Cache Issues
- Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (macOS)
- Clear browser cache and restart

## Browser DevTools

### React Developer Tools
- Install React DevTools browser extension
- Inspect component props and state
- Profile performance

### Network Debugging
- Open DevTools Network tab
- Monitor API requests/responses
- Check request/response headers

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes and commit
git add .
git commit -m "feat: Add new feature"

# Push to remote
git push origin feature/feature-name

# Create pull request
```

## Performance Monitoring

```javascript
// Add to index.jsx for performance tracking
import { useEffect } from 'react';

useEffect(() => {
  if ('web-vital' in window) {
    window.webVitals?.({
      onCLS: (metric) => console.log('CLS:', metric),
      onFID: (metric) => console.log('FID:', metric),
      onFCP: (metric) => console.log('FCP:', metric),
      onLCP: (metric) => console.log('LCP:', metric),
      onTTFB: (metric) => console.log('TTFB:', metric),
    });
  }
}, []);
```

## Security Best Practices

1. **Store Sensitive Data**
   - Use environment variables for API keys
   - Never commit `.env` files
   - Use secure HTTP only cookies

2. **Input Validation**
   - Validate all user inputs
   - Sanitize before sending to API
   - Use form validation libraries

3. **CORS Configuration**
   - Configure CORS properly on backend
   - Use secure headers
   - Implement CSRF protection

4. **Authentication**
   - Use JWT tokens with expiration
   - Implement refresh token rotation
   - Secure token storage

## Support & Resources

- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Recharts: https://recharts.org
- Zustand: https://github.com/pmndrs/zustand
- Lucide Icons: https://lucide.dev

---

For additional support, contact the development team.
