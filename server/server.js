const express = require("express")

const app = express()

app.get('/', (req,res)=> {
    res.send("api is running")
});

app.get('/')

app.listen(5173, console.log("Server on port 5173"));

