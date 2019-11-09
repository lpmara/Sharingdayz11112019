const request = require('request');

function Notify(message){
    return new Promise((resolve)=>{
        request.post({
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'Authorization' : 'Bearer {token}'
                },
                url: 'https://notify-api.line.me/api/notify',
                form: message
            },
            (err, httpResponse, body) => {
                if (err) {
                    console.log('err:::', err);
                    resolve(null);
                    return;
                }
                resolve(body);
            },
        );
    });
}

module.exports = {
    Notify: Notify
}