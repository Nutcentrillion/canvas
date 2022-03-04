import { loadImage } from "canvas";

import { FILE_EXTENSION } from "./constant";

export function checkIsSecret(array: string[]) {
  const isPublic =
    array[2].toLowerCase() === "3n" && array[9].toLowerCase() === "10n";

  return !isPublic;
}

export async function getTemplatePath(isSecret: boolean) {
  let templateNumber;

  !isSecret ? (templateNumber = 1) : (templateNumber = 2);

  return getImage(`Template/template${templateNumber}${FILE_EXTENSION}`);
}

export async function getImage(pathName: string) {
  return loadImage(process.cwd() + `/public/${pathName}`);
}
