const express = require("express")
const {DownloadImage} = require("./contoller.js")

const route = express.Router()

route.get("/images/:number", DownloadImage)