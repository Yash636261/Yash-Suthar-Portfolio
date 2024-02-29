/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const express = require("express");
const app = express();
const formData = require("./routes/formData")
const cors = require("cors");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/formData",formData);
app.get("/", (req, res) => {  
  res.send("Hello World");
});

const port = process.env.PORT || 4000;

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, console.log(`app is listening on port ${port}`));
    } catch (error) {
      console.log(error);
    } 
  };
  start();
