const express = require('express')
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT;
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use((req, res, next) => {
    console.log(`Incoming Request : ${req.method} ${req.url}`);
    next();
});


const usersRoutes = require('./routes/index.routes');
app.use('/api/users', usersRoutes)

app.listen(port, async () => {
    mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log('DB is Connected Successfully'))
    .catch((error) => console.log(error.message))
    console.log(`Server Start at http://localhost:${port}`);
})