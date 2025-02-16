import { fetchTransactions, uploadTransactions } from '../../api/transactions';
import axios from 'axios';
import { describe, it, vi, expect } from 'vitest';

vi.mock('axios');

describe('API - Transactions', () => {
  describe('fetchTransactions', () => {
    it('should return transaction data when the request is successful', async () => {
      const mockResponse = { data: { stores: [] } };
      axios.get.mockResolvedValueOnce(mockResponse);
      const result = await fetchTransactions();
      expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/v1/transactions');
      expect(result).toEqual(mockResponse.data);
    });

    it('should throw an error when the request fails', async () => {
        const errorMessage = 'Erro ao buscar transações';
        axios.get.mockRejectedValueOnce(new Error(errorMessage));
      
        await expect(fetchTransactions()).rejects.toThrowError(errorMessage);
    });
  });

  describe('uploadTransactions', () => {
    it('should send the file correctly when the upload is successful', async () => {
      axios.post.mockResolvedValueOnce({ status: 200 });
      const file = new Blob(['file content'], { type: 'text/plain' });
      await uploadTransactions(file);
      expect(axios.post).toHaveBeenCalledWith(
        'http://localhost:3000/v1/transactions/upload',
        expect.any(FormData)
      );
    });

    it('should throw an error when the POST request fails', async () => {
        const errorMessage = 'Erro ao enviar arquivo';
        axios.post.mockRejectedValueOnce(new Error(errorMessage));
        const file = new Blob(['file content'], { type: 'text/plain' });
        await expect(uploadTransactions(file)).rejects.toThrowError(errorMessage);
    });
    
  });
});