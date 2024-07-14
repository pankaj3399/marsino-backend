import Report from "../model/Report.js";

export const CreateReport = async (req, res) => {
    const { car_insurance_id, first_name, last_name, dob, street, city, postal_code } = req.body;
    if(!car_insurance_id || !first_name || !last_name || !dob || !street || !city || !postal_code){
        return res.status(400).json({message:"All fields are required!"})
    }

    try {
        const report = await Report.create(req.body);
        return res.status(201).json({report});
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error!"})
    }
}

export const GetReports = async (req, res) => {
    try {
        const reports = await Report.find({});
        return res.status(200).json({reports, success: true});
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error!"})
    }
}