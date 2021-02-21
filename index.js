const express = require('express');
const path = require('path');
var cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

app.use(cors());

app.set("port", process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

//Connection to mongoDB
mongoose.connect('mongodb+srv://stibo:Example1234567@cluster0.lp6s2.mongodb.'
    + 'net/new-user?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

mongoose.connection.on('error', (err)=>{
    console.log("Error: " + err)
})

mongoose.connection.once('open',()=>{
   console.log("The conection to mongoDB is working")
})

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", require('./routes/signup'));
app.use("/user", require('./routes/login'))


var server = app.listen(app.get("port"), () => {
    console.log('Express server listening on port ' + server.address().port)
})
