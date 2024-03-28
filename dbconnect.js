const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function estdConnection(){
    let connection = await client.connect();
    let database = connection.db('office');
    return database.collection('employee');
}

module.exports = estdConnection;