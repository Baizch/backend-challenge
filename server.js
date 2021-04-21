//imports
const express = require("express");

//import routes
const apiRouter = require("./routes/api");

//create server
const app = express();

//import data base
require("./db");

//post petition config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//redirect petitions to router
app.use("/api", apiRouter);

//set port and message
app.listen(3000, () => {
  console.log("Server is up and running!");
});
