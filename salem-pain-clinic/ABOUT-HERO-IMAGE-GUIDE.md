# About Page Hero Image - CMS Setup Guide

## What Was Added

I've added an image placeholder on the right side of the About page hero section (next to the text about Dr. Kirupakaran). This creates a balanced two-column layout.

## How to Add the Image in Sanity CMS

### Step 1: Add Field to Sanity Schema

1. Go to your Sanity Studio (typically at a URL like `https://your-project.sanity.studio` or locally)

2. Navigate to **Structure** → **Website Images** (or wherever your image schema is)

3. Add this new field to your `websiteImages` schema:

```javascript
{
  name: 'aboutHeroImage',
  title: 'About Page Hero Image',
  type: 'image',
  description: 'Image displayed on the right side of the About page hero section next to Dr. Kirupakaran\'s introduction',
  options: {
    hotspot: true
  },
  validation: Rule => Rule.required()
}
```

### Step 2: Upload the Image

1. In Sanity Studio, go to **Website Images**
2. Find the new field: **About Page Hero Image**
3. Click to upload an image
4. **Recommended image specs:**
   - Aspect ratio: **1:1 (square)**
   - Minimum size: **800x800 pixels**
   - Preferred size: **1200x1200 pixels**
   - Format: JPG or PNG
   - Subject: Portrait of Dr. Kirupakaran, clinic interior, or relevant medical imagery

5. Click **Publish** to save

### Step 3: Verify on Website

1. Refresh your About page (`/about`)
2. The image should appear on the right side of the hero section
3. If it doesn't appear immediately, check:
   - Image is published in Sanity
   - Browser cache (try hard refresh: Cmd+Shift+R on Mac)
   - Console for any errors

## What Shows Before Upload

Before you upload an image, a placeholder with a heart icon and text will be displayed:
- Text: "About Hero Image - Upload in Sanity CMS"
- Semi-transparent white border
- Glassmorphism effect matching the page design

## Design Features

- **Responsive**: Two columns on desktop (lg screens), stacks on mobile
- **Animations**: Smooth fade-in and scale animation
- **Styling**: Rounded corners, white border, shadow effect
- **Integration**: Uses Sanity's `urlFor()` image builder for optimization

## Alternative Image Suggestions

Good image options for this section:
1. Professional portrait of Dr. Kirupakaran
2. Dr. Kirupakaran with patients (with consent)
3. CMC Vellore campus or certificate
4. Modern clinic equipment or treatment room
5. Medical achievement or award photo

---

**Note**: The code is already deployed. You just need to add the image field to your Sanity schema and upload the image!
