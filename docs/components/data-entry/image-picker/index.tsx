import React from 'react';
import { View } from 'react-native';
import { ImagePicker } from 'anna-native';

const style = {
  padding: 10,
  backgroundColor: '#FFFFFF',
};

export default () => {
  const [value, setValue] = React.useState([]);

  const handleChange = (files: any) => {
    setValue(files);
  };

  return (
    <View style={style}>
      <ImagePicker files={value} onChange={handleChange} />
    </View>
  );
};
