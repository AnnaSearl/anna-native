import * as React from 'react';
import { View, Text } from 'react-native';
import { Row, Col } from 'anna-native';

const textStyle1 = {
  backgroundColor: '#E9E2FD',
  height: 44,
  lineHeight: 44,
  textAlign: 'center',
};

const textStyle2 = {
  backgroundColor: '#C8B5FB',
  height: 44,
  lineHeight: 44,
  textAlign: 'center',
};

export default () => {
  return (
    <>
      <Row>
        <Col span={8}>
          <Text style={textStyle1}>col-8</Text>
        </Col>
        <Col span={8}>
          <Text style={textStyle2}>col-8</Text>
        </Col>
        <Col span={8}>
          <Text style={textStyle1}>col-8</Text>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Text style={textStyle1}>col-24</Text>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <View>
            <Text style={textStyle1}>col-8</Text>
          </View>
        </Col>
        <Col span={8}>
          <View>
            <Text style={textStyle2}>col-8</Text>
          </View>
        </Col>
        <Col span={8}>
          <View>
            <Text style={textStyle1}>col-8</Text>
          </View>
        </Col>
      </Row>

      <Row>
        <Col span={6} offset={6}>
          <View>
            <Text style={textStyle1}>col-6</Text>
          </View>
        </Col>
        <Col span={6} offset={6}>
          <View>
            <Text style={textStyle2}>offset-6</Text>
          </View>
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <View>
            <Text style={textStyle1}>col-12 , offset-6</Text>
          </View>
        </Col>
      </Row>
    </>
  );
};
