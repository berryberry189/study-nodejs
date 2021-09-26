const express = require('express');
const app = express();

// 미들웨어 : 함수들의 연속
// next : 자기가 할 일을 다 하고 next 함수를 실행해야만 다음 로직을 수행할 수 있다.
function logger(req, res, next) {
    console.log('I am logger.');
    next();
}

// 미들웨어 추가 시에는 use 사용
app.use(logger);

app.listen(3000, function () {
    console.log('Server is running');
})