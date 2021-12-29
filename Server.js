const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/', (req, res, next) => {
    res.send("hello from node server");
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});