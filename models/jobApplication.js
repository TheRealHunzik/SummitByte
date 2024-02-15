import mongoose from "mongoose";
const { Schema } = mongoose;

const JobApplicationsSchema = new Schema({
        jobId: {
            type: mongoose.Types.ObjectId,
            ref: 'jobs',
            required: true
        },
        firstName: {
            type: String,
            unique: false,
            required: true
        },
        lastName: {
            type: String,
            unique: false,
            required: true
        },
        email: {
            type: String,
            unique: false,
            required: true
        },
        cover_letter: {
            type: String,
            unique: false,
            required: true
        },
        resume_url: {
            type: String,
            unique: false,
            required: true
        },
        status: {
            type: String,
            unique: false,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

const JobApplications = mongoose.model("job_pplication", JobApplicationsSchema);

export default JobApplications;