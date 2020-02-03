const express = require('express');
const sirv = require('sirv');
const {route} = require('./api/pyramid');

const sirvInstance = sirv('public', {});

express()
    .use(sirvInstance)
    .get('/api/pyramid', route)
    .get('/*', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    })
    .listen(3000, err => {
        if (err) throw err;
        console.log(`> Running on localhost:3000`);
    });