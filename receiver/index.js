const express = require("express")
const amqpServer = require("./receiveMessages")

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send(amqpServer.receiveMessage());
    //res.send(amqpServer.receiveMessage());
})

app.listen(3000, () => {
    console.log("Receiver server online")
})