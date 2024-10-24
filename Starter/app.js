const express = require('express');
const tasks = require('./Routes/Task.js');
const app = express();

const connectDB = require('./DB/connect.js')
const not_found = require("./Middle-Ware/Not-found.js")
const handler = require("./Middle-Ware/error-hanler.js")
require('dotenv').config()

app.use(express.json());
app.use(express.static('./public'))


app.use('/api/v1/tasks',tasks);
app.use(not_found)
app.use(handler)

const port = process.env.PORT ||3000;

const start = async () => {
    try {
        test = await connectDB(process.env.MONGO_URL)
        //test.then(() => console.log('connected...'))
        app.listen(port, () => {
            console.log(`App listening on port ${port}...`);
        });
    } catch (error) {
        console.log(error)
    }
}

start()

