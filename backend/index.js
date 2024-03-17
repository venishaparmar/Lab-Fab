import connectToMongo from "./database/db";
import express, { json } from "express";
import cors from "cors";

connectToMongo();
const app = express();
const port = 5000;


app.use(cors());
app.use(json());

//this middleware is necessary if we want to use res.body ===> using this i can send a request to json file
app.use(json());
//Available Routes
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});