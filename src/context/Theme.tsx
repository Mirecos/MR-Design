import { createContext } from 'react';
import type CustomTheme from '../types/CustomTheme';
import CustomLightTheme from '../config/themes/LightTheme';

const ThemeContext = createContext(CustomLightTheme as CustomTheme);

export default ThemeContext;
