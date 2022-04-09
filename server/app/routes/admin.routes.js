const { admin , authJwt } = require("../middlewares");
const controller = require("../controllers/admin.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.post("/api/admin/Course", 
    [   
        authJwt.verifyToken,
        authJwt.isAdmin,
        admin.checkDup
    ], 
    controller.createNewCourse);
    app.get(
      "/api/admin/test",
      [authJwt.verifyToken, authJwt.isAdmin],
      controller.adminBoard
    );

    app.delete("/api/admin/Course/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.deleteCourse);
   
    app.get("/api/admin/Course",[authJwt.verifyToken, authJwt.isAdmin],controller.findAllCourse);
    app.post("/api/admin/Course/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.updateCourse);
   
    
    app.get("/api/admin/Category",[authJwt.verifyToken, authJwt.isAdmin],controller.ListAllcategori);
    app.get("/api/admin/Analysis/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.Analysis);
    app.get("/api/admin/AnalysisIdeaNone/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.AnalysisIdeaNone);
    app.get("/api/admin/AnalysisIdeaWork/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.AnalysisIdeaWork);
};
