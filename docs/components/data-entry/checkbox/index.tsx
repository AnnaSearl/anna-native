import React, { useState } from 'react';
import { View } from 'react-native';
import { Checkbox } from 'anna-native';

const rowStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 10,
  backgroundColor: '#FFFFFF',
};

export default () => {
  const [option, setOption] = useState(false);

  return (
    <>
      <View style={rowStyle}>
        <Checkbox checked>Checkbox</Checkbox>
      </View>

      <View style={rowStyle}>
        <Checkbox checked={option} onChange={() => setOption(s => !s)} />
      </View>
    </>
  );
};
