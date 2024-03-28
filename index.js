//importing the packages/moduels/files
const express = require('express');
const connect = require('./dbconnect');

//instance creation of express
const app = express();

//Handle data send bt browser in json format
app.use(express.json());

//GET API to read the data 
app.get('/',async(req, resp)=>{
    let data = await connect();
    let result =await data.find().toArray();
    resp.send(result);
});

//PUT API to insert the data 
app.post('/',async(req, resp)=>{
    let data = await connect();
    data = await data.insertOne(req.body);
    resp.send(data);
});

//PUT API to update the data
app.put('/', async (req, resp)=>{
    let data = await connect();
    let result = await data.updateOne(
        {name: req.body.name},
        {$set: req.body}
    );
    resp.send(result);
});

//DELETE Api to delete the data
app.delete('/', async(req, resp)=>{
    let data = await connect();
    await data.deleteOne(req.body);
    resp.send("Deleted successfully...");
});

//creating a port
app.listen(4500);