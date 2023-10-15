const { dbConnection } = require("./db.js");

async function main() {
  try {
    const db = await dbConnection();
    const collection = db.collection("user");

    const updateUser = await collection.updateMany({id:13}, {$set :{first_name:'saeed baloch'}});
    console.log(updateUser);

  } catch (error) {
    console.log(error);
  }
}

main()