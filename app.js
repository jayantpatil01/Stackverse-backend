const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const app = express();

// CORS Configuration
const corsOptions = {
  origin: [
    "http://localhost:3000", // Frontend during local development
    "https://stackverse-frontend.vercel.app", // Your deployed frontend URL
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Allow credentials if needed (cookies, authentication)
};

app.use(cors(corsOptions)); // Apply CORS with the specified options

// Handle preflight requests for all routes
app.options("*", cors(corsOptions));

// Middleware
app.use(express.json());

// Routes
const paymentRoutes = require("./routes/paymentRoutes");
app.use("/api/payment", paymentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
