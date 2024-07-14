const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('node:fs');
const path = require('path');

// Playground imports

const PORT = 5002;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    let resolvedPath = path.resolve(__dirname, "..");
    fs.readFile(resolvedPath + '/clients/websocket-client.html', 'utf8', (err, text) => {
        res.send(text);
    })
})

// Playground Implementations - Start
// Playground Implementations - End


app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
})