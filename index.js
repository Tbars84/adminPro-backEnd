const express =  require('express');
const cors = require('cors')
require('dotenv').config();

const { dbConnect } = require('./database/config')

const app = express();
app.use(cors());

dbConnect();

app.get('/' , ()=> {
    response.json({
        ok: true,
        msg: ''
    })
})
app.listen(process.env.PORT , ()=> {

    console.log('Running server ...' + process.env.PORT);
})