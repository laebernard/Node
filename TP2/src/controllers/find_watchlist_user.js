const { Validator } = require("jsonschema");
const cruud = require("../services/db/crud");
const schema_watchlist = require("../repositories/models/watchlist");

// Récupérer la liste des watchlists d'un utilisateur
const find_watchlist_user = async (req, res) => {
  try {
    const watchlists = await cruud.find('watchlists', { proprietaire: req.params.nom });
    const validator = new Validator();
    const validated_watchlist_user = watchlists.filter((watchlists) =>
    validator.validate(watchlists, schema_watchlist).valid
    );
    return res.status(200).send(validated_watchlist_user);

  } catch (error) {
    console.error(error);
    return res.status(400).send("La watchlist de l'utilsateur n'a pas été trouvée");
  }
};

module.exports = {
  find_watchlist_user,
};
