"use strict";

const express = require('express');

const bodyParser = require('body-parser');
const app = new express();
const session = require('express-session');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./views'));

app.use(express.static('./public'));
app.use(express.static('./dist'));
app.use(session({
    secret: 'a',
    resave: true,
    saveUninitialized: true,
}));

app.get("/",(req,res)=>{
    res.send("hello")
})

app.post('/userInfo', (req, res) => {
    const result = req.body;
    console.log(result, 'server result');
    res.status(201).send({name: 3, email: '123@123.com'});
});

var server = app.listen(3001, function () {
    var port = server.address().port;
    console.log('listening at port %s', port);
});

module.exports = app;