import * as React from 'react';
import { View } from 'react-native';
import { Icon } from 'anna-native';

const rowStyle = {
  padding: 10,
  backgroundColor: '#FFFFFF',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export default () => {
  return (
    <>
      <View style={rowStyle}>
        <Icon name="tab_home" />
        <Icon name="tab_msg" />
        <Icon name="tab_my" />
      </View>

      <View style={rowStyle}>
        <Icon name="tab_my" />
        <Icon name="tab_my" size={24} />
        <Icon name="tab_my" size={32} />
      </View>

      <View style={rowStyle}>
        <Icon name="line-photo" />
        <Icon name="line-photo" color="#9966FF" />
        <Icon name="line-photo" color="#FF6666" />
      </View>
    </>
  );
};
