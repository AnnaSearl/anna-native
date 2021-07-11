import * as React from 'react';
import { View, Text } from 'react-native';
import { ThemeProvider, Button, Tag, Tabs, Steps } from 'anna-native';

const rowStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 10,
  backgroundColor: '#FFFFFF',
};

const textStyle = { height: 100, lineHeight: 100, textAlign: 'center' };

const data = [{ title: '待评价' }, { title: '待收货' }, { title: '待发货' }];

// 主题
const theme = {
  colors: {
    primary: '#1467FF', // 主色
  },
};

export default () => {
  const [stateKey, setStateKey] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <View style={rowStyle}>
        <Button onPress={() => {}}>Default Button</Button>
        <Button type="primary">Primary Button</Button>
      </View>

      <View style={rowStyle}>
        <Tag look="primary">Primary Tag</Tag>
      </View>

      <Steps direction="vertical" steps={data} />

      <Tabs
        titleFlexible
        titleCursorWidth={35}
        onTabClick={({ key }) => setStateKey(key)}
        activeKey={stateKey}
      >
        <Tabs.TabContent key={0} tab="All">
          <Text style={textStyle}>All</Text>
        </Tabs.TabContent>
        <Tabs.TabContent key={1} tab="Missed">
          <Text style={textStyle}>Missed</Text>
        </Tabs.TabContent>
      </Tabs>
    </ThemeProvider>
  );
};
