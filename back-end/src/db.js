import { MongoClient } from 'mongodb';

let client;

export const initializeDbConnection = async () => {

    try{
        //client = await MongoClient.connect('', {
        console.log("Trying database connection");
        client = await MongoClient.connect('', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
    }
    catch(error){
        console.log("Mazzo the error is: " + error);
    }
}

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}
