const { Validator } = require("jsonschema");
const schema_user = require("../repositories/models/user");
const cruud = require("../services/db/crud");
const crypto = require('crypto');
// fonction pas synchroniser

// req.query : permet d'insérer toutes les données de la collection dans la collection mis juste avant
const create_user = async (req,res) => {
    try {
        const user = {
            "id" : crypto.randomUUID(),
            "nom" : req.query.nom,
            "prenom": req.query.prenom,
            "mail_support" : req.query.mail,
            "date_naissance" : req.query.dateNaissance,
            "tabwatchlist" : []
        }
        const validator = new Validator()
        if (validator.validate(user,schema_user).valid){
            //  Si c'est vérifié alors on ajoute
            await cruud.insertOne("users",user);
            return res.status(200).send(user);
        }
        return res.status(400).send("L'utilisateur n'a pas été ajouté à la bdd");
    } catch (error) {
        throw error;
    }

}

module.exports= create_user