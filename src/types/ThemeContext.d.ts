import type CustomTheme from './CustomTheme';

declare type ThemeContext = {
  setTheme: (value: 'light' | 'dark') => void;
  theme: CustomTheme;
};
