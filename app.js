const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Homepage of flight booking application.</h1>");
});

const port = process.env.port

app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
});