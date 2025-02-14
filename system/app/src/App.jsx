import { useState } from 'react';
import UploadForm from './components/UploadForm';
import TransactionsList from './components/TransactionsList';
import './App.css';

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Importador CNAB</h1>
        <UploadForm onUploadSuccess={() => setRefresh(!refresh)} />
        <TransactionsList key={refresh} />
      </div>
    </div>
  );
}

export default App;
