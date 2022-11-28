const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { userRouter, operationsRouter } = require('./router/index');

const app = express();

app.disable('x-powered-by');
app.use(compression());
app.use(express.json());
app.use(cookieParser());
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 8000);
app.use('/api/v1', userRouter);
app.use('/api/v1/operations', operationsRouter);

const {
  env: { NODE_ENV },
} = process;

app.disable('x-powered-by');

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname,  '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

module.exports = app;
