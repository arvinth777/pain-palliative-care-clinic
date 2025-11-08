# 📸 Image Upload Guide - Salem Pain Clinic

**Last Updated:** December 2024

---

## 🎯 Quick Start: Adding Your Images

### **Step 1: Prepare Your Images**

Recommended image specifications:
- **Format:** JPG or PNG (WebP for best performance)
- **Resolution:** 1920x1080 or higher
- **File Size:** Under 500KB per image (compress at https://tinypng.com)
- **Naming:** Use descriptive names (e.g., `doctor-kirupakaran.jpg`, `ultrasound-equipment.jpg`)

---

## 📂 **Where to Add Images**

### **Option A: Direct Upload to `/public/images/`**

1. Navigate to `/public/images/` folder in your project
2. Drag and drop your images there
3. Update the code to reference them

### **Option B: Upload to Sanity CMS (Recommended)**

1. Go to https://[your-sanity-project].sanity.studio
2. Upload images through the Sanity interface
3. Images automatically optimized and served via CDN

---

## 🖼️ **Images Needed & Where They Go**

### **1. Homepage - "Why Choose Us" Section**
**Current Status:** ✅ Ready for your image!  
**File:** `components/WhyChooseUs.js` (lines 46-53)  
**What to show:** Clinic facility, ultrasound equipment, or treatment room  
**Suggested name:** `clinic-equipment.jpg` or `treatment-room.jpg`

**How to add:**
1. Place image in `/public/images/clinic-equipment.jpg`
2. Open `components/WhyChooseUs.js`
3. **Uncomment lines 46-53** (the Image component)
4. **Comment out lines 56-68** (the placeholder div)

```jsx
// After adding image, it should look like:
<Image 
  src="/images/clinic-equipment.jpg"
  alt="Advanced ultrasound equipment at Salem Pain Clinic"
  fill
  className="object-cover"
  sizes="(max-width: 1024px) 100vw, 50vw"
/>
```

---

### **2. About Page - Doctor Photo**
**Current Status:** ⚠️ Using Sanity CMS  
**File:** `app/about/page.js` (around line 192)  
**What to show:** Professional photo of Dr. G.P. Kirupakaran  
**Suggested name:** `doctor-kirupakaran.jpg`

**How to add (Sanity method):**
1. Go to your Sanity Studio
2. Navigate to "About" or "Team" section
3. Upload doctor's photo
4. It will automatically appear on the site!

**Alternative (Direct upload):**
If you want to bypass Sanity and use a static image:
1. Place image in `/public/images/doctor-kirupakaran.jpg`
2. Open `app/about/page.js`
3. Find line ~185-195
4. Replace the Sanity image logic with:
```jsx
<Image
  src="/images/doctor-kirupakaran.jpg"
  alt="Dr. G.P. Kirupakaran"
  width={400}
  height={400}
  className="rounded-lg shadow-lg"
  priority
/>
```

---

### **3. About Page - Photo Gallery (Carousel)**
**Current Status:** ⚠️ Using Sanity CMS  
**File:** `app/about/page.js` + `components/PhotoCarousel.js`  
**What to show:** 
- Clinic exterior
- Reception area
- Treatment rooms
- Medical equipment
- Waiting area

**Suggested names:**
- `clinic-exterior.jpg`
- `reception-area.jpg`
- `treatment-room-1.jpg`
- `treatment-room-2.jpg`
- `equipment-ultrasound.jpg`
- `waiting-area.jpg`

**How to add (Sanity method - RECOMMENDED):**
1. Go to Sanity Studio
2. Navigate to "Gallery" or "Photos" section
3. Upload multiple images
4. They'll automatically appear in the carousel!

---

### **4. Services Page Icons/Images**
**Current Status:** ✅ Using Phosphor Icons (already set)  
**Optional:** You can add service-specific images

---

### **5. Favicon & Logo**
**Current Status:** ✅ Already added (medical caduceus icon)  
**Location:** `/app/favicon.ico`, `/app/apple-icon.png`

If you want to customize:
1. Create your custom favicon at https://realfavicongenerator.net/
2. Download the generated files
3. Replace files in `/app/` directory

---

## 🚀 **Quick Image Replacement Workflow**

### **For "Why Choose Us" Section (Homepage):**

1. **Take/get a photo** of:
   - Your ultrasound equipment
   - Treatment room with patient bed
   - OR clinic exterior/interior

2. **Compress the image:**
   - Go to https://tinypng.com
   - Upload your image
   - Download the compressed version

3. **Add to project:**
   ```bash
   # From your project root
   mv ~/Downloads/your-image.jpg public/images/clinic-equipment.jpg
   ```

4. **Update the code:**
   - Open `components/WhyChooseUs.js`
   - Find lines 46-53 (Image component)
   - Remove the `{/*` and `*/}` to uncomment
   - Find lines 56-68 (placeholder div)
   - Add `{/*` before and `*/}` after to comment out

5. **Save and refresh** - Your image should appear!

---

## 🎨 **Image Best Practices**

### **Do's:**
✅ Use high-quality, professional photos  
✅ Compress images before uploading  
✅ Use descriptive alt text for SEO  
✅ Show your actual clinic and equipment  
✅ Get patient consent if people are visible  
✅ Use landscape orientation (16:9 or 4:3)  

### **Don'ts:**
❌ Don't use stock photos if possible  
❌ Don't upload huge uncompressed files  
❌ Don't show patient faces without consent  
❌ Don't use blurry or low-quality images  
❌ Don't forget to optimize for web  

---

## 📱 **Responsive Image Sizes**

Your images will automatically adjust for different screen sizes:
- **Desktop:** Full resolution
- **Tablet:** Scaled down
- **Mobile:** Further optimized

Next.js handles this automatically! 🎉

---

## 🔧 **Troubleshooting**

### **Image not showing?**
1. Check the file path is correct
2. Verify image is in `/public/images/` folder
3. Check filename matches exactly (case-sensitive!)
4. Clear browser cache (Cmd+Shift+R on Mac)
5. Restart dev server (`npm run dev`)

### **Image looks stretched?**
- Use `object-cover` class
- Ensure aspect ratio is correct (4:3 or 16:9)

### **Image loads slowly?**
- Compress with TinyPNG
- Use WebP format
- Reduce file size to under 200KB

---

## 📊 **Current Image Status**

| Location | Status | File | Action Needed |
|----------|--------|------|---------------|
| Homepage - Why Choose | 🟡 Placeholder | `WhyChooseUs.js` | Add clinic/equipment photo |
| About - Doctor Photo | 🟢 Sanity CMS | `app/about/page.js` | Upload to Sanity Studio |
| About - Gallery | 🟢 Sanity CMS | `PhotoCarousel.js` | Upload 6-8 photos to Sanity |
| Services - Icons | 🟢 Complete | Using Phosphor Icons | No action needed |
| Favicon | 🟢 Complete | `/app/` directory | Already set |

---

## 🎯 **Recommended First Steps**

### **Priority 1: Homepage Image**
1. Take/get 1 photo of your clinic or equipment
2. Compress it
3. Save as `/public/images/clinic-equipment.jpg`
4. Uncomment lines 46-53 in `components/WhyChooseUs.js`
5. Done! ✅

### **Priority 2: Doctor Photo**
1. Get professional headshot of Dr. Kirupakaran
2. Upload to Sanity Studio
3. Automatically appears on About page ✅

### **Priority 3: Gallery**
1. Take 6-8 photos of clinic
2. Upload all to Sanity Studio
3. Automatically appears in carousel ✅

---

## 💡 **Pro Tips**

1. **Use Sanity for flexibility** - Easier to update images later without touching code
2. **Compress everything** - Fast loading = better SEO + better user experience
3. **Professional photos matter** - Consider hiring a photographer for clinic photos
4. **Mobile-first** - Test how images look on phone screens
5. **Alt text is crucial** - Helps SEO and accessibility

---

## 🆘 **Need Help?**

If you're stuck:
1. Check that file paths match exactly
2. Ensure images are in the correct folder
3. Restart your dev server
4. Check browser console for errors (F12)
5. Ask for assistance with specific error messages

---

## ✅ **When You're Done**

After adding all images:
1. Test on desktop browser
2. Test on mobile browser  
3. Check loading speed (should be <3 seconds)
4. Verify all images have alt text
5. Run production build: `npm run build`

**Your website will look professional and ready for patients!** 🏥

---

*This guide was created to help you easily add real photos to your Salem Pain Clinic website. All code is already in place - you just need to add your images!*
