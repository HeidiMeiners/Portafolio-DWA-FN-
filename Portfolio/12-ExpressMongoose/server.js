const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

var user=process.env.USER;
var password=process.env.PASSWORD;
var db=process.env.DB;

const mongoUrl=`mongodb+srv://${user}:${password}@heidi.l9bad.mongodb.net/${db}`;
mongoose.connect(mongoUrl);

const teamSchema = new mongoose.Schema({
  id: Number,
  name: String,
  nationality: String,
  url: String,
});
const driverSchema = new mongoose.Schema({
  num: Number,
  code: String,
  forename: String,
  surname: String,
  dob: Date,
  nationality: String,
  url: String,
  team: teamSchema,
});

const Team = mongoose.model("Team", teamSchema);
const Driver = mongoose.model("Driver", driverSchema);

let countries = [
  { code: "ENG", label: "England" },
  { code: "SPA", label: "Spain" },
  { code: "GER", label: "Germany" },
  { code: "FRA", label: "France" },
  { code: "MEX", label: "Mexico" },
  { code: "AUS", label: "Australia" },
  { code: "FIN", label: "Finland" },
  { code: "NET", label: "Netherlands" },
  { code: "CAN", label: "Canada" },
  { code: "MON", label: "Monaco" },
  { code: "THA", label: "Thailand" },
  { code: "JAP", label: "Japan" },
  { code: "CHI", label: "China" },
  { code: "USA", label: "USA" },
  { code: "DEN", label: "Denmark" },
];

app.get("/", async (req, res) => {
  try {
    const teams = await Team.find();
    const drivers = await Driver.find();
    res.render("index", { teams, drivers, countries });
  } catch (error) {
    console.error("Error loading data:", error);
    res.status(500).send("Error loading data.");
  }
});

app.post("/driver", async (req, res) => {
  try {
    const { num, code, forename, surname, dob, nationality, url, team } = req.body;
    const driverTeam = await Team.findOne({ name: team });
    const newDriver = new Driver({ num, code, forename, surname, dob, nationality, url, team: driverTeam });
    await newDriver.save();
    res.redirect("/");
  } catch (error) {
    console.error("Error adding driver:", error);
    res.status(500).send("Error adding driver.");
  }
});

app.post("/driver/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    await Driver.findByIdAndUpdate(id, updatedData);
    res.redirect("/");
  } catch (error) {
    console.error("Error editing driver:", error);
    res.status(500).send("Error editing driver.");
  }
});

app.listen(3000, (err) => {
  if (err) console.error("Error starting server:", err);
  console.log("Listening on port 3000");
});