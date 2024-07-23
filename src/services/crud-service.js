class CrudService {
    constructor(repository){
        this.repository = repository;
    }

    async create(data) {
        try {
            const result = await this.repository.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong at the crud service.");
            throw {error};
        }
    }

    async destroy(id) {
        try {
            const response = this.repository.destroy(id);
            return response;
        } catch (error) {
            console.log("Something went wrong at the crud service.");
            throw {error};
        }
    }

    async update(id, data) {
        try {
            const result = this.repository.update(id, data);
            return result;
        } catch (error) {
            console.log("Something went wrong at the crud service.");
            throw {error};
        }
    }

    async get(id) {
        try {
            const result = this.repository.get(id);
            return result;
        } catch (error) {
            console.log("Something went wrong at the crud service.");
            throw {error};
        }
    }

    async getAll() {
        try {
            const result = this.repository.getAll();
            return result;
        } catch (error) {
            console.log("Something went wrong at the crud service.");
            throw {error};
        }
    }
}

module.exports = CrudService;