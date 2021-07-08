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
const React = __importStar(require("react"));
const picker_1 = __importDefault(require("../picker"));
const Select = props => {
    const { value, options, placeholder, textAlign, children, onChange, onStartShouldSetResponderCapture, } = props;
    const handleChangePicker = (v) => {
        if (v < 0) {
            return;
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(options === null || options === void 0 ? void 0 : options[v]);
    };
    const valueIndex = (options === null || options === void 0 ? void 0 : options.findIndex((item) => item.key === value)) || 0;
    const selectedOption = options === null || options === void 0 ? void 0 : options.find(option => option.key === value);
    return (React.createElement(picker_1.default, { range: options, rangeKey: "value", value: valueIndex, onChange: handleChangePicker, onStartShouldSetResponderCapture: onStartShouldSetResponderCapture, placeholder: placeholder, textAlign: textAlign }, children || (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value)));
};
exports.default = Select;
