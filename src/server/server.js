const express = require("express");

// to access env variables
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const path = require("path");

// to connect to the DB
const mongoose = require("mongoose");
// save connection string to variable and replace password with one in env variables
const DB = process.env.DATABASE.replace("<password>", process.env.PASSWORD);

// use mongoose connect to connect to the DB
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

const app = require("./app");
const port = 3000;

//handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// initial testing route
if (process.env.NODE_ENV === "production") {
  // statically serve everything in the build folder on the route '/build'
  app.use(express.static(path.join(__dirname, "../../build/assets")));
  app.get("/", (req, res) => {
    console.log("get homepage");

    res
      .type("HTML")
      .sendFile(path.resolve(__dirname, "../../build/index.html"));
  });
}

//404 error for unknown routes
// app.use('*', (req, res) => res.status(404).send('Not Found'));

//create global error handler
app.use((err, req, res, next) => {
  console.log(err);
  console.log("in global err handler");
  const defaultErr = {
    log: "Caught unknown middleware error",
    staus: 500,
    message: { err: "An error occured" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

// listen to port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
