const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("../config/multer");

routes.post("/images", multer(multerConfig).single("file"), async(req, res) => {
  return res.json({url:`localhost:3000/uploads/${req.file.filename}`, status:true});
});

module.exports = routes;
