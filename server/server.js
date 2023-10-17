const express = require("express")
const { chats } = require("./data/data")

const app = express()

app.get('/', (req,res)=> {
    res.send("api is running")
});

app.get('/api/chat', (req,res)=> {
    res.send(chats)
})

app.get("/api/chat/:id", (req,res)=> {
    // console.log(req.params.id)
})

app.listen(5173, console.log("Server on port 5173"));

