const employeesRouter = require('express').Router()
const {
  EmployeeController,

} = require('../controllers')

employeesRouter.get('/', EmployeeController.getAll)     // all employees data
employeesRouter.post('/create', EmployeeController.add)  // add brand new employee 
employeesRouter.delete('/delete/:id', EmployeeController.delete) // remove an employee
employeesRouter.put('/update/:id', EmployeeController.update) // update an employee 

module.exports = employeesRouter