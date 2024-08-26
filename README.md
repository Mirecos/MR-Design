# mr-design

A react-native library to improve overall development experience. It includes features like :
- Theming (An easy to implement context usable in all your components)
- Common components (A set of simple components to simplify your codebase)

## Installation

```sh
npm install mcomponents
```

## Features

### Themes

mr-design allows you to easily implement a Theme for your mobile app. It is accessible with the famous hook 'useContext' from 'react'.

To enable the Theme features, you must surround your app from the root with the 'ThemeManager' tag.

Once done, you can overwrite light and dark themes to match your app needs.

```
import {
  Theme,
  LightTheme,
  DarkTheme,
  type CustomTheme
} from 'mr-design';

let CustomLightTheme: CustomTheme = {
  dark: false,
  colors: { ... },
  text: { ... },
};
let CustomDarkTheme: CustomTheme = {
  dark: true,
  colors: { ... },
  text: { ... },
};


export default function App() {
  LightTheme.setLightTheme(CustomLightTheme);
  DarkTheme.setDarkTheme(CustomDarkTheme);
  return (
    <Theme.ThemeManager>
      {*Your app*}
    </Theme.ThemeManager>
  );
}
```

### Components


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
