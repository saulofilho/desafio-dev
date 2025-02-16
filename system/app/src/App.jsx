import { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google'; // Importando o GoogleLogin da biblioteca
import UploadForm from './components/UploadForm';
import TransactionsList from './components/TransactionsList';
import './App.css';

function App() {
  const [refresh, setRefresh] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Função para lidar com o sucesso no login do Google
  const handleLoginSuccess = (response) => {
    // Armazene o token JWT no localStorage ou no estado
    const token = response.credential;
    localStorage.setItem('jwt', token);  // Salve o token JWT
    setIsAuthenticated(true);  // Atualize o estado para indicar que está autenticado
  };

  // Função para lidar com erro no login
  const handleLoginFailure = (error) => {
    console.log("Erro ao fazer login:", error);
  };

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">File Parser</h1>
        {!isAuthenticated ? (
          // Componente do botão de login do Google
          <GoogleLogin 
            onSuccess={handleLoginSuccess} 
            onError={handleLoginFailure} 
          />
        ) : (
          <>
            <button onClick={handleLogout}>Logout</button>
            <UploadForm onUploadSuccess={() => setRefresh(!refresh)} />
            <TransactionsList key={refresh} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
