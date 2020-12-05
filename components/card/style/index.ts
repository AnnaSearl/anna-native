import { StyleSheet } from 'react-native';

const styles = StyleSheet.create<any>({
  card: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    fontSize: 28,
    color: '#333',
  },
  'card-head': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: '500',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  'card-title': {
    color: '#1B2844',
    fontSize: 15,
    fontWeight: '500',
  },
  'card-description': {
    color: '#999',
    fontSize: 12,
    marginTop: 10,
  },
  'card-extra': {
    fontSize: 13,
    fontWeight: '700',
  },
  'card-content': {
    paddingHorizontal: 10,
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
