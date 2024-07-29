import MTextInput from './MTextInput';
import MText from './MText';
import MVertical from './MVertical';

export interface MFieldSetProps {
  onChangeText: (text: string) => void;
  baseContent: string;
  placeholder?: string;
  size: 'sm' | 'med' | 'lg';
  isSecure?: boolean;
  style?: any;
}

export default function MFieldSet(props: MFieldSetProps) {
  return (
    <MVertical>
      <MText size="med" text="My fieldset" />
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
