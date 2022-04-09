const db = require("../models");

const Idea = db.idea;
const Course = db.course;
const Category = db.category;

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.createNewCourse =  (req, res) => {
    if (!req.body.year) {
        res.status(400).send({ message: "Input year" });
        return;
      }
      const course = new Course({
        name: req.body.name,
        year: req.body.year,
        dateStart: req.body.dateStart,
        dateEnd:req.body.dateEnd,
        description: req.body.description,
      });
      course.save(err => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        res.send({ message: "Create successfully!" });
      });   
}
  exports.findAllCourse = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
    Course.find(condition)
      .then(data => { 
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Courses."
        });
      });
};
  exports.updateCourse = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
    const id = req.params.id;
    Course.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update  with id=${id}. Maybe Course was not found!`
          });
        } else res.send({ message: "Course was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Course with id=" + id
        });
      });
};
exports.deleteCourse = (req, res) => {
  const id = req.params.id;
  Course.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Course with id=${id}. Maybe Course was not found!`
        });
      } else {
        res.send({
          message: "Course was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Course with id=" + id
      });
    });
};

exports.ListAllcategori= (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  Category.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Categori."
      });
    });
}

exports.Analysis= (req, res) => {
  const id = req.params.id;
  Category.findById(id)
  .populate("ideas")
  .exec((err, category) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!category) {
      return res.status(404).send({ message: "User Not found." });
    }
    var listIdea = [];
    var listlike = [];
    for (let i = 0; i < category.ideas.length; i++) {
      listIdea.push(user.ideas[i].name.toUpperCase());
      listlike.push(user.ideas[i].like.toUpperCase());
    }
    res.status(200).send({
      id: category._id,
      dayStart: category.name,
      dayEnd: category.email,
      content:category.content,
      categoriesStatus: category.categoriesStatus,
      ideas: listIdea,
      likes: listlike
    });
  });
};
exports.AnalysisIdeaWork= (req, res) => {
  const id = req.params.id;
  Category.findById(id)
  .populate("ideas")
  .exec((err, category) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!category) {
      return res.status(404).send({ message: "User Not found." });
    }
    var listIdea = [];
    var listlike = [];
    for (let i = 0; i < category.ideas.length; i++) {
      if(category.ideas.ideaStatus){
        listIdea.push(user.ideas[i].name.toUpperCase());
        listlike.push(user.ideas[i].like.toUpperCase());
      }
    }
    res.status(200).send({
      id: category._id,
      dayStart: category.name,
      dayEnd: category.email,
      content:category.content,
      ideas: listIdea,
      likes: listlike
    });
  });
};
exports.AnalysisIdeaNone= (req, res) => {
  const id = req.params.id;
  Category.findById(id)
  .populate("ideas")
  .exec((err, category) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!category) {
      return res.status(404).send({ message: "User Not found." });
    }
    var listIdea = [];
    var listlike = [];
    for (let i = 0; i < category.ideas.length; i++) {
      if(!category.ideas.ideaStatus){
        listIdea.push(user.ideas[i].name.toUpperCase());
        listlike.push(user.ideas[i].like.toUpperCase());
      }
    }
    res.status(200).send({
      id: category._id,
      dayStart: category.name,
      dayEnd: category.email,
      content:category.content,
      ideas: listIdea,
      likes: listlike
    });
  });
};