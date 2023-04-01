const { Validator } = require("jsonschema");
const cruud = require("../services/db/crud");
const schema_user = require("../repositories/models/user");

const find_users = async (req, res) => {
  try {
    const users = await cruud.find("users");

    // Validate each user against the user schema
    const validator = new Validator();
    const validated_users = users.filter((users) =>
      validator.validate(users, schema_user).valid
    );

    return res.status(200).send(validated_users);
  } catch (error) {

    return res.status(400).send("La liste des utilsateurs n'a pas été trouvée");

  }
};

module.exports = find_users;
