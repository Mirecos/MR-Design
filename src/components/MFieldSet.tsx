import MTextInput from './MTextInput';
import MText from './MText';
import MVertical from './MVertical';
import { StyleSheet } from 'react-native';
import { useContext } from 'react';
import Theme from '../context/Theme';

export interface MFieldSetProps {
  fieldName: string;
  onChangeText: (text: string) => void;
  baseContent: string;
  placeholder?: string;
  size: 'sm' | 'med' | 'lg';
  isSecure?: boolean;
  style?: any;
}

export default function MFieldSet(props: MFieldSetProps) {
  const theme = useContext(Theme.themeContext);

  const styles = StyleSheet.create({
    label: {
      color: theme.theme.colors.primary,
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
