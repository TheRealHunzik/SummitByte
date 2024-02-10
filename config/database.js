import { MongoClient } from 'mongodb';
import config from './index.js';

const uri = `mongodb://${config.database.host}:${config.database.port}/${config.database.name}`; 


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

// Call the function to connect to the database
export default connectDB;   