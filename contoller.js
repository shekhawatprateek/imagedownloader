
import fs from 'fs'
import { images } from "./constant.js"
import sharp from "sharp"


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



        let selected_images = images.slice(0, number_of_images)



        for (let i = 0; i < selected_images.length; i++) {

            try {

                const response = await fetch(selected_images[i]);

                // console.log(response)

                const imagesArr = await response.arrayBuffer();

                // console.log(imagesArr)
                const buffer = Buffer.from(imagesArr, 'binary');

                sharp(buffer)
                    .resize(200, 200)
                    .toFile(`resized${i}.jpg`, (err, info) => {
                        // console.log("error", err);
                    });

                saveImage(buffer, i)

            } catch (e) {
                console.log("error while fetching images")
            }

        }


    }
    catch (error) {
        console.log("Error in DownloadImage", error)
    }
}

