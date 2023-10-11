require("dotenv").config()
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT ||2028
app.listen(port, () =>{
    console.log(`listenig at port ${port}`)
})

app.get("/",(req,res)=> {
    res.status(200).send("<h1>Proyecto final modulo 2</h1>")
})