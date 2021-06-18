import * as React from 'react';
import { View, Text } from 'react-native';
import { Result, Button } from 'anna-native';

export default () => {
  return (
    <>
      <Result
        status="success"
        title="提交成功"
        subTitle="您的询价需求已经提交成功，有报价时系统会及时通知您进行确认"
        extra={
          <View style={{ flexDirection: 'row', justifyContent: 'center', paddingBottom: 250 }}>
            <Button type="primary" style={{ marginRight: 12 }}>
              查看需求
            </Button>
            <Button>返回看板</Button>
          </View>
        }
      />
    </>
  );
};
