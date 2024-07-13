const {CityRepository} = require("../repository/index");


class CityService {
    constructor(){
        this.cityRespository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRespository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at the service layer.");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            const response = this.cityRespository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong at the service layer.");
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = this.cityRespository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong at the service layer.");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = this.cityRespository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at the service layer.");
            throw {error};
        }
    }

    async getAllCities(filter) {
        try {
            const cities = this.cityRespository.getAllCities({name: filter.name});
            return cities;
        } catch (error) {
            console.log("Something went wrong at the service layer.");
            throw {error};
        }
    }
}

module.exports = CityService;