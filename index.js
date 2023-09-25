 const port = 8000
 const express = require('express')
 const cors = require('cors')
require('dotenv').config()


const app = express()

app.listen(5173, () => console.log(`Server is running on port &{Port}`))