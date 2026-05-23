# Elysian Attire - Full Stack Clothing Brand Website

Backend + frontend for a modern clothing brand. Built with Node.js, Express, MongoDB, and vanilla frontend.

## Features

- Product listing API
- Shopping cart (persistent with session)
- Order placement
- Newsletter subscription
- Fully responsive frontend

## Deploy on Render

1. Push this repository to GitHub.
2. Create a new Web Service on Render.
3. Connect your GitHub repo.
4. Set:
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add environment variables:
   - `MONGODB_URI` (MongoDB Atlas connection string)
   - `SESSION_SECRET` (random string)
   - `NODE_ENV=production`
6. Click **Deploy**.

After deployment, run the seed script once to populate products:
- Use Render Shell or local: `node seed.js`

## Local Development

```bash
npm install
cp .env.example .env  # fill in MongoDB URI
npm run seed
npm run dev