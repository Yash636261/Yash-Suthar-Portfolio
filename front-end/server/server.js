/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const express = require("express");
const app = express();
require("dotenv").config();


app.use(express.json());

app.post('/', async (req, res) => {
  const ans = await req.body; // Access request body using req.body instead of req.params()
  res.json({ ans }); // Use res.json() instead of res.send.json()
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});