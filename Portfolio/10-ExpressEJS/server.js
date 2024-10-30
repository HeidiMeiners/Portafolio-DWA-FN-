const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const longContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

let posts = [];
let name;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.post("/submit", (req, res) => {
  const inputData = req.body.inputData;
  console.log("Received input:", inputData);
  res.json({ message: "Data received", data: inputData });
});

app.get("/login", (req, res) => {
  const username = req.query.name;
  res.send(`Hello, ${username}! GET.`);
});

app.post("/login", (req, res) => {
  const username = req.body.name; 
  if (!username) {
    return res.redirect("/"); 
  }
  name=req.body.name;
  res.redirect(`/home?name=${encodeURIComponent(username)}`); 
});

app.get("/test", (req, res) => {
  const username = req.query.name;
  res.render("test", { userName: username });
});

app.get("/home", (req, res) => {
  const username = req.query.name;
  if (!username) {
    return res.redirect("/"); 
  }
  res.render("home", { userName: username, posts: posts });
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: posts.length + 1, title, content }; 
  posts.push(newPost);
  res.redirect(`/home?name=${req.query.name}`); 
});

app.get("/post/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  const username = name;
  res.render("post", { userName: username, post: post });
});

app.put("/post/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === postId);
  if (postIndex !== -1) {
    posts[postIndex].title = req.body.title;
    posts[postIndex].content = req.body.content;
  }
  res.redirect(`/home?name=${req.query.name}`); 
});

app.delete("/post/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  posts = posts.filter(p => p.id !== postId); 
  res.redirect(`/home?name=${req.query.name}`); 
});

app.listen(3000, (err) => {
  console.log("Listening on port 3000");
});
