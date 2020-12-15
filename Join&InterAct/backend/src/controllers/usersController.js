const axios = require('axios');
const UserMongooseSchema = require('../models/userMongooseSchema');
const FeatureCollection = require('../models/featureCollectionSchema')
const connectionKnex = require('../database/connectionKnex');
const crypto = require('crypto');
const { create } = require('../models/featureCollectionSchema');

module.exports = {
    async index(request, response) {
        const users = await FeatureCollection.find();
      
        return response.json(users);
    },

    async create(request, response) {
        const featureCollection = request.body;

        /* let user = await FeatureCollection.findOne({ id }); */

        users = await FeatureCollection.create();

        return users;
    },

    /* async create(request, response) {
        const data = request.body;
        const { name, interests, activities, location, contact } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        const hash = crypto.randomBytes(4).toString('HEX');
        const random_index = parseInt(hash, 16);
                
        await connectionKnex('users').insert({
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
    } */
}