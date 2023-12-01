const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const donationRoutes = require('./routes/donations');

//app middleware
app.use(bodyParser.json());

app.use(cors());
//route middleware
app.use(donationRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://madhu:1234@cluster0.wygwzf5.mongodb.net/';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');

})
.catch((err) => console.log('DB connection error',err));


app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);    
});