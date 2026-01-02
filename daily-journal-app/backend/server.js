const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

/* -----------------------------
   MIDDLEWARE
------------------------------*/
app.use(cors({
  origin: "*",          // allow frontend (Netlify)
  methods: ["GET", "POST"],
}));

app.use(bodyParser.json({ limit: "1mb" }));

/* -----------------------------
   ROUTES
------------------------------*/
app.use("/api", routes);

/* -----------------------------
   HEALTH CHECK (IMPORTANT)
------------------------------*/
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Daily Journal API is running 🚀"
  });
});

/* -----------------------------
   SERVER START
------------------------------*/
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
