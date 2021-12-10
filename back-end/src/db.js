import { MongoClient } from 'mongodb';

let client;

export const initializeDbConnection = async () => {

    try{
        //client = await MongoClient.connect('mongodb://localhost:27017', {
        client = await MongoClient.connect('mongodb+srv://reactauth:EdkJSf5zjiWw9Su@cluster0.a0egc.mongodb.net/react-auth-db?retryWrites=true&w=majority', {
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