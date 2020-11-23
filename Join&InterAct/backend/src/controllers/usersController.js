const connection = require('../../src/database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const users = await connection("users").select('*');
      
        return response.json(users);
    },

    async create(request, response) {
        const data = request.body;
        const { name, interests, activities, location, contact } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        const hash = crypto.randomBytes(4).toString('HEX');
        const random_index = parseInt(hash, 16);
        
        console.log(data);
        
        await connection('users').insert({
            id,
            name,
            interests,
            activities,
            location,
            contact
        })
        
        return response.json({
            id,
            hash,
            random_index
        });
    }
}