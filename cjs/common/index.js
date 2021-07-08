"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrefixCls = exports.annaPrefix = void 0;
exports.annaPrefix = 'anna';
const getPrefixCls = (name) => `${exports.annaPrefix}-${name}`;
exports.getPrefixCls = getPrefixCls;
