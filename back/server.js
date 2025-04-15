import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productroutes from "./routes/product.route.js";

dotenv.config();

const app = express();
app.use(express.json()); //allow express to parse json data

console.log(process.env.Mongo_uri);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  connectDB();
  console.log("server started at  http://localhost:" + PORT);
});

app.use("/api/products", productroutes);
