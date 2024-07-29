import { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import ThemeContext from '../context/Theme';
import { sizeOf } from '../config/utils/resizer';

export interface MTextProps {
  text: string;
  size: 'sm' | 'med' | 'lg';
  style?: any;
}

export default function MText(props: MTextProps) {
  const theme = useContext(ThemeContext.themeContext);

  const size = sizeOf(props.size, theme.theme);

  const styles = StyleSheet.create({
    text: {
      color: theme.theme.colors.text,
      fontSize: size,
    },
  });

  return <Text style={[styles.text, props.style]}>{props.text}</Text>;
}
