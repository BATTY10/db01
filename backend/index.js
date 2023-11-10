const PORT = process.env.PORT || 4000
const express = require('express');
require("dotenv").config()
const { dbConnect } = require("./config/dbConnect")
const productRoute = require('./routes/productRoute');  
const customerRoute = require('./routes/customerRoutes')
const { notFound, errorhandler } = require('./middlewares/errorHandler');
const cors = require("cors")
const app = express();


dbConnect()
app.use(cors());
app.use(express.json());


app.use('/api/products', productRoute);
app.use('/api/customers', customerRoute);


app.use(notFound)
app.use(errorhandler)
app.listen(PORT, ()=>{
    console.log(`Serverv is listening on ${PORT}`)
})

