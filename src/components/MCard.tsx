import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Theme from '../context/Theme';

export interface MCardProps {
  children: React.ReactNode;
}

export default function MCard(props: MCardProps) {
  const theme = useContext(Theme.themeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: '5%',
      width: '80%',
      alignSelf: 'center',
      borderRadius: theme.theme.text.lg,
      elevation: 5,
      backgroundColor: theme.theme.colors.card,
    },
  });

  return <View style={styles.container}>{props.children}</View>;
}
