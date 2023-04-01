const express = require("express");
// const schema = require ("../item");
// const uuid = require ("../services/uuid");
// const item = require ("../controllers/fonctionalites_watchlist");
const create_item = require ("../controllers/create_item");

// permet de faire les commandes get et post
const router =  express.Router()

//  permet de recupére en json
router.use(express.json());
// pet envoyer des données de tout type
router.use(express.urlencoded({extended : false}));

router.post('/create',create_item);

module.exports = router


// module.exports = {
//     "id": uuid.generateuuid(),
//     "titre": schema.titre,
//     "genre": schema.genre,
//     "id_IMDB": schema.id_IMDB
// }
