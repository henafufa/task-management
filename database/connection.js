const mongoose = require('mongoose');
// const connectionCredential = 'mongodb+srv://Hena:hena@nodeexpressprojects.7vz9f.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority';

const connectDB = (url) =>{
    return mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB;