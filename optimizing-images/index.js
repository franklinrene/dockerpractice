const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Image Optimization Service!');
});

app.listen(3000, () => {
    console.log('Image Optimization Service is running on http://localhost:3000');
});