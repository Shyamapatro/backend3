"use strict";
const Sequelize = require("sequelize");
const Modals = require("../models");
exports.getUserData = () => {
  return new Promise((resolve, reject) => {
    console.log("yeee")
    Modals.User.findAll()
      .then((result) => {
        console.log("result",result)
        resolve(result);
      })
      .catch((err) => {
        reject("implementation Error");
      });
  });
};

exports.save = (objectToSave) => {
  return new Promise((resolve, reject) => {
    console.log("hello",objectToSave)
    Modals.User.create(objectToSave)
      .then((result) => {
        console.log("result",result)
        resolve(result);
      })
      .catch((err) => {
        reject("implementation Error");
      });
  });
};
