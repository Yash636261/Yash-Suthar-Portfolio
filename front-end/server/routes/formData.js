const express = require('express');
const router = express.Router();
const {sendData} = require('../Controllers/formData')

router.route('/').post(sendData)

module.exports= router