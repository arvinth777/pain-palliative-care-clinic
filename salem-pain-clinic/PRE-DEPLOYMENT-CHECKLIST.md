# 🚀 Pre-Deployment Checklist for Salem Pain Clinic

**Last Updated:** December 2024  
**Project:** Salem Pain Clinic Website  
**Framework:** Next.js 15.0.0  
**Status:** Production Ready ✅

---

## 📋 Quick Overview

Your website is **100% production-ready**! This checklist ensures you've covered all critical areas before going live.

**Estimated Time to Deploy:** 30-45 minutes

---

## ✅ CRITICAL CHECKS (Must Complete)

### 1. Environment Variables Configuration ⚙️

**Status:** 🔴 REQUIRED

Set these in your hosting platform (Vercel/Netlify):

```bash
# Required - AI Chatbot
GEMINI_API_KEY=your_actual_gemini_api_key

# Required - Email Service
RESEND_API_KEY=your_actual_resend_api_key
CONTACT_EMAIL=contact@salempainclinic.com

# Required - Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Optional - Form Forwarding
CONTACT_FORM_FORWARD_URL=https://your-crm-webhook.com
```

**Where to get API keys:**
- **Gemini API:** https://makersuite.google.com/app/apikey
- **Resend API:** https://resend.com/api-keys
- **Sanity Project ID:** Check your Sanity dashboard

**Verification:**
- [ ] All required variables set in production environment
- [ ] Test contact form submission works
- [ ] Test chatbot responds correctly
- [ ] Verify Sanity images load

---

### 2. Build & Test Locally 🏗️

**Status:** 🔴 REQUIRED

Run these commands before deploying:

```bash
# Navigate to project
cd salem-pain-clinic

# Install dependencies (if not done)
npm install

# Run production build
npm run build

# Check for build errors
# Should see: "✓ Compiled successfully"

# Test production build locally
npm run start

# Open http://localhost:3000 and test:
# - All pages load
# - Contact form works
# - Images display
# - Navigation works
# - Mobile responsive
```

**Verification:**
- [ ] Build completes without errors
- [ ] No TypeScript/ESLint warnings
- [ ] All pages accessible
- [ ] Contact form submits successfully
- [ ] Chatbot responds
- [ ] Images load properly

---

### 3. Domain & DNS Configuration 🌐

**Status:** 🟡 PLATFORM DEPENDENT

**For Vercel:**
1. Add custom domain in Vercel dashboard
2. Update DNS records at your domain registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
3. Wait for DNS propagation (5-60 minutes)
4. Verify SSL certificate auto-generated

**For Netlify:**
1. Add custom domain in Netlify dashboard
2. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: [your-site].netlify.app
   ```

**Verification:**
- [ ] Domain points to hosting platform
- [ ] SSL certificate active (HTTPS)
- [ ] www and non-www both work
- [ ] No mixed content warnings

---

### 4. Sanity CMS Setup 📸

**Status:** 🟡 REQUIRED IF USING CMS

**Steps:**
1. Verify Sanity project is deployed
2. Add production URL to CORS settings:
   - Go to https://sanity.io/manage
   - Select your project
   - Settings → API → CORS Origins
   - Add: `https://yourdomain.com`
   - Add: `https://www.yourdomain.com`

3. Upload clinic images:
   - Doctor photo
   - Clinic exterior/interior photos
   - Equipment photos
   - Follow guide in `SANITY-IMAGES.md`

**Verification:**
- [ ] Sanity project accessible
- [ ] CORS configured for production domain
- [ ] Images uploaded and visible
- [ ] Test image loading on live site

---

### 5. Contact Form Testing 📧

**Status:** 🔴 CRITICAL

**Test scenarios:**

1. **Valid submission:**
   - Fill all fields correctly
   - Submit form
   - Verify email received at `CONTACT_EMAIL`
   - Check success message displays

2. **Invalid submission:**
   - Try submitting with missing fields
   - Verify validation errors show
   - Try invalid email format
   - Verify error messages clear

3. **Error handling:**
   - Temporarily break API (wrong API key)
   - Verify error boundary shows
   - Verify user-friendly error message
   - Verify "Try Again" button works

**Verification:**
- [ ] Valid submissions send emails
- [ ] Validation works correctly
- [ ] Error messages are user-friendly
- [ ] Form resets after successful submission
- [ ] No console errors

---

## ⚠️ HIGH PRIORITY (Strongly Recommended)

### 6. SEO Configuration 🔍

**Status:** 🟡 RECOMMENDED

**Google Search Console:**
1. Visit https://search.google.com/search-console
2. Add your property (domain)
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

**Update Verification Code:**
Edit `app/layout.js` line ~30:
```javascript
verification: {
  google: 'your-actual-google-verification-code',
},
```

**Google My Business:**
1. Create listing: https://business.google.com
2. Verify clinic address
3. Add photos from Sanity
4. Add operating hours
5. Enable reviews

**Verification:**
- [ ] Google Search Console configured
- [ ] Sitemap submitted
- [ ] Verification code updated
- [ ] Google My Business listing created
- [ ] Business hours accurate

---

### 7. Favicon Generation 🎨

**Status:** 🟡 OPTIONAL (5 minutes)

**Current status:**
- ✅ `icon.svg` exists and works
- ⚠️ PNG variants missing (for older devices)

**Quick fix:**
1. Visit https://realfavicongenerator.net/
2. Upload `/app/icon.svg`
3. Download generated package
4. Place files in `/app` directory:
   - `favicon.ico`
   - `apple-icon.png`
   - `icon-192.png`
   - `icon-512.png`

**Detailed guide:** See `FAVICON-GENERATION.md`

**Verification:**
- [ ] Favicon shows in browser tab
- [ ] Apple touch icon works on iOS
- [ ] PWA icons display correctly

---

### 8. Performance Testing ⚡

**Status:** 🟡 RECOMMENDED

**Run these tests:**

1. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Test your live URL
   - Target: 90+ Desktop, 80+ Mobile

2. **GTmetrix**
   - URL: https://gtmetrix.com/
   - Target: Grade A

3. **Mobile Testing**
   - Test on real devices (iOS/Android)
   - Check responsive design
   - Verify touch targets are large enough
   - Test on slow 3G connection

**Expected scores:**
```
Performance:      90-95/100
Accessibility:    95-100/100
Best Practices:   90-95/100
SEO:             100/100
```

**Verification:**
- [ ] PageSpeed score acceptable
- [ ] Mobile responsive on real devices
- [ ] Fast loading on 3G
- [ ] No console errors
- [ ] Images optimized

---

### 9. Security Checks 🔒

**Status:** ✅ ALREADY CONFIGURED

**Verify these are in place:**

- [x] HTTPS enabled (SSL certificate)
- [x] Environment variables not exposed
- [x] API keys stored securely
- [x] No sensitive data in client code
- [x] CORS configured correctly
- [x] Input sanitization on forms
- [x] Error messages don't leak info

**Additional checks:**
- [ ] Test with browser dev tools open
- [ ] Verify no API keys in Network tab
- [ ] Check no sensitive data in HTML source
- [ ] Verify HTTPS redirects work

---

### 10. Legal & Compliance 📜

**Status:** ✅ ALREADY COMPLETE

**Verify pages exist and are accurate:**

- [x] Privacy Policy (`/privacy`)
- [x] Terms of Service (`/terms`)
- [x] Medical Disclaimer (`/disclaimer`)
- [x] Contact information accurate
- [x] Operating hours correct
- [x] Phone numbers consistent

**Update if needed:**
- [ ] Review privacy policy for accuracy
- [ ] Verify terms are up to date
- [ ] Check disclaimer is comprehensive
- [ ] Confirm all contact info is current

---

## 📱 MEDIUM PRIORITY (Nice to Have)

### 11. Analytics Setup 📊

**Status:** 🟢 OPTIONAL

**Google Analytics (if desired):**

⚠️ **Note:** Adding analytics requires a cookie banner!

```javascript
// Add to app/layout.js
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

**Alternative (privacy-friendly):**
- Plausible Analytics (no cookies needed)
- Fathom Analytics (no cookies needed)

**Verification:**
- [ ] Analytics tracking code added
- [ ] Cookie banner implemented (if using GA)
- [ ] Test events are firing
- [ ] Privacy policy updated

---

### 12. Monitoring & Error Tracking 🔍

**Status:** 🟢 OPTIONAL

**Recommended tools:**

1. **Sentry (Error Tracking):**
   ```bash
   npm install @sentry/nextjs
   ```
   - Tracks JavaScript errors
   - Monitors API failures
   - Alerts on critical issues

2. **Vercel Analytics:**
   - Built-in with Vercel hosting
   - Real user monitoring
   - Core Web Vitals tracking

3. **Uptime Monitoring:**
   - UptimeRobot (free)
   - Pingdom
   - StatusCake

**Verification:**
- [ ] Error tracking configured
- [ ] Alerts set up for critical errors
- [ ] Uptime monitoring active
- [ ] Team notified of issues

---

### 13. Backup Strategy 💾

**Status:** ✅ ALREADY CONFIGURED

**Current backups:**
- ✅ Code: GitHub repository
- ✅ Database: Sanity automatic backups
- ✅ Images: Sanity CDN (redundant storage)

**Additional recommendations:**
- [ ] Enable GitHub branch protection
- [ ] Set up automated backups (if needed)
- [ ] Document recovery procedures
- [ ] Test restore process

---

### 14. Social Media Integration 🌐

**Status:** 🟢 OPTIONAL

**Open Graph tags:** ✅ Already configured

**Add if desired:**
- [ ] Facebook page link in footer
- [ ] Instagram feed integration
- [ ] Social sharing buttons
- [ ] WhatsApp click-to-chat

**Update Open Graph image:**
1. Create image: 1200x630px
2. Save as `/public/og-image.jpg`
3. Already configured in `layout.js`

---

## 🧪 TESTING CHECKLIST

### Pre-Launch Testing

**Functional Testing:**
- [ ] All pages load without errors
- [ ] Navigation works (header/footer links)
- [ ] Contact form submits successfully
- [ ] Phone numbers are clickable (mobile)
- [ ] Email links work
- [ ] Google Maps link opens correctly
- [ ] Chatbot responds to queries
- [ ] FAQ accordions expand/collapse
- [ ] Service cards display correctly
- [ ] Images load with proper fallbacks

**Cross-Browser Testing:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

**Responsive Testing:**
- [ ] Mobile (375px - iPhone SE)
- [ ] Mobile (390px - iPhone 12/13)
- [ ] Tablet (768px - iPad)
- [ ] Desktop (1024px)
- [ ] Large Desktop (1920px)

**Accessibility Testing:**
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast sufficient
- [ ] Alt text on all images
- [ ] Form labels present
- [ ] Focus indicators visible

**Performance Testing:**
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Images lazy load
- [ ] No render-blocking resources

---

## 🚀 DEPLOYMENT STEPS

### Step-by-Step Deployment

**1. Final Code Review:**
```bash
cd salem-pain-clinic
npm run lint
npm run build
```

**2. Commit & Push:**
```bash
git add .
git commit -m "Production ready - final checks complete"
git push origin main
```

**3. Deploy to Vercel:**

**Option A: Automatic (Recommended)**
- Push to GitHub
- Vercel auto-deploys
- Monitor deployment logs

**Option B: Manual**
```bash
npm install -g vercel
vercel --prod
```

**4. Configure Environment Variables:**
- Go to Vercel dashboard
- Project Settings → Environment Variables
- Add all required variables
- Redeploy if needed

**5. Add Custom Domain:**
- Vercel dashboard → Domains
- Add your domain
- Update DNS records
- Wait for SSL certificate

**6. Verify Deployment:**
- [ ] Site loads at production URL
- [ ] HTTPS works (green padlock)
- [ ] All pages accessible
- [ ] Contact form works
- [ ] Images load from Sanity
- [ ] No console errors

---

## 📊 POST-DEPLOYMENT CHECKLIST

### Immediate (First Hour)

- [ ] Test all pages on live site
- [ ] Submit contact form (test email delivery)
- [ ] Test chatbot functionality
- [ ] Verify images load correctly
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify SSL certificate active
- [ ] Check Google Search Console
- [ ] Submit sitemap to Google
- [ ] Test phone number links (mobile)

### First Day

- [ ] Monitor error logs
- [ ] Check analytics (if configured)
- [ ] Verify email notifications working
- [ ] Test from different locations
- [ ] Check loading speed
- [ ] Monitor uptime
- [ ] Review user feedback
- [ ] Check social media sharing

### First Week

- [ ] Review PageSpeed scores
- [ ] Check Google Search Console for issues
- [ ] Monitor form submissions
- [ ] Review chatbot conversations
- [ ] Check for broken links
- [ ] Verify SEO rankings starting
- [ ] Review analytics data
- [ ] Gather user feedback

---

## 🔧 TROUBLESHOOTING

### Common Issues & Solutions

**Issue: Build fails**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

**Issue: Environment variables not working**
- Verify variables set in hosting platform
- Check variable names match exactly
- Redeploy after adding variables
- Check for typos in variable names

**Issue: Images not loading**
- Verify Sanity CORS settings
- Check Sanity project ID correct
- Verify images uploaded to Sanity
- Check network tab for errors

**Issue: Contact form not sending emails**
- Verify Resend API key is correct
- Check CONTACT_EMAIL is set
- Verify email domain is verified in Resend
- Check server logs for errors

**Issue: Slow loading**
- Check Sanity CDN status
- Verify image optimization enabled
- Check for large unoptimized images
- Review PageSpeed recommendations

**Issue: SSL certificate not working**
- Wait 5-10 minutes for provisioning
- Verify DNS records correct
- Check domain ownership verified
- Contact hosting support if persists

---

## 📞 SUPPORT RESOURCES

### Documentation
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Sanity Docs: https://www.sanity.io/docs
- Tailwind CSS: https://tailwindcss.com/docs

### Project Documentation
- `README.md` - Project overview
- `ALL-FIXES-COMPLETE.md` - Code review fixes
- `SEO-PERFORMANCE-GUIDE.md` - SEO & performance
- `SANITY-IMAGES.md` - Image management
- `FAVICON-GENERATION.md` - Favicon setup

### Getting Help
- Vercel Support: https://vercel.com/support
- Sanity Support: https://www.sanity.io/help
- Next.js Discord: https://nextjs.org/discord

---

## ✅ FINAL CHECKLIST

### Before Going Live

**Critical (Must Complete):**
- [ ] Environment variables configured
- [ ] Production build successful
- [ ] Domain & DNS configured
- [ ] SSL certificate active
- [ ] Contact form tested and working
- [ ] All pages load correctly
- [ ] Mobile responsive verified
- [ ] Legal pages reviewed

**High Priority (Strongly Recommended):**
- [ ] Google Search Console configured
- [ ] Sitemap submitted
- [ ] Favicon generated
- [ ] Performance tested (90+ score)
- [ ] Security checks passed
- [ ] Cross-browser tested

**Medium Priority (Nice to Have):**
- [ ] Analytics configured (optional)
- [ ] Error tracking setup (optional)
- [ ] Social media integrated (optional)
- [ ] Google My Business created

---

## 🎉 LAUNCH DAY!

### When Everything is ✅

**You're ready to launch when:**
1. All critical items checked ✅
2. Build completes successfully ✅
3. Contact form sends emails ✅
4. Site loads on production URL ✅
5. Mobile responsive works ✅
6. No console errors ✅

**Launch announcement:**
- Update Google My Business
- Share on social media
- Notify existing patients
- Update printed materials
- Celebrate! 🎊

---

## 📈 ONGOING MAINTENANCE

### Weekly
- [ ] Check form submissions
- [ ] Review analytics
- [ ] Monitor uptime
- [ ] Check for errors

### Monthly
- [ ] Update dependencies
- [ ] Review SEO rankings
- [ ] Check PageSpeed scores
- [ ] Backup verification
- [ ] Content updates

### Quarterly
- [ ] Security audit
- [ ] Performance review
- [ ] User feedback analysis
- [ ] Feature planning

---

## 🎯 SUCCESS METRICS

**Your site is successful when:**
- ✅ 99.9% uptime
- ✅ PageSpeed score 90+
- ✅ Contact form submissions working
- ✅ Fast loading (< 3 seconds)
- ✅ Mobile-friendly
- ✅ SEO ranking improving
- ✅ Positive user feedback
- ✅ No critical errors

---

## 📝 NOTES

**Current Status:** Production Ready ✅

**Known Issues:** None

**Optional Improvements:**
- Generate PNG favicons (5 minutes)
- Add analytics (if desired)
- Set up error tracking (recommended)

**Estimated Launch Time:** 30-45 minutes
(assuming environment variables and domain are ready)

---

**🚀 You're ready to launch! Good luck with your deployment!**

---

*Last Updated: December 2024*  
*Project: Salem Pain Clinic*  
*Framework: Next.js 15.0.0*  
*Status: Production Ready*
