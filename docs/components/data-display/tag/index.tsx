import * as React from 'react';
import { View, Text } from 'react-native';
import { Tag } from 'anna-native';

const rowStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 10,
  backgroundColor: '#FFFFFF',
};

export default () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <>
      <View style={rowStyle}>
        <Tag>default</Tag>
      </View>

      <View style={rowStyle}>
        <Tag color="#1467FF">#1467FF</Tag>
        <Tag color="#1467FF" plain>
          #1467FF
        </Tag>
      </View>

      <View style={rowStyle}>
        <Tag size="small">small</Tag>
        <Tag size="medium">medium</Tag>
        <Tag size="large">large</Tag>
        <Tag size="xlarge">xlarge</Tag>
      </View>

      <View style={rowStyle}>
        <Tag look="blue">blue</Tag>
        <Tag look="green">green</Tag>
        <Tag look="yellow">blue</Tag>
        <Tag look="red">red</Tag>
        <Tag look="dark">dark</Tag>
        <Tag look="gray">gray</Tag>
      </View>

      <View style={rowStyle}>
        <Tag.CheckableTag checked={checked} onChange={() => setChecked(!checked)}>
          CheckableTag
        </Tag.CheckableTag>
      </View>
    </>
  );
};
