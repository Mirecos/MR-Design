import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import ThemeContext from '../../context/Theme';
import { sizeOf } from '../../config/utils/resizer';

export interface MButtonProps {
  text: string;
  size: 'sm' | 'med' | 'lg';
  rounded?: boolean;
  onPress?: () => void;
  style?: any;
}

/**
 * A simple Button component which follows the current Theme of the app.
 * @param text The text to display in the component
 * @param size The size of the component
 * @param rounded A boolean to specify if we need to round borders
 * @param onPress The action to execute on press
 * @param style Any kind of style to override the component
 * @returns A simple Button component
 */
export default function MButton(props: MButtonProps) {
  const theme = useContext(ThemeContext.themeContext);

  const size = sizeOf(props.size, theme.theme);

  const styles = StyleSheet.create({
    text: {
      borderRadius: props.rounded ? size : 0,
      backgroundColor: theme.theme.colors.primary,
      paddingVertical: '2%',
      paddingHorizontal: '5%',
      color:
        props.style && props.style.color
          ? props.style.color
          : theme.theme.colors.textOnPrimary,
      fontSize: size,
      textAlign: 'center',
      width: 'auto',
    },
  });

  return (
    <TouchableOpacity
      onPress={props.onPress ? props.onPress : () => {}}
      style={props.style}
    >
      <Text style={[styles.text]}>{props.text}</Text>
    </TouchableOpacity>
  );
}
