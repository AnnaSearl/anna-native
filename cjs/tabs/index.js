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
const theme_1 = require("../theme");
const node_1 = __importDefault(require("../node"));
const style_1 = require("./style");
const prefixCls = 'tabs';
const getTabContents = (children, activeKey, animated) => {
    const tabContents = [];
    const tabs = [];
    react_1.default.Children.forEach(children, (node, index) => {
        const newNode = node;
        if (react_1.default.isValidElement(node)) {
            return (tabs.push({ key: newNode.key, tab: newNode.props.tab }) &&
                tabContents.push(react_1.default.createElement(TabsWithTheme.TabContent, Object.assign({ key: newNode.key }, newNode.props, { active: activeKey === undefined
                        ? index === 0 && newNode.key
                        : String(activeKey) === newNode.key, animated: animated }))));
        }
    });
    return [tabs, tabContents];
};
const getTabIndex = (tabs, activeKey) => {
    let tIndex = 0;
    tabs.forEach((i, index) => {
        if (i.key === activeKey) {
            tIndex = index;
        }
    });
    return tIndex;
};
const Tabs = props => {
    const { activeKey, titleFlexible, titleCursorWidth, titleStyle, titleActiveStyle, tabBarStyle, hideCursor, renderTab, renderTitleCursor, onTabClick, theme, children, } = props;
    const styles = style_1.createStylesWithTheme(theme);
    const { colors } = theme;
    const { primary } = colors;
    const windowWidth = react_native_1.useWindowDimensions().width;
    const activeX = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    const activeWidth = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    const tabTitleLayouts = react_1.useRef([]).current;
    const header = react_1.useRef(null);
    const headerLayout = react_1.useRef(null);
    const [tabs, tabContents] = react_1.useMemo(() => getTabContents(children, activeKey), [children]);
    const selected = react_1.useMemo(() => getTabIndex(tabs, activeKey), [activeKey, tabs]);
    react_1.useEffect(() => {
        emitTabTitleActiveAnimated();
    }, [selected]);
    const emitTabTitleActiveAnimated = () => {
        var _a, _b, _c;
        const x = (((_a = tabTitleLayouts === null || tabTitleLayouts === void 0 ? void 0 : tabTitleLayouts[selected]) === null || _a === void 0 ? void 0 : _a.x) || 0) + 16;
        const width = (((_b = tabTitleLayouts === null || tabTitleLayouts === void 0 ? void 0 : tabTitleLayouts[selected]) === null || _b === void 0 ? void 0 : _b.width) || 0) - 32 > 0
            ? (((_c = tabTitleLayouts === null || tabTitleLayouts === void 0 ? void 0 : tabTitleLayouts[selected]) === null || _c === void 0 ? void 0 : _c.width) || 0) - 32
            : 1;
        react_native_1.Animated.parallel([
            react_native_1.Animated.timing(activeX, {
                toValue: x + width / 2 - 1 / 2,
                duration: 300,
                useNativeDriver: true,
            }),
            react_native_1.Animated.timing(activeWidth, {
                toValue: width,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();
    };
    const handleTabClick = (e, item, index) => {
        onTabClick === null || onTabClick === void 0 ? void 0 : onTabClick(item);
        const currentTabTitle = tabTitleLayouts === null || tabTitleLayouts === void 0 ? void 0 : tabTitleLayouts[index];
        const currentTabTitleCenterPoint = (currentTabTitle === null || currentTabTitle === void 0 ? void 0 : currentTabTitle.x) + (currentTabTitle === null || currentTabTitle === void 0 ? void 0 : currentTabTitle.width) / 2;
        const harfWindowWidth = windowWidth / 2;
        header.current.scrollTo({ x: currentTabTitleCenterPoint - harfWindowWidth });
    };
    const handleTabTitleLayout = (e, index) => {
        tabTitleLayouts[index] = e.nativeEvent.layout;
        if (index === selected) {
            emitTabTitleActiveAnimated();
        }
    };
    const handleHeaderLayout = (e) => {
        headerLayout.current = e.nativeEvent.layout;
    };
    const renderTabs = () => {
        return (react_1.default.createElement(react_native_1.ScrollView, { ref: ref => {
                header.current = ref;
            }, style: [styles[`${prefixCls}-plain`], tabBarStyle], contentContainerStyle: [titleFlexible ? { flex: 1 } : null], horizontal: true, showsHorizontalScrollIndicator: false, onLayout: handleHeaderLayout },
            tabs.map((item, index) => (react_1.default.createElement(react_native_1.Pressable, { key: item.key, style: [styles[`${prefixCls}-plain-item`], titleFlexible ? { flex: 1 } : null], onPress: e => handleTabClick(e, item, index), onLayout: e => handleTabTitleLayout(e, index) }, renderTab ? (renderTab(item, index, selected === index)) : (react_1.default.createElement(node_1.default, { style: [
                    styles[`${prefixCls}-plain-item-text`],
                    titleStyle,
                    selected === index
                        ? Object.assign({ fontWeight: '700', color: primary }, titleActiveStyle) : null,
                ] }, item.tab))))),
            !hideCursor ? (renderTitleCursor ? (renderTitleCursor()) : (react_1.default.createElement(react_native_1.Animated.View, { style: [
                    styles[`${prefixCls}-plain-active`],
                    {
                        transform: [{ translateX: activeX }, { scaleX: titleCursorWidth || activeWidth }],
                    },
                ] }))) : null));
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles[prefixCls] },
        react_1.default.createElement(react_native_1.View, null, renderTabs()),
        react_1.default.createElement(react_native_1.View, { style: styles[`${prefixCls}-container`] },
            react_1.default.createElement(react_native_1.View, { style: styles[`${prefixCls}-content-wrapper`] }, tabContents))));
};
const TabContent = props => {
    const { active, style, children, theme } = props;
    const styles = style_1.createStylesWithTheme(theme);
    if (!active) {
        return (react_1.default.createElement(react_native_1.View, { style: [styles[`${prefixCls}-content`], styles[`${prefixCls}-content-inactive`], style] },
            react_1.default.createElement(node_1.default, { style: styles[`${prefixCls}-content-node`] }, children)));
    }
    return (react_1.default.createElement(react_native_1.View, { style: [styles[`${prefixCls}-content`], style] },
        react_1.default.createElement(node_1.default, { style: styles[`${prefixCls}-content-node`] }, children)));
};
const TabsWithTheme = theme_1.withTheme(Tabs);
TabsWithTheme.TabContent = theme_1.withTheme(TabContent);
exports.default = TabsWithTheme;
