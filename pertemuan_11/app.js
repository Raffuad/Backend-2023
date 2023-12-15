// import express 
const express = require("express");

// Membuat object express
const app = express();

// impor router
const router = require ("./routes/api.js")

// definisikan code untuk merubah data ke json
app.use(express.json());
app.use(express.urlencoded());

// use route
app.use(router);






// Mendefinisikan port.
app.listen(3000);