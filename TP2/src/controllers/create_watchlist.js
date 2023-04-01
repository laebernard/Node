const { Validator } = require("jsonschema");
const schema_watchlist = require("../repositories/models/watchlist");
const cruud = require("../services/db/crud");
const crypto = require('crypto');
// fonction pas synchroniser

// req.query : permet d'insérer toutes les données de la collection dans la collection mis juste avant
const create_watchlist = async (req,res) => {
    try {
        const watchlist = {
            "id" : crypto.randomUUID(),
            "nom" : req.query.nom,
            "proprietaire": req.query.proprietaire,
            "liste": [req.query.itemid,req.query.status]
        }
        const validator = new Validator()
        if (validator.validate(watchlist,schema_watchlist).valid){
            await cruud.insertOne("Watchlist",watchlist);
            return res.status(200).send(watchlist);
        }
        return res.status(400).send("la liste à regarder n'a pas été ajouté à la bdd");
    } catch (error) {
        throw error;
    }

}

module.exports= create_watchlist