const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;
const bodyParser = require('body-parser');
const user = require('./api/user');

if(process.env.NODE_ENV !== 'test'){
    // 테스트가 아닐 경우에만 서버 로그를 찍음
    app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/users', user);

module.exports = app;