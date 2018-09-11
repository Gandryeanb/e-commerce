require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/e-commerce');
const port = Number(process.env.PORT)
const db = mongoose.connection;

const routesUser = require('./routes/routeUser')
const routesItem = require('./routes/routeItem')
const routesCategory = require('./routes/routeCategory')
const routesTransaction = require('./routes/routeTransaction')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/user',routesUser)
app.use('/item',routesItem)
app.use('/category',routesCategory)
app.use('/transaction',routesTransaction)
app.get('/',(req,res) => {
    res.status(200).json({
        message : 'server is ON'    
    })
})

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log(('> Connected to Mongo DB'));
    
});

app.listen(port,() => {
    console.log(`> Listening to port ${port}`);
})