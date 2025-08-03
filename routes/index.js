const router = require('express').Router()
const employeesRouter = require('./employees')

const baseline = 'api'

router.get(`/${baseline}`, (req, res) => {
  res.json({
    message: 'Hello from / api'
  })
})

router.use(`/${baseline}/employees`, employeesRouter)

// use property routes   
module.exports.routes = router