class Store < ApplicationRecord
  has_many :transactions, dependent: :destroy

  validates :name, :owner, presence: true

  def total_balance
    transactions.sum(:value)
  end
end
