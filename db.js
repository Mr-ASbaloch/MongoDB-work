// const { url } = require('inspector')
const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");

exports.dbConnection = async () => {
  try {
    await client.connect();
    console.log("conneted successfuly");
    const db = client.db("practice");
    return db;
  } catch (error) {
    console.log(error);
  }
};
