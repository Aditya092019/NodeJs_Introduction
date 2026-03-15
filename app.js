// const http = require("http");
const express = require("express");
const app = express();



app.get("/", (req, res) => {
    return res.send("Hello From Home Page");
});

app.get("/about", (req, res) => {
    return res.send(`Hello ${req.query.name}`);
});

app.get("/profile", (req, res) => {
    return res.send("Profile Page");
});


const myServer = http.createServer(app);

myServer.listen(8005, () => console.log("Server Started!"));