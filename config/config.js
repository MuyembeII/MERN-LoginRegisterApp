require("dotenv").config();
const session = require('express-session')

module.exports = {
  IS_PROD: process.env.NODE_ENV === 'production',
  NODE_ENV: process.env.NODE_ENV,
  PORT: '5000',
  HOST: 'localhost',
  DB_USERNAME: 'sa',
  DB_PASSWORD: 'mypass',
  DB_CLUSTER: 'cluster0-km6er',
  SESS_SECRET: '343ji43j4n3jn4jk3n',
  COOKIE_NAME: 'SessionId',
};


