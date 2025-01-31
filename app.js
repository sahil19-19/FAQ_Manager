const express = require('express')
require('dotenv').config();
const db = require('./config/mongoDb')

const app = express()
app.use(express.json());

db();

const PORT = process.env.PORT | 3000 ;

app.listen(port , () => {
    console.log(`app running on http://localhost:${PORT}`);
})
