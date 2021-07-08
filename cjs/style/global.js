"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageStyle = void 0;
const theme_1 = __importDefault(require("./theme"));
exports.pageStyle = {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: theme_1.default.$light8,
};
