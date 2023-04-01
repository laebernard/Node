const express = require("express");
// const schema = require ("../repositories/models/user");
// const uuid = require ("../services/uuid");
const create_user = require("../controllers/create_user");
const find_users = require("../controllers/find_users");
const router =  express.Router()

router.use(express.json());
router.use(express.urlencoded({extended : false}));

// on ajoute des routes ici
router.get('/find',find_users);
router.post('/create',create_user);


module.exports = router