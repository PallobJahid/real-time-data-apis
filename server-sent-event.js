const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('node:fs');

// Playground imports

const PORT = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    fs.readFile(__dirname + '/clients/server-sent-event-client.html', 'utf8', (err, text) => {
        res.send(text);
    })
})

// Playground Implementations - Start
// Playground Implementations - End


app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
})