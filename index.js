const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({
        hi: 'there'
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
//node index.js
//localhost:5000