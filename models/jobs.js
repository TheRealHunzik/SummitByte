import mongoose from 'mongoose';

const { Schema } = mongoose; 

const jobsSchema = new Schema({
        title: {
            type: String,
            unique: true,
            required: true
        },
        active: {
            type: Boolean,
            required: true
        },
        end_date: {
            type: Date,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        experience: {
            type: String,
            required: true
        },
        skills: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);
const Jobs = mongoose.model("jobs", jobsSchema);

export default Jobs;