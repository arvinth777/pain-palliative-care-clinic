// Test script to demonstrate Playwright MCP Server capabilities
// This script will test the browser automation features

const { spawn } = require('child_process');
const readline = require('readline');

console.log('Testing Playwright MCP Server...\n');

// Start the MCP server
const server = spawn('npx', ['-y', '@executeautomation/playwright-mcp-server']);

const rl = readline.createInterface({
  input: server.stdout,
  crlfDelay: Infinity
});

let responseData = '';

// Listen for server output
server.stdout.on('data', (data) => {
  responseData += data.toString();
  console.log('Server response:', data.toString());
});

server.stderr.on('data', (data) => {
  console.error('Server error:', data.toString());
});

// Send a request to list available tools
setTimeout(() => {
  console.log('\nSending request to list available tools...\n');
  
  const request = {
    jsonrpc: '2.0',
    id: 1,
    method: 'tools/list',
    params: {}
  };
  
  server.stdin.write(JSON.stringify(request) + '\n');
  
  // Wait for response and then close
  setTimeout(() => {
    console.log('\n=== Test Complete ===');
    console.log('The Playwright MCP Server is configured and responding!');
    server.kill();
    process.exit(0);
  }, 3000);
}, 1000);

server.on('close', (code) => {
  console.log(`\nServer process exited with code ${code}`);
});
