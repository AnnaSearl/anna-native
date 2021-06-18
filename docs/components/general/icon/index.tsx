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
        <Icon name="icondatou" />
        <Icon name="iconline-address" />
        <Icon name="iconline-search" />
      </View>

      <View style={rowStyle}>
        <Icon name="icondatou" />
        <Icon name="icondatou" size={24} />
        <Icon name="icondatou" size={32} />
      </View>

      <View style={rowStyle}>
        <Icon name="iconline-photo" />
        <Icon name="iconline-photo" color="#9966FF" />
        <Icon name="iconline-photo" color="#FF6666" />
      </View>
    </>
  );
};
