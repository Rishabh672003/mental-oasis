const sequelize = require("../config/connection");
const userData = require("./userData.json");
const dayData = require("./dayData.json");
const scoreData = require("./scoreData.json");
const logData = require("./logData.json");
const wellbeingData = require("./wellbeingData.json");
const medicineData = require("./medicineData.json");

const { User, Day, Score, Log, Wellbeing, Medicine } = require("../models");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Day.bulkCreate(dayData);
  await Score.bulkCreate(scoreData);
  await Log.bulkCreate(logData);
  await Wellbeing.bulkCreate(wellbeingData);
  await Medicine.bulkCreate(medicineData);
  process.exit(0);
};

seedDatabase();
