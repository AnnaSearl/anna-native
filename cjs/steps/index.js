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
const node_1 = __importDefault(require("../node"));
const icon_1 = __importDefault(require("../icon"));
const row_1 = __importDefault(require("../row"));
const col_1 = __importDefault(require("../col"));
const theme_1 = __importDefault(require("../style/theme"));
const style_1 = __importDefault(require("./style"));
const prefixCls = 'steps';
const Steps = (props) => {
    const { direction = 'horizontal', current = 0, steps, status, type } = props;
    const statusIconType = status === 'error' ? 'roundclosefill' : 'roundcheckfill';
    const statusIconColor = status === 'error' ? '#f5222d' : '#1890FF';
    const getTitle = (item, index) => {
        if (index === current) {
            if (status === 'error') {
                return item.errorTitle || item.title;
            }
        }
        return item.title;
    };
    if (direction === 'vertical') {
        return (React.createElement(react_native_1.View, { style: style_1.default.prefixCls }, steps === null || steps === void 0 ? void 0 : steps.map((item, index) => (React.createElement(react_native_1.View, { key: index, style: style_1.default[`${prefixCls}-step`] },
            React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-step-process`] },
                index !== 0 && React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-step-line-top`] }),
                index !== steps.length - 1 && (React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-step-line-bottom`] })),
                index === 0 ? (React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-step-current`] },
                    React.createElement(icon_1.default, { name: "iconfill-select", size: 18, color: theme_1.default.$brandColor }))) : (React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-step-circle`] }))),
            React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-step-content`] },
                React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-step-header`] },
                    React.createElement(node_1.default, { style: style_1.default[`${prefixCls}-step-title`] }, item.title),
                    React.createElement(node_1.default, { style: style_1.default[`${prefixCls}-step-extra`] }, item.extra)),
                React.createElement(node_1.default, { style: style_1.default[`${prefixCls}-step-description`] }, item.description)))))));
    }
    if (type === 'arrow') {
        const span = 24 / ((steps === null || steps === void 0 ? void 0 : steps.length) || 1);
        return (React.createElement(row_1.default, { gutter: 6 }, steps === null || steps === void 0 ? void 0 : steps.map((step, index) => (React.createElement(col_1.default, { key: index, span: span },
            React.createElement(node_1.default, { style: [
                    style_1.default[`${prefixCls}-arrow-step`],
                    index === 0 ? { marginLeft: 0 } : null,
                    current >= index && style_1.default[`${prefixCls}-arrow-step-active`],
                ] }, step === null || step === void 0 ? void 0 : step.title),
            index === steps.length - 1 ? null : (React.createElement(react_native_1.View, { style: [
                    style_1.default[`${prefixCls}-arrow-step-head`],
                    current >= index && style_1.default[`${prefixCls}-arrow-step-head-active`],
                ] })),
            index === 0 ? null : (React.createElement(react_native_1.View, { style: [
                    style_1.default[`${prefixCls}-arrow-step-tail`],
                    current >= index && style_1.default[`${prefixCls}-arrow-step-tail-active`],
                ] })))))));
    }
    return (React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-horizontal`] }, steps === null || steps === void 0 ? void 0 : steps.map((item, index) => (React.createElement(react_native_1.View, { key: index, style: [
            style_1.default[`${prefixCls}-horizontal-step`],
            index <= current - 1 && style_1.default[`${prefixCls}-horizontal-finish`],
        ] },
        React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-horizontal-container`] },
            React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-horizontal-icon`] },
                index < current ? React.createElement(icon_1.default, { name: "roundcheckfill", size: 20, color: "#1890FF" }) : null,
                index === current ? (React.createElement(icon_1.default, { name: statusIconType, size: 20, color: statusIconColor })) : null,
                index > current ? (React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-horizontal-icon-default`] },
                    React.createElement(react_native_1.View, null))) : null),
            React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-horizontal-content`] },
                React.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-horizontal-title`] }, getTitle(item, index)))))))));
};
exports.default = Steps;
