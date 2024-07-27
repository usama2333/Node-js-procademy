// creating a simple web server
const fs = require('fs')
const http = require('http');
const url = require('url');

//custom events
const events = require('events');

//custom modules
const replaceHtml = require('./Modules/replaceHtml');
const user = require('./Modules/user');

//read html 
const html = fs.readFileSync('./Template/index.html', 'utf-8');
const products = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'));
const productListHtml = fs.readFileSync('./Template/product-list.html', 'utf-8');
const productDetailHtml = fs.readFileSync('./Template/product-details.html', 'utf-8');
// let productHtmlArray = products.map((prod) => {
//     let output = productListHtml.replace('{{%IMAGE%}}', prod.productImage);
//     output = output.replace('{{%NAME%}}', prod.name);
//     output = output.replace('{{%MODELNAME%}}', prod.modeName);
//     output = output.replace('{{%MODELNO%}}', prod.modelNumber);
//     output = output.replace('{{%SIZE%}}', prod.size);
//     output = output.replace('{{%CAMERA%}}', prod.camera);
//     output = output.replace('{{%PRICE%}}', prod.price);
//     output = output.replace('{{%COLOR%}}', prod.color);
//     output = output.replace('{{%ID%}}', prod.id);
    

//     return output;
// } )



//Create a simple server
// const server = http.createServer((request, response) => {

//     //url.parse gives info about url and its params if set to true it returs params details
//     // we cana extract pathanme and query from url.parse
//     let {query, pathname: path} = url.parse(request.url,true);
//     console.log(query)
//     console.log(path)

//     // const path = request.url;

//     if(path === '/' || path.toLocaleLowerCase() === '/home') {
//         //setting request header which is check is network tab
//         response.writeHead(200, {
//             //also set additional headers like that in key value pairs
//             'Content-Type': 'text/html',
//             'my-header' : 'hello world'
//         })
//         response.end(html.replace('{{%CONTENT%}}','You are in Home page'))
//     } else if(path.toLocaleLowerCase() === '/contact') {
//         response.writeHead(200)
//         response.end(html.replace('{{%CONTENT%}}','You are in Contact page'))
//     } else if(path.toLocaleLowerCase() === '/about') {
//         response.writeHead(200)
//         response.end(html.replace('{{%CONTENT%}}','You are in About page'))
//     } else if(path.toLocaleLowerCase() === '/products') {
//     //    console.log(productListHtml)

//     if(!query.id) {
//         let productHtmlArray = products.map((prod) => {
//            return replaceHtml(productListHtml,prod)
//         })
//         let productResponseHtml = html.replace('{{%CONTENT%}}',productHtmlArray.join(' '));
//         response.writeHead(200, {
//             'Content-Type': 'text/html',
//         })
//         response.end(productResponseHtml);
//     } else {
//         let prod = products[query.id]
//         let productDetailResponseHtml = replaceHtml(productDetailHtml, prod);
//         response.end(html.replace('{{%CONTENT%}}', productDetailResponseHtml));
//         // response.end('This is query with id '+  query.id)
//     }
       

//     }
//     else {
//         response.writeHead(404)
//         response.end(html.replace('{{%CONTENT%}}','Error 404 : Page not found '))
//     }
// })


//Create a server with even driven 
const server = http.createServer();
// server -> event emitter ,on -> event listner ,() => {} -> event handler
server.on('request',(request, response) => {
      //url.parse gives info about url and its params if set to true it returs params details
    // we cana extract pathanme and query from url.parse
    let {query, pathname: path} = url.parse(request.url,true);
    console.log(query)
    console.log(path)

    // const path = request.url;

    if(path === '/' || path.toLocaleLowerCase() === '/home') {
        //setting request header which is check is network tab
        response.writeHead(200, {
            //also set additional headers like that in key value pairs
            'Content-Type': 'text/html',
            'my-header' : 'hello world'
        })
        response.end(html.replace('{{%CONTENT%}}','You are in Home page'))
    } else if(path.toLocaleLowerCase() === '/contact') {
        response.writeHead(200)
        response.end(html.replace('{{%CONTENT%}}','You are in Contact page'))
    } else if(path.toLocaleLowerCase() === '/about') {
        response.writeHead(200)
        response.end(html.replace('{{%CONTENT%}}','You are in About page'))
    } else if(path.toLocaleLowerCase() === '/products') {
    //    console.log(productListHtml)

    if(!query.id) {
        let productHtmlArray = products.map((prod) => {
           return replaceHtml(productListHtml,prod)
        })
        let productResponseHtml = html.replace('{{%CONTENT%}}',productHtmlArray.join(' '));
        response.writeHead(200, {
            'Content-Type': 'text/html',
        })
        response.end(productResponseHtml);
    } else {
        let prod = products[query.id]
        let productDetailResponseHtml = replaceHtml(productDetailHtml, prod);
        response.end(html.replace('{{%CONTENT%}}', productDetailResponseHtml));
        // response.end('This is query with id '+  query.id)
    }
       

    }
    else {
        response.writeHead(404)
        response.end(html.replace('{{%CONTENT%}}','Error 404 : Page not found '))
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('server has started...')
})

//Emitting and handle custom events
// both approaches works 
// let myEmitter = new events.EventEmitter();
let myEmitter = new user();

myEmitter.on('userCreated', (id , name) => {
    console.log(`A new user created id :  ${id} name : ${name}`)
})

myEmitter.emit('userCreated', 101, 'John');