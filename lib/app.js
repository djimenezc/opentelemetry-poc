const api = require('@opentelemetry/api')
// init('demo-node-service', 'development')

/*app.js*/
const express = require('express');

const PORT = parseInt(process.env.PORT || '8086');
const app = express();

function getRandomNumber(min, max) {
    console.log('Generating random number')
    return Math.floor(Math.random() * (max - min) + min);
}

app.get('/rolldice', (req, res) => {
    res.send(getRandomNumber(1, 6).toString());
});

app.listen(PORT, () => {
    console.log(`Listening for requests on http://localhost:${PORT}`);
});
