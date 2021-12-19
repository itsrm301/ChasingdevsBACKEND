const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(() => {
    console.log('Mongoose connected to ' + process.env.MONGO_URI);
}).catch((err) => {
    console.log('Mongoose connection error: ' + err);
});

const db = mongoose.connection;

db.on('error', () => {
    logger.info('Error connecting to Database');
});

db.once('open', () => {
    logger.info('Connected to Database');
});
