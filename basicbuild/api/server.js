const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send({ express: "This is Home Page" });
});

app.get("/page/one", (req, res) => {
    res.send({ express: "This is Page One" });
});

app.get("/page/two", (req, res) => {
    res.send({ express: "This is Page Two!" });
});

app.get("/page/three", (req, res) => {
    res.send({ express: "This is Page Three!" });
});

app.listen(PORT, () => console.log("Listening on port:", PORT));
