/**
 * Created by czzou on 2017/3/17.
 */
const express=require("express");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const app=express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());



let server=app.listen(8080,()=>{
    "use strict";
    console.log(`server is listening on port ${server.address().port}`)
});