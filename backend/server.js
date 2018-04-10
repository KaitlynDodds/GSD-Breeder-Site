'use strict';

const express 		= require('express'),
	  bodyParser 	= require('body-parser');

const DEFAULT_PORT		= 3000;


var app = express();


// APP CONFIG ////////////////////

app.set("port", process.env.PORT || DEFAULT_PORT);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// APP ROUTES ///////////////////

app.get('/', (req, res) => {
	res.json({message: "Connected"});
});

// SERVE APP ////////////////////
app.listen(app.get('port'), () => { console.log(`API listening on port ${app.get('port')}`) });