const fs = require('fs')

fs.readFile('inspirationalquotes.txt', (error, data) => {
    if (error) throw error;
    console.log(data.toString());
})