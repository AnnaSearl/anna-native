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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const icon_1 = __importDefault(require("../icon"));
const safe_filling_1 = __importDefault(require("../safe-filling"));
const theme_1 = __importDefault(require("../style/theme"));
const style_1 = __importDefault(require("./style"));
const prefixCls = 'cascade';
const getMatchLevelOptions = (value, level, data) => {
    let r = null;
    const currentLevel = level - 1;
    for (let i = 0; i < data.length; i += 1) {
        const item = data[i];
        if (currentLevel === 0) {
            if (value === item.value) {
                r = data;
            }
        }
        if (currentLevel > 0) {
            if (item.children) {
                r = getMatchLevelOptions(value, currentLevel, item.children);
            }
        }
        if (r) {
            return r;
        }
    }
    return r;
};
const getSelectedOptions = (value, options) => {
    if (!Array.isArray(value) || !Array.isArray(options)) {
        return [];
    }
    let level = 0;
    const selectedOptions = [];
    const recursion = (levelOptions) => {
        for (let i = 0; i < levelOptions.length; i += 1) {
            const option = levelOptions[i];
            if (option.value === value[level]) {
                selectedOptions.push(option);
                level += 1;
                if (selectedOptions.length === value.length) {
                    return selectedOptions;
                }
                else if (selectedOptions.length < value.length) {
                    return recursion(option.children || []);
                }
            }
        }
        return selectedOptions;
    };
    return recursion(options);
};
const Cascade = props => {
    const { name, value = [], options = [], changeOnSelect, height = 550, style, prompt, onChange, } = props;
    const [levelOptions, setLevelOptions] = react_1.useState(options);
    const [scrollTop, setScrollTop] = react_1.useState(0);
    const [localValue, setLocalValue] = react_1.useState(value || []);
    const rechoose = react_1.useRef(false);
    const val = changeOnSelect ? value : localValue;
    const selectedOptions = getSelectedOptions(val, options);
    react_1.useEffect(() => {
        // 修复有默认值时，城市选项(即levelOptions) 永远处于省级的问题
        // 第一次进入时如果有默认值，则通过默认值获取 levelOptions
        if (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.length) {
            const opt = selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions[(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.length) - 1];
            const matchedOptions = getMatchLevelOptions(opt === null || opt === void 0 ? void 0 : opt.value, selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.length, options);
            setLevelOptions(matchedOptions);
        }
    }, []);
    // useEffect(() => {
    //   if (options && options.length > 0) {
    //     setLevelOptions(options);
    //   }
    // }, [options]) // 无法使用此 useEffect，使用后会报错。
    const handleClick = (i) => __awaiter(void 0, void 0, void 0, function* () {
        let nextValue = [];
        let nextSelectedOption = [];
        const lastIndex = val.length - 1;
        const lastSelectedOption = selectedOptions[lastIndex] || {};
        if (val.length > 0 &&
            (!lastSelectedOption.children || lastSelectedOption.children.length === 0)) {
            nextValue = [...val.slice(0, lastIndex), i.value];
            nextSelectedOption = [...selectedOptions.slice(0, lastIndex), i];
        }
        else if (val.length > 0 && rechoose.current) {
            nextValue = [...val.slice(0, lastIndex), i.value];
            nextSelectedOption = [...selectedOptions.slice(0, lastIndex), i];
        }
        else {
            nextValue = [...val, i.value];
            nextSelectedOption = [...selectedOptions, i];
        }
        if (changeOnSelect) {
            let isLast = false;
            if (!Array.isArray(i.children) || i.children.length === 0) {
                isLast = true;
            }
            onChange === null || onChange === void 0 ? void 0 : onChange(nextValue, nextSelectedOption, isLast);
        }
        if (!changeOnSelect) {
            if (!Array.isArray(i.children) || i.children.length === 0) {
                setLocalValue(nextValue);
                onChange === null || onChange === void 0 ? void 0 : onChange(nextValue, nextSelectedOption, true);
            }
            else {
                setLocalValue(nextValue);
            }
        }
        rechoose.current = false;
        setScrollTop(top => {
            return top === 0 ? 1 : 0;
        });
        if (Array.isArray(i.children) && i.children.length > 0) {
            setLevelOptions(i.children);
        }
    });
    const handleReChoose = (item, index) => {
        rechoose.current = true;
        if (changeOnSelect) {
            onChange === null || onChange === void 0 ? void 0 : onChange(val.slice(0, index + 1));
        }
        if (!changeOnSelect) {
            setLocalValue(val.slice(0, index + 1));
        }
        setLevelOptions(getMatchLevelOptions(item.value, index + 1, options));
        setScrollTop(top => {
            return top === 0 ? 1 : 0;
        });
    };
    return (react_1.default.createElement(react_native_1.View, { style: [
            style_1.default[prefixCls],
            {
                height,
            },
            style,
        ] },
        react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-selected`] }, selectedOptions.map((item, index) => (react_1.default.createElement(react_native_1.Pressable, { key: item.value, style: style_1.default[`${prefixCls}-step`], onPress: () => {
                handleReChoose(item, index);
            } },
            react_1.default.createElement(react_native_1.Text, { style: style_1.default[`${prefixCls}-step-text`] }, item.text),
            react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-step-dot`] }),
            index === 0 ? null : react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-step-line`] }),
            react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-step-right`] },
                react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-step-prompt`] },
                    react_1.default.createElement(react_native_1.Text, { style: style_1.default[`${prefixCls}-step-prompt-text`] }, prompt === null || prompt === void 0 ? void 0 : prompt(index))),
                react_1.default.createElement(icon_1.default, { name: "line-return-cente-24", size: 12, color: theme_1.default.$dark4 })))))),
        react_1.default.createElement(react_native_1.ScrollView, { style: style_1.default[`${prefixCls}-options`] },
            react_1.default.createElement(react_native_1.View, { style: style_1.default[`${prefixCls}-title`] },
                react_1.default.createElement(react_native_1.Text, { style: style_1.default[`${prefixCls}-title-text`] }, `选择${name}`)), levelOptions === null || levelOptions === void 0 ? void 0 :
            levelOptions.map(i => (react_1.default.createElement(react_native_1.Pressable, { key: i.value, style: style_1.default[`${prefixCls}-option`], onPress: () => {
                    handleClick(i);
                } },
                react_1.default.createElement(react_native_1.Text, { style: style_1.default[`${prefixCls}-option-text`] }, i.text)))),
            react_1.default.createElement(safe_filling_1.default, { bottom: true }))));
};
exports.default = Cascade;
