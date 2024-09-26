const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const router = require('./route')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const cors =require('cors')
app.use(cors())
app.use('/',router)

console.log('Server running...');
app.listen(3000);