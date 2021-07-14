import * as React from 'react';
import { View } from 'react-native';
import Node from '../node';
import Icon from '../icon';
import Row from '../row';
import Col from '../col';
import { withTheme } from '../theme';

import { createStylesWithTheme } from './style';

const prefixCls = 'steps';

export interface StepProps {
  title?: React.ReactNode;
  errorTitle?: React.ReactNode;
  extra?: React.ReactNode;
  description?: React.ReactNode;
}

export interface StepsProps {
  current?: number;
  status?: string;
  direction?: string;
  steps?: StepProps[];
  type?: 'arrow' | 'default';
  theme: AnnaNative.Theme;
}

const Steps: React.FC<StepsProps> = props => {
  const { direction = 'horizontal', current = 0, steps, status, type, theme } = props;

  const styles = createStylesWithTheme(theme);

  const { colors } = theme;
  const { primary } = colors;

  const statusIconType = status === 'error' ? 'roundclosefill' : 'roundcheckfill';
  const statusIconColor = status === 'error' ? '#f5222d' : '#1890FF';

  const getTitle = (item: StepProps, index: number) => {
    if (index === current) {
      if (status === 'error') {
        return item.errorTitle || item.title;
      }
    }
    return item.title;
  };

  if (direction === 'vertical') {
    return (
      <View style={styles.prefixCls}>
        {steps?.map((item, index) => (
          <View key={index} style={styles[`${prefixCls}-step`]}>
            <View style={styles[`${prefixCls}-step-process`]}>
              {index !== 0 && <View style={styles[`${prefixCls}-step-line-top`]} />}
              {index !== steps.length - 1 && (
                <View style={styles[`${prefixCls}-step-line-bottom`]} />
              )}
              {index === 0 ? (
                <View style={styles[`${prefixCls}-step-current`]}>
                  <Icon name="Ic-fil-Select" size={18} color={primary} />
                </View>
              ) : (
                <View style={styles[`${prefixCls}-step-circle`]} />
              )}
            </View>
            <View style={styles[`${prefixCls}-step-content`]}>
              <View style={styles[`${prefixCls}-step-header`]}>
                <Node style={styles[`${prefixCls}-step-title`]}>{item.title}</Node>
                <Node style={styles[`${prefixCls}-step-extra`]}>{item.extra}</Node>
              </View>
              <Node style={styles[`${prefixCls}-step-description`]}>{item.description}</Node>
            </View>
          </View>
        ))}
      </View>
    );
  }

  if (type === 'arrow') {
    const span = 24 / (steps?.length || 1);
    return (
      <Row gutter={6}>
        {steps?.map((step, index) => (
          <Col key={index} span={span}>
            <Node
              style={[
                styles[`${prefixCls}-arrow-step`],
                index === 0 ? { marginLeft: 0 } : null,
                current >= index && styles[`${prefixCls}-arrow-step-active`],
              ]}
            >
              {step?.title}
            </Node>
            {index === steps.length - 1 ? null : (
              <View
                style={[
                  styles[`${prefixCls}-arrow-step-head`],
                  current >= index && styles[`${prefixCls}-arrow-step-head-active`],
                ]}
              />
            )}
            {index === 0 ? null : (
              <View
                style={[
                  styles[`${prefixCls}-arrow-step-tail`],
                  current >= index && styles[`${prefixCls}-arrow-step-tail-active`],
                ]}
              />
            )}
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <View style={styles[`${prefixCls}-horizontal`]}>
      {steps?.map((item, index) => (
        <View
          key={index}
          style={[
            styles[`${prefixCls}-horizontal-step`],
            index <= current - 1 && styles[`${prefixCls}-horizontal-finish`],
          ]}
        >
          <View style={styles[`${prefixCls}-horizontal-container`]}>
            <View style={styles[`${prefixCls}-horizontal-icon`]}>
              {index < current ? <Icon name="roundcheckfill" size={20} color="#1890FF" /> : null}
              {index === current ? (
                <Icon name={statusIconType} size={20} color={statusIconColor} />
              ) : null}
              {index > current ? (
                <View style={styles[`${prefixCls}-horizontal-icon-default`]}>
                  <View />
                </View>
              ) : null}
            </View>
            <View style={styles[`${prefixCls}-horizontal-content`]}>
              <View style={styles[`${prefixCls}-horizontal-title`]}>{getTitle(item, index)}</View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default withTheme(Steps);
