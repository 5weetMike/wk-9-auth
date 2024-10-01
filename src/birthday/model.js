const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection")

const Birthday = sequelize.define("birthday",{
    day:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    month:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    year:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},
{timestamps:false});

module.exports = Birthday;