import * as React from 'react';
import { View, Image } from 'react-native';
import Node from '../node';
import styles from './style';

const prefixCls = 'result';

export interface ResultProps {
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  extra?: React.ReactNode;
}

const Result: React.FC<ResultProps> = props => {
  const { title, subTitle, extra } = props;

  return (
    <View style={styles[prefixCls]}>
      <View style={styles[`${prefixCls}-icon`]}>
        <Image
          source={{ uri: 'https://smebimage.fuliaoyi.com/Fn1h5MKI-USpwK48WeC4uHCPCrvT' }}
          style={styles.successIcon}
        />
      </View>

      <Node style={styles[`${prefixCls}-title`]}>{title}</Node>
      <Node style={styles[`${prefixCls}-subTitle`]}>{subTitle}</Node>
      <Node style={styles[`${prefixCls}-extra`]}>{extra}</Node>
    </View>
  );
};

export default Result;
