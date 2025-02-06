import { NextAuthOptions } from "next-auth";
//import { getUser, testConnection } from '@/app/db/queries';
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { Provider } from "next-auth/providers/index";
import { createSocialUser } from "./actions";
import { createSocialUserMongo } from "./actions";
import { findUser, isRegistered } from "../db/mongoQueries";

const providers: Provider[] = [
  GoogleProvider({
    clientId: process.env.GOOGLE_ID as string,
    clientSecret: process.env.GOOGLE_SECRET as string,
  }),
  CredentialsProvider({
    name: "credentials",
    credentials: {
      email: {
        label: "Email",
        type: "email",
        placeholder: "user@mail.com",
      },
      password: {
        label: "Password",
        type: "password",
      },
    },
    async authorize(credentials) {
      const user = await findUser(credentials?.email as string);
      if (user) {
        const passwordMatch = await bcrypt.compare(
          credentials?.password,
          user.password
        );
        if (passwordMatch) {
          console.log(user);
          return { name: user.name, email: user.email, type: user.type };
        }
      } else {
        return null;
      }
    },
  }),
];

export const authOptions: NextAuthOptions = {
  providers,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, profile }) {
      const userExists = await isRegistered(profile.email);
      if (userExists) {
        user = await findUser(profile.email);
        return user;
      } else {
        console.log("user doesn't exist");
        const { name, email, picture } = profile;
        user = await createSocialUserMongo(name, email, picture);
        return user;
      }
    },
    async jwt({ trigger, token, user }) {
      // Add user information to the token during sign-in
      if (trigger === "update") {
        token.isVerified = session.user.isVerified;
      }
      if (user) {
        console.log(user);
        const id = user._id?.toString() || user.id;
        token.id = id;
        token.email = user.email;
        token.name = user.name;
        token.isVerified = user.isVerified;
        token.picture = user.picture || user.image;
        token.type = user.type;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.image = token.picture;
      session.user.isVerified = token.isVerified;
      session.user.type = token.type;
      return session;
    },
  },
};
