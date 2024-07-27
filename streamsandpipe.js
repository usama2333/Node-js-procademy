const http = require('http');
const fs = require('fs')

const server = http.createServer();

server.listen(8000, '127.0.0.1', () => {
    console.log('Server has started.')
})


// solution 1 : without readable or writeable stream

// server.on('request', (req, res) => {
//   fs.readFile('./Files/large-file.txt', (err, data) => {
//     if(err) {
//         res.end('Something went wrong');
//         return;
//     }
//     res.end(data)
//   })

// })


// Solution 2 
// this gives back pressure bcz readable stream is fast when writeable stream
// server.on('request', (req, res) => {

//     // it reads data in the form of chunk when it read the data it emits data event
//     // which we listen in rs.on('data')
//    let rs = fs.createReadStream('./Files/large-file.txt')

//    rs.on('data',(chunk) => {
//      // res.write can write the chunk of data in the response stream
//      res.write(chunk);
//    })

//    //end listner for response.end() emits when all data is reads
//    res.on('end', () => {
//     res.end()
//    })

//    // for handle errors
//    rs.on('error', (error) => {
//      res.end(error.message)
//    })
   
//   })


//solution 3 using pipe method
// pipe method hadle the backpressure also reduce the whole code in 2 lines
// alternate of solution 2 is pipe method
server.on('request', (req, res) => {
    let rs = fs.createReadStream('./Files/large-file.txt')
    rs.pipe(res);
})

