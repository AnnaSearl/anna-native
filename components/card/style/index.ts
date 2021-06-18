import { StyleSheet } from 'react-native';
import { $fontColor } from '../../style/theme';

const styles = StyleSheet.create<any>({
  card: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    color: '#333',
  },
  'card-header': {
    display: 'flex',
    flexDirection: 'row',
    fontWeight: '500',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  'card-header-border': {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 0,
    height: 0.5,
    backgroundColor: '#DEDEDE',
  },
  'card-header-left': {
    flex: 1,
    marginRight: 10,
  },
  'card-title': {
    color: '#1B2844',
    fontSize: 15,
    fontWeight: '500',
  },
  'card-title-small': {
    fontSize: 13,
  },
  'card-description': {
    color: '#999',
    fontSize: 12,
    marginTop: 10,
  },
  'card-extra': {
    color: $fontColor,
    fontSize: 13,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  'card-content': {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  'card-content-head': {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: '500',
    paddingBottom: 10,
  },
});

export default styles;
