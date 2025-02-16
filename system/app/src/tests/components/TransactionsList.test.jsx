import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import TransactionsList from '../../components/TransactionsList';
import { fetchTransactions } from '../../api/transactions';

vi.mock('../../api/transactions', () => ({
  fetchTransactions: vi.fn(),
}));

describe('TransactionsList', () => {
  it('renders loading state and then displays transactions', async () => {
    fetchTransactions.mockResolvedValue({
      stores: [
        {
          id: 1,
          name: 'Loja Teste',
          owner: 'Dono Teste',
          total_balance: 100.5,
          transactions: [
            {
              id: 101,
              date: '2024-02-15T10:00:00Z',
              transaction_type: 1,
              value: 50.75,
            },
          ],
        },
      ],
    });

    render(<TransactionsList />);

    expect(screen.getByText(/Transações por Loja/i)).toBeInTheDocument();
    await waitFor(() => expect(fetchTransactions).toHaveBeenCalled());
    await waitFor(() => expect(screen.getByText('Loja Teste - Dono Teste')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('R$ 100.50')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(/Crédito - R\$ 50.75/i)).toBeInTheDocument());
  });

  it('renders empty state when no transactions exist', async () => {
    fetchTransactions.mockResolvedValue({ stores: [] });

    render(<TransactionsList />);
    
    await waitFor(() => expect(fetchTransactions).toHaveBeenCalled());
    await waitFor(() => expect(screen.getByText(/Nenhuma transação encontrada/i)).toBeInTheDocument());
  });

  it('handles API failure gracefully', async () => {
    fetchTransactions.mockRejectedValue(new Error('API Error'));

    render(<TransactionsList />);

    await waitFor(() => expect(fetchTransactions).toHaveBeenCalled());
    await waitFor(() => expect(screen.getByText(/Nenhuma transação encontrada/i)).toBeInTheDocument());
  });
});
