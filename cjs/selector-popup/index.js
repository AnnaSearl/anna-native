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
const popup_1 = __importDefault(require("../popup"));
const selector_1 = __importDefault(require("../selector"));
const form_value_1 = __importDefault(require("../form-value"));
const SelectorPopup = (props) => {
    const { placeholder, children, title, textAlign, height, onChange } = props;
    const [show, setShow] = react_1.useState(false);
    const [text, setText] = react_1.useState('');
    const handlePress = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };
    const handleChange = (value, valueStr) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(value, valueStr);
        setText(valueStr || '');
        handleClose();
    };
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(react_native_1.Pressable, { onPress: handlePress },
            react_1.default.createElement(form_value_1.default, { textAlign: textAlign, placeholder: placeholder }, children || text)),
        react_1.default.createElement(popup_1.default, { position: "bottom", title: title, closeable: true, open: show, onClose: handleClose },
            react_1.default.createElement(selector_1.default, Object.assign({}, props, { style: { height }, onChange: handleChange })))));
};
exports.default = SelectorPopup;
