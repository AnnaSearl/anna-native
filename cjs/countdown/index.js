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
const node_1 = __importDefault(require("../node"));
const Countdown = props => {
    const { timeStamp, style, onEnd } = props;
    const intervalId = React.useRef(null);
    const [count, setCount] = React.useState('');
    React.useEffect(() => {
        let countDownStr = '';
        if (!intervalId.current) {
            let second = (new Date(Number(timeStamp || 0)).getTime() - new Date().getTime()) / 1000;
            if (second > 0) {
                intervalId.current = setInterval(() => {
                    if (second - 1 < 0) {
                        clearInterval(intervalId.current);
                        intervalId.current = 'done';
                        return;
                    }
                    second -= 1;
                    const hour = Math.floor(second / 3600);
                    const min = Math.floor(second / 60) % 60;
                    let sec = second % 60;
                    sec = sec.toFixed(0);
                    countDownStr = `${hour}:${min}:${sec}`;
                    setCount(countDownStr);
                }, 1000);
            }
            else {
                // 如果没有时间,调用倒计时结束的方法
                setTimeout(() => {
                    onEnd === null || onEnd === void 0 ? void 0 : onEnd();
                }, 1000);
            }
        }
        return () => {
            clearInterval(intervalId.current);
            intervalId.current = null;
        };
    }, [timeStamp]);
    return React.createElement(node_1.default, { style: style }, count);
};
exports.default = Countdown;
