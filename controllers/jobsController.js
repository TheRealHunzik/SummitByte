import Jobs from "../models/jobs.js";
import LogError from "../utils/logger.js";

const createJob = async (req, res) => {
    try{
        const jobs = await Jobs.insertMany(req.body);
        res.json(jobs);
    } catch(error) {
        LogError(error);
        res.status(500).json({message: 'There has been Issue while Exception, please check logs'});
    }
}

const getJobs = async (req, res) => {
    try{
        const jobs = await Jobs.find({});
        res.json(jobs);
    } catch(error) {
        LogError(error);
        res.status(500).json({message: 'There has been Issue while Exception, please check logs'});
    }
}

const getJobById = async (req, res) => {
    try{
        const jobs = await Jobs.find(req.params.jobId);
        res.json(jobs);
    } catch(error) {
        LogError(error);
        res.status(500).json({message: 'There has been Issue while Exception, please check logs'});
    }
}

const deleteJobById = async (req, res) => {
    try{
        const jobs = await Jobs.deleteOne(req.params.jobId);
        res.json(jobs);
    } catch(error) {
        LogError(error);
        res.status(500).json({message: 'There has been Issue while Exception, please check logs'});
    }
}
export  {
    getJobs,
    getJobById,
    createJob,
    deleteJobById
}