import { StyleSheet } from 'react-native';
import Theme from '../../style/theme';

const styles = StyleSheet.create<any>({
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  input: {},
  icon: {
    color: Theme.$fontColor3,
    fontSize: 12,
  },
});

export default styles;
