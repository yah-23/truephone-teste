const router = require("express").Router();

const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

const Controller = require('../controllers/WizardController');



router.post("/validation", upload.single('file'), Controller.validation);
router.post("/insert", Controller.insertDb);

module.exports = function (server) {
  server.use("/api", router);
};