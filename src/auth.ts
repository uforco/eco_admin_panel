import type { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

// create server auth function
import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { getServerSession } from "next-auth";

declare module "next-auth" {
  interface User {
    role?: string;
  }
  interface Session {
    user?: {
      id: string | null;
      name: string | null;
      email: string | null;
      image?: string | null;
      role: string | null;
    } | null;
  }
}

export const config: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};
        
        if (!email || !password) {
          throw new Error("Invalid credentials");
        }

        if(email !== 'demo@gmail.com' || password !== 'demo780'){
          throw new Error("Invalid credentials");
        }

        return {
          id: "1",
          name: "MD Sharif",
          email: email,
          image: "https://lh3.googleusercontent.com/a/ACg8ocL3no-bSSwEwKeqLNVWNhzKqVLTCG0l5dFf8saeGs5_09doxgg=s96-c",
          role: "admin",
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET, // Set this in .env.local
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  // pages: {
  //   signIn: "/login", // Custom login page (optional)
  //   error: "/login", // Custom error page (optional)
  // },
};

//   // Use it in server contexts
export default function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config);
}
