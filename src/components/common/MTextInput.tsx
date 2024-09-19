import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { sizeOf } from '../../config/utils/resizer';
import { useTheme } from '../../context/Theme';

export interface MTextInputProps {
  onChangeText: (text: string) => void;
  baseContent: string;
  placeholder?: string;
  size: 'sm' | 'med' | 'lg';
  isSecure?: boolean;
  style?: any;
}
/**
 * A simple TextInput component which follows the current Theme of the app.
 *
 * The component usually works with a state. You need to declare your state and give it like following :
 *
 * `const [state, setState] = useState(0);`
 *
 * `<MtextInput
 * baseContent={state}
 * onChangeText={(value)=>{setState(value)}}
 * />`
 *
 * @param onChangeText The action to execute when users modify the text
 * @param size The size of the component
 * @param baseContent The base content of the component
 * @param plcaholder The placeholder of the component
 * @param isSecure A boolean to specify whether if the text should be displayed or hidden
 * @param style Any kind of style to overried
 * @returns A simple TextInput component
 */
export default function MTextInput(props: MTextInputProps) {
  const theme = useTheme();
  const [color, setColor] = React.useState(theme.colors.text);
  const size = sizeOf(props.size, theme);

  const styles = StyleSheet.create({
    text: {
      color: theme.colors.text,
      backgroundColor: theme.colors.card,
      borderBottomColor: color,
      borderBottomWidth: 1,
      height: size * 2.5,
      fontSize: size,
    },
  });

  return (
    <TextInput
      onFocus={() => {
        setColor(theme.colors.primary);
      }}
      onBlur={() => {
        setColor(theme.colors.text);
      }}
      defaultValue={props.baseContent}
      placeholder={props.placeholder}
      placeholderTextColor={theme.colors.text}
      secureTextEntry={props.isSecure}
      onChangeText={props.onChangeText}
      style={[styles.text, props.style]}
    />
  );
}
