const {Router} = require("express");
const exampleRouter = Router();


const endFunc = async (req, res) => {
    req.data.messageEnd = "endfunc";
    res.status(201).json ({message: "success", data: req.data});
};

const funcOne = async (req, res, next) => {
    let passwordCheck = "password";

    if (req.body.password !== passwordCheck) {
      return res.status(404).json ({message:"incorrect password my G!"})
    }
    req.data = {
        messageOne: "funcOne: password verified",
    }
    next();
};

const funcTwo = async (req, res, next) => {

     req.body.username = req.body.username.toLowerCase();

    req.data.messageTwo =`funcTwo: username se to lower= ${req.body.username}`;
    next();
}

exampleRouter.post("/example", funcOne, funcTwo, endFunc);

module.exports = exampleRouter;