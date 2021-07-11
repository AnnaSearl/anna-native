import React from 'react';
import { View } from 'react-native';
import { Stepper } from 'anna-native';

const rowStyle = {
  padding: 10,
  backgroundColor: '#FFFFFF',
};

export default () => {
  const [number, setNumber] = React.useState(1);
  const [number1, setNumber1] = React.useState(5);
  const [number2, setNumber2] = React.useState(10);

  return (
    <>
      <View style={rowStyle}>
        <Stepper value={number} onChange={(val: any) => setNumber(val)} />
      </View>

      <View style={rowStyle}>
        <Stepper min={5} max={10} value={number1} onChange={(val: any) => setNumber1(val)} />
      </View>

      <View style={rowStyle}>
        <Stepper disabled value={number2} onChange={(val: any) => setNumber2(val)} />
      </View>
    </>
  );
};
