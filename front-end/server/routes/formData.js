const express = require('express');
const router = express.Router();
const {sendData} = require('../Controllers/formData')

router.route('/submit').post(sendData)

module.exports= router