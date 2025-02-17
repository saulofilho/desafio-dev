function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = 'http://localhost:3000/auth/github';
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <button
            type="submit"
            className="flex items-center justify-center w-full max-w-xs px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <img
              className="w-5 h-5 mr-2"
              src="https://www.svgrepo.com/show/341847/github.svg"
              alt="GitHub logo"
            />
            Sign in with GitHub
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
