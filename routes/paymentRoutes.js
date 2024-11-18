const express = require("express");
const razorpay = require("../config/razorpayConfig");
const router = express.Router();

router.post("/order", async (req, res) => {
  const options = {
    amount: 4900, // ₹49 in paise
    currency: "INR",
    receipt: "order_rcptid_11",
  };

  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json({ success: true, order });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
