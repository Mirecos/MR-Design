import React, { useContext } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import ThemeContext from '../../context/Theme';
import { sizeOf } from '../../config/utils/resizer';

export interface MTextInputProps {
  onChangeText: (text: string) => void;
  baseContent: string;
  placeholder?: string;
  size: 'sm' | 'med' | 'lg';
  isSecure?: boolean;
  style?: any;
}

export default function MTextInput(props: MTextInputProps) {
  const theme = useContext(ThemeContext.themeContext);
  const [color, setColor] = React.useState(theme.theme.colors.text);
  const size = sizeOf(props.size, theme.theme);

  const styles = StyleSheet.create({
    text: {
      color: theme.theme.colors.text,
      backgroundColor: theme.theme.colors.card,
      borderBottomColor: color,
      borderBottomWidth: 1,
      height: size * 2.5,
      fontSize: size,
    },
  });

  return (
    <TextInput
      onFocus={() => {
        setColor(theme.theme.colors.primary);
      }}
      onBlur={() => {
        setColor(theme.theme.colors.text);
      }}
      defaultValue={props.baseContent}
      placeholder={props.placeholder}
      placeholderTextColor={theme.theme.colors.text}
      secureTextEntry={props.isSecure}
      onChangeText={props.onChangeText}
      style={[styles.text, props.style]}
    />
  );
}
