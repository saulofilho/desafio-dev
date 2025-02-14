# frozen_string_literal: true

class CnabParser
  TRANSACTION_TYPES = {
    '1' => { description: 'Débito', nature: 'Entrada', sign: '+' },
    '2' => { description: 'Boleto', nature: 'Saída', sign: '-' },
    '3' => { description: 'Financiamento', nature: 'Saída', sign: '-' },
    '4' => { description: 'Crédito', nature: 'Entrada', sign: '+' },
    '5' => { description: 'Recebimento Empréstimo', nature: 'Entrada', sign: '+' },
    '6' => { description: 'Vendas', nature: 'Entrada', sign: '+' },
    '7' => { description: 'Recebimento TED', nature: 'Entrada', sign: '+' },
    '8' => { description: 'Recebimento DOC', nature: 'Entrada', sign: '+' },
    '9' => { description: 'Aluguel', nature: 'Saída', sign: '-' }
  }.freeze

  def self.parse(file)
    transactions = []

    File.foreach(file.path) do |line|
      transaction_type = line[0].to_i
      date = line[1..8].insert(4, '-').insert(7, '-')
      value = line[9..18].to_i / 100.0
      cpf = line[19..29]
      card = line[30..41]
      time = line[42..47].insert(2, ':').insert(5, ':')
      owner = line[48..61].strip
      store_name = line[62..80].strip

      store = Store.find_or_create_by(name: store_name, owner:)

      transactions << Transaction.new(
        transaction_type:,
        date:,
        value: TRANSACTION_TYPES[transaction_type.to_s][:sign] == '-' ? -value : value,
        cpf:,
        card:,
        time:,
        store:
      )
    end

    Transaction.import(transactions, batch_size: 100)
  end
end
