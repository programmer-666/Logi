import path from "path";
import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";


const app = express();

app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
    if (req.body["username"] === "root" || req.body["password"] === "123") {
        res.sendFile(path.resolve("./public/success.html"));
    } else {
        res.sendFile(path.resolve("./public/failed.html"));
    }
});

app.get("/login", (req, res) => {
    res.redirect("/");
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/index.html"));
});

app.listen(80);