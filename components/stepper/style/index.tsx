import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create<any>({
  content: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },
  input: {
    fontSize: 13,
    fontWeight: '400',
    color: '#1B2844',
    lineHeight: 15,
    textAlign: 'center',
    width: 50,
    // height: 20,
    padding: 0,
    marginVertical: Platform.OS !== 'ios' ? 0 : 0,
    // backgroundColor: 'red',
  },
  rocketImg: {
    width: 24,
    height: 24,
    marginLeft: -5,
  },
});

export default styles;
