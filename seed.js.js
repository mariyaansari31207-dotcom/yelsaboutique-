require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  {
    name: "Oversized Relaxed Tee",
    price: 49.00,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format",
    alt: "Soft cotton oversized t-shirt",
    category: "tops"
  },
  {
    name: "Sculpted Denim Jeans",
    price: 89.00,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format",
    alt: "High-waist straight jeans",
    category: "bottoms"
  },
  {
    name: "Wool-Cashmere Coat",
    price: 249.00,
    image: "https://images.unsplash.com/photo-1539533113208-fb3d9b3b6f2b?w=600&auto=format",
    alt: "Elegant long coat",
    category: "outerwear"
  },
  {
    name: "Leather Court Sneakers",
    price: 129.00,
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&auto=format",
    alt: "White minimal sneakers",
    category: "footwear"
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('✅ Database seeded with products');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed();