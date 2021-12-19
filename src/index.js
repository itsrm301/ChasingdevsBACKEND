const express = require('express');
const app = express();

require('./config/mongoose');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', require('./api'));



// error handler middleware
app.use(( req, res,error) => {
    res.status(error.status || 500).json({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    });
});

app.listen(process.env.PORT||80, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Server started');
});
