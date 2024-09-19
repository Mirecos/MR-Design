import { createContext, useContext, useState } from 'react';
import type CustomTheme from '../types/CustomTheme';
import { CustomLightTheme } from '../config/themes/LightTheme';
import { CustomDarkTheme } from '../config/themes/DarkTheme';
import { Appearance } from 'react-native';
import type { ThemeContext } from '../types/ThemeContext';

let themeContext = createContext<ThemeContext>({
  theme: CustomLightTheme,
  setTheme: () => {},
});

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

function useTheme() {
  const ctx = useContext(themeContext);

  return ctx.theme;
}

function useSwitchTheme() {
  const ctx = useContext(themeContext);

  return ctx.setTheme;
}

export { useTheme, useSwitchTheme, ThemeManager };
