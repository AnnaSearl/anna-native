import * as React from 'react';
import { View, Text } from 'react-native';
import { Steps } from 'anna-native';

const data = [{ title: '待评价' }, { title: '待收货' }, { title: '待发货' }];

const data1 = [
  {
    title: '待处理',
    description: '订单等待销售处理',
    extra: '2020-4-23',
  },
  {
    title: '询价中',
    description: '已向采购提交询价',
    extra: '2020-4-27',
  },
  {
    title: '报价成功',
    description: '客户已接受报价',
    extra: '2020-5-1',
  },
];

export default () => {
  return (
    <>
      <Steps direction="vertical" steps={data} />

      <Steps direction="vertical" steps={data1} />
    </>
  );
};
