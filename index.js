const express = require('express');
const path = require('path');
var cors = require('cors');
var config = require('./config.json');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
require('dotenv').config()

//This prevent anyone from being block by CORS policy when accassing the database
app.use(cors());

app.set("port", process.env.PORT || config.mongodb.port);

app.use(express.static(path.join(__dirname, 'public')));

//Setting the connection to MongoDB
mongoose.connect(config.mongoConnectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

//Return error if mongoDB fails to connect
mongoose.connection.on('error', (err)=>{
    console.log("Error: " + err)
})

//Testing the connection
mongoose.connection.once('open',()=>{
   console.log("The conection to mongoDB is working")
})

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use(bodyParser.json());
app.use("/user", require('./routes/signup'));
app.use("/user", require('./routes/login'))

//Testing port connection
var server = app.listen(app.get("port"), () => {
    console.log('Express server listening on port ' + server.address().port)
})
