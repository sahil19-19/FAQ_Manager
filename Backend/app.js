const express = require('express')
const db = require('./config/mongoDb')
const faq_route = require('./routes/faqRouter')
require('dotenv').config();

const app = express()
app.use(express.json());
db();

app.use('/api/faqs',faq_route);

const PORT = process.env.PORT | 3000 ;

const server = app.listen(PORT , () => {
    console.log(`app running on http://localhost:${PORT}`);
})

module.exports = server;