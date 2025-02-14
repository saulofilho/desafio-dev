import axios from 'axios';

const API_URL = 'http://localhost:3000/v1/transactions';

export const fetchTransactions = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar transações', error);
    throw error;
  }
};

export const uploadTransactions = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    await axios.post(`${API_URL}/upload`, formData);
  } catch (error) {
    console.error('Erro ao enviar arquivo', error);
    throw error;
  }
};
