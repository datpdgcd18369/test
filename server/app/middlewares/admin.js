const db = require("../models");


const Course = db.course;

checkDup = (req, res, next) => {
    Course.findOne({
      name: req.body.name
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (user) {
        res.status(400).send({ message: "this course has created" });
        return;
      }
      next();
      });
  };
  const admin = {
    checkDup,
  };
  
  module.exports = admin;