import Services from "../models/services.js";


const getServices = async (req, res) => {
    try{
        const services = await Services.find({});
        res.json(services);
    } catch(error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

const getServicesById = async (req, res) => {
    try{
        const service = await Services.findById(req.params.serviceId);
        res.json(service);
    } catch(error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

const createService = async (req, res) => {
    try{
        const service = await Services.findById(req.params.serviceId);
        res.json(service);
    } catch(error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }


};

const deleteServiceById = async (req, res) => {
    try{
        const service = await Services.deleteById(req.params.serviceId);
        res.json(services);
    } catch(error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};


export  {
    getServices,
    getServicesById,
    createService,
    deleteServiceById
}