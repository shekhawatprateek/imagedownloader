const { images } = require("./constant.js")
const express = require("express")
const Axios = require('axios')
const app = express()
const fs = require('fs')

function saveImage(data, i) {
    try {
        fs.writeFileSync(`image${i}.jpg`, data, (err, res) => {
            if (err) {
                console.log(err);
            }
            console.log(res);

        })
    }
    catch (e) {
        console.log("Error in saveImage ", e)
    }
}

async function DownloadImage() {

    try {

        for (let i = 0; i < images.length; i++) {

            const response = await fetch(images[i]);

            // console.log(response)

            const imagesArr = await response.arrayBuffer();

            // console.log(imagesArr)
            const buffer = Buffer.from(imagesArr, 'binary');

            console.log(buffer)
            saveImage(buffer, i)

        }


    }
    catch (error) {
        console.log("Error in DownloadImage", error)
    }
}

DownloadImage()





