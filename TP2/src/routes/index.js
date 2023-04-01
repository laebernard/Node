const express = require("express");
const users = require('./routeuser');
const items = require('./routeitem');
const watchlists = require('./routewatchlist');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));



app.use('/users',users);
app.use('/items',items);
app.use('/watchlists',watchlists);


module.exports = app