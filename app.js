const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes')
const bookRoutes = require('./routes/bookRoutes')
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const corsOptions = {
    origin: 'https://7dollars.shop', // Allow only this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these methods
    credentials: true, // Include credentials (if needed)
};

app.use(cors(corsOptions));

connectDB();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
