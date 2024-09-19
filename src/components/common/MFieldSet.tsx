import MTextInput from './MTextInput';
import MText from './MText';
import MVertical from '../layout/MVertical';
import { StyleSheet } from 'react-native';
import { useTheme } from '../../context/Theme';

export interface MFieldSetProps {
  fieldName: string;
  onChangeText: (text: string) => void;
  baseContent: string;
  placeholder?: string;
  size: 'sm' | 'med' | 'lg';
  isSecure?: boolean;
  style?: any;
}
/**
 * A simple FieldSet component which follows the current Theme of the app.
 * @param field label on the top of the fieldset
 * @param onChangeText Action to execute when text changes
 * @param baseContent The base content of the component
 * @param placeholder The placeholder of the component
 * @param size The size of the component
 * @param isSecure A boolean to specify whether if the text should be displayed or hidden
 * @param style Any kind of style to override the component
 * @returns A simple FieldSet component
 */
export default function MFieldSet(props: MFieldSetProps) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    label: {
      color: theme.colors.text,
    },
  });
  return (
    <MVertical>
      <MText size="sm" text={props.fieldName} style={styles.label} />
      <MTextInput
        baseContent={props.baseContent}
        onChangeText={props.onChangeText}
        size={props.size}
        isSecure={props.isSecure}
        placeholder={props.placeholder}
        style={props.style}
      />
    </MVertical>
  );
}
