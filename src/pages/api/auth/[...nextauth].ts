import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { FirestoreAdapter } from '@next-auth/firebase-adapter';
import config from '../config';

const {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
  googleClientId,
  googleClientSecret,
} = config;
// const options = {
//   clientId: googleClientId,
//   clientSecret: googleClientSecret,
// };

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: googleClientId || 'undefined',
      clientSecret: googleClientSecret || 'undefined',
    }),
  ],
  adapter: FirestoreAdapter({
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
    // emulator: {},
  }),
});
