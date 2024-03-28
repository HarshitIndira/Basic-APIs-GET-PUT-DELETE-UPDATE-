//importing the packages/moduels/files
const express = require('express');
const connect = require('./dbconnect');

//instance creation of express
const app = express();

//GET api to read the data 
app.get('/',async(req, resp)=>{
    let data = await connect();
    let result =await data.find().toArray();
    resp.send(result);
});

//creating a port
app.listen(4500);