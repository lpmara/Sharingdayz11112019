const {Notify} = require('./notify');
const kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient({kafkaHost: 'Your Kadka Host'}),
    consumer = new Consumer(
        client,
        [
            { topic: 'Notify' }
        ],
        {
            autoCommit: true
        }
    );

    consumer.on('message', async function (message) {
        console.log(message);
        await Notify({message: message.value});
    });