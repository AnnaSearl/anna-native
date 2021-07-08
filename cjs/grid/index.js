"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const row_1 = __importDefault(require("../row"));
const col_1 = __importDefault(require("../col"));
const _util_1 = require("../_util");
const getColIndex = (two, rindex, cindex) => {
    const list = two.slice(0, rindex + 1);
    list[rindex] = list[rindex].slice(0, cindex + 1);
    const flatedList = _util_1.flat(list);
    return flatedList.length;
};
const Grid = props => {
    const { data = [], columns = 4, gutter = 0, span, children } = props;
    const [two, spanTwo] = react_1.useMemo(() => _util_1.twoDimensional(data, columns, span, 24), [data === null || data === void 0 ? void 0 : data.length]);
    let gutterArray = gutter;
    if (!Array.isArray(gutter)) {
        gutterArray = [gutter];
    }
    return (react_1.default.createElement(react_native_1.View, null, two === null || two === void 0 ? void 0 : two.map((row, rindex) => (react_1.default.createElement(row_1.default, { key: rindex, gutter: gutterArray[0], style: {
            marginBottom: rindex !== two.length - 1 ? gutterArray[1] : undefined,
        } }, row === null || row === void 0 ? void 0 : row.map((col, cindex) => {
        var _a;
        return (react_1.default.createElement(col_1.default, { key: cindex, span: (_a = spanTwo === null || spanTwo === void 0 ? void 0 : spanTwo[rindex]) === null || _a === void 0 ? void 0 : _a[cindex] }, typeof children === 'function'
            ? children === null || children === void 0 ? void 0 : children(col, getColIndex(spanTwo, rindex, cindex), cindex, rindex) : children));
    }))))));
};
exports.default = Grid;
