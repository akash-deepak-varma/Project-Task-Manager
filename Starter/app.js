const express = require('express');
const tasks = require('./Routes/Task.js');
const app = express();
const port = 3000;
const connectDB = require('./DB/connect.js')
require('dotenv').config()

app.use(express.json());
app.use(express.static('./public'))


app.use('/api/v1/tasks',tasks);

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

