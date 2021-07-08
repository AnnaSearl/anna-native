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
const react_native_image_picker_1 = require("react-native-image-picker");
const icon_1 = __importDefault(require("../icon"));
const action_sheet_1 = __importDefault(require("../action-sheet"));
const _util_1 = require("../_util");
const style_1 = __importDefault(require("./style"));
const prefixCls = 'image-picker';
const actions = [
    { text: '相机', value: 0 },
    { text: '从相册中选择', value: 1 },
];
const ImagePicker = props => {
    const { action = 'mix', files = [], onChange, onAddBefore, maxCount, compress } = props;
    const [open, setOpen] = react_1.useState(false);
    let options = {
        mediaType: 'photo',
    };
    if (compress) {
        options = Object.assign(Object.assign({}, options), { maxWidth: 1500, maxHeight: 1500 });
    }
    const handldeAddBefore = () => {
        if (onAddBefore) {
            const canContinue = onAddBefore === null || onAddBefore === void 0 ? void 0 : onAddBefore();
            return canContinue;
        }
        return true;
    };
    const handleCamera = () => {
        const canContinue = handldeAddBefore();
        if (!canContinue) {
            return;
        }
        react_native_image_picker_1.launchCamera(options, response => {
            var _a, _b;
            // @ts-ignore
            if ((_a = response === null || response === void 0 ? void 0 : response.assets) === null || _a === void 0 ? void 0 : _a.length) {
                // @ts-ignore
                const targetFiles = (_b = response === null || response === void 0 ? void 0 : response.assets) === null || _b === void 0 ? void 0 : _b.map(i => (i === null || i === void 0 ? void 0 : i.uri) || '');
                const newFiles = files.concat(targetFiles);
                onChange === null || onChange === void 0 ? void 0 : onChange(newFiles);
                setOpen(false);
            }
        });
    };
    const handlePhotos = () => {
        const canContinue = handldeAddBefore();
        if (!canContinue) {
            return;
        }
        react_native_image_picker_1.launchImageLibrary(options, response => {
            var _a, _b;
            // @ts-ignore
            if ((_a = response === null || response === void 0 ? void 0 : response.assets) === null || _a === void 0 ? void 0 : _a.length) {
                // @ts-ignore
                const targetFiles = (_b = response === null || response === void 0 ? void 0 : response.assets) === null || _b === void 0 ? void 0 : _b.map(i => (i === null || i === void 0 ? void 0 : i.uri) || '');
                const newFiles = files.concat(targetFiles);
                onChange === null || onChange === void 0 ? void 0 : onChange(newFiles);
                setOpen(false);
            }
        });
    };
    const handleAddFile = () => {
        if (action === 'mix') {
            setOpen(true);
            return;
        }
        if (action === 'camera') {
            handleCamera();
        }
        if (action === 'photos') {
            handlePhotos();
        }
    };
    const handleCancel = () => {
        setOpen(false);
    };
    const handleChange = (act) => {
        if ((act === null || act === void 0 ? void 0 : act.value) === 0) {
            handleCamera();
        }
        if ((act === null || act === void 0 ? void 0 : act.value) === 1) {
            handlePhotos();
        }
    };
    const handleDeleteFile = (e, index) => {
        e.stopPropagation();
        let newValue = _util_1.deepClone(files);
        newValue.splice(index, 1);
        newValue = newValue.map((item) => item);
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    };
    return (react_1.default.createElement(react_native_1.View, { style: style_1.default[prefixCls] }, files === null || files === void 0 ? void 0 :
        files.map((file, index) => (react_1.default.createElement(react_native_1.View, { key: index, style: style_1.default[`${prefixCls}-file`] },
            react_1.default.createElement(react_native_1.Image, { source: { uri: file }, style: style_1.default[`${prefixCls}-image`] }),
            react_1.default.createElement(react_native_1.Pressable, { style: style_1.default[`${prefixCls}-delete`], onPress: e => handleDeleteFile(e, index) },
                react_1.default.createElement(icon_1.default, { name: "close", color: "#FDFFFD", size: 12 }))))),
        !maxCount || files.length < maxCount ? (react_1.default.createElement(react_native_1.Pressable, { style: style_1.default[`${prefixCls}-add`], onPress: handleAddFile },
            react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-add-icon`] },
                react_1.default.createElement(icon_1.default, { name: "line-photo", color: "#BABEC6", size: 24 })),
            react_1.default.createElement(react_native_1.Text, { style: style_1.default[`${prefixCls}-add-text`] }, action === 'camera' ? '拍照上传' : '上传图片'))) : null,
        react_1.default.createElement(action_sheet_1.default, { cover: true, cancelText: "\u53D6\u6D88", open: open, actions: actions, onCancel: handleCancel, onChange: handleChange })));
};
exports.default = ImagePicker;
