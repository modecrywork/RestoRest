// HOCS
import withMUITheme from "enhancers/withMUITHeme";
import withApollo from "enhancers/withApollo";
// main styles
import "./style.css";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withApollo(withMUITheme(App));
