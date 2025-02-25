const { images } = require("./constant.js")
const express = require("express")
const route = require("./route.js")
const app = express()


app.use(route)

app.listen(8000, () => {
    console.log("Server Running on 8000")
})





