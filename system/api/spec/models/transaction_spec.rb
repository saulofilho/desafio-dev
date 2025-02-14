# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Transaction, type: :model do
  let!(:store) { create(:store) }

  describe 'associations' do
    it { should belong_to(:store) }
  end

  describe 'when upload was a success' do
    let!(:transaction) { create(:transaction, store:) }

    it 'create valid transaction' do
      expect(transaction).to be_valid
    end
  end

  describe '#total_balance' do
    let!(:transaction1) { create(:transaction, store:, value: 100) }
    let!(:transaction2) { create(:transaction, store:, value: 50) }
    let!(:transaction3) { create(:transaction, store:, value: 25) }

    it 'calculate total balance' do
      expect(store.total_balance).to eq(175)
    end
  end
end
