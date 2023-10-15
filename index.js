const express = require("express");
const { dbConnection } = require("./db.js");
const { log } = require("console");
const app = express();
const port = 3000;


// get method 
app.get("/user", async (req, res) => {
  try {
    const db = await dbConnection();
    const collection = db.collection("user");
    const Result = await collection.find().toArray();
    res.json(Result);
  } catch (error) {
    console.log(error);
  }
});


// post method 
app.use(express.json())
app.post("/user", async (req, res) => {

    try {
        console.log(req.body);
      const db = await dbConnection();
      const collection = db.collection("user");
      const insertResult = await collection.insertOne(req.body);
    //   res.json(insertResult);
    res.json('updated')
    } catch (error) {
      console.log(error); 
    }
  });
  


app.listen(port, () => {
  console.log(`'server started at port ${port}'`);
});
