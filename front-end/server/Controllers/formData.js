const Task = require("../models/Task")

const sendData = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    //   const ans = await req.body; // Access request body using req.body instead of req.params()
    //   console.log("Received data:", ans);
    //   res.json({ ans }); // Use res.json() instead of res.send.json()
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  module.exports ={
    sendData,
  }