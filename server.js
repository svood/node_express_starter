import express from 'express';
import bodyParser from 'body-parser';

//Controller's import
import {TestController} from './src/controllers/testController';

// Server config
require('dotenv').config()
const app = express();
app.use(bodyParser.json())

//Routes
app.get('/api', (req, res) => {
    return res.status(200).send('massage - Good Job')
})

app.post('/api/test', TestController.create)

//Start server
app.listen(process.env.SERVER_PORT)
console.log('app ready on port: ' + process.env.SERVER_PORT)
