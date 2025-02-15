import { useState } from 'react';
import { uploadTransactions } from '../api/transactions';

function UploadForm({ onUploadSuccess }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      return alert('Selecione um arquivo');
    }

    try {
      await uploadTransactions(file);
      alert('Upload realizado com sucesso!');
      onUploadSuccess();
    } catch (error) {
      alert('Erro ao enviar arquivo');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-6">
      <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
        Enviar arquivo
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleFileChange}
        className="block w-full mb-4 p-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={handleUpload}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Enviar
      </button>
    </div>
  );
}

export default UploadForm;
