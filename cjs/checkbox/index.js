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
const react_native_1 = require("react-native");
const icon_1 = __importDefault(require("../icon"));
const theme_1 = require("../theme");
const style_1 = __importDefault(require("./style"));
const prefixCls = 'checkbox';
const Checkbox = props => {
    const { theme, checked, value, children, style, checkboxStyle, contentStyle, disabled, onPress, onChange, } = props;
    const { colors } = theme;
    const { primary } = colors;
    const handleChange = (e) => {
        if (disabled) {
            return;
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(!checked, e, value);
    };
    let currentIcon;
    if (disabled) {
        currentIcon = React.createElement(icon_1.default, { name: "disabled", size: 20, color: "#9DA1AD" });
    }
    else {
        currentIcon = checked ? (React.createElement(icon_1.default, { name: "selected", size: 20, color: [primary, '#FFFFFF'] })) : (React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-unchecked`] }));
    }
    return (React.createElement(react_native_1.Pressable, { style: [style_1.default[prefixCls], style], onPress: onPress },
        React.createElement(react_native_1.Pressable, { style: [style_1.default[`${prefixCls}-icon`], checkboxStyle], onPress: handleChange }, currentIcon),
        React.createElement(react_native_1.Pressable, { style: [style_1.default[`${prefixCls}-content`], contentStyle], onPress: onPress }, children)));
};
const getCheckboxs = (children, value = [], onChange) => {
    const onGroupChange = (checked, e, v) => {
        const val = value || [];
        const newVal = (val === null || val === void 0 ? void 0 : val.includes(v)) ? val === null || val === void 0 ? void 0 : val.filter(i => i !== v) : val === null || val === void 0 ? void 0 : val.concat(v);
        const newValue = !Array.isArray(newVal) || newVal.length === 0 ? undefined : newVal;
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue, e);
    };
    const checkboxs = React.Children.map(children, (checkbox) => {
        var _a, _b;
        const p = (checkbox === null || checkbox === void 0 ? void 0 : checkbox.props) || {};
        let checked = p.checked;
        if ((p.value || p.value === 0) && ((_b = (_a = value) === null || _a === void 0 ? void 0 : _a.includes) === null || _b === void 0 ? void 0 : _b.call(_a, p.value))) {
            checked = !checked;
        }
        return Object.assign(Object.assign({}, checkbox), { props: Object.assign(Object.assign({}, checkbox.props), { checked, onChange: onGroupChange }) });
    });
    return checkboxs;
};
const Group = props => {
    const { value = [], children, direction = 'row', onChange } = props;
    const checkboxs = getCheckboxs(children, value, onChange);
    return React.createElement(react_native_1.View, { style: { flexDirection: direction } }, checkboxs);
};
const CheckboxWithTheme = theme_1.withTheme(Checkbox);
CheckboxWithTheme.Group = theme_1.withTheme(Group);
exports.default = CheckboxWithTheme;
