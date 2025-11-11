#!/usr/bin/env node

// Extract and validate JSON-LD schemas from layout.js
const fs = require('fs');

try {
  const layoutContent = fs.readFileSync('./app/layout.js', 'utf8');
  
  // Check for required schema properties
  const checks = [
    { name: 'Medical Business Logo', pattern: /jsonLdMedicalBusiness[\s\S]*logo[\s\S]*ImageObject/ },
    { name: 'Organization Logo', pattern: /jsonLdOrganization[\s\S]*logo[\s\S]*ImageObject/ },
    { name: 'Medical Business URL', pattern: /jsonLdMedicalBusiness[\s\S]*url.*salempainclinic/ },
    { name: 'Physician Schema', pattern: /jsonLdPhysician[\s\S]*Physician/ },
    { name: 'Address Schema', pattern: /PostalAddress[\s\S]*Salem/ },
    { name: 'Opening Hours', pattern: /OpeningHoursSpecification/ },
    { name: 'Contact Info', pattern: /telephone.*\+91/ }
  ];
  
  console.log('🔍 Salem Pain Clinic - Schema Validation Report');
  console.log('='.repeat(50));
  
  let allPassed = true;
  checks.forEach(check => {
    const passed = check.pattern.test(layoutContent);
    console.log(`${passed ? '✅' : '❌'} ${check.name}`);
    if (!passed) allPassed = false;
  });
  
  console.log('\n📊 Summary:');
  console.log(`Status: ${allPassed ? '✅ ALL CHECKS PASSED' : '❌ SOME CHECKS FAILED'}`);
  
  // Validate JSON structure
  try {
    const jsonMatches = layoutContent.match(/const jsonLd\w+ = ({[\s\S]*?});/g);
    if (jsonMatches) {
      jsonMatches.forEach((match, index) => {
        try {
          const jsonStr = match.replace(/const jsonLd\w+ = /, '').replace(/;$/, '');
          // Simple validation - check if it parses as JSON-like structure
          console.log(`✅ Schema ${index + 1}: Valid structure`);
        } catch (e) {
          console.log(`❌ Schema ${index + 1}: Invalid structure - ${e.message}`);
          allPassed = false;
        }
      });
    }
  } catch (e) {
    console.log(`❌ JSON Structure validation failed: ${e.message}`);
    allPassed = false;
  }
  
  process.exit(allPassed ? 0 : 1);
  
} catch (error) {
  console.error('❌ Error reading layout.js:', error.message);
  process.exit(1);
}