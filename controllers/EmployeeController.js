class EmployeeController {

  static async getAll(req, res) {
    res.status(200).json({
      message: 'Hello from getAll EmployeeController'
    })
  }

}

module.exports = EmployeeController