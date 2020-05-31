const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const subscribersRouter = require('./routes/subscribers');

require('dotenv').config();  // configuring environment variables

const app = express();
console.log(`Server started up! Whoo!`);
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;  // Atlas URI that we get from MongoDB Atlas website -> database hosted here
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!!");
});

app.use('/subscribers', subscribersRouter);

app.listen(port, () => {
    console.log(`Server now listening on ${port}...`)
});

