const http = require('http');
const fs = require('fs')

const server = http.createServer();

server.listen(8000, '127.0.0.1', () => {
    // console.log('Server has started.')
})

server.on('request', (req, res) => {
   res.end('Server has started')
})
//.....................................................................
//Event Loop

console.log('Program has started')

// Stored in 1st phase
setTimeout(() => {
    console.log('Timer callback executed')
},0)

//Stored in 2nd phase
fs.readFile('./Files/input.txt',() => {
    console.log('Read file successfully')
})

//Stored in 3rd phase

setImmediate(() => {
    console.log('Set immediate call')
})

console.log('Program has ended')