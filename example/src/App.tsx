import { StyleSheet, View } from 'react-native';
import { component } from 'mcomponents';

export default function App() {
  return (
    <View style={styles.container}>
      <component.default.MCircularLoading size="med" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
