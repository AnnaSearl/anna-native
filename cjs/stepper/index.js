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
const _constants_1 = require("../_constants");
const style_1 = __importDefault(require("./style"));
const Stepper = props => {
    const { min = 1, value = min, max, onChange, disabled = false } = props;
    const [current, setCurrent] = React.useState(value);
    React.useEffect(() => {
        if (current === value) {
            return;
        }
        if (onChange) {
            onChange(current);
        }
    }, [current]);
    React.useEffect(() => {
        if (current === value) {
            return;
        }
        setCurrent(value);
    }, [value]);
    const onPressAdd = () => {
        var a = current;
        a++;
        setCurrent(a);
    };
    const onPressReduce = () => {
        var a = current;
        a--;
        setCurrent(a);
    };
    const onChangeText = (v) => {
        setCurrent(v);
    };
    const onSubText = () => {
        if (current < min) {
            setCurrent(min);
        }
        else if (max && current > max) {
            setCurrent(max);
        }
        if (onChange) {
            onChange(current);
        }
    };
    return (React.createElement(react_native_1.View, { style: style_1.default.content },
        current <= min || disabled ? (React.createElement(react_native_1.TouchableOpacity, { onPress: () => {
                console.log('不能减少呐');
            } },
            React.createElement(react_native_1.Image, { style: style_1.default.rocketImg, source: {
                    uri: `${_constants_1.IMAGE_HOST}reduce_dis.png`,
                } }))) : (React.createElement(react_native_1.TouchableOpacity, { onPress: onPressReduce },
            React.createElement(react_native_1.Image, { style: style_1.default.rocketImg, source: {
                    uri: `${_constants_1.IMAGE_HOST}reduce_nor.png`,
                } }))),
        React.createElement(react_native_1.TextInput, { returnKeyType: 'done', value: current + '', editable: !disabled, keyboardType: 'numeric', style: style_1.default.input, underlineColorAndroid: 'transparent', onBlur: onSubText, onSubmitEditing: onSubText, onChangeText: text => onChangeText(Number(text.replace(/[^\d]+/, ''))) }),
        (max && current >= max) || disabled ? (React.createElement(react_native_1.Image, { style: style_1.default.rocketImg, source: {
                uri: `${_constants_1.IMAGE_HOST}add_dis.png`,
            } })) : (React.createElement(react_native_1.TouchableOpacity, { onPress: onPressAdd },
            React.createElement(react_native_1.Image, { style: style_1.default.rocketImg, source: {
                    uri: `${_constants_1.IMAGE_HOST}add_nor.png`,
                } })))));
};
exports.default = Stepper;
