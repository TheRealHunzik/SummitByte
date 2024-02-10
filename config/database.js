import mongoose from 'mongoose';
import config from './index.js';

const uri = `mongodb://${config.database.host}:${config.database.port}/${config.database.name}`; 

async function connectDB() {
    try {
        await mongoose.connect(uri, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false
        })
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

// Call the function to connect to the database
export default connectDB;   