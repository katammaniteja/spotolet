const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

require("./db/conn");
app.use(express.json());

app.use(require("./routers/pins"));
app.use(require("./routers/users"));

app.listen(5000, () => {
  console.log("Backend server is running");
});
