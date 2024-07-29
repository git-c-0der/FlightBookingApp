const {FlightRepository, AirplaneRepository} = require("../repository/index");
const {compareTime} = require('../utils/helper')

class FlightService {
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error: 'Arrival Time cannot be less than the departure time.'}
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            data['totalSeats'] = airplane.capacity;
            const flight = this.flightRepository.createFlight(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong at the service layer.");
            throw {error};
        }
    }

    async getAllFlights(data) {
        try {
            const flights = this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong at the service layer.");
            throw {error};
        }
    }

    async getFlight(flightId) {
        try {
            const flight = this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong at the service layer.");
            throw {error};
        }
    }

    async updateFlight(flightId, data) {
        try {
            const response = this.flightRepository.updateFlight(flightId, data);
            return response;
        } catch (error) {
            console.log("Something went wrong at the service layer.");
            throw {error};
        }
    }
}

module.exports = FlightService;

/**
 * data = {
 * flightNumber
 * airplaneId
 * departureAirportId
 * arrivalAirportId
 * arrivalTime
 * departureTime
 * price
 * totalSeats -> Airplane
 * }
 */