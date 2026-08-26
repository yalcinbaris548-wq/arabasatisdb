// ArabaSatisDB Local HTTP Server (Node.js Built-in HTTP module)
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 3000;
const HOST = '0.0.0.0';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

const tls = require('tls');

// Gmail SMTP Helper (Built-in Node.js TLS Module - Zero external dependencies)
function sendGmailSmtp({ user, pass, to, subject, htmlBody }) {
  return new Promise((resolve, reject) => {
    if (!user || !pass || !to) {
      return reject(new Error('E-posta gönderici adresi, şifre ve alıcı adresi zorunludur.'));
    }

    const socket = tls.connect(465, 'smtp.gmail.com', { rejectUnauthorized: false }, () => {
      let step = 0;

      const send = (cmd) => {
        socket.write(cmd + '\r\n');
      };

      socket.on('data', (data) => {
        const response = data.toString();
        
        if (step === 0 && response.startsWith('220')) {
          step++;
          send('EHLO localhost');
        } else if (step === 1 && response.startsWith('250')) {
          step++;
          send('AUTH LOGIN');
        } else if (step === 2 && response.startsWith('334')) {
          step++;
          send(Buffer.from(user).toString('base64'));
        } else if (step === 3 && response.startsWith('334')) {
          step++;
          send(Buffer.from(pass).toString('base64'));
        } else if (step === 4 && response.startsWith('235')) {
          step++;
          send(`MAIL FROM:<${user}>`);
        } else if (step === 5 && response.startsWith('250')) {
          step++;
          send(`RCPT TO:<${to}>`);
        } else if (step === 6 && response.startsWith('250')) {
          step++;
          send('DATA');
        } else if (step === 7 && response.startsWith('354')) {
          const messageLines = [
            `From: "ArabaSatisDB Portali" <${user}>`,
            `To: <${to}>`,
            `Subject: =?UTF-8?B?${Buffer.from(subject || 'ArabaSatisDB Bildirim').toString('base64')}?=`,
            'MIME-Version: 1.0',
            'Content-Type: text/html; charset=UTF-8',
            '',
            htmlBody || '',
            '.'
          ];
          step++;
          send(messageLines.join('\r\n'));
        } else if (step === 8 && response.startsWith('250')) {
          step++;
          send('QUIT');
          resolve({ success: true, message: 'Mail başarıyla gönderildi.' });
        } else if (response.startsWith('535') || response.startsWith('530')) {
          reject(new Error('Gmail Kimlik Doğrulama Hatası: Lütfen 16 haneli Uygulama Şifrenizi ve E-posta adresinizi kontrol edin.'));
        }
      });

      socket.on('error', (err) => reject(err));
    });
  });
}

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // API Endpoint: /api/send-email (E-Posta Gönderme Servisi)
  if (req.method === 'POST' && req.url === '/api/send-email') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body);
        const result = await sendGmailSmtp(payload);
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(result));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 Sayfa Bulunamadı</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Sunucu Hatası: ${error.code}`, 'utf-8');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

function getLocalIpAddresses() {
  const interfaces = os.networkInterfaces();
  const addresses = [];
  for (const k in interfaces) {
    for (const k2 of interfaces[k]) {
      if (k2.family === 'IPv4' && !k2.internal) {
        addresses.push(k2.address);
      }
    }
  }
  return addresses;
}

server.listen(PORT, HOST, () => {
  const ips = getLocalIpAddresses();
  console.log('\n=======================================================');
  console.log('🚀 ArabaSatisDB Yerel Sunucusu Başarıyla Başlatıldı!');
  console.log('=======================================================');
  console.log(`💻 Bilgisayarınızdan Giriş Adresi : http://localhost:${PORT}`);
  ips.forEach(ip => {
    console.log(`📱 Cep Telefonunuzdan Giriş Adresi : http://${ip}:${PORT}`);
  });
  console.log('=======================================================\n');
});
