import type { AppProps } from 'next/app';
import 'assets/styles/globals.css';
import 'assets/fonts/stylesheet.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
