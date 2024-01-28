const express = require("express");
const app = express();
const router = require("./router.js");
// MONGODB connect
const db = require("./server").db();
const mongodb = require("mongodb"); // new mongodb ichida obj id lar kerak
// #1.Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // htmldan yozilganlarni expreswga kkiritmaydi,agar buni yozmasak.

//#2 sesssion code

// #3.Backendda html ni yasaymiz.viwes code.

app.set("views", "views");
app.set("view engine", "ejs");

// #4. Routing code

app.use("/", router);

module.exports = app;
