'use strict';

const express = require('express');

// models
const Quote = require('../models/quote');

const router = express.Router();


// INDEX - get all quotes
router.get('/', (req, res) => {
	res.json({quotes: [
		{
			quote: "The language of friendship is not words, but meanings.",
			source: "Henry David Thoreau",
			citation: "Famous Quotes and People",
			year: 1998
		},
		{
			quote: "The language of friendship is not words, but meanings.",
			source: "Henry David Thoreau",
			citation: "Famous Quotes and People",
			year: 1998
		},
		{
			quote: "The language of friendship is not words, but meanings.",
			source: "Henry David Thoreau",
			citation: "Famous Quotes and People",
			year: 1998
		}
	]});
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