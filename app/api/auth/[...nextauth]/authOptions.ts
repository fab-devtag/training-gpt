import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "ftag" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "User",
          email: "ftag@example.com",
          password: "1234",
        };
        console.log(credentials);
        if (
          credentials?.username === user.email &&
          credentials.password === user.password
        ) {
          return { id: user.id, name: user.name, email: user.email };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Au moment du login, on ajoute l'id à token
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      //on met l'id dans session.user
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};
