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
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const generate_1 = require("./generate");
const constant_1 = require("./constant");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        exports.app.use("/api/generate", generate_1.router);
        exports.app.listen(constant_1.PORT, () => {
            console.log(`🚀 Server is ready at http://localhost:${constant_1.PORT}/api/generate`);
        });
    }
    catch (error) {
        console.log(error);
    }
});
main();
