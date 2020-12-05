import * as React from 'react';
import { View, Image, Animated } from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import { getImageHost } from '@utils';

export interface TagProps {
  value: number;
  style?: React.CSSProperties;
}

const ProgressBar = (props: TagProps) => {
  const { style, value } = props;

  const widthAnimation = new Animated.Value(0);

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(widthAnimation, {
        toValue: value,
        duration: 1300,
        useNativeDriver: false,
      }),
    ]).start();
  }, [value]);

  const widthInterpolated = widthAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.content}>
      <View style={[styles.tint, style]}></View>
      <Animated.View style={{ width: widthInterpolated }}>
        <LinearGradient
          style={styles.fill}
          colors={['#2DA0FF', '#1467FF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        ></LinearGradient>
      </Animated.View>
      <Image
        style={styles.rocketImg}
        source={{
          uri: `${getImageHost()}rocket.png`,
        }}
      />
    </View>
  );
};

export default ProgressBar;
