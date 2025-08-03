const express = require('express')
const dotenv = require('dotenv')

const app = express()

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* Routes API: /api */
const { routes } = require('./routes')
app.use(routes)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`App running at http://localhost:${port}`))