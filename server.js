import morgan from 'morgan';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/routes';
import config from './config/index';

mongoose.connect(config.db.connection);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('combined'));
app.use('/api', routes);

var port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    const { address, port } = server.address();
    console.log(`Listening at address http://${address}:${port}`);
});