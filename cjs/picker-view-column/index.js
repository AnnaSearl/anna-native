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
const prefixCls = 'wheel';
const rowHeight = 44;
const PickerViewColumn = props => {
    const { value = 0, options = [], optionsKey = 'text', style, onChange } = props;
    const startPoint = react_1.useRef({ y: 0 }).current;
    const initialTranslateValue = react_1.useRef({ y: -rowHeight * value + rowHeight * 2 }).current;
    const translateY = react_1.useRef(new react_native_1.Animated.Value(initialTranslateValue.y)).current;
    const column = react_1.useRef({ height: 0 }).current;
    react_1.useEffect(() => {
        column.height = (options === null || options === void 0 ? void 0 : options.length) * rowHeight;
    }, [options]);
    react_1.useEffect(() => {
        if (!value || value <= 0) {
            translateY.setValue(rowHeight * 2);
            return;
        }
        translateY.setValue(-rowHeight * value + rowHeight * 2);
    }, [value]);
    const handlePanResponderGrant = (e) => {
        startPoint.y = e.nativeEvent.pageY;
    };
    const handlePanResponderMove = (e) => {
        const diff = e.nativeEvent.pageY - startPoint.y;
        const updateY = diff + initialTranslateValue.y;
        if (updateY < -column.height + rowHeight * 2) {
            translateY.setValue(-column.height + rowHeight * 2);
            return;
        }
        if (updateY > rowHeight * 3) {
            translateY.setValue(rowHeight * 3);
            return;
        }
        translateY.setValue(updateY);
    };
    const hanldePanResponderRelease = () => {
        // @ts-ignore
        const translateYValue = translateY._value;
        const animated = (pVal) => {
            react_native_1.Animated.spring(translateY, {
                toValue: pVal,
                useNativeDriver: true,
            }).start(() => {
                translateY.setValue(pVal);
                initialTranslateValue.y = pVal;
            });
            const v = Math.floor((pVal - rowHeight * 2) / -rowHeight);
            onChange === null || onChange === void 0 ? void 0 : onChange(v);
        };
        if (translateYValue < -column.height + rowHeight * 3) {
            const val = -column.height + rowHeight * 3;
            animated(val);
            return;
        }
        if (translateYValue > rowHeight * 2) {
            const val = rowHeight * 2;
            animated(val);
            return;
        }
        if (translateYValue % rowHeight !== 0) {
            const r = Math.round(translateYValue / rowHeight) - Math.floor(translateYValue / rowHeight);
            let val = 0;
            if (r === 1) {
                val = Math.ceil(translateYValue / rowHeight) * rowHeight;
            }
            else {
                val = Math.floor(translateYValue / rowHeight) * rowHeight;
            }
            animated(val);
            return;
        }
        initialTranslateValue.y = translateYValue;
    };
    const panResponder = react_1.useRef(react_native_1.PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onStartShouldSetPanResponderCapture: () => false,
        onMoveShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponderCapture: () => false,
        onPanResponderGrant: handlePanResponderGrant,
        onPanResponderMove: handlePanResponderMove,
        onPanResponderTerminationRequest: () => true,
        onPanResponderRelease: hanldePanResponderRelease,
        onPanResponderTerminate: () => null,
        onShouldBlockNativeResponder: () => true,
    })).current;
    return (react_1.default.createElement(react_native_1.View, { style: [style_1.default[prefixCls], style] },
        react_1.default.createElement(react_native_1.Animated.View, Object.assign({ style: [style_1.default[`${prefixCls}-content`], { transform: [{ translateY: translateY }] }] }, panResponder.panHandlers), options === null || options === void 0 ? void 0 : options.map((option, index) => {
            var _a;
            return (react_1.default.createElement(react_native_1.View, { key: index, style: style_1.default[`${prefixCls}-item`] },
                react_1.default.createElement(react_native_1.Text, { style: style_1.default[`${prefixCls}-item-text`] }, typeof option === 'object' ? (_a = option) === null || _a === void 0 ? void 0 : _a[optionsKey] : option)));
        }))));
};
exports.default = PickerViewColumn;
