require('dotenv').config();
const express = require('express');
const sequelize = require("./bd");
const models = require('./models/models');

const cors = require('cors');
const fileUpload = require('express-fileupload')
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require("path")

const PORT = process.env.PORT || 5000;
//прикол 
// otvet na prikol
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use('/api', router);

//Обработка ошибок, последний Middleware
app.use(errorHandler)



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
