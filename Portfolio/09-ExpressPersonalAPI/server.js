const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'html')); 

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

var names = [];
var tasks = [];

app.get('/', (req, res) => {
    res.render('index', { names, error: null }); 
});

app.get('/greet', (req, res) => {
    const name = req.query.name;
    if (!name) {
        return res.render('index', { names, error: 'Name is required!' });
    }
    names.push(name);
    res.render('index', { names, error: null });
});

app.get('/wazzup', (req, res) => {
    const name = req.query.name; 
    res.render('wazzup', { name }); 
});

app.post('/task', (req, res) => {
    const task = req.body.task;
    if (task) {
        tasks.push(task); 
    }
    res.render('index', { names, tasks, error: null }); 
});

app.get('/task', (req, res) => {
    res.json(tasks); 
});

app.post('/task/delete', (req, res) => {
    const taskIndex = parseInt(req.body.index); 
    if (!isNaN(taskIndex)) {
        tasks.splice(taskIndex, 1); 
    }
    res.render('index', { names, tasks, error: null }); 
});

app.put('/greet/:name', (req, res) => {
    const newName = req.params.name;
    names.push(newName); 
    res.json(names); 
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});