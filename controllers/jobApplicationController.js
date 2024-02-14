import JobApplications from "../models/jobApplication.js";
import LogError from "../utils/logger.js";

const getJobApplications = async (req, res) => {
    try{
        const services = await JobApplications.find({});
        res.json(services);
    } catch(error) {
        LogError(error);
        res.status(500).json({message: 'There has been Issue while Exception, please check logs'});
    }
};

const getJobApplicationById = async (req, res) => {
    try{
        const service = await JobApplications.findById(req.params.jobId);
        res.json(service);
    } catch(error) {
        LogError(error);
        res.status(500).json({message: 'There has been Issue while Exception, please check logs'});
    }
};

const createJobApplication = async (req, res) => {
    try{
        const service = await JobApplications.insertMany(req.body);
        res.json(service);
    } catch(error) {
        LogError(error);
        res.status(500).json({message: 'There has been Issue while Exception, please check logs'});
    }


};

const deleteJobApplicationById = async (req, res) => {
    try{
        const service = await JobApplications.deleteById(req.params.jobId);
        res.json(services);
    } catch(error) {
        LogError(error);
        res.status(500).json({message: 'There has been Issue while Exception, please check logs'});
    }
};


export  {
    getJobApplications,
    getJobApplicationById,
    createJobApplication,
    deleteJobApplicationById
}