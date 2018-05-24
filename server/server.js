const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//globals
const port = 5000;
let quotes = [];

// points to public folder for app.use
app.use( express.static( 'server/public' ) );

app.use( bodyParser.urlencoded( { extended: true } ) );

// spin up server listener
app.listen( port, () => {
    console.log('server is up and running on port:', port );
} ) 

// GET route
app.get( '/quotes', ( req, res ) => {
    console.log('in GET hit for /quotes route ');
    res.send( quotes );
}); // end GET route

// POST route
app.post( '/quotes', ( req, res ) => {
    quotes.push( req.body.author );
    console.log('in POST hit for /quotes route ', req.body.author );
    res.sendStatus (200);
}); // end POST route
