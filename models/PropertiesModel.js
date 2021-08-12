const db = require('./conn');

class PropertiesModel {
    constructor(id, property_id) {
        this.id = id;
        this.property_id = property_id;
    }

    static async getAllProperties(user_id) {
        try {
            const query = `SELECT * FROM properties WHERE user_id = ${user_id};`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getAllByCategory(category) {
        try {
            const query = `SELECT properties.title, properties.description, categories.category_title FROM properties JOIN property_category on properties.id = property_category.property_id JOIN categories on categories.id = property_category.category_id WHERE categories.category_title = '${category}';`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getAllByZip(zip) {
        try {
            const query = `SELECT * FROM properties WHERE zip_code = ${zip};`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getByAddress(address) {
        try {   
            const query = `SELECT * FROM properties WHERE address = '${address}';`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
}

module.exports = PropertiesModel;