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
const style_1 = __importDefault(require("./style"));
const prefixCls = 'row';
const renderCols = (columns, halfGutter) => {
    const cols = react_1.default.Children.map(columns, (column) => {
        const style = halfGutter ? { paddingHorizontal: halfGutter } : null;
        return Object.assign(Object.assign({}, column), { props: Object.assign(Object.assign({}, column.props), { style: Object.assign(Object.assign({}, column.props.style), style) }) });
    });
    return cols;
};
const Row = props => {
    const { gutter = 0, justify = 'start', align = 'top', style, children } = props;
    const halfGutter = react_1.useMemo(() => gutter / 2, [gutter]);
    return (react_1.default.createElement(react_native_1.View, { style: [
            style_1.default[prefixCls],
            justify && style_1.default[`${prefixCls}-justify-${justify}`],
            align && style_1.default[`${prefixCls}-align-${align}`],
            style,
            { marginHorizontal: -halfGutter },
        ] }, renderCols(children, halfGutter)));
};
exports.default = Row;
