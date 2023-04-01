const app = require("./routes");
const { connectTodB } = require("./services/db/connection");

const create_server = () => {

  connectTodB()
  app.listen(3000);
  console.log("J'écoute le serveur 3000");
}

create_server();