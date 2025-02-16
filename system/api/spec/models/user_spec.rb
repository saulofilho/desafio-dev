# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email) }
  end

  describe '#verification_token_valid?' do
    let(:user) { create(:user) }

    context 'when verification_token_sent_at is nil' do
      it 'returns false' do
        user.verification_token_sent_at = nil
        expect(user.verification_token_valid?).to be_falsey
      end
    end

    context 'when verification_token_sent_at is more than 24 hours ago' do
      it 'returns false' do
        user.verification_token_sent_at = 25.hours.ago
        expect(user.verification_token_valid?).to be_falsey
      end
    end

    context 'when verification_token_sent_at is within the last 24 hours' do
      it 'returns true' do
        user.verification_token_sent_at = 23.hours.ago
        expect(user.verification_token_valid?).to be_truthy
      end
    end
  end

  describe '#generate_validation_token' do
    let(:user) { create(:user) }

    it 'sets verification_token_sent_at to the current time' do
      freeze_time do
        user.generate_validation_token
        expect(user.verification_token_sent_at).to eq(Time.zone.now)
      end
    end

    it 'generates a verification_token' do
      user.generate_validation_token
      expect(user.verification_token).to be_present
    end

    it 'saves the user record' do
      user.update!(verification_token: nil)
      expect { user.generate_validation_token }.to change { user.reload.verification_token }.from(nil)
    end
  end
end
