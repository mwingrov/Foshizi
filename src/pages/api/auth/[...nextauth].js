import axios from "axios";
import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        if (!email) {
          return null;
        }

        try {
          const response = await axios.post(
            "https://foshizi.herokuapp.com/api/loginuser",
            {
              email: "gaelk@foshizi.co.za",
              password: "P@ssword123",
            }
          );
          const { result } = response.data;
          const { status } = response;
          let user = {
            id: result._id,
            phone: "089 848 8484",
            name: result.firstname + " " + result.lastname,
            email: result.email,
            address: "",
            zip: "7700",
            role: "Frontend Software Engineer",
            accessToken: "Y9/yr3NfXj4mKcp1PxX1Bnshb3Z7X+nHXwZWVkU3Uas=",
          };
          if (status === 200) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  ],
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
