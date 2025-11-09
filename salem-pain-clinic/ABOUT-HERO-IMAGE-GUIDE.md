# About Page Images - CMS Setup Guide

## What Was Added

I've added two image placeholders on the About page:
1. **About Hero Image** - Right side of the hero section (next to Dr. Kirupakaran's introduction)
2. **Medical Background Image** - Left side of the "Medical Background" section (next to "A Lifetime Dedicated to Healing")

## How to Add Images in Sanity CMS

### Step 1: Add Fields to Sanity Schema

1. Go to your Sanity Studio
2. Navigate to **Structure** → **Website Images**
3. Add these two new fields to your `websiteImages` schema:

```javascript
{
  name: 'aboutHeroImage',
  title: 'About Page Hero Image',
  type: 'image',
  description: 'Image displayed on the right side of the About page hero section',
  options: {
    hotspot: true
  }
},
{
  name: 'medicalBackgroundImage',
  title: 'Medical Background Image',
  type: 'image',
  description: 'Image displayed in the Medical Background section of the About page',
  options: {
    hotspot: true
  }
}
```

### Step 2: Upload the Images

#### About Hero Image
1. In Sanity Studio, go to **Website Images**
2. Find: **About Page Hero Image**
3. Upload image
4. **Recommended specs:**
   - Aspect ratio: **1:1 (square)**
   - Size: **1200x1200 pixels**
   - Format: JPG or PNG

#### Medical Background Image
1. Find: **Medical Background Image**
2. Upload image
3. **Recommended specs:**
   - Aspect ratio: **4:5 (portrait)**
   - Size: **600x750 pixels**
   - Format: JPG or PNG

5. Click **Publish** to save

### Step 3: Verify on Website

1. Refresh your About page (`/about`)
2. Both images should appear
3. If not, check browser cache (Cmd+Shift+R)

## What Shows Before Upload

**About Hero Image Placeholder:**
- Heart icon with "About Hero Image - Upload in Sanity CMS"
- White glassmorphism card

**Medical Background Image Placeholder:**
- Award icon with "Medical Background Image"
- Light blue gradient background
- Text: "Upload in Sanity CMS"

## Image Suggestions

**About Hero Image:**
- Professional portrait of Dr. Kirupakaran
- CMC Vellore campus
- Medical achievement photo

**Medical Background Image:**
- Dr. Kirupakaran at work
- Clinic equipment or treatment room
- Medical certificates or awards
- Patient care scene (with consent)

---

**Note**: Code is deployed. Just add the fields to Sanity schema and upload images!
