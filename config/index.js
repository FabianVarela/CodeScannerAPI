import dotenv from 'dotenv';

dotenv.config();

const environment = process.env.NODE_ENV;

const development = {
    db: {
        connection: `${process.env.CONNECTION_DEV}`
    }
};

const test = {
    db: {
        connection: `${process.env.CONNECTION_TEST}`
    }
};

const production = {
    db: {
        connection: `${process.env.CONNECTION_PROD}`
    }
};

const config = {
    development,
    test,
    production
};

module.exports = config[environment];