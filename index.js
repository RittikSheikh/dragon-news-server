const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');

const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/news-categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log('server is running on port', port)
})