# 🎨 Sanity CMS - Quick Reference Guide

**Your CMS is fully integrated and working!** 🎉

---

## 📝 How to Update Content

### **Start Sanity Studio**
```bash
cd /Users/arvinthcinmayankirupakaran/Desktop/salemclinic
npm run dev
```
Opens at: `http://localhost:3333`

### **Update Doctor Profile**
1. Open Sanity Studio
2. Click "Doctor Profile"
3. Select your existing profile or create new
4. Edit any fields:
   - Full Name
   - Qualifications (e.g., MBBS, DCH)
   - Specialization
   - Biography
   - Years of Experience
   - Profile Image
5. Click **"Publish"** (top right)
6. Refresh your website - changes appear instantly!

### **Update Clinic Info**
1. Click "Clinic Info (Global)"
2. Edit:
   - Clinic hours
   - Phone numbers
   - Email & address
   - Google Maps URL
3. Click **"Publish"**

---

## 🌐 View Changes on Website

**Website URL:** http://localhost:3002/about

The "CMS-Managed Content" section shows all your Sanity data with a highlighted card design.

---

## 🔧 Technical Details

### **Files Modified:**
- `/app/about/page.js` - Displays CMS content
- `/app/api/sanity/route.js` - Internal API (avoids CORS)
- `/lib/sanity.js` - Sanity client configuration
- `/next.config.js` - Updated CSP for Sanity domains

### **How It Works:**
```
1. You publish content in Sanity Studio
2. Website calls /api/sanity (your internal API)
3. API fetches from Sanity Cloud
4. Data displayed on About page
```

### **No CORS Issues!**
We use an internal Next.js API route instead of direct browser→Sanity calls.

---

## 🎯 Next Steps (Optional)

### **1. Add More Content Types**
Create new schemas in `/Desktop/salemclinic/sanity.config.js`:
- Services (dynamic service cards)
- Testimonials
- FAQ entries
- Team members

### **2. Use CMS Data on Other Pages**
Copy the pattern from About page:
```javascript
const [data, setData] = useState(null);

useEffect(() => {
  fetch('/api/sanity?type=doctor')
    .then(res => res.json())
    .then(setData);
}, []);
```

### **3. Replace More Hardcoded Content**
- Homepage hero text
- Contact page info
- Service descriptions

### **4. Production Deployment**
When deploying to Vercel/Netlify:
1. Add production URL to Sanity CORS settings
2. Set environment variables (if needed)
3. Data updates automatically!

---

## 🐛 Troubleshooting

**"Content not updating"**
- Make sure you clicked "Publish" (not just save draft)
- Hard refresh browser: `Cmd + Shift + R`

**"CORS errors"**
- Already fixed with internal API route
- No action needed!

**"Images not loading"**
- Verify image uploaded in Sanity Studio
- Check that `hotspot: true` is in schema

**"Server not running"**
```bash
cd /Users/arvinthcinmayankirupakaran/Desktop/webproj/salem-pain-clinic
npx next dev -p 3002
```

---

## 📚 Resources

- [Sanity Docs](https://www.sanity.io/docs)
- [GROQ Queries](https://www.sanity.io/docs/groq)
- [Next.js + Sanity](https://www.sanity.io/guides/nextjs-app-router-live-preview)

---

**Your CMS is production-ready!** 🚀

Update content anytime in Sanity Studio - no code changes needed!
