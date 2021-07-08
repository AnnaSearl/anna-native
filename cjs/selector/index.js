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
const node_1 = __importDefault(require("../node"));
const style_1 = __importDefault(require("./style"));
const prefixCls = 'selector';
let currentParent = null;
const Selector = (props) => {
    const { value = [], options = [], style, onChange, onChangeParentOption } = props;
    const [parentData, setParentData] = react_1.useState([]);
    const [childrenData, setChildrenData] = react_1.useState([]);
    const [activeParent, setActiveParent] = react_1.useState('');
    react_1.useEffect(() => {
        if (options.length > 0) {
            const data = options[0].children || [];
            currentParent = options[0];
            setActiveParent(currentParent.value);
            setParentData(options);
            setChildrenData(data);
        }
    }, [options]);
    const handleClickParentOption = (option) => {
        const data = option.children || [];
        currentParent = option;
        setChildrenData(data);
        setActiveParent(option.value);
        onChangeParentOption === null || onChangeParentOption === void 0 ? void 0 : onChangeParentOption(option);
    };
    const handleClickChildrenOption = (option) => {
        onChange === null || onChange === void 0 ? void 0 : onChange([currentParent.value, option.value], `${currentParent.text} ${option.text}`);
    };
    return (react_1.default.createElement(react_native_1.View, { style: [style_1.default[prefixCls], style] },
        react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-parent`] }, parentData === null || parentData === void 0 ? void 0 : parentData.map((option, index) => (react_1.default.createElement(react_native_1.Pressable, { key: option.value, style: style_1.default[`${prefixCls}-option`], onPress: () => {
                handleClickParentOption(option);
            } },
            react_1.default.createElement(node_1.default, { style: [
                    style_1.default[`${prefixCls}-option-text`],
                    activeParent === option.value ? style_1.default[`${prefixCls}-active`] : null,
                ] }, option.text),
            activeParent === option.value && index !== 0 ? (react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-option-rounded_top`] },
                react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-option-rounded_top-circle`] }))) : null,
            activeParent === option.value ? (react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-option-rounded_bottom`] },
                react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-option-rounded_bottom-circle`] }))) : null)))),
        react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-children`] }, childrenData === null || childrenData === void 0 ? void 0 : childrenData.map(option => (react_1.default.createElement(react_native_1.Pressable, { key: option.value, style: style_1.default[`${prefixCls}-option`], onPress: () => {
                handleClickChildrenOption(option);
            } },
            react_1.default.createElement(node_1.default, { style: [
                    style_1.default[`${prefixCls}-option-text`],
                    (value === null || value === void 0 ? void 0 : value[1]) === option.value ? style_1.default[`${prefixCls}-active`] : null,
                ] }, option.text)))))));
};
exports.default = Selector;
