const express = require('express');
const con = require('./DB/conn')
const user = require('./models/usuario')
const usuarioRoutes = require('./routes/usuarioRoutes')
require('dotenv').config()
const port = process.env.PORT;

const app = express();

// Formato json
app.use(express.json())

// Routes

app.use('/usuarios', usuarioRoutes)

con.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server rodando na porta ${port}`)
    })
}).catch((error) => {console.log(error)})