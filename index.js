const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const userRouter = require('./routes/user-routes')

app.listen(port, () => console.log(`listening on port ${port}`))

app.use(userRouter)