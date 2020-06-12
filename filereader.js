const fs = require('fs')

/**
 * Reads a file and return its content as an array of lines from the file
 * @param  {String} filePath The path (url) to the file
 * @return {Array}      The array with all lines from the file
 */
function readFileToArray(filePath){
    try {
        let data = fs.readFileSync(filePath, 'utf-8');
        console.log("partially processed data");
        let lines = data.split('\n');

        //Now take all lines that are not empty and add them to quotes
        let quotes = [];
        for (let i = 0; i < lines.length; i++){
            if (lines[i] != ''){
                quotes.push(lines[i]);
            }
        }

        return quotes;
    } catch (error) {
        //You can replace this with a better message.
        throw 'Kube nenkinga asikwazanga ukufunda ifayela lakho!'; 
    }
}
// Testing the function
let path = "inspirationalquotes.txt";
let quotes = readFileToArray(path);

console.log(quotes);
