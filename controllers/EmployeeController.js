const { Employee } = require('../models')

class EmployeeController {

  static async getAll(req, res) {
    try {
      let employees = await Employee.findAll()

      if (employees) {
        res.status(200).json(employees) // success
      } else {
        res.status(400).json(employees) // bad request
      }

    } catch (err) {
      res.status(500).json(err) // internal server error
    }
  }

  static async add(req, res) {

    const { name, job, age, city } = req.body

    try {
      let newEmployee = { name, job, age, city }
      let result = await Employee.create(newEmployee)

      if (result) {
        let insertSuccess = { ...result.dataValues, message: `A new employee '${result.name}' has been added` }
        res.status(201).json(insertSuccess) // created
      } else {
        res.status(400).json(result) // bad request
      }
    } catch (err) {
      res.status(500).json(err) // internal server error
    }

  }

  static async delete(req, res) {
    let id = +req.params.id

    try {
      let result = await Employee.destroy({ where: { id } })

      if (result) {
        let deleteSuccess = { message: `An employee with an ID:'${id}' has been deleted` }
        res.status(201).json(deleteSuccess) // created
      } else {
        res.status(400).json(result) // bad request
      }

    } catch (err) {
      res.status(500).json(err) // internal server error
    }
  }

  static async update(req, res) {
    const id = +req.params.id
    const { name, job, age, city } = req.body

    try {
      let result = await Employee.update(
        { name, job, age, city },
        { where: { id } }
      )

      if (result) {
        let updateNotification = { message: `An employee '${name}' has been updated` }
        res.status(201).json(updateNotification) // updated success
      } else {
        res.status(400).json(result) // bad request
      }
    } catch (err) {
      res.status(500).json(err) // internal server error
    }
  }

}

module.exports = EmployeeController