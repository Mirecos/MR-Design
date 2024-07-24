import { createContext } from 'react';
import type CustomTheme from '../types/CustomTheme';
import { CustomLightTheme } from '../config/themes/LightTheme';
import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();

let currentTheme: String = (
  colorScheme === null ? 'light' : colorScheme
) as String;

function switchCurrentTheme(): void {
  if (currentTheme === 'dark') currentTheme = 'light';
  else currentTheme = 'dark';
}

let themeContext = createContext(CustomLightTheme as CustomTheme);

export default { themeContext, currentTheme, switchCurrentTheme };
