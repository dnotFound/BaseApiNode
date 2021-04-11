const express = require('express')

const port = process.env.PORT || 5000
const app = express()

app.use(express.json())

const routes = require('./routes/route')

app.use('/routes', routes)

app.listen(port, () => {
    console.log(`[SUCCESS] BaseApiNode starts at: ${port}`)
})

