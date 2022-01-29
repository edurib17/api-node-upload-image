const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

module.exports = {
  dest: path.resolve(__dirname, "..", "..", "uploads"),
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.resolve(__dirname, "..", "..", "uploads"));
    },
    filename: (req, file, callback) => {
      crypto.randomBytes(16, (error, hash) => {
        if (error) callback(error);

        const fileName = `${hash.toString("hex")}-${file.originalname}`;

        callback(null, fileName);
      });
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, callback) => {
    const allowedMines = ["image/jpeg", "image/png", "image/gif", "image/jpg"];

    if (allowedMines.includes(file.mimetype)) callback(null, true);
    else callback(new Error("Invalid file type."));
  },
};
