const express = require("express");
const dotenv = require('dotenv');
const colors = require("colors");
const chats = require('./data/data');
const connectDb = require("./config/config");
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const userRoutes = require('./routes/chatRoutes');

dotenv.config({ path: "../.env" });
connectDb();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("API is running successfully");
});
app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on Port ${PORT}`.yellow.bold));

