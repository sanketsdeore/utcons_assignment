const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/authRoutes"));

app.get("/", (req, res) => {
  res.send("UTCONS Auth API Running");
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {

  console.log("MongoDB Connected");

  app.listen(process.env.PORT, () => {
    console.log("Server Running");
  });

})
.catch((error) => {
  console.log(error);
});
