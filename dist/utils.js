"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImage = exports.getTemplatePath = exports.checkIsSecret = void 0;
const canvas_1 = require("canvas");
const constant_1 = require("./constant");
function checkIsSecret(array) {
    const isPublic = array[2].toLowerCase() === "3n" && array[9].toLowerCase() === "10n";
    return !isPublic;
}
exports.checkIsSecret = checkIsSecret;
function getTemplatePath(isSecret) {
    return __awaiter(this, void 0, void 0, function* () {
        let templateNumber;
        !isSecret ? (templateNumber = 1) : (templateNumber = 2);
        return getImage(`Template/template${templateNumber}${constant_1.FILE_EXTENSION}`);
    });
}
exports.getTemplatePath = getTemplatePath;
function getImage(pathName) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, canvas_1.loadImage)(process.cwd() + `/public/${pathName}`);
    });
}
exports.getImage = getImage;
