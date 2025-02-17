import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import UploadForm from './components/UploadForm';
import TransactionsList from './components/TransactionsList';
import Login from './components/Login';
import './App.css';

function App() {
  const [refresh, setRefresh] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const sessionToken = Cookies.get('is_authenticated');
    if (sessionToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    Cookies.remove('is_authenticated');
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          File Parser
        </h1>
        {!isAuthenticated ? (
          <Login onLogin={handleLogin} />
        ) : (
          <>
            <UploadForm onUploadSuccess={() => setRefresh(!refresh)} />
            <TransactionsList key={refresh} />
            <button
              onClick={handleLogout}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
