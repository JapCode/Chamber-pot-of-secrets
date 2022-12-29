import type { AppProps } from 'next/app';
import 'assets/styles/globals.css';
import 'assets/fonts/stylesheet.css';
import { SessionProvider } from 'next-auth/react';
import Auth from 'components/Auth';
import { Provider } from 'react-redux';
import { store } from 'store';

const MyApp = ({ Component, pageProps }: AppProps, session: any) => {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
};

export default MyApp;
