import { StyleSheet, Text } from 'react-native';
import { sizeOf } from '../../config/utils/resizer';
import { useContext } from 'react';
import ThemeContext from '../../context/Theme';

export interface MTitleProps {
  size: 'sm' | 'med' | 'lg';
  text: string;
  center?: boolean;
}

export default function MTitle(props: MTitleProps) {
  const theme = useContext(ThemeContext.themeContext);

  const size = sizeOf(props.size, theme.theme);

  const styles = StyleSheet.create({
    title: {
      color: theme.theme.colors.primary,
      fontSize: size * 2,
      fontWeight: 'bold',
    },
    center: {
      flex: 1,
      alignSelf: 'center',
    },
  });

  return (
    <Text style={[styles.title, props.center ? styles.center : null]}>
      {props.text}
    </Text>
  );
}
