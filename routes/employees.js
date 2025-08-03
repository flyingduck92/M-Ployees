const employeesRouter = require('express').Router()
const { EmployeeController } = require('../controllers')


employeesRouter.get('/', EmployeeController.getAll)

module.exports = employeesRouter