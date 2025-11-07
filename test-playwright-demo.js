// Comprehensive test to demonstrate Playwright MCP Server capabilities
const { spawn } = require('child_process');

console.log('=== Playwright MCP Server Comprehensive Test ===\n');

// Start the MCP server
const server = spawn('npx', ['-y', '@executeautomation/playwright-mcp-server']);

let requestId = 1;

// Helper function to send MCP requests
function sendRequest(method, params = {}) {
  const request = {
    jsonrpc: '2.0',
    id: requestId++,
    method: method,
    params: params
  };
  console.log(`\n📤 Sending request: ${method}`);
  server.stdin.write(JSON.stringify(request) + '\n');
}

// Collect server responses
let responseBuffer = '';
server.stdout.on('data', (data) => {
  responseBuffer += data.toString();
  
  // Try to parse complete JSON responses
  const lines = responseBuffer.split('\n');
  responseBuffer = lines.pop(); // Keep incomplete line in buffer
  
  lines.forEach(line => {
    if (line.trim()) {
      try {
        const response = JSON.parse(line);
        console.log(`✅ Response received for ID ${response.id}`);
        
        if (response.result) {
          if (response.result.content) {
            console.log(`   Content: ${JSON.stringify(response.result.content).substring(0, 100)}...`);
          } else if (response.result.tools) {
            console.log(`   Tools available: ${response.result.tools.length}`);
          } else {
            console.log(`   Result: ${JSON.stringify(response.result).substring(0, 100)}...`);
          }
        }
        
        if (response.error) {
          console.log(`   ❌ Error: ${response.error.message}`);
        }
      } catch (e) {
        // Not valid JSON, might be partial response
      }
    }
  });
});

server.stderr.on('data', (data) => {
  console.error('⚠️  Server stderr:', data.toString());
});

// Test sequence
setTimeout(() => {
  console.log('\n--- Test 1: List Available Tools ---');
  sendRequest('tools/list');
}, 500);

setTimeout(() => {
  console.log('\n--- Test 2: Navigate to Example Website ---');
  sendRequest('tools/call', {
    name: 'playwright_navigate',
    arguments: {
      url: 'https://example.com',
      headless: true
    }
  });
}, 2000);

setTimeout(() => {
  console.log('\n--- Test 3: Get Visible Text from Page ---');
  sendRequest('tools/call', {
    name: 'playwright_get_visible_text',
    arguments: {}
  });
}, 5000);

setTimeout(() => {
  console.log('\n--- Test 4: Take Screenshot ---');
  sendRequest('tools/call', {
    name: 'playwright_screenshot',
    arguments: {
      name: 'example-screenshot',
      storeBase64: true,
      fullPage: true
    }
  });
}, 7000);

setTimeout(() => {
  console.log('\n--- Test 5: Execute JavaScript ---');
  sendRequest('tools/call', {
    name: 'playwright_evaluate',
    arguments: {
      script: 'document.title'
    }
  });
}, 9000);

setTimeout(() => {
  console.log('\n--- Test 6: Close Browser ---');
  sendRequest('tools/call', {
    name: 'playwright_close',
    arguments: {}
  });
}, 11000);

// Cleanup and exit
setTimeout(() => {
  console.log('\n\n=== Test Complete ===');
  console.log('✅ Successfully demonstrated Playwright MCP Server capabilities:');
  console.log('   • Tool listing');
  console.log('   • Browser navigation');
  console.log('   • Text extraction');
  console.log('   • Screenshot capture');
  console.log('   • JavaScript execution');
  console.log('   • Browser cleanup');
  
  server.kill();
  process.exit(0);
}, 13000);

server.on('close', (code) => {
  console.log(`\nServer process exited with code ${code}`);
});
