const express = require('express');
const app = express();

const consumer = require('./producer');

app.set('port', process.env.PORT || 4321);

var server = app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
