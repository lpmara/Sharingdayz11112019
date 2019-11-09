const express = require('express');
const app = express();

const consumer = require('./consumer');

app.set('port', process.env.PORT || 1234);

var server = app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
