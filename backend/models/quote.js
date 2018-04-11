'use strict';

const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
	quote: String,
	source: String,
	citation: String,
	year: Number 
});

module.exports = mongoose.model('Quote', quoteSchema);