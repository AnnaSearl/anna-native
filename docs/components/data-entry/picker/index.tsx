import React from 'react';
import { Picker, Cell } from 'anna-native';

const data = ['Anna', 'Ivonna', 'Eurus', 'Arwen'];

export default () => {
  const [value, setValue] = React.useState(-1);

  const text = data[value] ? data[value] : 'Please Choose';

  return (
    <Cell label="Name">
      <Picker textAlign="right" range={data} value={value} onChange={(v: any) => setValue(v)}>
        {text}
      </Picker>
    </Cell>
  );
};
