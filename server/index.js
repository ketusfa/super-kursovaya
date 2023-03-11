require('dotenv').config();
const express = require('express');
const sequelize = require("./bd");
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.send('<h1>HEE</h1>')
})


const start = async () => {
    try {
       await sequelize.authenticate();
       await sequelize.sync();
       app.listen(PORT, () => console.log(`server start on port ${PORT}`));
    } catch (e){
        console.log(e);

    }
}

start();
