# 🎨 Sanity CMS Integration Guide

Your Salem Pain Clinic website is now connected to Sanity CMS for dynamic content management!

## ✅ What's Been Set Up

### 1. **Sanity Client** (`/lib/sanity.js`)
- Configured with your project ID: `d0m8dwid`
- Includes image URL builder for handling Sanity images
- Pre-built GROQ queries for doctor and clinic info

### 2. **About Page Integration** (`/app/about/page.js`)
- Fetches doctor data from Sanity on page load
- Displays dynamic CMS content in a highlighted section
- Falls back to hardcoded content if Sanity data unavailable

### 3. **Sanity Schemas** (`/Desktop/salemclinic/sanity.config.js`)
- **Doctor Schema**: 6 comprehensive fields (name, qualifications, specialization, bio, experience, profile image)
- **Clinic Info Schema**: 7 fields (name, hours, phones, email, address, maps URL)

---

## 🚀 How to Use Sanity CMS

### **Step 1: Start Sanity Studio**
```bash
cd /Users/arvinthcinmayankirupakaran/Desktop/salemclinic
npm run dev
```
This opens Sanity Studio at `http://localhost:3333` (or similar)

### **Step 2: Add Content**
1. Log in to Sanity Studio
2. Click "Doctor" and fill in:
   - Full Name
   - Qualifications (e.g., "MBBS, MD, DA")
   - Specialization (e.g., "Pain Management & Palliative Care")
   - Biography
   - Years of Experience
   - Upload Profile Image

3. Click "Clinic Info (Global)" and fill in:
   - Clinic Hours
   - Phone Numbers
   - Email & Address
   - Google Maps URL

### **Step 3: View Changes**
1. Save in Sanity Studio
2. Refresh your Next.js website
3. The About page will now show a highlighted CMS content section!

---

## 📖 How to Add More Dynamic Content

### **Example: Update Homepage with Dynamic Clinic Info**

In `/app/page.js`, add:

```javascript
'use client';
import { useEffect, useState } from 'react';
import { client, queries } from '@/lib/sanity';

export default function Home() {
  const [clinicInfo, setClinicInfo] = useState(null);
  
  useEffect(() => {
    client.fetch(queries.getClinicInfo).then(setClinicInfo);
  }, []);
  
  return (
    <div>
      {clinicInfo && (
        <div>
          <h2>{clinicInfo.clinicName}</h2>
          <p>{clinicInfo.clinicHours}</p>
          <p>{clinicInfo.primaryPhone}</p>
        </div>
      )}
    </div>
  );
}
```

### **Example: Display Doctor Image**

```javascript
import { urlFor } from '@/lib/sanity';

// In your component:
{doctorData?.profileImage && (
  <img
    src={urlFor(doctorData.profileImage)
      .width(400)
      .height(400)
      .url()}
    alt={doctorData.name}
  />
)}
```

---

## 🎯 Next Steps

### **Recommended Enhancements:**

1. **Add More Schemas** (in Sanity config):
   - Services schema (dynamic service cards)
   - Testimonials schema
   - FAQ schema

2. **Replace More Hardcoded Content**:
   - Contact page clinic info
   - Homepage hero text
   - Services page cards

3. **Add Image Optimization**:
   ```javascript
   urlFor(image)
     .width(800)
     .height(600)
     .quality(90)
     .format('webp')
     .url()
   ```

4. **Enable Draft Mode** (for previewing unpublished content):
   ```javascript
   useCdn: false, // In sanity.js when previewing drafts
   ```

---

## 🔧 Troubleshooting

### **"No data showing on website"**
- Check if you saved content in Sanity Studio
- Verify your project ID matches in both configs
- Check browser console for errors

### **"Images not loading"**
- Make sure image has `hotspot: true` in schema
- Verify you're using `urlFor()` helper
- Check image is published in Sanity Studio

### **"Studio not starting"**
```bash
cd /Desktop/salemclinic
rm -rf node_modules
npm install
npm run dev
```

---

## 📚 Resources

- [Sanity Docs](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Image URL Builder](https://www.sanity.io/docs/image-url)

---

**Your CMS is ready to use! 🎉**

Visit the About page to see the dynamic content section in action once you add data in Sanity Studio.
