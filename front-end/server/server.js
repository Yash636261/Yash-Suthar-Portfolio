/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  try {
    const ans = await req.body; // Access request body using req.body instead of req.params()
    console.log("Received data:", ans);
    res.json({ ans }); // Use res.json() instead of res.send.json()
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
