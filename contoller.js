
import fs from 'fs'
import { images } from "./constant.js"


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

export async function DownloadImage(req, res) {

    try {

        let number_of_images = req.params.number;

        for (let i = 0; i < images.length; i++) {

            const response = await fetch(images[i]);

            console.log(response)

            const imagesArr = await response.arrayBuffer();

            // console.log(imagesArr)
            const buffer = Buffer.from(imagesArr, 'binary');

            // console.log(buffer)
            saveImage(buffer, i)

        }


    }
    catch (error) {
        console.log("Error in DownloadImage", error)
    }
}

