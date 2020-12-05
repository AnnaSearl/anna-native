import { StyleSheet } from 'react-native';

const colStyle: any = {};
const span = 100 / 24;

for (let i = 1; i <= 24; i += 1) {
  colStyle['col-' + i] = {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: `${span * i}%`,
    maxWidth: '100%', // RN 中 View的宽度不会加上负的margin
  };
  colStyle['col-offset-' + i] = {
    marginLeft: `${span * i}%`,
  };
}

const styles = StyleSheet.create<any>({
  col: {
    position: 'relative',
  },
  ...colStyle,
});

export default styles;
