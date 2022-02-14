const express= require('express');
const app = express();
const path = require('path');
require('dotenv').config();

// import custom module
const taskRoutes = require('./routes/tasks');
const notFound= require('./middlewares/not-found');
const connectDB = require('./database/connection');


// constants
const port=3000;


// middlewares
app.use(express.json()); // without this we can't get request body 
app.use(express.static(path.join('./public')));

// routes
app.use('/api/v1/tasks',taskRoutes);
app.use(notFound);

app.get('/home',(req,res)=>{
    res.statusCode = 200;
    res.header('Content-Type','application/json');
    res.send('Hello from server');
});

const start = async () =>{
    try {
        const connection = await connectDB(process.env.MONGO_CONNECTION);
        if(connection){
            console.log('ATLAS CLOUD DATABASE CONNECTED');
        }
        app.listen(port,()=>{
            console.log(`Server running on locahost port ${port} ...`);
        });
    }
    catch(error){
        console.log('error', error);
    }
}
start();
