const {Router} = require("express");
const userRouter = Router();

const {addUser} = require("./controllers");
const {hashPass} = require("../middleware/auth");  
const {login} = require("./controllers");
const {comparePass} = require("../middleware/auth");
const {getAllUsers} = require("./controllers");

//user signup
userRouter.post("/users/signup", hashPass, addUser);

//user login
userRouter.post("/users/login",comparePass, login);

//get all users
userRouter.get("/users/getallusers", getAllUsers)

module.exports = userRouter;
