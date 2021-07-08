"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIconColor = void 0;
/**
 * @param {string | string[] | undefined} color
 * @param {number} index
 * @param {string} defaultColor
 * @return {string}
 */
const getIconColor = (color, index, defaultColor) => {
    return color
        ? (typeof color === 'string'
            ? color
            : color[index] || defaultColor)
        : defaultColor;
};
exports.getIconColor = getIconColor;
