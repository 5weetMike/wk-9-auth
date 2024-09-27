const User = require("./models");


const addUser = async (req, res) => {
    try{ const user = await User.create({
        username:req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    res.status(201).json({message: "success", user: user});

    } catch(error){
res.status(501).json({message: error.message, error: error});
    }
};

const login = async (req, res) => {
    try{
        res.status(201).json({message: "success", user: req.user});
    }catch{
        res.status(501).json({message: error.message, error: error});

    }
}

const getAllUsers = async (request, response) => {
    try {
        const users = await User.findAll({});
        response.status(201).json({message: "success", users: users});
    } catch (error){
        response.status(501).json({message: error.message, error: error});
    }};


module.exports ={
    addUser: addUser,
    login: login,
    getAllUsers: getAllUsers,
};