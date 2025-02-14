# frozen_string_literal: true

class StoreSerializer < Panko::Serializer
  attributes :id, :name, :owner, :total_balance, :created_at, :updated_at

  has_many :transactions
end
