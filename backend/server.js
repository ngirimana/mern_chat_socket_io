const express = require("express");
const dotenv = require('dotenv');
const chats = require('./data/data');

const app = express();
dotenv.config()

app.get('/', (req, res) => {
    res.send("API is running successfully");
});
app.get('/api/chat', (req, res) => {
    res.send(chats)
});
app.get("/api/chat/:id", (req, res) => {
    const chat = chats.find(chat => chat._id === req.params.id);
    res.send(chat);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on Port ${PORT}`));
