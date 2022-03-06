import Theme from "../styles/theme";

import { wrapper } from "../redux/store";

function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default wrapper.withRedux(App);
