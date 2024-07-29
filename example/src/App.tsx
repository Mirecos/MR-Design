import { ScrollView, StyleSheet } from 'react-native';
import {
  MCircularLoading,
  Theme,
  LightTheme,
  type CustomTheme,
  MThemeSwitch,
  MButton,
  MHorizontal,
  MVertical,
} from 'mr-design';

let CustomLightTheme: CustomTheme = {
  dark: false,
  colors: {
    primary: 'rgb(2, 141, 91)',
    background: 'rgb(255, 255, 255)',
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

        <MThemeSwitch />
        <MHorizontal style={styles.MHori}>
          <MButton text="test" size="med" />
          <MButton text="test" size="lg" />
          <MButton text="test" size="med" />
        </MHorizontal>
        <MVertical style={styles.MVert}>
          <MButton text="test" size="med" />
          <MButton text="test" size="med" />
          <MButton text="test" size="med" />
        </MVertical>
        <MButton text="Enregistrer" rounded={true} size="med" />
      </ScrollView>
    </Theme.ThemeManager>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  MVert: {
    width: '30%',
  },
  MHori: {
    marginVertical: 20,
  },
});
