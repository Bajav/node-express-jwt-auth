import dotenv from 'dotenv'
dotenv.config();
import  express from 'express';
import authRoutes from './routes/authRoutes.js';
import connectDB from './config/mongoose.config.js';
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
// dbConnections
connectDB(process.env.DB_URL,process.env.PORT,app);
// view engine
app.set('view engine', 'ejs');

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);