'use strict';

const express = require('express');

// models
const Quote = require('../models/quote');

const router = express.Router();


// INDEX - get all quotes
router.get('/', (req, res) => {
	Quote.find({}).
		then(quotes => {
			res.json(quotes);
		}).catch(err => {
			console.log('Error: ', err);
			res.sendStatus(400);
		});
});


// POST - create new quotes 
router.post('/', (req, res) => {
	const quote = req.body.quote;
	Quote.create(quote)
		.then(quote => {
			console.log('New Quote: ', quote);
			res.sendStatus(200);
		}).catch(err => {
			console.log('Error: ', err);
			res.sendStatus(400);
		});
});


module.exports = router;