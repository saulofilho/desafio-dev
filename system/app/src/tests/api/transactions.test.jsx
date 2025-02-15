import { fetchTransactions, uploadTransactions } from '../../api/transactions';
import axios from 'axios';
import { describe, it, vi, expect } from 'vitest';

vi.mock('axios');

describe('API - Transactions', () => {
  describe('fetchTransactions', () => {
    it('deve retornar dados de transações quando a requisição for bem-sucedida', async () => {
      const mockResponse = { data: { stores: [] } };
      axios.get.mockResolvedValueOnce(mockResponse);

      const result = await fetchTransactions();

      expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/v1/transactions');
      expect(result).toEqual(mockResponse.data);
    });

    it('deve lançar um erro quando a requisição falhar', async () => {
        const errorMessage = 'Erro ao buscar transações';
        axios.get.mockRejectedValueOnce(new Error(errorMessage));
        
        await expect(fetchTransactions()).rejects.toThrowError(errorMessage);
    });
  });

  describe('uploadTransactions', () => {
    it('deve enviar o arquivo corretamente quando o upload for bem-sucedido', async () => {
      axios.post.mockResolvedValueOnce({ status: 200 });

      const file = new Blob(['file content'], { type: 'text/plain' });

      await uploadTransactions(file);

      expect(axios.post).toHaveBeenCalledWith(
        'http://localhost:3000/v1/transactions/upload',
        expect.any(FormData)
      );
    });

    it('deve lançar um erro quando a requisição POST falhar', async () => {
        const errorMessage = 'Erro ao enviar arquivo';
        axios.post.mockRejectedValueOnce(new Error(errorMessage));
    
        const file = new Blob(['file content'], { type: 'text/plain' });
    
        await expect(uploadTransactions(file)).rejects.toThrowError(errorMessage);  // Use rejects.toThrowError here
    });
    
  });
});