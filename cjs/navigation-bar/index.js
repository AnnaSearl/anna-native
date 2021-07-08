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
exports.LeftButton = void 0;
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const node_1 = __importDefault(require("../node"));
const icon_1 = __importDefault(require("../icon"));
const _util_1 = require("../_util");
const _constants_1 = require("../_constants");
const style_1 = __importDefault(require("./style"));
const prefixCls = 'navigation-bar';
const leftStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    minWidth: 40,
};
const leftTextStyle = {
    fontSize: 16,
    marginLeft: -4,
};
const LeftButton = props => {
    const { color, style, children, onPress } = props;
    return (React.createElement(react_native_1.TouchableOpacity, { style: [leftStyle, style], onPress: onPress },
        React.createElement(icon_1.default, { name: "back", size: 24, color: color || '#000' }),
        React.createElement(react_native_1.Text, { style: [leftTextStyle, { color }] }, children)));
};
exports.LeftButton = LeftButton;
const NavigationBar = props => {
    const { leftText, leftColor, left, right, onLeftPress, onRightPress, statusBar = {
        barStyle: 'light-content',
        hidden: false,
    }, titleColor, backgroundColor, opacity, look, showBackButton, absolute, numberOfLines, children, } = props;
    let curBackgroundColor = backgroundColor;
    let curTitleColor = titleColor;
    let curLeftColor = leftColor;
    let curOpacity = opacity;
    if (look === 'light') {
        curBackgroundColor = '#FFFFFF';
        curTitleColor = '#000';
        curLeftColor = '#000';
    }
    let leftNode = left;
    if (!left && showBackButton) {
        leftNode = (React.createElement(exports.LeftButton, { color: curLeftColor, onPress: onLeftPress }, leftText));
    }
    const absoluteTop = _util_1.isIPhoneX() ? _constants_1.TOP_SAFE_HEIGHT : _constants_1.STATUS_BAR_HEIGHT;
    const absoluteStyle = absolute
        ? {
            position: 'absolute',
            top: absoluteTop,
            left: 0,
            right: 0,
            zIndex: 1,
        }
        : null;
    const navStyle = Object.assign({ backgroundColor: curBackgroundColor, opacity: curOpacity }, absoluteStyle);
    return (React.createElement(react_native_1.View, { style: [style_1.default[prefixCls], navStyle] },
        !statusBar.hidden ? (React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-status`] },
            React.createElement(react_native_1.StatusBar, Object.assign({}, statusBar)))) : null,
        React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-content`] },
            React.createElement(node_1.default, { style: style_1.default[`${prefixCls}-left`] }, leftNode),
            React.createElement(node_1.default, { style: [style_1.default[`${prefixCls}-center`], { color: curTitleColor }], numberOfLines: numberOfLines }, children),
            React.createElement(react_native_1.Pressable, { onPress: onRightPress },
                React.createElement(node_1.default, { style: style_1.default[`${prefixCls}-right`] }, right)))));
};
NavigationBar.config = {};
NavigationBar.setDefaultConfig = ({ onLeftPress }) => {
    if (onLeftPress) {
        NavigationBar.config.onLeftPress = onLeftPress;
    }
};
exports.default = NavigationBar;
