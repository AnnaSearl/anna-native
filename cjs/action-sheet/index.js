"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const popup_1 = __importDefault(require("../popup"));
const icon_1 = __importDefault(require("../icon"));
const node_1 = __importDefault(require("../node"));
const safe_filling_1 = __importDefault(require("../safe-filling"));
const theme_1 = __importDefault(require("../style/theme"));
const style_1 = __importDefault(require("./style"));
const prefixCls = 'action-sheet';
const ActionSheet = props => {
    const { open, title, actions, cancelText = 'Cancel', cover, maskClosable = true, onCancel, onChange, } = props;
    const handleCancel = (e) => {
        onCancel === null || onCancel === void 0 ? void 0 : onCancel(e);
    };
    const handleChange = (action, grid, e) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(action, grid, e);
    };
    const handleCloseMask = () => {
        maskClosable && (onCancel === null || onCancel === void 0 ? void 0 : onCancel());
    };
    const renderAction = (action, isLast) => (react_1.default.createElement(react_native_1.Pressable, { key: action === null || action === void 0 ? void 0 : action.value, onPress: e => handleChange(action, undefined, e) },
        react_1.default.createElement(react_native_1.View, { style: [
                style_1.default[`${prefixCls}-action`],
                isLast ? { borderBottomWidth: 0 } : null,
                props.itemStyle,
            ] },
            react_1.default.createElement(node_1.default, { style: [
                    style_1.default[`${prefixCls}-action-text`],
                    (action === null || action === void 0 ? void 0 : action.type) === 'destructive' ? style_1.default[`${prefixCls}-action-destructive`] : null,
                    props.itemTextStyle,
                ] }, action === null || action === void 0 ? void 0 : action.text))));
    const renderGrid = (action) => {
        var _a;
        return (react_1.default.createElement(react_native_1.View, { key: action.value, style: [
                style_1.default[`${prefixCls}-grid`],
                action.type === 'destructive' ? style_1.default[`${prefixCls}-action-destructive`] : null,
            ] },
            react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-grid-wrapper`] }, (_a = action.text) === null || _a === void 0 ? void 0 : _a.map((item) => (react_1.default.createElement(react_native_1.Pressable, { key: item.value, style: style_1.default[`${prefixCls}-grid-item`], onPress: e => handleChange(item, action, e) },
                react_1.default.createElement(node_1.default, { style: style_1.default[`${prefixCls}-grid-item-icon`] }, item.icon ? (react_1.default.createElement(icon_1.default, { name: item.icon, size: 24, color: "rgba(0, 0, 0, 0.8)" })) : (item.name)),
                react_1.default.createElement(node_1.default, { style: style_1.default[`${prefixCls}-grid-item-name`], numberOfLines: 1 }, item.name)))))));
    };
    return (react_1.default.createElement(react_native_1.View, { style: style_1.default[prefixCls] },
        react_1.default.createElement(popup_1.default, { transparent: true, position: "bottom", open: open, onClose: handleCloseMask },
            react_1.default.createElement(react_native_1.View, { style: [style_1.default[`${prefixCls}-container`], cover ? style_1.default[`${prefixCls}-cover`] : null] },
                react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-menu`] },
                    title ? (react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-action`] },
                        react_1.default.createElement(node_1.default, { style: [style_1.default[`${prefixCls}-action-text`], style_1.default[`${prefixCls}-title`]] }, title))) : null, actions === null || actions === void 0 ? void 0 :
                    actions.map((action, index) => action.mode === 'grid'
                        ? renderGrid(action)
                        : renderAction(action, index === actions.length - 1))),
                react_1.default.createElement(react_native_1.Pressable, { onPress: handleCancel },
                    react_1.default.createElement(node_1.default, { style: style_1.default[`${prefixCls}-cancel`] }, cancelText),
                    react_1.default.createElement(safe_filling_1.default, { bottom: true, backgroundColor: theme_1.default.$light1 }))))));
};
exports.default = ActionSheet;
