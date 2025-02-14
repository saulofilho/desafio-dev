# frozen_string_literal: true

class TransactionSerializer < Panko::Serializer
  attributes :id, :transaction_type, :date, :value, :cpf, :card, :time, :store_id, :created_at, :updated_at
end
