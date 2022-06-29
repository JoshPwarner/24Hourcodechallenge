const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`));

app.get("/", (req, res) => res.send("Welcome to Google!"));

app.get("/searchresults", (req, res) => res.send(data));

app.listen(port, () => console.log(`App is running on port ${port}...`));
