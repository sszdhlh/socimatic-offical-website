import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// This is a simple in-memory user database for demo purposes
// In a real app, you would use a database
const users = [
  {
    id: "1",
    name: "Emily Johnson",
    email: "emily@example.com",
    password: "password123", // In production, use hashed passwords
    image: "https://public.readdy.ai/ai/img_res/2864fd012a190276ec328dae4b14c009.jpg",
    role: "Content Manager",
  },
];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        // Find user in the database
        const user = users.find(
          (user) => user.email === credentials.email && user.password === credentials.password
        );

        // Return user if found
        if (user) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            role: user.role,
          };
        }

        // Return null if user not found
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    // Next-auth doesn't have a signUp option, removing it
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
};
