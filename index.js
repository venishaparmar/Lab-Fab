const connectToMongo = require("./db");
const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const Path = require("path");
const { getCompCount } = require('./ImageUpload/comp.count.fetch');
const { uploadStorage, fileFilter } = require("./ImageUpload/component.image");
const port = 3000;

const upload = multer({ storage: uploadStorage, fileFilter: fileFilter, fileSize: 1048576 });
app.use(cors());
app.use(express.json());

connectToMongo();

app.use("/api/auth", require("./routes/auth"));
app.use("/api/student", require("./routes/students"));
app.use("/api/component", require("./routes/component"));
app.use("/api/lab-entries", require("./routes/lab-entry"));
app.use("/api/faculty", require("./routes/faculty"));


app.post("/component/image", upload.single("compImage"), async function (req, res, next) {
  try {
    const count = await getCompCount();
    req.body.compImage = req.file.filename;
    console.log(req.body);
    res.status(200).json({ message: "Success", count: count, image: req.file.filename });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to upload file" });
  }
});

app.listen(port, () => {
  console.log(` app listening on ${port}`);
});
