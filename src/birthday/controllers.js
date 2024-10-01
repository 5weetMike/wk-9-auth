const Birthday = require("./model");

const addBirthday = async (req, res) => {
    try{const birthday = await Birthday.create({
        day: req.body.day,
        month: req.body.month,
        year: req.body.year
    })
    res.status(201).json({message:"success", birthday: birthday});
    }catch(error){
        res.status(501).json({message: error.message, error: error});
    }
};

const getAllBirthdays = async (req, res) => {
    try{
        const birthday = await Birthday.findAll({});
        res.status(201).json({message: "success", birthday: req.birthday});
    } catch(error){
        res.status(501).json({message: error.message, error: error})
    }};




module.exports ={
    addBirthday: addBirthday,
    getAllBirthdays: getAllBirthdays,
}