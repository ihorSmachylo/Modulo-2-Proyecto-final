require("dotenv").config()
const express = require("express")
const cors = require("cors")
const db = require("./config/database")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("./client"))

const port = process.env.PORT ||2028
app.listen(port, () =>{
    console.log(`listenig at port ${port}`)
})

app.get("/",(req,res)=> {
    res.status(200).send("<h1>Proyecto final modulo 2</h1>")
})

app.use("/api", require("./routes/Instagramclon"))

//**** GET *****
db.execute("SELECT * FROM instagramclon").then((res) => console.log("get all", res[0])).catch((err) => console.log(err, "not working"))


//**** POST *****
// db.execute("INSERT INTO coches (name) VALUES (?)", ["alpha romeo"])
// db.execute('INSERT INTO instagram (title, image, description, likes) VALUES ("perrito", "https://img.freepik.com/vector-gratis/fondo-carlino-gracioso_23-2147703354.jpg?size=626&ext=jpg", "dibijo de carlino adorable", "0")')

//**** PUT *****
// db.execute("UPDATE home SET home.description = 'this is an ideal table for your office', home.room = 'office' WHERE home.id = 19")

//**** DELETE *****
// db.execute("DELETE FROM home WHERE home.id = 17")
