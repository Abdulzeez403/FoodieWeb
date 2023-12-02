// import NextAuth from "next-auth/next";
// export default NextAuth({
//   providers: [
//     CredentialProvider({

//       async authorize(credentials) {
//         const response = await fetch("http://localhost:5000/api/", {
//           method: "POST",
//           body: JSON.stringify(credentials),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         const data = await response.json();
//         // Returning token to set in session
//         return {
//           token: data,
//         };
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user, account }) {
//       if (account && user) {
//         return {
//           ...token,
//           accessToken: user.token,
//           refreshToken: user.refreshToken,
//         };
//       }

//       return token;
//     },

//     async session({ session, token }) {
//       session.user.accessToken = token.accessToken;

//       return session;
//     },
//   },

//   secret: process.env.JWT_SECRET,
//   pages: {
//     signIn: "auth/signIn", // Need to define a custom login page (if using)
//   },


// });
