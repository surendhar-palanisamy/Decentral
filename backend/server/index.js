
require('dotenv').config()
const cors = require('cors');
const port = process.env.PORT
const express = require('express');
const connectDB = require('../server/config/db')


const app = express();
connectDB();
app.use(express.json());
app.use(cors());


app.listen(port, console.log('Server Running on ', port))