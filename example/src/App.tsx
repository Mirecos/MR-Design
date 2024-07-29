import { ScrollView, StyleSheet } from 'react-native';
import {
  MCircularLoading,
  Theme,
  LightTheme,
  type CustomTheme,
  MThemeSwitch,
  MButton,
} from 'mr-design';

let CustomLightTheme: CustomTheme = {
  dark: false,
  colors: {
    primary: 'rgb(2, 141, 91)',
    background: 'rgb(235, 235, 235)',
    card: 'rgb(235, 235, 235)',
    variant: 'rgb(200, 200, 200)',
    inversed: 'rgb(0, 0, 0)',

    text: 'rgb(40, 40, 40)',
    textOnPrimary: 'rgb(255, 255, 255)',
    border: '',
    notification: '',
  },
  text: {
    lg: 24,
    med: 18,
    sm: 14,
  },
};

export default function App() {
  LightTheme.setLightTheme(CustomLightTheme);
  return (
    <Theme.ThemeManager lightTheme={CustomLightTheme}>
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.container}
      >
        <MCircularLoading size="med" />
        <MCircularLoading size="med" />
        <MCircularLoading size="med" />
        <MCircularLoading size="med" />
        <MCircularLoading size="med" />
        <MThemeSwitch />
        <MButton text="Enregistrer" rounded={true} size="med" />
      </ScrollView>
    </Theme.ThemeManager>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
});
