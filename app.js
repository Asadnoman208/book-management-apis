const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes')
const bookRoutes = require('./routes/bookRoutes')
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors({
    origin: '*', // This allows requests from any origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these methods
}));

connectDB();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
