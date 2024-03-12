const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("postgres", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connection Successful`);
  } catch (err) {
    console.log(`Unable to connect`);
  }
};

module.exports = {sq: sequelize, testConnection}
