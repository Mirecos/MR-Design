import { useContext } from 'react';
import { Switch } from 'react-native';
import Theme from '../context/Theme';

let isEnabled = false;

export default function MThemeSwitch() {
  const theme = useContext(Theme.themeContext);

  const toggleSwitch = () => {
    console.log(isEnabled);
    if (isEnabled) {
      isEnabled = false;
      theme.setTheme('light');
    } else {
      isEnabled = true;
      theme.setTheme('dark');
    }
  };

  return (
    <Switch
      trackColor={{
        false: theme.theme.colors.variant,
        true: theme.theme.colors.variant,
      }}
      thumbColor={theme.theme.colors.primary}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
}
