const fs = require('fs');

fs.writeFile('welcome.txt', 'hello node', (err) => {

if (err) throw err;

console.log('File is created successfully.')

})

fs.readFile('welcome.txt', 'utf8', (err, data) => {

if (err) throw err;

console.log(data);

});