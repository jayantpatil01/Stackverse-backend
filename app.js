const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const paymentRoutes = require("./routes/paymentRoutes");

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/payment", paymentRoutes);

// Use environment variable for the port
const PORT = process.env.PORT || 5000; // Fallback to 5000 if not set
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
