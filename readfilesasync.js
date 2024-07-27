const { error } = require('console');
const fs = require('fs');

//read and write file Async

fs.readFile('./Files/start.txt', 'utf-8', (error, data) => {
    fs.writeFile('./Files/output.txt', `This is Async output \n Date : ${new Date}`, () => {
        console.log('Data is written ...')
    })
})

console.log('Reading files......')