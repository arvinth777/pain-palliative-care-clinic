# MCP Servers Configuration Guide

## Successfully Installed MCP Servers for Web App Development

### 1. **Playwright MCP Server** ✅
**Server Name:** `github.com/executeautomation/mcp-playwright`
**Purpose:** Browser automation and testing
**Key Capabilities:**
- Navigate to URLs and interact with web pages
- Take screenshots (full page or specific elements)
- Click, fill forms, hover, drag & drop
- Execute JavaScript in browser console
- HTTP requests (GET, POST, PUT, PATCH, DELETE)
- Generate Playwright test code
- Handle iframes
- Upload files
- Save pages as PDF
- Console log retrieval

**Use Cases:**
- End-to-end testing of your web app
- Web scraping
- Automated UI testing
- Screenshot generation for documentation
- Browser automation workflows

---

### 2. **Filesystem MCP Server**
**Server Name:** `filesystem`
**Purpose:** File system operations
**Key Capabilities:**
- Read and write files
- Create, move, and delete files/directories
- Search files
- Get file information

**Use Cases:**
- Managing project files
- Reading configuration files
- Creating new components/modules
- File organization

---

### 3. **GitHub MCP Server**
**Server Name:** `github`
**Purpose:** GitHub integration
**Key Capabilities:**
- Create and manage repositories
- Create issues and pull requests
- Search code and repositories
- Manage branches
- Fork repositories

**Use Cases:**
- Version control operations
- Collaborative development
- Issue tracking
- Code review workflows

**Note:** Requires GitHub Personal Access Token (replace `<your_github_token_here>` in config)

---

### 4. **Fetch MCP Server**
**Server Name:** `fetch`
**Purpose:** HTTP requests and API interactions
**Key Capabilities:**
- Make HTTP requests to any URL
- Fetch data from APIs
- Download web content

**Use Cases:**
- API testing
- Fetching external data
- Integration with third-party services
- Web scraping

---

### 5. **Memory MCP Server**
**Server Name:** `memory`
**Purpose:** Knowledge graph and persistent memory
**Key Capabilities:**
- Store and retrieve information
- Create relationships between entities
- Build knowledge graphs
- Maintain context across sessions

**Use Cases:**
- Remembering project-specific information
- Tracking dependencies and relationships
- Maintaining development context
- Building project knowledge base

---

## How These Servers Help with Web App Development

### Development Workflow:
1. **Filesystem** - Create and manage your web app files
2. **Fetch** - Test APIs and fetch external data
3. **Playwright** - Test your web app's UI and functionality
4. **GitHub** - Version control and collaboration
5. **Memory** - Remember project context and decisions

### Example Workflow:
```
1. Use Filesystem to create HTML/CSS/JS files
2. Use Fetch to integrate with backend APIs
3. Use Playwright to test the UI automatically
4. Use GitHub to commit and push changes
5. Use Memory to track project requirements and decisions
```

---

## Configuration Location
The MCP servers are configured in:
```
~/Library/Application Support/Code/User/globalStorage/blackboxapp.blackboxagent/settings/blackbox_mcp_settings.json
```

---

## Next Steps

1. **For GitHub Server:** Add your GitHub Personal Access Token
   - Go to GitHub Settings → Developer Settings → Personal Access Tokens
   - Generate a new token with appropriate permissions
   - Replace `<your_github_token_here>` in the config

2. **Restart VS Code** to load the new MCP servers

3. **Test the servers** by asking me to perform tasks using these tools

---

## Additional Recommended MCP Servers (Optional)

You may also want to consider:
- **SQLite MCP Server** - For database operations
- **Puppeteer MCP Server** - Alternative browser automation
- **Brave Search MCP Server** - Web search capabilities
- **Slack MCP Server** - Team communication integration

Let me know if you'd like to add any of these!
