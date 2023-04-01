const schema_item = require("../repositories/models/item");
const axios = require('axios');
const crypto = require('crypto');
const { Validator } = require("jsonschema");
const cruud = require("../services/db/crud");

const create_item = async (req,res) => {
    try {
        const url = 'https://www.omdbapi.com/?t=' + req.query.titre + '&apikey=7465458e';
        const response = await axios.get(url);
        console.log(response);
        console.log(response.data.Genre);
        console.log(response.data.imdbID);

        const item = {
            "id" : crypto.randomUUID(),
            "titre": req.query.titre,
            "genre": response.data.Genre,
            "id_IMDB": response.data.imdbID,
        };
        
        const validator = new Validator()
        if (validator.validate(item,schema_item).valid){
            await cruud.insertOne("items",item);
            return res.status(200).send(item);
        }
 
        return res.status(400).send("L'item n'a pas été ajouté à la bdd");
    } catch (error) {
        throw error;
    }

}

module.exports = create_item;
