import Services from "../models/services.js";
import LogError from "../utils/logger.js";


const getServices = async (req, res) => {
    try{
        const services = await Services.find({});
        res.json(services);
        LogError("i am here");
    } catch(error) {
        LogError(error);
        res.status(500).json({message: 'There has been Issue while Exception, please check logs'});
    }
};

const getServicesById = async (req, res) => {
    try{
        const service = await Services.findById(req.params.serviceId);
        res.json(service);
    } catch(error) {
        LogError(error);
        res.status(500).json({message: 'There has been Issue while Exception, please check logs'});
    }
};

const createService = async (req, res) => {
    try{
        const service = await Services.insertMany(req.body);
        res.json(service);
    } catch(error) {
        LogError(error);
        res.status(500).json({message: 'There has been Issue while Exception, please check logs'});
    }


};

const deleteServiceById = async (req, res) => {
    try{
        const service = await Services.deleteById(req.params.serviceId);
        res.json(services);
    } catch(error) {
        LogError(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};


export  {
    getServices,
    getServicesById,
    createService,
    deleteServiceById
}