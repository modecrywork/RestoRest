import { cyan, indigo } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: indigo,
    type: "dark"
  }
});

export default darkTheme;
