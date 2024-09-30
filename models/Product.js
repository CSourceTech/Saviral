// productModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    oldPrice: {
        type: Number,
        default: 0
    },
    quantity: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        required: true
    },
    otherImages: {
        type: [String],
        default: []
    },
    tags: {
        type: [String],
        default: []
    },
    onSale: {
        type: Boolean,
        default: false
    },
    toShowcase: {
        type: Boolean,
        default: false
    },
    category: {
        type: String,
        required: true
    },
    isNew: {
        type: Boolean,
        default: false
    },
    buyNowLink: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;