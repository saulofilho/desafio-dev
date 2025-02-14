require 'rails_helper'

RSpec.describe Transaction, type: :model do
  describe 'associations' do
    it { should belong_to(:store) }
  end

  let!(:store) { create(:store) }

  describe 'when upload was a success' do
    let!(:transaction) { create(:transaction, store:) }

    it "create valid transaction" do
      expect(transaction).to be_valid
    end
  end

  describe '#total_balance' do
    let!(:transaction1) { create(:transaction, store: store, value: 100) }
    let!(:transaction2) { create(:transaction, store: store, value: 50) }
    let!(:transaction3) { create(:transaction, store: store, value: 25) }

    it 'calculate total balance' do
      expect(store.total_balance).to eq(175)
    end
  end
end
