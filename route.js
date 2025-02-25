import express from "express"
import { DownloadImage } from "./contoller.js"

const route = express.Router()

route.get("/images/:number", DownloadImage);

export default route;