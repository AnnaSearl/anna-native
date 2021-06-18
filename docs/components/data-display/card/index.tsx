import * as React from 'react';
import { Text } from 'react-native';
import { Card } from 'anna-native';

export default () => {
  return (
    <>
      <Card>
        <Text>Card content</Text>
        <Text>Card content</Text>
        <Text>Card content</Text>
      </Card>

      <Card title="Title">
        <Text>Card content</Text>
        <Text>Card content</Text>
        <Text>Card content</Text>
      </Card>

      <Card title="Title" extra={<Text style={{ color: '#1467FF' }}>More</Text>}>
        <Text>Card content</Text>
        <Text>Card content</Text>
        <Text>Card content</Text>
      </Card>

      <Card title="Title" headerBorder>
        <Text>Card content</Text>
        <Text>Card content</Text>
        <Text>Card content</Text>
      </Card>
    </>
  );
};
