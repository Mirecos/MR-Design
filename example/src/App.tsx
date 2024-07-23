import { StyleSheet, View } from 'react-native';
import { MCircularLoading } from 'mcomponents';

export default function App() {


  return (
    <View style={styles.container}>
      <MCircularLoading size="med" />
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
