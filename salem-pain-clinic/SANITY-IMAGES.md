# 📸 Sanity CMS - Image Upload Guide

**Simple image management - Upload photos without touching code!**

---

## 🎯 Purpose

Your Sanity CMS is configured for **image uploads only**. All text content stays in the code - you just upload/update photos through the CMS.

---

## 🚀 Quick Start

### **1. Start Sanity Studio**
```bash
cd /Users/arvinthcinmayankirupakaran/Desktop/salemclinic
npm run dev
```
Opens at: `http://localhost:3333`

### **2. Upload All Your Images**
1. In Sanity Studio, click **"Website Images"**
2. Click the **"+"** button to create new
3. Fill in:
   - **Image Set Name**: "Salem Clinic Images" (auto-filled)
   
   **Then upload any/all of these:**
   - **Doctor Profile Photo** - Professional headshot ✅
   - **Clinic Logo/Badge** - Your clinic logo ✅
   - **Clinic Building Exterior** - Outside view of clinic 🏥
   - **Waiting Area Photo** - Reception/waiting room 🪑
   - **Consultation Room** - Where doctor meets patients 🩺
   - **Ultrasound Machine** - Equipment for procedures 🖥️
   - **Pain Management Equipment** - Specialized machinery 💉
   - **Medical Equipment 1, 2, 3** - Other devices/monitors 📟
   - **Treatment Room** - Procedure room 🏥
   - **Reception Desk** - Front desk area 📋
   - **Team Photo** - Doctor with staff (optional) 👥
   - **Certificates Wall** - Awards & certifications 🏆
   - **Hero Background** - Homepage banner (optional) 🖼️

4. Click **"Publish"** (top right)
5. Refresh your website - photos appear immediately!

**Pro Tip:** You don't need to upload all at once. Add photos as you take them!

---

## 📁 What You Can Upload

### **Doctor & Team:**
- ✅ Doctor profile photo (About page)
- ✅ Team photo (doctor with staff)
- ✅ Certificates/awards wall display

### **Clinic Spaces:**
- ✅ Clinic building exterior
- ✅ Waiting area/reception
- ✅ Consultation room
- ✅ Treatment/procedure room
- ✅ Reception desk

### **Medical Equipment:**
- ✅ Ultrasound machine (for guided procedures)
- ✅ Pain management equipment
- ✅ Medical Equipment Photo 1 (monitors, pumps, etc.)
- ✅ Medical Equipment Photo 2
- ✅ Medical Equipment Photo 3

### **Branding:**
- ✅ Clinic logo/badge
- ✅ Homepage hero background (optional)

**Total: 15 image upload slots available!**

---

## 🌐 How It Works

### **Before uploading photo:**
Website shows placeholder with graduation cap icon ➡️

### **After uploading photo:**
Website shows your actual professional photo ✅

### **All text remains hardcoded:**
- Doctor name: "Dr. G.P. Kirupakaran" (in code)
- Qualifications: "MBBS, MD, DA" (in code)
- Biography & credentials (in code)
- **Only images** are managed through CMS

---

## 💡 Best Practices

### **Photo Requirements:**
- **Format**: JPG, PNG, or WebP
- **Size**: At least 600x750 pixels (portrait orientation)
- **Quality**: High-resolution, professional photo
- **Background**: Clean, neutral background preferred

### **Workflow:**
1. Take/get professional photo
2. Upload to Sanity Studio
3. Crop using hotspot tool
4. Publish
5. Refresh website - done!

---

## 🔄 Update Photo Later

1. Open Sanity Studio
2. Click existing "Doctor Profile"
3. Click on current photo
4. Upload new photo
5. Click "Publish"
6. Refresh website - updated!

---

## ❓ FAQ

**Q: Can I change the doctor's name through CMS?**
A: No - name stays in code. CMS is only for images.

**Q: What if I delete the photo?**
A: Placeholder with graduation cap icon shows instead.

**Q: Can I upload multiple doctor photos?**
A: Currently one doctor profile. Can be extended if needed.

**Q: Does this work for other pages?**
A: Currently only About page. Can add homepage/other pages later.

---

## 🛠️ Technical Notes

**Files:**
- `/app/about/page.js` - Uses doctor photo from CMS
- `/app/api/sanity/route.js` - Fetches images from Sanity
- `/lib/sanity.js` - Image URL builder

**Image Optimization:**
Sanity automatically optimizes images:
- WebP format
- Responsive sizes
- Fast CDN delivery

---

**Simple, fast, no code changes needed! 📸✨**
