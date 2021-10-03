const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.Promise = global.Promise;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Connected to Mongo");
}).catch(e => {
    console.error(e);
})

app.listen(PORT, () => {
    console.log(`🚀Listening on port: ${PORT}`);
});