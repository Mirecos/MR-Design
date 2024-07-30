import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import ThemeContext from '../../context/Theme';
import MText from '../common/MText';
import { sizeOf } from '../../config/utils/resizer';

export interface MCircularLoadingProps {
  size: 'sm' | 'med' | 'lg';
  style?: any;
}
/**
 * An easy to implement self sufficient circular loading animation to use during loading times
 * @param size The size of the component
 * @param style any kind of style to override the component
 * @returns A circuloar loading component to integrate during loading times.
 */
export default function MCircularLoading(props: MCircularLoadingProps) {
  const rotation = useSharedValue<number>(0);
  const theme = useContext(ThemeContext.themeContext);

  const size = sizeOf(props.size, theme.theme) * 8;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      width: size,
      height: size,
      borderTopColor: theme.theme.colors.primary,
      borderBottomColor: `rgba(0,0,0,0.1)`,
      borderRightColor: `rgba(0,0,0,0.1)`,
      borderLeftColor: `rgba(0,0,0,0.1)`,
      borderWidth: 10,
      borderRadius: size / 2,
    },
    text: {
      color: theme.theme.colors.primary,
      paddingTop: 8,
    },
  });

  React.useEffect(() => {
    rotation.value = 0;
    rotation.value = withRepeat(
      withTiming(1, {
        duration: 2000,
        easing: Easing.linear,
      }),
      -1
    );
  });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value * 360}deg` }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <MText text="Loading..." style={styles.text} size={props.size} />
    </View>
  );
}
