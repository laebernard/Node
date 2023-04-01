const express = require("express");
const create_watchlist = require("../controllers/create_watchlist");
const find_watchlist = require("../controllers/find_watchlist");
const { find_watchlist_user } = require("../controllers/find_watchlist_user");
// permet de faire les commandes get et post
const router =  express.Router()

router.use(express.json());
router.use(express.urlencoded({extended : false}));

router.post ('/create',create_watchlist);
router.get('/find_watchlist_user',find_watchlist_user);
router.get('/find_watchlist',find_watchlist);
module.exports = router;
