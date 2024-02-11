import express from "express";

import {
    getJobs,
    getJobById,
    createJob,
    deleteJobById,
} from '../controllers/jobsController.js';

const router = express.Router();

router.post("/", createJob);

router.get("/:jobId", getJobById);

router.get("/", getJobs);

router.delete("/:jobId", deleteJobById);

export default router;