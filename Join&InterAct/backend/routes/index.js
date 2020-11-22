const { response } = require('express');
var express = require('express');
var router = express.Router();

const crypto = require('crypto');
const connection = require('../src/database/connection');

router.get('/users', async (request, response) => {
  const users = await connection("users").select('*');

  return response.json(users);
});

/* GET home page. */
router.post('/users', async (request, response) => {
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
});

module.exports = router;
