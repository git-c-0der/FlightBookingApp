const {AirportService} = require("../services/index");
const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Succesfully created an airport.",
            err: {}
        });
    } catch (error) {
        console.log({error});
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create an airport.",
            err: error
        });
        
    }
}

module.exports = {
    create
}