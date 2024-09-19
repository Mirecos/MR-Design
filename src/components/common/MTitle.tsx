import { StyleSheet, Text } from 'react-native';
import { sizeOf } from '../../config/utils/resizer';
import { useTheme } from '../../context/Theme';

export interface MTitleProps {
  size: 'sm' | 'med' | 'lg';
  text: string;
  center?: boolean;
  style?: any;
}
/**
 * A simple Title component that adapts to the current Theme
 * @param text The text to display in the component
 * @param size The size of the component
 * @param center A boolean to specify if we want to center the text
 * @param style Any kind of style to overried
 * @returns A simple Title component
 */
export default function MTitle(props: MTitleProps) {
  const theme = useTheme();

  const size = sizeOf(props.size, theme);

  const styles = StyleSheet.create({
    title: {
      fontSize: size * 2,
      fontWeight: 'bold',
    },
    center: {
      flex: 1,
      alignSelf: 'center',
    },
  });

  return (
    <Text
      style={[styles.title, props.center ? styles.center : null, props.style]}
    >
      {props.text}
    </Text>
  );
}
