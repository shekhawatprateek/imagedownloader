import express from "express"
import route from "./route.js"
const app = express()


app.use('/',route)

app.listen(8000, () => {
    console.log("Server Running on 8000")
})



