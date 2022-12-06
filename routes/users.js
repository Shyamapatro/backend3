var express = require("express");
var router = express.Router();
var Controller = require("../Controller/index");

/* GET users listing. */
router.get("/get", async (req, res) => {
  let getData = await Controller.userController.getUsersList();
  if (getData) {
    res.json({ status: 200, message: "sucess", getData });
  } else {
    res.json({ status: 400, message: "Something Wrong!!" });
  }
});
router.post("/add", async (req, res) => {
  let data = await Controller.userController.addUser(req.body);
  if (data) {
    res.json({ status: 200, message: "getAllAppDetails", data });
  } else {
    res.json({ status: 400, message: "Something Wrong!!" });
  }
});

module.exports = router;
