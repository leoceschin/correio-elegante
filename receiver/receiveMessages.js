const amqp = require("amqplib/callback_api");

const queue = "messages_send";
const data = "";
const receiveMessage = () => {
    amqp.connect("amqp://rabbitmq:5672", (error0, connection)=>{
        if (error0) {
            throw error0;
        }
        connection.createChannel((error1, channel)=>{
            if(error1){
                throw error1;
            }
            channel.assertQueue(queue), {durable: true};
            channel.prefetch(1);
            channel.consume(queue, (message)=>{
                
                data = message.content.toString();
                
            }, {noAck:false});
                 
        });
    });
    return data
}

module.exports = {receiveMessage}