const { Op } = require("sequelize");
const { City } = require("../models/index")

class CityRepository {
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            console.log("Some error happened in the repository layer.");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where: {
                    id: cityId,
                }
            });

            return true;

        }catch(error){
            console.log("Some error happened in the repository layer.");
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            
            // In case we can to see the new data that has been 
            // updated on the console then we can use this.
            // const city = City.findByPk(cityId);
            // city.name = data.name;
            // await city.save()
            return city;
            
        } catch (error) {
            console.log("Some error happened in the repository layer.");
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;            
        } catch (error) {
            console.log("Some error happened in the repository layer.");
            throw {error};
        }
    }

    async getAllCities(filter){
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }

            const cities = await City.findAll();
            return cities;            
        } catch (error) {
            console.log("Some error happened in the repository layer.");
            throw {error};
        }
    }
}

module.exports = CityRepository;