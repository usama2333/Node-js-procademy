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

console.log('Program has ended')