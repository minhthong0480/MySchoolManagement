const express = require("express");
const authRoute = require("./routes/auth");
const fs = require('fs')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config();

const app = express();

//db connect
mongoose.connect(process.env.DB_CONNECT)
.then(()=>console.log("DB Connect"))
.catch(()=> console.log('DB connect error'))

//middleware
app.use(morgan('dev'))
fs.readdirSync('./routes').map((r)=> 
app.use('/api', require(`./routes/${r}`)))
app.use(express.json());

app.use(cors())
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.use('/api', authRoute);

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on ${port}`));
