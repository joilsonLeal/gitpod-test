const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.json({message: "hello"});
})

server.listen(3333);