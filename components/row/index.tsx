import React, { useMemo } from 'react';
import { View, ViewStyle } from 'react-native';
import styles from './style';

const prefixCls = 'row';

export interface RowProps {
  gutter?: number;
  justify?: string;
  align?: string;
  style?: ViewStyle;
  children?: React.ReactNode;
}

const renderCols = (columns: React.ReactNode, halfGutter?: number) => {
  const cols = React.Children.map(columns, (column: any) => {
    const style = halfGutter ? { paddingHorizontal: halfGutter } : null;
    return {
      ...column,
      props: {
        ...column.props,
        style: {
          ...column.props.style,
          ...style,
        },
      },
    };
  });
  return cols;
};

const Row: React.FC<RowProps> = props => {
  const { gutter = 0, justify = 'start', align = 'top', style, children } = props;

  const halfGutter = useMemo(() => gutter / 2, [gutter]);

  return (
    <View
      style={[
        styles[prefixCls],
        justify && styles[`${prefixCls}-justify-${justify}`],
        align && styles[`${prefixCls}-align-${align}`],
        style,
        { marginHorizontal: -halfGutter },
      ]}
    >
      {renderCols(children, halfGutter)}
    </View>
  );
};

export default Row;
