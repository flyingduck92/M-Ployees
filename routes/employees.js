const employeesRouter = require('express').Router()
const {
  EmployeeController,

} = require('../controllers')

employeesRouter.get('/', EmployeeController.getAll) // all employees data
// employeesRouter.get('/create',) // add brand new employee 
// employeesRouter.get('/delete/:id',) // remove an employee 
// employeesRouter.get('/update/:id',) // update an employee 



module.exports = employeesRouter