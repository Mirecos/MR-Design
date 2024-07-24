import { useContext } from 'react';
import { Switch } from 'react-native';
import Theme from '../context/Theme';

let isEnabled = Theme.currentTheme === 'dark';

export default function MThemeSwitch() {
  const theme = useContext(Theme.themeContext);

  isEnabled = Theme.currentTheme === 'dark' ? true : false;
  const toggleSwitch = () => {
    if (isEnabled) {
      isEnabled = false;
    } else {
      isEnabled = true;
    }
    Theme.switchCurrentTheme();
  };

  return (
    <Switch
      trackColor={{ false: theme.colors.variant, true: theme.colors.variant }}
      thumbColor={theme.colors.primary}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
}
