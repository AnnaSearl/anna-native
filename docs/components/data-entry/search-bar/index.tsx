import React from 'react';
import { View } from 'react-native';
import { SearchBar } from 'anna-native';

const rowStyle = {
  padding: 10,
  backgroundColor: '#FFFFFF',
};

export default () => {
  const [value, setValue] = React.useState('');
  const [value1, setValue1] = React.useState('');

  return (
    <>
      <View style={rowStyle}>
        <SearchBar placeholder="搜索" value={value} onChangeText={(v: any) => setValue(v)} />
      </View>

      <View style={rowStyle}>
        <SearchBar
          placeholder="搜索"
          value={value1}
          onChangeText={(v: any) => setValue1(v)}
          showActionButton
        />
      </View>
    </>
  );
};
