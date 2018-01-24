const express = require( 'express' ); // here we require the Express module, storing its export in a variable. 
const app = express(); // creates an instance of an express application
const morgan = require( 'morgan' ); 
const chalk = require('chalk');

// logging middlewear 

app.use(morgan('dev')); 

// A GET handler
// app.get('/', function(req, res){
//     res.send('Hello World!'); 
// }

//ES6
app.get('/', (req, res) => res.send('Hello World!!'))

app.get('/news', (req, res) => res.send('Hi Bananalee'))


// Start our HTTP server 
// app.listen(3000, function(){
//     console.log('server is listening'); 
// }); 

// ES6
app.listen(3000, () => console.log(chalk.blue('server is listening')))

