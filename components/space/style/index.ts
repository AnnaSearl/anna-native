import { StyleSheet } from 'react-native';

const styles = StyleSheet.create<any>({
  space: {
    flexDirection: 'row',
  },
  'space-horizontal-small': {
    marginRight: 8,
  },
  'space-horizontal-middle': {
    marginRight: 16,
  },
  'space-horizontal-large': {
    marginRight: 24,
  },
  'space-vertical-small': {
    marginBottom: 8,
  },
  'space-vertical-middle': {
    marginBottom: 16,
  },
  'space-vertical-large': {
    marginBottom: 24,
  },
  'space-align-center': {
    alignItems: 'center',
  },
  'space-align-start': {
    alignItems: 'flex-start',
  },
  'space-align-end': {
    alignItems: 'flex-end',
  },
  'space-align-baseline': {
    alignItems: 'baseline',
  },
});

export default styles;
