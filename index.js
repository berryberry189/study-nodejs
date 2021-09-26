const express = require('express');
const app = express();

function commonmw(req, res, next){
    console.log('commonmw');
    next(new Error('error ouccered'));
}

function errormw(err, req, res, next){
    console.log(err.message);
    // 에를 처리하거나
    next(); // 다음 미들웨어에 에러를 넘김
}

app.use(commonmw);
app.use(errormw);

app.listen(3000, function () {
    console.log('Server is running');
})