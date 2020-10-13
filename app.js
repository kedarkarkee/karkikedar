const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/app-ads.txt', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    return res.sendFile(path.join(__dirname, 'app-ads.txt'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Listening on ' + PORT);
});