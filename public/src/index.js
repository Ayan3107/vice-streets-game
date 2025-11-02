javascript
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```
- Click **"Commit new file"**

**Create `src/App.js`:**
- Click **"Add file"** → **"Create new file"**
- Name it: `src/App.js`
- **Paste the ENTIRE Vice Streets game code** (all the React component code I provided)
- Click **"Commit new file"**

5. **Your repository is ready!** 🎉

---

### Part 2: Import into CodeSandbox

**Method 1: Direct Import (Easiest)**

1. Go to https://codesandbox.io
2. Click **"Create Sandbox"** or the **"+"** button
3. Select **"Import from GitHub"**
4. Paste your GitHub repository URL:
```
   https://github.com/YOUR_USERNAME/vice-streets-game
```
5. Press Enter or click Import
6. CodeSandbox will automatically:
   - Read your repository
   - Install dependencies
   - Start the development server
   - Give you a shareable link!

**Method 2: Using CodeSandbox URL Pattern**

Simply visit:
```
https://codesandbox.io/s/github/Ayan3107/vice-streets-game
