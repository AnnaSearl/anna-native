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
const icon_1 = __importDefault(require("../icon"));
const common_1 = require("../common");
const style_1 = __importDefault(require("./style"));
const prefixCls = common_1.getPrefixCls('ling');
const Ling = (props, ref) => {
    const { position = 'top' } = props;
    const durationRef = react_1.useRef(2000);
    const onCloseRef = react_1.useRef(null);
    const [show, setShow] = react_1.useState(false);
    const [config, setConfig] = react_1.useState({});
    react_1.useEffect(() => {
        var _a;
        if (show && durationRef.current !== 0) {
            setTimeout(() => {
                setShow(false);
            }, durationRef.current);
        }
        if (!show) {
            (_a = onCloseRef.current) === null || _a === void 0 ? void 0 : _a.call(onCloseRef);
        }
    }, [show, durationRef.current, onCloseRef.current]);
    const handleShow = (params, duration, onClose) => {
        if (typeof params === 'string') {
            setConfig({
                title: params,
                titleColor: '#333',
            });
        }
        if (typeof params === 'object' && params !== null) {
            setConfig(params);
        }
        if (duration || duration === 0) {
            durationRef.current = duration;
        }
        else {
            durationRef.current = 2000;
        }
        if (onClose && typeof onClose === 'function') {
            onCloseRef.current = onClose;
        }
        setShow(true);
    };
    const handleShowStatus = (commonConfig, params, duration, onClose) => {
        let config = commonConfig;
        if (typeof params === 'string') {
            config = Object.assign({ title: params, titleColor: '#333' }, commonConfig);
        }
        if (typeof params === 'object' && params !== null) {
            config = Object.assign(Object.assign({}, params), commonConfig);
        }
        handleShow(config, duration, onClose);
    };
    react_1.useImperativeHandle(ref, () => ({
        show: handleShow,
        info: (params, duration, onClose) => {
            const infoConfig = {
                icon: 'infofill',
                iconColor: '#1890ff',
            };
            handleShowStatus(infoConfig, params, duration, onClose);
        },
        success: (params, duration, onClose) => {
            const successConfig = {
                icon: 'roundcheckfill',
                iconColor: '#52c41a',
            };
            handleShowStatus(successConfig, params, duration, onClose);
        },
        warning: (params, duration, onClose) => {
            const warningConfig = {
                icon: 'warnfill',
                iconColor: '#faad14',
            };
            handleShowStatus(warningConfig, params, duration, onClose);
        },
        error: (params, duration, onClose) => {
            const errorConfig = {
                icon: 'roundclosefill',
                iconColor: '#f5222d',
            };
            handleShowStatus(errorConfig, params, duration, onClose);
        },
    }));
    const lingStyle = [
        style_1.default[prefixCls],
        show ? style_1.default[`${prefixCls}-show`] : null,
        position ? style_1.default[`${prefixCls}-${position}`] : null,
    ];
    const iconNode = typeof (config === null || config === void 0 ? void 0 : config.icon) === 'string' ? (react_1.default.createElement(icon_1.default, { name: config === null || config === void 0 ? void 0 : config.icon, color: config === null || config === void 0 ? void 0 : config.iconColor, size: 26 })) : (config === null || config === void 0 ? void 0 : config.icon);
    return (react_1.default.createElement(react_native_1.View, { style: lingStyle },
        react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-container`] },
            react_1.default.createElement(react_native_1.View, { style: [style_1.default[`${prefixCls}-title`], { color: config === null || config === void 0 ? void 0 : config.titleColor }] }, config === null || config === void 0 ? void 0 : config.title),
            (config === null || config === void 0 ? void 0 : config.content) || (config === null || config === void 0 ? void 0 : config.content) === 0 ? (react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-content`] }, config === null || config === void 0 ? void 0 : config.content)) : null),
        react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-icon`] }, iconNode)));
};
exports.default = react_1.default.forwardRef(Ling);
