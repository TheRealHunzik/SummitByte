import mongoose from 'mongoose';

const { Schema } = mongoose; 

const servicesSchema = new Schema({
        name: {
            type: String,
            unique: true,
            required: true
        },
        active: {
            type: Boolean,
            required: true
        },
        short_description: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        logo_url: {
            type: String,
            required: true
        },
        service_url: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);
const Services = mongoose.model("services", servicesSchema);

export default Services;