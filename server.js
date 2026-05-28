require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

app.use(cors());
app.use(express.json());

// Serve static files (index.html, etc.)
app.use(express.static(path.join(__dirname)));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    ai_connected: !!DEEPSEEK_API_KEY 
  });
});

// Hug tracking
const HUGS_FILE = path.join(__dirname, 'hugs.json');
function loadHugs() {
  try {
    return JSON.parse(require('fs').readFileSync(HUGS_FILE, 'utf8'));
  } catch {
    return [];
  }
}
function saveHugs(hugs) {
  require('fs').writeFileSync(HUGS_FILE, JSON.stringify(hugs, null, 2));
}

app.post('/api/hug', (req, res) => {
  const hugs = loadHugs();
  hugs.push({
    timestamp: new Date().toISOString(),
    message: 'Farin sent a hug to Jahid 💜'
  });
  saveHugs(hugs);
  res.json({ success: true, total: hugs.length });
});

app.get('/api/hugs', (req, res) => {
  const hugs = loadHugs();
  res.json({ hugs });
});

// Proxy chat requests to DeepSeek
app.post('/api/chat', async (req, res) => {
  if (!DEEPSEEK_API_KEY) {
    return res.status(500).json({ 
      error: 'DeepSeek API key not configured on server' 
    });
  }

  try {
    const { messages, temperature = 0.8, max_tokens = 500 } = req.body;

    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages,
        temperature,
        max_tokens
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || 'DeepSeek API error'
      });
    }

    res.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      error: 'Failed to connect to DeepSeek API' 
    });
  }
});

// Serve index.html for any other route (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🌸 Farin's Buddy is running at http://localhost:${PORT}`);
  console.log(`🤖 DeepSeek AI: ${DEEPSEEK_API_KEY ? 'Connected ✅' : 'Not configured ❌'}`);
});
