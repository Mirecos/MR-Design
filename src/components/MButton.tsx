import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import ThemeContext from '../context/Theme';
import { sizeOf } from '../config/utils/resizer';

export interface MButtonProps {
  text: string;
  size: 'sm' | 'med' | 'lg';
  rounded?: boolean;
  onPress?: () => void;
  style?: any;
}

/**
 * A simple Button component
 * @param props
 * @returns
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
