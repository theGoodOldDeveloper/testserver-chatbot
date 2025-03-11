require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Statikus fájlok kiszolgálása
app.use(express.static(path.join(__dirname, "public")));

// Útvonalak importálása
const homeRoute = require("./routes/home");
app.use("/", homeRoute);

// Szerver indítása
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT} 👑`);
});
