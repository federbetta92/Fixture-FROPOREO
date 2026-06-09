const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (css, js, img)
app.use(express.static(path.join(__dirname, 'public')));

// Helper: detect mobile from User-Agent
function isMobile(req) {
  const ua = req.headers['user-agent'] || '';
  return /Mobile|Android|iPhone|iPad|iPod|Windows Phone/i.test(ua);
}

// Auto-detect: redirect to /mobile or /desktop based on User-Agent
app.get('/', (req, res) => {
  if (isMobile(req)) {
    res.redirect('/mobile');
  } else {
    res.redirect('/desktop');
  }
});

// Mobile version
app.get('/mobile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Desktop version  
app.get('/desktop', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🌍 FROPOREO MUNDIAL 2026`);
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📱 Mobile:  http://localhost:${PORT}/mobile`);
  console.log(`🖥️  Desktop: http://localhost:${PORT}/desktop\n`);
});
