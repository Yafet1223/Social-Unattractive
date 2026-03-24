// 
// server.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // load variables from .env

const client = new MongoClient(process.env.MONGODB_URI);

async function main() {
  try {
    await client.connect(); // connect to Atlas
    console.log("Connected to Atlas!");

    // You can now use your database
    const db = client.db("unscroll"); // replace with your DB name
    const usersCollection = db.collection("users");

    // Example: insert a test user
    // await usersCollection.insertOne({ name: "Yafet", age: 20 });
  } catch (err) {
    console.error(err);
  } finally {
    // Uncomment if you want to close the connection after testing
    // await client.close();
  }
}

main();