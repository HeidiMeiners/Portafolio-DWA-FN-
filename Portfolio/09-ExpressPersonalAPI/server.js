const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/greet", (req, res) => { 
    const name = req.query.name;
    console.log("Received name:", name);
    res.send(`Hello, ${name}!`);
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});