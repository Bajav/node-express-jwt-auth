import dotenv from 'dotenv'
dotenv.config();
import  express from 'express';
import mongoose from'mongoose';
import authRoutes from './routes/authRoutes.js';

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

// database connection
console.log(process.env.DB_URL);
mongoose.connect(process.env.DB_URL)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);