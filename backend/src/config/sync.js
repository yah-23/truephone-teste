require("dotenv").config();
const dbConnection = require('./dbConnection');
require('./sqlAssociations')

async function syncDB() {
    try {
      await dbConnection.sync({ force: true });
      console.log("[SUCESSO]: Banco de dados sincronizado com sucesso!");
    } catch (error) {
      console.log(error);
    }
}

syncDB()