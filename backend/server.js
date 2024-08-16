const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const contactRoute = require("./routes/contactRoute");

const app = express();

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const Port = process.env.PORT || 7000;
const MongoURL = process.env.MONGO_URI;

// MongoDB Connection
mongoose
  .connect(MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Routes
app.use("/api/user", userRoute); // User route
app.use("/api/product", productRoute); // Product route
app.use("/api", contactRoute); // Contact route

// Start Server
app.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});
