import React from 'react';
import { View, Pressable, ViewStyle } from 'react-native';
import Popup from '../popup';
import Icon from '../icon';
import Node from '../node';
import SafeFilling from '../safe-filling';
import Theme from '../style/theme';
import styles from './style';

const prefixCls = 'action-sheet';

export interface ActionSheetActionGridProps {
  value?: string | number;
  name?: React.ReactNode;
  icon?: string;
  disabled?: boolean;
}

export interface ActionSheetActionDefaultProps {
  value?: string | number;
  text?: React.ReactNode | ActionSheetActionGridProps[];
  type?: string;
  mode?: string;
  disabled?: boolean;
}

export type ActionSheetAction = ActionSheetActionDefaultProps | ActionSheetActionGridProps;

export interface ActionSheetProps {
  open?: boolean;
  title?: React.ReactNode;
  actions?: ActionSheetActionDefaultProps[];
  cancelText?: React.ReactNode;
  cover?: boolean;
  children?: React.ReactNode;
  maskClosable?: boolean;
  itemStyle?: ViewStyle;
  itemTextStyle?: ViewStyle;
  onCancel?: (e?: any) => void;
  onChange?: (a: ActionSheetAction, g?: ActionSheetActionDefaultProps, e?: any) => void;
}

const ActionSheet: React.FC<ActionSheetProps> = props => {
  const {
    open,
    title,
    actions,
    cancelText = 'Cancel',
    cover,
    maskClosable = true,
    onCancel,
    onChange,
  } = props;

  const handleCancel = (e: any) => {
    onCancel?.(e);
  };

  const handleChange = (
    action: ActionSheetAction,
    grid?: ActionSheetActionDefaultProps,
    e?: any,
  ) => {
    onChange?.(action, grid, e);
  };

  const handleCloseMask = () => {
    maskClosable && onCancel?.();
  };

  const renderAction = (action: ActionSheetActionDefaultProps, isLast: boolean) => (
    <Pressable key={action?.value} onPress={e => handleChange(action, undefined, e)}>
      {/* Why you have the padding-bottom?? */}
      <View
        style={[
          styles[`${prefixCls}-action`],
          isLast ? { borderBottomWidth: 0 } : null,
          props.itemStyle,
        ]}
      >
        <Node
          style={[
            styles[`${prefixCls}-action-text`],
            action?.type === 'destructive' ? styles[`${prefixCls}-action-destructive`] : null,
            props.itemTextStyle,
          ]}
        >
          {action?.text}
        </Node>
      </View>
    </Pressable>
  );

  const renderGrid = (action: ActionSheetActionDefaultProps) => (
    <View
      key={action.value}
      style={[
        styles[`${prefixCls}-grid`],
        action.type === 'destructive' ? styles[`${prefixCls}-action-destructive`] : null,
      ]}
    >
      <View style={styles[`${prefixCls}-grid-wrapper`]}>
        {(action.text as ActionSheetActionGridProps[])?.map((item: ActionSheetActionGridProps) => (
          <Pressable
            key={item.value}
            style={styles[`${prefixCls}-grid-item`]}
            onPress={e => handleChange(item, action, e)}
          >
            <Node style={styles[`${prefixCls}-grid-item-icon`]}>
              {item.icon ? (
                <Icon name={item.icon} size={24} color="rgba(0, 0, 0, 0.8)" />
              ) : (
                item.name
              )}
            </Node>
            <Node style={styles[`${prefixCls}-grid-item-name`]} numberOfLines={1}>
              {item.name}
            </Node>
          </Pressable>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles[prefixCls]}>
      <Popup transparent position="bottom" open={open} onClose={handleCloseMask}>
        <View
          style={[styles[`${prefixCls}-container`], cover ? styles[`${prefixCls}-cover`] : null]}
        >
          <View style={styles[`${prefixCls}-menu`]}>
            {title ? (
              <View style={styles[`${prefixCls}-action`]}>
                <Node style={[styles[`${prefixCls}-action-text`], styles[`${prefixCls}-title`]]}>
                  {title}
                </Node>
              </View>
            ) : null}
            {actions?.map((action, index) =>
              action.mode === 'grid'
                ? renderGrid(action)
                : renderAction(action, index === actions.length - 1),
            )}
          </View>
          <Pressable onPress={handleCancel}>
            <Node style={styles[`${prefixCls}-cancel`]}>{cancelText}</Node>
            <SafeFilling bottom backgroundColor={Theme.$light1} />
          </Pressable>
        </View>
      </Popup>
    </View>
  );
};

export default ActionSheet;
