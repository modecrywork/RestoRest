import darkTheme from "theme/darkTheme";

import { ThemeProvider } from "@material-ui/core/styles";

const withMUITheme = Component => {
  return props => (
    <ThemeProvider theme={darkTheme}>
      <Component {...props} />
    </ThemeProvider>
  );
};

export default withMUITheme;
