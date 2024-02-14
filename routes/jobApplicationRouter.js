import express from "express";

import { 
    createJobApplication,
    getJobApplicationById,
    getJobApplications,
    deleteJobApplicationById 
} from "../controllers/jobApplicationController.js";

const router = express.Router();

router.post("/", createJobApplication);

router.get("/:jobId", getJobApplicationById);

router.get("/", getJobApplications);

router.delete("/:jobId", deleteJobApplicationById);

export default router;