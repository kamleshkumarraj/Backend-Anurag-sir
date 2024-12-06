const fs = require("fs");

// Reading the file content and executing the file code
(function readingAndExecCode () {
    const codeContent = fs.readFileSync('./abc.txt').toString();
    eval(codeContent)
})()

// now we perform the variable address analysis.


