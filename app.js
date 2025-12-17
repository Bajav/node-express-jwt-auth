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
const dbURI = 'mongodb+srv://balijawahussein:TKTdev12345@tktdb.arfqreg.mongodb.net/?appName=TKTDB';
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);