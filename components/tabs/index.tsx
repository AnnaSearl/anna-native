import React, { useMemo, useRef, useEffect } from 'react';
import {
  View,
  ScrollView,
  Pressable,
  ViewStyle,
  TextStyle,
  Animated,
  useWindowDimensions,
} from 'react-native';
import { $fontColor } from '@styles/theme';
import Node from '../node';
import styles from './style';

const prefixCls = 'tabs';

export interface TabTitleProps {
  key?: string | number;
  tab?: React.ReactNode;
}

export interface TabProps {
  activeKey?: string | number;
  children?: React.ReactNode;
  titleWidth?: number;
  titleSquare?: boolean;
  titleFlexible?: boolean;
  titleCursorWidth?: number;
  titleStyle?: TextStyle;
  titleActiveStyle?: TextStyle;
  onTabClick?: (i: any) => void;
}

export interface TabContentProps {
  key?: string | number;
  tab?: React.ReactNode;
  active?: boolean;
  style?: ViewStyle;
  animated?: boolean;
  children?: React.ReactNode;
}

const getTabContents = (
  children: React.ReactNode,
  activeKey?: string | number,
  animated?: boolean,
): [TabTitleProps[], any[]] => {
  const tabContents: any[] = [];
  const tabs: TabTitleProps[] = [];
  React.Children.forEach(children, (node: any, index: number) => {
    const newNode = node;
    if (React.isValidElement(node)) {
      return (
        tabs.push({ key: newNode.key, tab: newNode.props.tab }) &&
        tabContents.push(
          <TabContent
            key={newNode.key}
            {...newNode.props}
            active={
              activeKey === undefined
                ? index === 0 && newNode.key
                : String(activeKey) === newNode.key
            }
            animated={animated}
          />,
        )
      );
    }
  });
  return [tabs, tabContents];
};

const getTabIndex = (tabs: TabTitleProps[], activeKey?: string | number) => {
  let tIndex = 0;
  tabs.forEach((i: any, index: number) => {
    if (i.key === activeKey) {
      tIndex = index;
    }
  });
  return tIndex;
};

const Tabs = (props: TabProps): React.ReactElement => {
  const {
    activeKey,
    titleFlexible,
    titleCursorWidth,
    titleStyle,
    titleActiveStyle,
    onTabClick,
    children,
  } = props;

  const windowWidth = useWindowDimensions().width;

  const activeX = useRef(new Animated.Value(0)).current;
  const activeWidth = useRef(new Animated.Value(0)).current;
  const tabTitleLayouts = useRef<any[]>([]).current;
  const header = useRef<any>(null);
  const headerLayout = useRef<any>(null);

  const [tabs, tabContents] = useMemo(() => getTabContents(children, activeKey), [children]);
  const selected = useMemo(() => getTabIndex(tabs, activeKey), [activeKey, tabs]);

  useEffect(() => {
    emitTabTitleActiveAnimated();
  }, [selected]);

  const emitTabTitleActiveAnimated = () => {
    const x = (tabTitleLayouts?.[selected]?.x || 0) + 16;
    const width =
      (tabTitleLayouts?.[selected]?.width || 0) - 32 > 0
        ? (tabTitleLayouts?.[selected]?.width || 0) - 32
        : 1;
    Animated.parallel([
      Animated.timing(activeX, {
        toValue: x + width / 2 - 1 / 2, // 这里的 1 是 'tabs-plain-active' 的宽度，这里RN的处理方式是一直以一个节点最初的宽度来作为标准，不管这个节点通过scaleX放大或缩小其宽度。
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(activeWidth, {
        toValue: width,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleTabClick = (e: any, item: any, index: number) => {
    onTabClick?.(item);
    const currentTabTitle = tabTitleLayouts?.[index];
    const currentTabTitleCenterPoint = currentTabTitle?.x + currentTabTitle?.width / 2;
    const harfWindowWidth = windowWidth / 2;
    header.current.scrollTo({ x: currentTabTitleCenterPoint - harfWindowWidth });
  };

  const handleTabTitleLayout = (e: any, index: number) => {
    tabTitleLayouts[index] = e.nativeEvent.layout;
    if (index === selected) {
      emitTabTitleActiveAnimated();
    }
  };

  const handleHeaderLayout = (e: any) => {
    headerLayout.current = e.nativeEvent.layout;
  };

  const renderTabs = () => {
    return (
      <ScrollView
        ref={ref => {
          header.current = ref;
        }}
        contentContainerStyle={[styles[`${prefixCls}-plain`], titleFlexible ? { flex: 1 } : null]} // 注意，当 titleFlexible 为 true 时这里一定要设置 flex: 1 使 ScrollView 的 content 撑满
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onLayout={handleHeaderLayout}
      >
        {tabs.map((item: TabTitleProps, index) => (
          <Pressable
            key={item.key}
            style={[styles[`${prefixCls}-plain-item`], titleFlexible ? { flex: 1 } : null]}
            onPress={e => handleTabClick(e, item, index)}
            onLayout={e => handleTabTitleLayout(e, index)}
          >
            <Node
              style={[
                styles[`${prefixCls}-plain-item-text`],
                titleStyle,
                selected === index
                  ? { fontWeight: '700', color: $fontColor, ...titleActiveStyle }
                  : null,
              ]}
            >
              {item.tab}
            </Node>
          </Pressable>
        ))}
        <Animated.View
          style={[
            styles[`${prefixCls}-plain-active`],
            { transform: [{ translateX: activeX }, { scaleX: titleCursorWidth || activeWidth }] },
          ]}
        />
      </ScrollView>
    );
  };

  return (
    <View style={styles[prefixCls]}>
      <View>{renderTabs()}</View>
      <View style={styles[`${prefixCls}-container`]}>
        <View style={styles[`${prefixCls}-content-wrapper`]}>{tabContents}</View>
      </View>
    </View>
  );
};

const TabContent: React.FC<TabContentProps> = (
  props: TabContentProps,
): React.ReactElement | null => {
  const { active, style, children } = props;

  if (!active) {
    return (
      <View
        style={[styles[`${prefixCls}-content`], styles[`${prefixCls}-content-inactive`], style]}
      >
        <Node>{children}</Node>
      </View>
    );
  }
  return (
    <View style={[styles[`${prefixCls}-content`], style]}>
      <Node>{children}</Node>
    </View>
  );
};

Tabs.TabContent = TabContent;

export default Tabs;
