import { createContext, useState } from 'react';
import type CustomTheme from '../types/CustomTheme';
import { CustomLightTheme } from '../config/themes/LightTheme';
import { CustomDarkTheme } from '../config/themes/DarkTheme';
import { Appearance } from 'react-native';
import type { ThemeContext } from '../types/ThemeContext';

let themeContext = createContext({
  theme: CustomLightTheme,
  setTheme: () => {},
} as ThemeContext);

interface ThemeManagerProps {
  children: React.ReactNode;
  darkTheme?: CustomTheme;
  lightTheme?: CustomTheme;
}

function ThemeManager(props: ThemeManagerProps) {
  const colorScheme = Appearance.getColorScheme();

  const [theme, setTheme] = useState(
    colorScheme === null ? 'light' : colorScheme
  );

  return (
    <themeContext.Provider
      value={{
        theme: theme === 'light' ? CustomLightTheme : CustomDarkTheme,
        setTheme: setTheme,
      }}
    >
      {props.children}
    </themeContext.Provider>
  );
}

export default {
  themeContext,
  ThemeManager,
};
