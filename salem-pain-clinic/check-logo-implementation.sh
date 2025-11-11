#!/bin/bash

echo "🔍 Checking Salem Pain Clinic Logo Implementation"
echo "================================================"

# Check if logo files exist
echo "📁 Logo Files:"
echo "  Logo PNG: $([ -f 'public/images/logo.png' ] && echo '✅ EXISTS' || echo '❌ MISSING')"
echo "  Favicon ICO: $([ -f 'public/favicon.ico' ] && echo '✅ EXISTS' || echo '❌ MISSING')"
echo "  Icon SVG: $([ -f 'public/icon.svg' ] && echo '✅ EXISTS' || echo '❌ MISSING')"
echo "  Apple Icon: $([ -f 'public/apple-icon.png' ] && echo '✅ EXISTS' || echo '❌ MISSING')"

echo ""
echo "🔧 Structured Data Logo Check:"
if grep -q '"logo"' app/layout.js; then
    echo "  Organization Schema: ✅ HAS LOGO"
else
    echo "  Organization Schema: ❌ NO LOGO"
fi

if grep -q 'MedicalBusiness.*logo' app/layout.js; then
    echo "  Medical Business Schema: ✅ HAS LOGO"
else
    echo "  Medical Business Schema: ❌ NO LOGO"
fi

echo ""
echo "📱 Manifest Check:"
if grep -q '"src": "/images/logo.png"' app/manifest.json; then
    echo "  Web App Manifest: ✅ INCLUDES LOGO"
else
    echo "  Web App Manifest: ❌ NO LOGO REFERENCE"
fi

echo ""
echo "🌐 Open Graph Check:"
if grep -q 'logo\.png' app/layout.js; then
    echo "  Open Graph Images: ✅ INCLUDES LOGO"
else
    echo "  Open Graph Images: ❌ NO LOGO"
fi

echo ""
echo "📝 Recommendations for Google Logo Display:"
echo "  1. Ensure logo.png is high quality (min 112x112px)"
echo "  2. Logo should be square or wider than tall"
echo "  3. Submit sitemap to Google Search Console"
echo "  4. Request re-indexing after deployment"
echo "  5. Wait 2-4 weeks for Google to update search results"

echo ""
echo "🚀 Next Steps:"
echo "  1. Deploy these changes to production"
echo "  2. Test with Google's Rich Results Test tool"
echo "  3. Submit to Google Search Console for re-indexing"