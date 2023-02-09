
require('dotenv').config()
const cors = require('cors');
const port = process.env.PORT
const express = require('express');
const connectDB = require('../server/config/db')
const todoRouter = require('../server/router/TodoRouter')

const app = express();
connectDB();
app.use(express.json());
app.use(cors());
app.use('/todo', todoRouter)

app.listen(port, console.log('Server Running on ', port))