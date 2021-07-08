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
const picker_view_1 = __importDefault(require("../picker-view"));
const picker_view_column_1 = __importDefault(require("../picker-view-column"));
const safe_filling_1 = __importDefault(require("../safe-filling"));
const form_value_1 = __importDefault(require("../form-value"));
const style_1 = __importDefault(require("./style"));
const prefixCls = 'wheel-picker';
const getInitialVal = (value, mult, rangeLength = 1) => {
    if (mult) {
        if (!Array.isArray(value)) {
            return Array(rangeLength).fill(0);
        }
        return value;
    }
    return value || 0;
};
const Picker = props => {
    const { value = 0, range, rangeKey = 'text', textAlign, placeholder, rangeColumnsFlex, disabled, children, onChange, onStartShouldSetResponderCapture, } = props;
    const multiple = react_1.useRef(Array.isArray(range === null || range === void 0 ? void 0 : range[0])).current;
    const val = react_1.useRef(getInitialVal(value, multiple, range === null || range === void 0 ? void 0 : range.length));
    const [open, setOpen] = react_1.useState(false);
    const handlePress = () => {
        if (disabled) {
            return;
        }
        setOpen(state => !state);
    };
    const handleOK = (e) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(val.current, e);
        setOpen(false);
    };
    const handleChangeColumn = (mult, v, index) => {
        if (mult) {
            val.current = [...(Array.isArray(val.current) ? val.current : [val.current])];
            val.current[index] = v;
            return;
        }
        val.current = v;
    };
    return (react_1.default.createElement(react_native_1.View, { style: style_1.default[prefixCls] },
        react_1.default.createElement(react_native_1.Pressable, { onPress: handlePress, onStartShouldSetResponderCapture: onStartShouldSetResponderCapture },
            react_1.default.createElement(form_value_1.default, { textAlign: textAlign, placeholder: placeholder }, children)),
        react_1.default.createElement(popup_1.default, { position: "bottom", open: open, onClose: () => setOpen(false) },
            react_1.default.createElement(picker_view_1.default, { onOK: handleOK, onCancel: () => setOpen(false) }, multiple ? (range === null || range === void 0 ? void 0 : range.map((columnData, index) => (react_1.default.createElement(picker_view_column_1.default, { key: index, style: Array.isArray(rangeColumnsFlex) ? { flex: rangeColumnsFlex === null || rangeColumnsFlex === void 0 ? void 0 : rangeColumnsFlex[index] } : undefined, value: value[index], options: columnData, optionsKey: rangeKey, onChange: v => handleChangeColumn(true, v, index) })))) : (react_1.default.createElement(picker_view_column_1.default, { value: value, options: range, optionsKey: rangeKey, onChange: v => handleChangeColumn(false, v) }))),
            react_1.default.createElement(safe_filling_1.default, { bottom: true }))));
};
exports.default = Picker;
