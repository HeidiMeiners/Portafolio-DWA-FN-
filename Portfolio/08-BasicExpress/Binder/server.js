const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", __dirname + "/html");

app.route("/")
    .get((req, res) => {
        res.sendFile(__dirname + "/html/index.html");
    })
    .post((req, res) => {
        const name = req.body.name;
        res.render("success", { name: name });
    });

app.listen(3000, () => {
    console.log("Example app listening on port 3000");
});