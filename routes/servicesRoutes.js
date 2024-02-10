import express from "express";

import {
    getServices,
    getServicesById,
    createService,
    deleteServiceById,
} from '../controllers/servicesController.js';

const router = express.Router();

router.post("/", createService);

router.get("/:serviceId", getServicesById);

router.get("/", getServices);

router.delete("/:serviceId", deleteServiceById);

export default router;