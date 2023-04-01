const { Validator } = require("jsonschema");
const cruud = require("../services/db/crud");
const schema_watchlist = require("../repositories/models/watchlist");

const find_watchlist = async (req, res) => {
  try {
    const watchlists = await cruud.find("watchlists");

    // Validate each user against the user schema
    const validator = new Validator();
    const validated_watchlist = watchlists.filter((watchlists) =>
      validator.validate(watchlists, schema_watchlist).valid
    );

    return res.status(200).send(validated_watchlist);
  } catch (error) {

    return res.status(400).send("La liste des watchlists n'a pas été trouvée");

  }
};

module.exports = find_watchlist;
