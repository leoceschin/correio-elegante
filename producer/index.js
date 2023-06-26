const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.post("/", (req, res) => {
    const {destiny, message} = req.body;

    res.json({destiny: destiny, message: message})

})

app.listen(3000, ()=>{
    console.log("Producer server online")
})