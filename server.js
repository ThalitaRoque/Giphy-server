const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const { json } = require("body-parser");


 const gifsRoutes = require("./src/routes/gifs.routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(json({ limit: "50mb" }));

 app.use("/gif", gifsRoutes);

module.exports = app;
