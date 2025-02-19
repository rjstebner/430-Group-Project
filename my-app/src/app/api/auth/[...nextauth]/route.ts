import NextAuth from "next-auth"
import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        type: { label: "Account Type", type: "text" }
      },
      async authorize(credentials) {
        if (!credentials?.email) {
          return null
        }

        // Return user with type (not account_type)
        return {
          id: "1",
          email: credentials.email,
          type: "creator" // Changed from account_type to type to match middleware
        }
      }
    })
  ],
  pages: {
    signIn: '/',
    error: '/',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.type = user.type; // Ensure type is passed to the token
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub as string;
        session.user.type = token.type as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }