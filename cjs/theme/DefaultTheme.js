"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const theme_1 = __importDefault(require("../style/theme"));
const DefaultTheme = {
    dark: false,
    roundness: 0,
    colors: {
        primary: theme_1.default.$brandColor,
        contrastive: theme_1.default.$contrastiveColor,
    },
};
exports.default = DefaultTheme;
