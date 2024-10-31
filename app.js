const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')

const app = express();

// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://srilochan:Srilu1122@cluster0.wedoi.mongodb.net/user_auth?retryWrites=true&w=majority';

// Monitor database connection
mongoose.connection.on('connected', () => {
  console.log('✅ MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.log('❌ MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('❌ MongoDB disconnected');
});

// Connect to MongoDB
mongoose.connect(dbURI)
  .then(() => {
    app.listen(3000, () => {
      console.log('🚀 Server is running on port 3000');
    });
  })
  .catch((err) => console.error('Initial MongoDB connection error:', err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);

// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();

// // middleware
// app.use(express.static('public'));

// // view engine
// app.set('view engine', 'ejs');

// // database connection
// const dbURI = 'mongodb+srv://srilochan:Srilu1122@cluster0.wedoi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
//   .then((result) => app.listen(3000))
//   .catch((err) => console.log(err));

// // routes
// app.get('/', (req, res) => res.render('home'));
// app.get('/smoothies', (req, res) => res.render('smoothies'));