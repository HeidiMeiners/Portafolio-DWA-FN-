const express = require("express");
const app = express();

app.get('/', (req, res) => { 
    res.send(
        "<H1>Example</H1>"+
        "<p>Now we need some paragraphs, just to make it seem more important.</p>"+
        "<p>Well, now I need another paragraph, so here it is.</p>"+
        "<input type='text'><br>"+
        "<input type='text'><br>"+
        "<button>sumit</button>"

    ); 
});

app.get('/contact', (req, res) => { 
    res.send("Contact");
});

app.get('/about', (req, res) => { 
    res.send("About");
});

app.listen(3000, ()=>{ 
    console.log("Example app listening on port 3000"); 
});