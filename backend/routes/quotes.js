'use strict';

const express = require('express');

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


module.exports = router;