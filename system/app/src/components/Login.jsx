import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";

function Login({ onLogin }) {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const { data } = await axios.get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenResponse.access_token}`
      );

      const backendResponse = await axios.post(
        "http://localhost:3000/v1/users",
        {
          email: data.email,
          google_access_token: tokenResponse.access_token
        }
      );

      onLogin();
    },
  });

  return (
    <div className="flex items-start justify-center min-h-screen">
      <button
        onClick={login}
        className="flex items-center justify-center w-full max-w-xs px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <img
          className="w-5 h-5 mr-2"
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google logo"
        />
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
