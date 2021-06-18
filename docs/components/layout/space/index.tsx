import * as React from 'react';
import { View } from 'react-native';
import { Space, Tag, Button } from 'anna-native';

export default () => {
  return (
    <>
      <Space>
        <Tag size="large">Anna</Tag>
        <Tag size="large">Eurus</Tag>
        <Tag size="large">Ibuki</Tag>
        <Tag size="large">Melos</Tag>
      </Space>

      <Space>
        <Button shape="square" plain>
          申请取消
        </Button>
        <Button shape="square" plain>
          申请退货
        </Button>
        <Button type="primary" shape="square" plain>
          确认收货
        </Button>
      </Space>
      <View style={{ height: 12 }} />
      <Space size="middle">
        <Button shape="square" plain>
          申请取消
        </Button>
        <Button shape="square" plain>
          申请退货
        </Button>
        <Button type="primary" shape="square" plain>
          确认收货
        </Button>
      </Space>
      <View style={{ height: 12 }} />
      <Space size="large">
        <Button shape="square" plain>
          申请取消
        </Button>
        <Button shape="square" plain>
          申请退货
        </Button>
        <Button type="primary" shape="square" plain>
          确认收货
        </Button>
      </Space>

      <Space direction="vertical">
        <Tag size="large">Anna</Tag>
        <Tag size="large">Eurus</Tag>
        <Tag size="large">Ibuki</Tag>
        <Tag size="large">Melos</Tag>
      </Space>

      <Space>
        center
        <Tag size="large">Anna</Tag>
        <Tag size="large">Eurus</Tag>
        <Button shape="square" plain>
          Ibuki
        </Button>
      </Space>
      <View style={{ height: 24 }} />
      <Space align="start">
        start
        <Tag size="large">Anna</Tag>
        <Tag size="large">Eurus</Tag>
        <Button shape="square" plain>
          Ibuki
        </Button>
      </Space>
      <View style={{ height: 24 }} />
      <Space align="end">
        end
        <Tag size="large">Anna</Tag>
        <Tag size="large">Eurus</Tag>
        <Button shape="square" plain>
          Ibuki
        </Button>
      </Space>
      <View style={{ height: 24 }} />
      <Space align="baseline">
        baseline
        <Tag size="large">Anna</Tag>
        <Tag size="large">Eurus</Tag>
        <Button shape="square" plain>
          Ibuki
        </Button>
      </Space>
    </>
  );
};
