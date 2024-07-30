import { useContext } from 'react';
import { Switch } from 'react-native';
import Theme from '../../context/Theme';

let isEnabled = false;
/**
 *  WARNING : You need to implement the ThemeManager context at the root of your application to work with this component.
 *
 * A switch element which allows to change the current Theme of the application. It doesn't need
 * any logic to be implemented as it works with the ThemeManager, which needs to be declared at the root of your application.
 * @returns A switch component that changes current Theme.
 */
export default function MThemeSwitch() {
  const theme = useContext(Theme.themeContext);

  const toggleSwitch = () => {
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
