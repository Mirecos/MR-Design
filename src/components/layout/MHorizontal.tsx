import { StyleSheet, View } from 'react-native';

export interface MHorizontalProps {
  children: React.ReactNode;
  style?: any;
}

export default function MHorizontal(props: MHorizontalProps) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
  });

  return <View style={[styles.container, props.style]}>{props.children}</View>;
}
