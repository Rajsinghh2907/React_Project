const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: [
    "https://task-1-one-mu.vercel.app",
    "https://task-1-3dnyo5ydi-swaraj-kumars-projects-ff0e99fc.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));


app.use(express.json()); // For parsing JSON requests
app.use("/api/auth", authRoutes); // Authentication routes

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
