import { useEffect, useState } from 'react';
import { fetchTransactions } from '../api/transactions';

function TransactionsList() {
  const [stores, setStores] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const transactionsData = await fetchTransactions();
        
        if (Array.isArray(transactionsData.stores)) {
          setStores(transactionsData.stores);
        } else {
          setError([]);
          setStores([]);
        }
      } catch (error) {
        setError('Erro ao carregar transações');
        setStores([]);
      }
    };

    loadTransactions();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  const formatBalance = (balance) => {
    return balance ? `R$ ${balance.toFixed(2)}` : 'R$ 0,00';
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">Transações por Loja</h2>
      {stores.length === 0 ? (
        <p>Nenhuma transação encontrada.</p>
      ) : (
        stores.map((store) => (
          <div
            key={store.id}
            className="border border-gray-300 p-4 mb-6 shadow-md rounded-lg"
          >
            <h3 className="text-xl font-semibold">{store.name} - {store.owner}</h3>
            <p className="mt-2 text-lg">
              <strong>Saldo Total:</strong> {formatBalance(store.total_balance)}
            </p>
            <ul className="mt-4 space-y-2">
              {store.transactions && Array.isArray(store.transactions) && store.transactions.map((tx) => (
                <li key={tx.id} className="text-sm text-gray-700">
                  <p>{formatDate(tx.date)} - {tx.transaction_type === 1 ? 'Crédito' : tx.transaction_type === 2 ? 'Débito' : 'Transferência'} - R$ {tx.value.toFixed(2)}</p>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default TransactionsList;
