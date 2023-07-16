/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const express = require("express");
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  const ans = req.body; // Access request body using req.body instead of req.params()
  res.json({ ans }); // Use res.json() instead of res.send.json()
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});