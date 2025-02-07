import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import bcrypt from "bcrypt";
import { findUser } from "./src/app/db/mongoQueries";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const result = await findUser(email);
          if (!result) return null;
          const passwordMatch = await bcrypt.compare(password, result.password);

          if (passwordMatch) {
            const user = {
              id: result.id,
              name: result.name,
              email: result.email,
              type: result.type,
            };
            console.log("auth: " + user);
            return user;
          }
          console.log("invalid credentials");
          return null;
        }
      },
    }),
  ],
});
