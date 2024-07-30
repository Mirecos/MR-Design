import { StyleSheet, View } from 'react-native';

export interface MVerticalProps {
  children: React.ReactNode;
  style?: any;
}
/**
 * A simple layout component to display childrens vertically using flexbox.
 * @param children The components inside of the card
 * @param style Any kind of style to override the component
 * @returns A simple vertical layout component
 */
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
