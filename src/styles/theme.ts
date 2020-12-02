export const myDefaultTheme = {
  background: 'dodgerblue',
  main: 'palevioletred',
  // ...
};

export function applyDefaultTheme({ theme = {}, ...props }) {
  // Since styled-components defaults the `theme` prop to an empty object
  // inside of the styled component if a ThemeProvider is not present,
  // we check against the number of keys.
  return {
    ...props,
    theme: Object.keys(theme).length === 0 ? myDefaultTheme : theme,
  };
}
