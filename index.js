const express = require("express")
const config = require("config")
const cors = require('cors')
const app = express()
const PORT = config.get('port') || 5000


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}


app.use(cors(corsOptions))
app.use(express.json({extended:true}))
app.use('/api',require('./router/main.router'))



async function start(){
    try {
        app.listen(PORT, ()=>   console.log("Server is started on PORT", PORT))
    } catch (error) {
        console.log("SERVER ERROR! ", error)
        process.exit()
    }
}

start()