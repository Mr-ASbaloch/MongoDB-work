const { dbConnection } = require("./db.js");

async function main() {
  try {
    const db = await dbConnection();
    const collection = db.collection("user");
    const deleteResult= await collection.deleteMany({id:12});
    console.log(deleteResult.deletedCount, deleteResult);

  } catch (error) {
    console.log(error);
  }
}

main()