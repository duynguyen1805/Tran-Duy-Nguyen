import mongoose from "mongoose";
import configMongo from "../configs/config.mongodb";

const { db } = configMongo;
const { host, port, name } = db;
const connectString: string = `mongodb://${host}:${port}/${name}`;

/** ---------ConnectString service Atlas MongoDB--------- */
const connectString_Atlas: string = `mongodb+srv://duynguyenqwert:${process.env.PASSWORD_MONGODB_ATLAS}@2handmarket.7kquoar.mongodb.net/${name}`;

class Database {
  private static instance: Database;

  private constructor() {
    this.connect();
  }

  private connect(type: string = "mongodb"): void {
    mongoose
      .connect(connectString_Atlas, { maxPoolSize: 100 })
      .then(() =>
        console.log(
          `Connect Mongo - Connection Status: -----CONNECTED-----\n  ${connectString_Atlas}`
        )
      )
      .catch((err) => console.log(`Error connection DB: `, err));
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongoDB: Database = Database.getInstance();
export default instanceMongoDB;
