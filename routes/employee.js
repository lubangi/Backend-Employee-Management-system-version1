const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  searchEmployees,
  getEmployeeById
  
} = require('../controllers/employee');

// @route GET api/employees
// @desc Get all employees
// @access Public
router.get('/', getEmployees);

// @route GET api/employees/search
// @desc Search employees by keyword
// @access Public
router.get('/search', searchEmployees);

// @route GET api/employees/:id
// @desc Get employee by ID
// @access Public
router.get('/:id', getEmployeeById);

// @route POST api/employees
// @desc Create a new employee
// @access Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('department', 'Department is required').not().isEmpty(),
    check('phone', 'Please include a valid phone number').isMobilePhone()
  ],
  createEmployee
);

// @route PUT api/employees/:id
// @desc Update an existing employee
// @access Public
router.put(
  '/:id',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('department', 'Department is required').not().isEmpty(),
    check('phone', 'Please include a valid phone number').isMobilePhone()
  ],
  updateEmployee
);

// @route DELETE api/employees/:id
// @desc Delete an employee by ID
// @access Public
router.delete('/:id', deleteEmployee);



module.exports = router;
