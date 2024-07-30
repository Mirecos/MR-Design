import { StyleSheet, View } from 'react-native';

export interface MVerticalProps {
  children: React.ReactNode;
  style?: any;
}

export default function MVertical(props: MVerticalProps) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
  });

  return <View style={[styles.container, props.style]}>{props.children}</View>;
}
