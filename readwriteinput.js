// readline from terminal
const readline = require('readline'); 

//creating interface
const rl = readline.createInterface({  
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter your name: ", (name) => {
    console.log(name)
    //close the interface 
    rl.close(); 
})

//rl.on method finds if close method is trigger it also triggers and close the interface
rl.on('close', () => {  
    console.log('Interface close')
    process.exit(0)
})



