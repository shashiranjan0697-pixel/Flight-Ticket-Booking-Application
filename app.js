const express = require("express");

const {port} = require("./src/config/index");

const app = express();

const router = require("./src/routes/index");

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Homepage of flight booking application.</h1>");
});

app.use("/api", router);


app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
});