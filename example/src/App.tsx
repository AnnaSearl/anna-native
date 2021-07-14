import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Button, Toast } from 'anna-native';

export default function App() {
  const handlePress = () => {
    Toast.show('哈哈就u哈哈i');
  };

  return (
    <View style={styles.container}>
      <Button onPress={handlePress}>Anna Button</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
