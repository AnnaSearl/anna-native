import * as React from 'react';
import { Text } from 'react-native';
import { Tabs } from 'anna-native';

const textStyle = { height: 200, lineHeight: 200, textAlign: 'center' };

export default () => {
  const [stateKey, setStateKey] = React.useState(0);
  const [stateKey1, setStateKey1] = React.useState(0);

  return (
    <>
      <Tabs onTabClick={({ key }) => setStateKey(key)} activeKey={stateKey}>
        <Tabs.TabContent key={0} tab="全部">
          <Text style={textStyle}>全部</Text>
        </Tabs.TabContent>
        <Tabs.TabContent key={1} tab="询价中">
          <Text style={textStyle}>询价中</Text>
        </Tabs.TabContent>
        <Tabs.TabContent key={2} tab="待报价">
          <Text style={textStyle}>待报价</Text>
        </Tabs.TabContent>
        <Tabs.TabContent key={3} tab="报价中">
          <Text style={textStyle}>报价中</Text>
        </Tabs.TabContent>
        <Tabs.TabContent key={4} tab="报价完成">
          <Text style={textStyle}>报价完成</Text>
        </Tabs.TabContent>
        <Tabs.TabContent key={5} tab="已转大货">
          <Text style={textStyle}>已转大货</Text>
        </Tabs.TabContent>
      </Tabs>

      <Tabs
        titleFlexible
        titleCursorWidth={35}
        onTabClick={({ key }) => setStateKey1(key)}
        activeKey={stateKey1}
      >
        <Tabs.TabContent key={0} tab="All">
          <Text style={textStyle}>All</Text>
        </Tabs.TabContent>
        <Tabs.TabContent key={1} tab="Missed">
          <Text style={textStyle}>Missed</Text>
        </Tabs.TabContent>
      </Tabs>
    </>
  );
};
