const multer = require("multer");
const Path = require("path");
const { getCompCount } = require('./comp.count.fetch');

const uploadStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets/ComponentPage/");
  },
  filename: async function (req, file, cb) {
    try {
      const count = await getCompCount();
      const filename = `Component_${count + 1}${Path.extname(file.originalname)}`;
      cb(null, filename);
    } catch (error) {
      cb(error);
    }
  },
});

const fileFilter = (req, file, callback) => {
  const validExts = [".png", ".jpg", ".jpeg"];

  if (!validExts.includes(Path.extname(file.originalname))) {
    return callback(new Error("Only .png, .jpg & .jpeg file format allowed"));
  }

  const fileSize = parseInt(req.headers["content-length"]);

  if (fileSize > 1048576) {
    return callback(new Error("File size is big"));
  }

  callback(null, true);
};

module.exports = { uploadStorage, fileFilter };