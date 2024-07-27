// File system module

const fs = require('fs');

//read file sycronously
const inputText = fs.readFileSync('./Files/input.txt', 'utf-8');
console.log(inputText)

const content = `The output file is : ${inputText} \n Date is ${new Date}`

//if file path not exist then node js create that file
fs.writeFileSync('./Files/output.txt', content)