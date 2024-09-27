const bcrypt = require("bcrypt");
const salt = parseInt(process.env.SALT);
const User = require("../users/models");



const hashPass = async (req, res, next) => {
    try {
        //step 1: hash the password
        const hashedPass = await bcrypt.hash(req.body.password, salt);
       
        //step 2: replace password on req.body with hashed password
        req.body.password = hashedPass;

        //step3: use next()
        next();
    }catch(error){
        res.status(501).json({message: error.message, error: error});
    }
};

const comparePass = async (req, res, next) => {
    console.log(req.body)
    try{
        //step1: find user using the username (req.body.username)
        const user = await User.findOne({where: {username:req.body.username}});
        //step2: compare the plaintext password with the hashed password on the DB
        //i.e. bcrypt.compare() - will return true or false
        const match = await bcrypt.compare(req.body.password, user.password)
        //step 3 : if false, send response "passwords do not match" - just if statement
        if (!match) {
            return res.status(404).json ({message:"incorrect password my G!"})};
        //step4: if true, attach user to body
        req.user = user;
        //step5: next()
        next();
    }catch(error){
        res.status(501).json({message: error.message, error: error});

    }
};
module.exports = {
    hashPass: hashPass,
    comparePass: comparePass,

};