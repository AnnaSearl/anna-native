import * as React from 'react';
import { View, Text } from 'react-native';
import { Grid } from 'anna-native';

const data = ['#E9E2FD', '#C8B5FB', '#E9E2FD', '#C8B5FB', '#E9E2FD', '#C8B5FB'];
const data1 = ['#E9E2FD', '#C8B5FB', '#E9E2FD', '#C8B5FB'];
const data2 = ['#E9E2FD', '#C8B5FB', '#E9E2FD'];
const data3 = ['#E9E2FD', '#C8B5FB', '#E9E2FD', '#C8B5FB', '#E9E2FD'];
const data4 = ['#E9E2FD', '#C8B5FB', '#E9E2FD', '#C8B5FB'];

const itemStyle = {
  height: 75,
  justifyContent: 'center',
  alignItems: 'center',
};

export default () => {
  const renderGridItem = (col: any, index?: number) => (
    <View style={{ ...itemStyle, backgroundColor: col }}>
      <Text>{index}</Text>
    </View>
  );

  return (
    <>
      <Grid data={data} columns={3}>
        {renderGridItem}
      </Grid>

      <Grid data={data1} columns={3}>
        {renderGridItem}
      </Grid>

      <Grid data={data2} columns={3} gutter={16}>
        {renderGridItem}
      </Grid>

      <Grid data={data} columns={3} gutter={[8, 8]}>
        {renderGridItem}
      </Grid>

      <Grid data={data3} columns={3} gutter={[3, 3]} span={16}>
        {renderGridItem}
      </Grid>

      <Grid data={data3} columns={3} gutter={[3, 3]} span={-16}>
        {renderGridItem}
      </Grid>

      <Grid data={data4} columns={3} gutter={[3, 3]} span={[8, 16, 8, 16]}>
        {renderGridItem}
      </Grid>
    </>
  );
};
