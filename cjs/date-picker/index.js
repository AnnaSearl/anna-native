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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const dayjs_1 = __importDefault(require("dayjs"));
const picker_1 = __importDefault(require("../picker"));
const startYear = new Date().getFullYear();
function getDays(year, month) {
    const days = [];
    month = String(parseInt(month, 10));
    const date = new Date(Number(year), Number(month), 0);
    const maxDay = date.getDate();
    for (let i = 1; i <= maxDay; i++) {
        const day = i < 10 ? '0' + i : String(i);
        days.push(day);
    }
    return days;
}
function getRange(format) {
    const date = new Date();
    const years = [];
    const months = [];
    const range = [];
    const currentYear = startYear;
    const currentMonth = date.getMonth();
    const days = getDays(String(currentYear), String(currentMonth + 1));
    const hours = [...new Array(24).keys()].map(i => (i < 10 ? '0' + i : String(i)));
    const minutes = [...new Array(60).keys()].map(i => (i < 10 ? '0' + i : String(i)));
    for (let i = currentYear; i <= currentYear + 10; i++) {
        years.push(i);
    }
    for (let i = 1; i <= 12; i++) {
        const month = i < 10 ? '0' + i : String(i);
        months.push(month);
    }
    if (format.includes('YYYY')) {
        range.push(years);
    }
    if (format.includes('MM')) {
        range.push(months);
    }
    if (format.includes('DD')) {
        range.push(days);
    }
    if (format.includes('HH')) {
        range.push(hours);
    }
    if (format.includes('mm')) {
        range.push(minutes);
    }
    return range;
}
function getInitValue(format) {
    return dayjs_1.default().format(format);
}
function getFormat(type, format) {
    let rangeFormat = 'YYYY-MM-DD';
    if (format && typeof format === 'string') {
        rangeFormat = format;
    }
    else {
        if (type === 'date') {
            rangeFormat = 'YYYY-MM-DD';
        }
        if (type === 'time') {
            rangeFormat = 'HH:mm';
        }
        if (type === 'datetime') {
            rangeFormat = 'YYYY-MM-DD HH:mm';
        }
    }
    return rangeFormat;
}
function transformDate2Index(value, format, additionalOptions, hasAdditionalOptions) {
    if (!value) {
        return undefined;
    }
    let date = value;
    let additionalValue = '';
    if (hasAdditionalOptions) {
        const splitDate = value.split(' ');
        date = splitDate === null || splitDate === void 0 ? void 0 : splitDate[0];
        additionalValue = splitDate === null || splitDate === void 0 ? void 0 : splitDate[1];
    }
    const o = dayjs_1.default(date);
    const indexArray = [];
    if (format.includes('YYYY')) {
        indexArray.push(o.$y - startYear);
    }
    if (format.includes('MM')) {
        indexArray.push(o.$M);
    }
    if (format.includes('DD')) {
        indexArray.push(o.$D - 1);
    }
    if (format.includes('HH')) {
        const hourIndex = date.indexOf(':');
        const H = Number(date.slice(hourIndex - 2, hourIndex));
        indexArray.push(isNaN(o.$H) ? H : o.$H);
    }
    if (format.includes('mm')) {
        const minuteIndex = format.includes('HH') ? date.indexOf(':') + 3 : date.indexOf(':');
        const m = Number(date.slice(minuteIndex - 2, minuteIndex));
        indexArray.push(isNaN(o.$m) ? m : o.$m);
    }
    if (hasAdditionalOptions) {
        const additionalIndex = additionalOptions === null || additionalOptions === void 0 ? void 0 : additionalOptions[0].indexOf(additionalValue);
        indexArray.push(additionalIndex);
    }
    return indexArray === null || indexArray === void 0 ? void 0 : indexArray.map(i => Number(i));
}
const DatePicker = (props) => {
    const { type = 'date', format, value = getInitValue(getFormat(type, format)), additionalOptions = [], rangeColumnsFlex, disabled, children, onChange } = props, restProps = __rest(props, ["type", "format", "value", "additionalOptions", "rangeColumnsFlex", "disabled", "children", "onChange"]);
    const hasAdditionalOptions = react_1.useMemo(() => {
        if (Array.isArray(additionalOptions) && additionalOptions.length > 0) {
            return true;
        }
        return false;
    }, [additionalOptions]);
    const rangeFormat = react_1.useMemo(() => getFormat(type, format), [type, format]);
    const range = react_1.useMemo(() => getRange(rangeFormat).concat(additionalOptions), [
        rangeFormat,
        additionalOptions,
    ]);
    const handleChange = (v) => {
        var _a, _b;
        const columnSelectedData = (_b = (_a = v) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b.call(_a, (i, columnIndex) => { var _a; return (_a = range === null || range === void 0 ? void 0 : range[columnIndex]) === null || _a === void 0 ? void 0 : _a[i]; });
        let dateArray = columnSelectedData;
        let additionalArray = [];
        if (hasAdditionalOptions) {
            dateArray = columnSelectedData === null || columnSelectedData === void 0 ? void 0 : columnSelectedData.slice(0, -additionalOptions.length);
            additionalArray = columnSelectedData === null || columnSelectedData === void 0 ? void 0 : columnSelectedData.slice(-additionalOptions.length);
        }
        if (dateArray.length < 5 && rangeFormat.includes('mm')) {
            const filledLength = 5 - dateArray.length;
            const insert = dayjs_1.default().format('YYYY-MM-DD').split('-').slice(0, filledLength);
            dateArray.unshift(...insert);
        }
        dateArray[1] = dateArray[1] - 1;
        // @ts-ignore
        const date = dayjs_1.default(new Date(...dateArray)).format(rangeFormat);
        const text = `${date}${hasAdditionalOptions ? ' ' + (additionalArray === null || additionalArray === void 0 ? void 0 : additionalArray.join(' ')) : ''}`;
        onChange === null || onChange === void 0 ? void 0 : onChange(text);
    };
    const pickerValue = react_1.useMemo(() => transformDate2Index(value, rangeFormat, additionalOptions, hasAdditionalOptions), [value, rangeFormat, additionalOptions, hasAdditionalOptions]);
    return (react_1.default.createElement(picker_1.default, Object.assign({ value: pickerValue, onChange: handleChange, range: range, disabled: disabled, rangeColumnsFlex: rangeColumnsFlex }, restProps), children));
};
exports.default = DatePicker;
