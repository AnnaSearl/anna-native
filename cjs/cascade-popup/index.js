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
const cascade_1 = __importDefault(require("../cascade"));
const popup_1 = __importDefault(require("../popup"));
const form_value_1 = __importDefault(require("../form-value"));
const style_1 = __importDefault(require("./style"));
const prefixCls = 'cascade-popup';
const CascadePopup = props => {
    const { value, children, disabled, placeholder, textAlign, onChange, valueStyle, placeholderStyle, } = props;
    const [show, setShow] = react_1.useState(false);
    const handleTap = () => {
        if (disabled) {
            return;
        }
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };
    const handleChange = (v, s, isLast) => {
        onChange(v, s);
        if (isLast) {
            setShow(false);
        }
    };
    const cascadeValue = (value === null || value === void 0 ? void 0 : value.map(i => i.value)) || [];
    return (react_1.default.createElement(react_native_1.View, { style: style_1.default[prefixCls] },
        react_1.default.createElement(react_native_1.Pressable, { style: style_1.default[`${prefixCls}-form-item`], onPress: handleTap },
            react_1.default.createElement(form_value_1.default, { textAlign: textAlign, placeholder: placeholder, style: valueStyle, placeholderStyle: placeholderStyle }, children || (value === null || value === void 0 ? void 0 : value.map(i => i.text).join(' ')))),
        react_1.default.createElement(popup_1.default, { position: "bottom", open: show, onClose: handleClose, title: "\u8BF7\u9009\u62E9", closeable: true },
            react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-container`] },
                react_1.default.createElement(cascade_1.default, Object.assign({}, props, { onChange: handleChange, value: cascadeValue }))))));
};
exports.default = CascadePopup;
