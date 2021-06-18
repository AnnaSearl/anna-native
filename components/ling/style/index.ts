import { StyleSheet } from 'react-native';
import { $fontColor2, $fontColor3, $light2 } from '../../style/theme';

const styles = StyleSheet.create<any>({
  ling: {
    zIndex: 1010,
    backgroundColor: $light2,
    overflow: 'hidden',
    boxShadow: '0px 2px 20px 0px #eaecee',
    transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
  },
  'ling-top': {
    width: 200,
    height: 50,
    borderRadius: 50,
    left: '50%',
    top: 0,
    transform: 'translate3d(-50%, calc(-100% - 10px), 0)',
  },
  'ling-show': {
    transform: 'translate3d(-50%, 24px, 0)',
  },
  'loading-container': {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    height: '100%',
    fontWeight: 500,
  },
  'ling-title': {
    color: $fontColor2,
  },
  'ling-content': {
    color: $fontColor3,
    marginTop: 5,
  },
  'ling-icon': {
    position: 'absolute',
    left: 12,
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

export default styles;
