const express = require("express")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post("/", (req,res)=>{
    const msg = req.body;
    queue.push(msg);
    res.json({message: "Mensagem enviada"})
});

app.get("/", (req, res)=>{
    const msg = queue.shift();
    res.json(msg);

})

app.get("/msg", (_,res)=>{
    res.json(queue);
})

app.listen(3000, () => {
    console.log("Receiver server online")
})