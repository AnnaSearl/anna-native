"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const context_1 = __importDefault(require("./context"));
const deepMergeObject = (target, source) => {
    if (!target || !source) {
        return target;
    }
    if (typeof target !== 'object') {
        return target;
    }
    const destination = {};
    for (const key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
            let targetValue = target[key];
            if (targetValue && typeof targetValue === 'object') {
                targetValue = deepMergeObject(targetValue, (source === null || source === void 0 ? void 0 : source[key]) || {});
            }
            destination[key] = targetValue;
        }
    }
    return destination;
};
function useTheme(overrides) {
    const context = react_1.useContext(context_1.default);
    const theme = context.theme;
    const result = react_1.useMemo(() => (theme && overrides ? deepMergeObject(theme, overrides) : theme || overrides), [theme, overrides]);
    return [result, context.setTheme];
}
exports.default = useTheme;
