import { StyleSheet, View } from 'react-native';

export interface MHorizontalProps {
  children: React.ReactNode;
  style?: any;
}
/**
 * A simple layout component to display childrens horizontally using flexbox.
 * @param children The components inside of the card
 * @param style Any kind of style to override the component
 * @returns A simple horizontal layout component
 */
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
