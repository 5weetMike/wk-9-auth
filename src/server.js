require("dotenv").config();
const express = require("express");

const User = require("./users/models");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

const syncTables = () => {
    User.sync();
};

app.get("/health", (req, res) => {
    res.status(200).json({message: "API is healthy"});
});

app.listen(port, () => {
    syncTables();
    console.log(`server is listening on port ${port}`);
});