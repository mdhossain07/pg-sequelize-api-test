const {sq} = require('../config/db');
const {DataTypes} = require("sequelize");

const Notes = sq.define("notes", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    details: {
        type: DataTypes.TEXT
    },
})

Notes.sync()
.then(() => {
    console.log("Notes Model Synced");
})

module.exports = Notes;