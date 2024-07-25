import { createContext } from 'react';
import type CustomTheme from '../types/CustomTheme';
import { CustomLightTheme } from '../config/themes/LightTheme';
import { Appearance } from 'react-native';
import { CustomDarkTheme } from '../config/themes/DarkTheme';

const colorScheme = Appearance.getColorScheme();

let currentTheme: String = (
  colorScheme === null ? 'light' : colorScheme
) as String;

function switchCurrentTheme(): void {
  if (currentTheme === 'dark') currentTheme = 'light';
  else currentTheme = 'dark';
}

function getCurrentTheme(themestr: String): CustomTheme {
  if (themestr === 'light') return CustomLightTheme;
  return CustomDarkTheme;
}

let themeContext = createContext(CustomLightTheme as CustomTheme);

interface ThemeManagerProps {
  children: React.ReactNode;
  darkTheme?: CustomTheme;
  lightTheme?: CustomTheme;
}

function ThemeManager(props: ThemeManagerProps) {
  return (
    <themeContext.Provider value={getCurrentTheme(currentTheme)}>
      {props.children}
    </themeContext.Provider>
  );
}

export default {
  themeContext,
  currentTheme,
  ThemeManager,
  getCurrentTheme,
  switchCurrentTheme,
};
