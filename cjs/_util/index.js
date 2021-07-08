"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepClone = exports.isIPhoneX = exports.flat = exports.twoDimensional = void 0;
// @ts-ignore
const react_native_1 = require("react-native");
const _constants_1 = require("../_constants");
const twoDimensional = (data, columns, span, standard = 24) => {
    const two = [];
    const spanTwo = [];
    const colSpan = standard / columns;
    if (!Array.isArray(data)) {
        return [two, spanTwo];
    }
    let spanArray = [];
    if (span) {
        spanArray = new Array(data.length).fill(colSpan);
        if (typeof span === 'number') {
            if (span > 0) {
                spanArray[0] = span;
            }
            if (span < 0) {
                spanArray[data.length - 1] = Math.abs(span);
            }
        }
        if (Array.isArray(span)) {
            spanArray = span.concat(spanArray.slice(span.length));
        }
        let prev = 0;
        let rowIndex = 0;
        for (let i = 0; i < spanArray.length; i++) {
            const item = spanArray[i];
            const row = [data[i]];
            const spanRow = [item];
            if (item >= 24) {
                rowIndex = two.push(row);
                spanTwo.push(spanRow);
            }
            else {
                if (24 - prev >= item) {
                    two[rowIndex]
                        ? (two[rowIndex] = two[rowIndex].concat(data[i]))
                        : (rowIndex = two.push(row) - 1);
                    spanTwo[rowIndex]
                        ? (spanTwo[rowIndex] = spanTwo[rowIndex].concat(item))
                        : (rowIndex = spanTwo.push(spanRow) - 1);
                    prev += item;
                }
                else {
                    rowIndex = two.push(row) - 1;
                    spanTwo.push(spanRow);
                    prev = item;
                }
            }
        }
        return [two, spanTwo];
    }
    const rowsLength = Math.ceil(data.length / columns);
    const oneDimensional = data.concat([]);
    let index = 0;
    for (let i = 0; i < rowsLength; i++) {
        const row = oneDimensional.slice(index, (index += columns));
        two.push(row);
        spanTwo.push(new Array(row.length).fill(colSpan));
    }
    return [two, spanTwo];
};
exports.twoDimensional = twoDimensional;
const flat = (arr) => {
    if (!Array.isArray(arr)) {
        return [];
    }
    return arr.reduce((prev, curr) => {
        if (Array.isArray(curr)) {
            return prev.concat(exports.flat(curr));
        }
        return prev.concat(curr);
    }, []);
};
exports.flat = flat;
const isIPhoneX = () => {
    const height = react_native_1.Dimensions.get('window').height;
    if (height === _constants_1.IPHONE12_NORMAL || height === _constants_1.IPHONE12_MAX || height === _constants_1.IPHONE12_MINI) {
        return true;
    }
    return react_native_1.DeviceInfo.isIPhoneX_deprecated;
};
exports.isIPhoneX = isIPhoneX;
const deepClone = function (data) {
    let cloneData = null;
    if (Array.isArray(data)) {
        cloneData = [];
        for (let i = 0; i < data.length; i += 1) {
            const item = data[i];
            cloneData[i] = exports.deepClone(item);
        }
    }
    else if (typeof data === 'object' && data !== null) {
        cloneData = {};
        Object.keys(data).forEach(key => {
            const item = data[key];
            cloneData[key] = exports.deepClone(item);
        });
    }
    else {
        cloneData = data;
    }
    return cloneData;
};
exports.deepClone = deepClone;
