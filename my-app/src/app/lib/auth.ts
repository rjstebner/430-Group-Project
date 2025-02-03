import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import { getUser, testConnection } from '@/app/db/queries';
import bcrypt from 'bcrypt';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { Provider } from 'next-auth/providers/index';
import { createSocialUser } from './actions';

const providers: Provider[] = [
  GoogleProvider({
    clientId: process.env.GOOGLE_ID as string,
    clientSecret: process.env.GOOGLE_SECRET as string,
  }),
  CredentialsProvider({
    name: 'credentials',
    credentials: {
      email: {
        label: 'Email',
        type: 'email',
        placeholder: 'user@mail.com',
      },
      password: {
        label: 'Password',
        type: 'password',
      },
    },
    async authorize(credentials) {
      console.log('authorize');
      await testConnection();
      const user = await getUser(credentials?.email as string);
      console.log(user);
      const testing = {
        id: 10,
        name: 'heitor',
        email: 'heitor@gmail.com',
        password: '12345',
      };
      if (
        credentials?.email == testing.email &&
        credentials?.password == testing.password
      ) {
        return testing;
      } else {
        return null;
      }
    },
  }),
];

export const authOptions: NextAuthOptions = {
  providers,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) token.type = user.type;
      return token;
    },
    session({ session, token }) {
      session.user.type = token.type;
      return session;
    },
    async signIn({ user, account, profile }) {
      console.log('signin callback');
      console.log('profile', profile);
      console.log('user', user);
      console.log('account', account);
      const result = await getUser(profile.email);
      if (result) {
        return result;
      } else {
        const { name, email } = profile;
        createSocialUser(name, email);
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
