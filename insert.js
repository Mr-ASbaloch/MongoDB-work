const { dbConnection } = require("./db.js");

async function main() {
  try {
    const db = await dbConnection();
    const collection = db.collection("user");
    const data = [
      {
        id: 12,
        first_name: "ali",
        gender: "Male",
      },
      {
        id: 13,
        first_name: "ahmad",
        gender: "Male",
      }
    ];
   const insertData=await collection.insertMany(data)
    console.log(insertData);
  } catch (error) {
    console.log(error);
  }
}

main();
