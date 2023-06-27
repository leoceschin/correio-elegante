const express = require("express");
const amqpServer = require("./messages"); 

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.post("/", (req, res) => {
    const {destiny, message} = req.body;
    amqpServer.sendMessage(req.body);
    res.json({destiny: destiny, message: message})

})

app.listen(3000, ()=>{
    console.log("Producer server online")
})