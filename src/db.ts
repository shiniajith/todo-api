import config from "./config";
import { Sequelize } from "sequelize";

const dbConnection = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: "mysql",
  }
);

async function authenticateConnection() {
  try {
    await dbConnection.authenticate();
    console.log("database connected...");
  } catch (err: any) {
    console.log(err.message);
  }
}

authenticateConnection();

export default dbConnection;
