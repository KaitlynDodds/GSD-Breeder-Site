'use strict';

const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
	quote: {
        type: String,
        required: true
    },
	source: {
        type: String,
        required: true
    },
	citation: String,
	year: Number 
});

module.exports = mongoose.model('Quote', quoteSchema);