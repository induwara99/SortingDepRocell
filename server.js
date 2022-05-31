const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();


const DB_URL = 'mongodb+srv://induwara:123@rocelldb.r36ws.mongodb.net/?retryWrites=true&w=majoritymongodb+srv://induwara:123@rocelldb.r36ws.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL).then(() => {
    console.log('DB CONNECTED');
}).catch((err) => console.log('DB CONNECTING ERROR', err));


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});