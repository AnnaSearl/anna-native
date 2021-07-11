import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'anna-native';

const rowStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 10,
  backgroundColor: '#FFFFFF',
};

export default () => {
  return (
    <>
      <View style={rowStyle}>
        <Button onPress={() => {}}>Default Button</Button>
        <Button type="primary">Primary Button</Button>
      </View>

      <View style={rowStyle}>
        <Button plain>Plain Button</Button>
        <Button plain type="primary">
          Plain Button
        </Button>
      </View>

      <View style={rowStyle}>
        <Button>Default Button</Button>
        <Button type="primary">Primary Button</Button>
      </View>

      <View style={rowStyle}>
        <Button type="primary" shape="square">
          Square Button
        </Button>
        <Button type="primary" shape="circle">
          C
        </Button>
      </View>
    </>
  );
};
