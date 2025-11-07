// Simple test script to verify Gemini API connection
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');

// Manually load .env.local
const envPath = path.join(__dirname, '.env.local');
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf8');
  envFile.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0) {
      process.env[key.trim()] = valueParts.join('=').trim();
    }
  });
}

async function testGeminiAPI() {
  console.log('\n🔍 Testing Gemini API Connection...\n');
  
  const apiKey = process.env.GEMINI_API_KEY;
  console.log('API Key present:', !!apiKey);
  console.log('API Key (first 10 chars):', apiKey ? apiKey.substring(0, 10) + '...' : 'NOT FOUND');
  
  if (!apiKey) {
    console.error('❌ GEMINI_API_KEY not found in environment');
    process.exit(1);
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    console.log('\n✅ GoogleGenerativeAI initialized');
    
    // Try gemini-2.0-flash (new model available on v1beta)
    console.log('\n📝 Testing model: gemini-2.0-flash');
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    const result = await model.generateContent('Say "Hello, API test successful!" in one sentence.');
    const response = result.response.text();
    
    console.log('✅ API Response:', response);
    console.log('\n🎉 SUCCESS! Gemini API is working correctly.\n');
    
  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    console.error('\nFull error:', error);
    console.log('\n💡 This might mean:');
    console.log('   1. The API key is invalid or expired');
    console.log('   2. The model name is not supported');
    console.log('   3. There are network/firewall issues');
    console.log('   4. The API quota has been exceeded\n');
    process.exit(1);
  }
}

testGeminiAPI();
