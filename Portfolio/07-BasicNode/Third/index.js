const fs = require('fs');
fs.writeFile('file.txt', 'Hola Mundo soy Heidi', (err) => {
  if (err) return console.log(err);
  console.log('Hola Mundo soy Heidi > file.txt');
});