import { StyleSheet } from 'react-native';

const styles = StyleSheet.create<any>({
  row: {
    flexDirection: 'row',
  },
  'row-justify-start': {
    justifyContent: 'flex-start',
  },
  'row-justify-center': {
    justifyContent: 'center',
  },
  'row-justify-end': {
    justifyContent: 'flex-end',
  },
  'row-justify-space-around': {
    justifyContent: 'space-around',
  },
  'row-justify-space-between': {
    justifyContent: 'space-between',
  },
  'row-align-top': {
    alignItems: 'flex-start',
  },
  'row-align-middle': {
    alignItems: 'center',
  },
  'row-align-bottom': {
    alignItems: 'flex-end',
  },
});

export default styles;
