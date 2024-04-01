import express from "express";
import path from "path";
import morgan from "morgan";


const app = express();

app.use(morgan("tiny"));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/index.html"));
});

app.listen(80);