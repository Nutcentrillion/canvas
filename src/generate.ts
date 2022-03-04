import express, { Request, Response } from "express";
import { createCanvas } from "canvas";

import { checkIsSecret, getTemplatePath, getImage } from "./utils";
import {
  IMAGE_PATH,
  COORDINATES,
  TEMPLATE_HEIGHT,
  TEMPLATE_WIDTH,
  FILE_EXTENSION,
  IMAGE_SIZE,
} from "./constant";

export const router = express.Router();

router.get("/", async (_: Request, response: Response): Promise<any> => {
  try {
    const canvas = createCanvas(TEMPLATE_WIDTH, TEMPLATE_HEIGHT);
    const ctx = canvas.getContext("2d");
    ctx.beginPath();

    const body = "1g-2g-3n-4g-5g-6g-7g-8g-9g-10n-11g-12w";

    const array = body.split("-");
    const isSecret = checkIsSecret(array);

    const TEMPLATE_PATH = await getTemplatePath(isSecret);
    ctx.drawImage(TEMPLATE_PATH, 0, 0, TEMPLATE_WIDTH, TEMPLATE_HEIGHT);

    for (let i = 0; i < array.length; i++) {
      IMAGE_PATH[i].path =
        IMAGE_PATH[i].path + array[i].slice(-1).toUpperCase();
    }

    let allData: DataType[] = [];

    for (let i = 0; i < IMAGE_PATH.length; i++) {
      if (isSecret === false) {
        if (i === 2 || i === 9) {
          continue;
        }
      }

      const image = await getImage(IMAGE_PATH[i].path + FILE_EXTENSION);
      const { x, y } = COORDINATES[i];

      const data = { image, x, y };

      allData.push(data);
    }

    for (const data of allData) {
      ctx.drawImage(data.image, data.x, data.y, IMAGE_SIZE, IMAGE_SIZE);
    }

    return response.json({ url: canvas.toDataURL() });
  } catch (error) {
    console.error(error);
  }
});
