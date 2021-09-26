const express = require('express')
const app = express()
const morgan = require('morgan');
const port = 3000
const users = [
    {id: 1, name: 'alice'},
    {id: 2, name: 'beck'},
    {id: 3, name: 'chris'}
];

app.use(morgan('dev'));

// 라우팅 설정
app.get('/users', (req, res) => {
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit, 10);
    if (Number.isNaN(limit)) {
        return res.status(400).end();
    }
    res.json(users.slice(0, limit));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})