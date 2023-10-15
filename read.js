const { dbConnection } = require("./db.js");

async function main() {
  try {
    const db = await dbConnection();
    const collection = db.collection("user");
    const findResult = await collection.findOne({id:2});
    console.log(findResult);

  } catch (error) {
    console.log(error);
  }
}

main()