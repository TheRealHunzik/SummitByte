import express from "express";
import connectDB from "./config/database.js";
import config from './config/index.js';
import cors from 'cors';
import serviceRouter from './routes/servicesRoutes.js';
import JobsRouter from './routes/jobRoutes.js';
import JobApplicationRouter from "./routes/jobApplicationRouter.js";

const app = express();


app.use(express.json());
app.use(cors());


app.use('/v1/services', serviceRouter);
app.use('/v1/jobs', JobsRouter);
app.use('/v1/jobapplication', JobApplicationRouter);


app.get('/', (req, res) => {
    res.json({message: `API Service is running at Port ${config.server.port}`}) 
});

connectDB().then(() => {
    app.listen(config.server.port, () => {
        console.log(`Server is listening to port ${config.server.port}`)
    });
});