/*jshint esversion: 6 */

var express = require('express');

var app = express();

app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente2'
    });
});

module.exports = app;