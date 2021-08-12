const mongoose = require('mongoose');

//connect database
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    //avoid deplication warning
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log('Connection successful');
}).catch((err)=>{
    console.log('no connection');
});