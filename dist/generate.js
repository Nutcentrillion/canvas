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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const canvas_1 = require("canvas");
const utils_1 = require("./utils");
const constant_1 = require("./constant");
exports.router = express_1.default.Router();
exports.router.get("/", (_, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const canvas = (0, canvas_1.createCanvas)(constant_1.TEMPLATE_WIDTH, constant_1.TEMPLATE_HEIGHT);
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        const body = "1g-2g-3n-4g-5g-6g-7g-8g-9g-10n-11g-12w";
        const array = body.split("-");
        const isSecret = (0, utils_1.checkIsSecret)(array);
        const TEMPLATE_PATH = yield (0, utils_1.getTemplatePath)(isSecret);
        ctx.drawImage(TEMPLATE_PATH, 0, 0, constant_1.TEMPLATE_WIDTH, constant_1.TEMPLATE_HEIGHT);
        for (let i = 0; i < array.length; i++) {
            constant_1.IMAGE_PATH[i].path =
                constant_1.IMAGE_PATH[i].path + array[i].slice(-1).toUpperCase();
        }
        let allData = [];
        for (let i = 0; i < constant_1.IMAGE_PATH.length; i++) {
            if (isSecret === false) {
                if (i === 2 || i === 9) {
                    continue;
                }
            }
            const image = yield (0, utils_1.getImage)(constant_1.IMAGE_PATH[i].path + constant_1.FILE_EXTENSION);
            const { x, y } = constant_1.COORDINATES[i];
            const data = { image, x, y };
            allData.push(data);
        }
        for (const data of allData) {
            ctx.drawImage(data.image, data.x, data.y, constant_1.IMAGE_SIZE, constant_1.IMAGE_SIZE);
        }
        return response.json({ url: canvas.toDataURL() });
    }
    catch (error) {
        console.error(error);
    }
}));
