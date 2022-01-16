const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const movieRoute = require('./routes/movies')
const listRoute = require('./routes/lists')
/* Added by ikd */
const cors = require('cors')
/* Added by ikd Endpoint */

dotenv.config()

mongoose
.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('DB connection sucessful'))
.catch((err) => console.log(err))

app.use(express.json())
/* Added by ikd */
app.use(cors())
/* Added by ikd Endpoint */
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/movies', movieRoute)
app.use('/api/lists', listRoute)

app.listen(8800, () => {
  console.log('Backend server is running')
})
