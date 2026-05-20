# BeaverHub Referral System - Quick Start Guide

## 🚀 Get Started in 3 Minutes

### Step 1: Install Dependencies (60 seconds)

```bash
cd referral-programme-v.10
npm install
```

### Step 2: Start Development Server (30 seconds)

```bash
npm start
```

Your browser will automatically open at `http://localhost:3000`

### Step 3: Login (30 seconds)

**Test Partner Account:**
- Email: `partner@demo.com`
- Password: `anything`
- Role: Select "Referral Partner"

**Test Admin Account:**
- Email: `admin@demo.com`
- Password: `anything`
- Role: Select "Admin"

---

## 📋 What You Can Do Right Now

### As a Partner:
✅ View dashboard with KPIs
✅ Create new leads
✅ Track commission earnings
✅ View analytics and reports
✅ Edit lead details
✅ Monitor payment status

### As an Admin:
✅ View system overview
✅ Manage partners
✅ Review all leads
✅ Approve commissions
✅ Monitor partner performance
✅ View revenue analytics

---

## 📁 Project Files Overview

```
src/
├── components/          # React components
├── store/              # State management
├── utils/              # Helper functions
├── App.jsx             # Main app
└── index.jsx           # Entry point
```

---

## 🎨 Key Features

### Dashboard
- Real-time KPI metrics
- Revenue charts
- Lead distribution
- Commission tracking

### Lead Management
- Add/edit/delete leads
- Full lead details
- Status tracking
- Search & filter

### Commission System
- Automatic calculation
- Payment tracking
- Status management
- Invoice generation

### Analytics
- Conversion metrics
- Performance insights
- Industry breakdown
- Growth trends

---

## 🔧 Common Tasks

### Adding a New Lead
1. Click "New Lead" button
2. Fill in company details
3. Set budget and probability
4. Click "Add Lead"

### Checking Commissions
1. Go to "Commissions" tab
2. View earnings breakdown
3. Check payment status
4. Download invoice

### Viewing Reports
1. Go to "Reports" tab
2. Select report type
3. Click "Export as PDF"
4. Save file

---

## 📚 Documentation

- **README.md** - Full project documentation
- **DEVELOPMENT.md** - Development setup and workflow
- **IMPLEMENTATION.md** - Technical implementation details
- **FILE_STRUCTURE.md** - Complete file structure
- **QUICKSTART.md** - This guide

---

## 🚨 Troubleshooting

### Port 3000 Already in Use?
```bash
npm start -- --port 3001
```

### Dependencies Issue?
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### Page Not Loading?
- Clear browser cache: `Ctrl+Shift+Delete`
- Hard refresh: `Ctrl+Shift+R`
- Open DevTools: `F12` to check for errors

---

## 📱 Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers

---

## 🎯 Next Steps

1. **Explore the Interface**
   - Try both Partner and Admin accounts
   - Create a few test leads
   - Check out all the features

2. **Customize**
   - Change colors in `tailwind.config.js`
   - Add your company logo
   - Update branding

3. **Integration**
   - Connect to your backend API
   - Update environment variables
   - Implement real authentication

4. **Deployment**
   - Build: `npm run build`
   - Deploy to Vercel/Netlify
   - Setup domain and SSL

---

## 💡 Tips

- Use `Ctrl+Shift+I` to open DevTools and inspect components
- Check `Redux DevTools` extension for state management
- Use `Recharts` documentation for chart customization
- Tailwind CSS docs for styling: https://tailwindcss.com

---

## 🆘 Need Help?

### Common Issues:
1. **Components not showing** → Check browser console for errors
2. **Styling looks wrong** → Clear browser cache
3. **Data not updating** → Check browser DevTools Network tab
4. **Performance slow** → Check React DevTools Profiler

### Resources:
- React Docs: https://react.dev
- Tailwind Docs: https://tailwindcss.com
- Component Library: https://lucide.dev

---

## 🎉 You're Ready!

The application is fully functional with mock data. All features are working!

Start exploring and customize it to match your needs.

Happy coding! 🚀

---

**Version**: 1.0.0
**Last Updated**: 2024
**Status**: Ready to Use ✅
