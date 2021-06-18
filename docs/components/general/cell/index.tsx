import * as React from 'react';
import { View, Text } from 'react-native';
import { Cell } from 'anna-native';

export default () => {
  return (
    <>
      <Cell label="Cell">content</Cell>

      <Cell label="Cell" required>
        content
      </Cell>

      <Cell label="Cell" arrow>
        content
      </Cell>

      <Cell label="location" icon="iconline-address">
        HangZhou
      </Cell>
    </>
  );
};
