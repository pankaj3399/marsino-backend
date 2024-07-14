import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
    car_insurance_id: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required:  true
    },
    dob: {
        type: Date,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    }
});

const Report = mongoose.model("Report", ReportSchema);
export default Report;