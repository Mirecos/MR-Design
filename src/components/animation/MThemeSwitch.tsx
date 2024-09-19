import { Switch } from 'react-native';
import { useSwitchTheme, useTheme } from '../../context/Theme';
import { useState } from 'react';

/**
 *  WARNING : You need to implement the ThemeManager context at the root of your application to work with this component.
 *
 * A switch element which allows to change the current Theme of the application. It doesn't need
 * any logic to be implemented as it works with the ThemeManager, which needs to be declared at the root of your application.
 * @returns A switch component that changes current Theme.
 */
export default function MThemeSwitch() {
  const theme = useTheme();
  const switchTheme = useSwitchTheme();
  const [toggled, setToggled] = useState(false);

  const toggleSwitch = () => {
    if (toggled) {
      setToggled(false);
    } else {
      setToggled(true);
    }
    switchTheme(theme.dark ? 'light' : 'dark');
  };

  return (
    <Switch
      trackColor={{
        false: theme.colors.variant,
        true: theme.colors.variant,
      }}
      thumbColor={theme.colors.primary}
      onValueChange={toggleSwitch}
      value={toggled}
    />
  );
}
