import { theme } from 'mr-design';
import { View } from 'react-native';

export default function Comp() {
  const th = theme.useTheme();
  console.log(th);

  return <View />;
}
