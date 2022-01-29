const express = require("express");
const path = require("path")
const morgan = require("morgan");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use('/uploads', express.static(path.join(__dirname,"..", '/uploads')))
app.use(require("./routes"));

app.listen(3000, () => console.log("\u{1F525} Server is running"));
