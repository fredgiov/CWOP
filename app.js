require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

// 1) Tell Express where your views live and which engine to use
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 2) Serve static assets
app.use(express.static(path.join(__dirname, 'public')));

// 3) Public routes (in routes/public.js)
const publicRoutes = require('./routes/public');
app.use('/', publicRoutes);

// 4) Admin routes (in routes/admin.js)
const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

// 5) Start server on correct port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Listening on port ${PORT}`);
});
