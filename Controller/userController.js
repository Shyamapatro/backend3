const services = require("../services");
module.exports = {
  getUsersList: async () => {
    let userData = await services.userServices.getUserData();
    return userData;
  },
  addUser: async (payload) => {
    const objectToSave = {
      firstName: payload.firstName,
      lastName: payload.lastName,
    };
    console.log("gee", objectToSave);
    let addData = await services.userServices.save(objectToSave);
    return addData;
  },
};
