import morgan from 'morgan';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routers/router';
import config from './config/default';

require('dotenv').config();

mongoose.connect(config.db.connection);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('combined'));
app.use('/api', router);

const server = app.listen(3000, () => {
    const { address, port } = server.address();
    console.log(`Listening at address http://${address}:${port}`);
});