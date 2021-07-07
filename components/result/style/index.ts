import { StyleSheet } from 'react-native';
import Theme from '../../style/theme';

const styles = StyleSheet.create<any>({
  result: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  'result-icon': {
    alignItems: 'center',
    marginTop: 59.5,
    marginBottom: 19.5,
  },
  successIcon: {
    width: 72,
    height: 92,
    margin: 'auto',
  },
  'result-title': {
    textAlign: 'center',
    color: Theme.$fontColor,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
  },
  'result-subTitle': {
    textAlign: 'center',
    color: Theme.$fontColor2,
    fontSize: 13,
    lineHeight: 18.5,
    marginTop: 7.5,
    paddingHorizontal: 35,
  },
  'result-extra': {
    marginTop: 30,
  },
});

export default styles;
