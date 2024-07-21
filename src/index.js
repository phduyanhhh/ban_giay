import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import db from './config/db.js';
import apiRouters from './api/index.js';
db.connect();
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api/v1', apiRouters);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port http://localhost:${process.env.PORT}`)
})