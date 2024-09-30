// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { default: dbConnect } = require('./src/lib/dbConnect');
const Product = require('./models/Product');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
dbConnect();

// API endpoint to fetch products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});