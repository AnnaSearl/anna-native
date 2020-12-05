import * as React from 'react';
import { Modal, Pressable } from 'react-native';
import styles from './style';

const prefixCls = 'mask';

export interface PopupProps {
  show?: boolean;
  children?: React.ReactNode;
  onPress?: () => void;
}

const Mask = (props: PopupProps): React.ReactElement => {
  const { show = false, children, onPress } = props;

  return (
    <Modal visible={show} animationType="fade" transparent={true}>
      {/* 使用 Pressable 替换 TouchableWithoutFeedback，使用 TouchableWithoutFeedback 会导致 Popup关闭往下滑的动画效果失效 */}
      <Pressable style={styles[prefixCls]} onPress={onPress}>
        {children}
      </Pressable>
    </Modal>
  );
};

export default Mask;
