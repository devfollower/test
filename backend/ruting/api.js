const express = require('express');
const router = express.Router();
//const akcjaTest = require('../akcje/api/test.js');
const akcjaTest = require('../db/postgres.js');

//ruting --wykaz endpointów
router.get('/', akcjaTest.homepage);

module.exports = router;