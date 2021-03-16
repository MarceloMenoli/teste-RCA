import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import { Provider } from "next-auth/client";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider session={pageProps.session}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
