const express = require('express');
const router = express.Router();
const employeeRoutes = require('./employee');

router.use('/employees', employeeRoutes);

module.exports = router;
