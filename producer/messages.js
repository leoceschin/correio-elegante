const amqp = require("amqplib/callback_api")

const queue = "messages_send";

const sendMessage = async (message) => {

    amqp.connect("amqp://rabbitmq:5672", (error0, connection) => {
        if (error0) {
            throw error0;
        }
        connection.createChannel((error1, channel) => {
            if (error1) {
                throw error1;
            }
            channel.assertQueue(queue, { durable: true });
            channel.sendToQueue(queue,
                Buffer.from(JSON.stringify(message)
                ), {
                persistent: true
            });
        });
        setTimeout(function () {
            connection.close();

        }, 500);
    });

}

module.exports = { sendMessage }