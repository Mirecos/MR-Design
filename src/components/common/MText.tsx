import { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import ThemeContext from '../../context/Theme';
import { sizeOf } from '../../config/utils/resizer';

export interface MTextProps {
  text: string;
  size: 'sm' | 'med' | 'lg';
  center?: boolean;
  style?: any;
}
/**
 * A simple Text component which follows the current Theme of the app.
 * @param text The text to display in the component
 * @param size The size of the component
 * @param center A boolean to specify if we want to center the text
 * @param style Any kind of style to overried
 * @returns A simple Text component
 */
export default function MText(props: MTextProps) {
  const theme = useContext(ThemeContext.themeContext);

  const size = sizeOf(props.size, theme.theme);

  const styles = StyleSheet.create({
    text: {
      color: theme.theme.colors.text,
      fontSize: size,
    },
    center: {
      flex: 1,
      alignSelf: 'center',
    },
  });

  return (
    <Text
      style={[styles.text, props.style, props.center ? styles.center : null]}
    >
      {props.text}
    </Text>
  );
}
