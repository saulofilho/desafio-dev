# frozen_string_literal: true

class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true

  def verification_token_valid?
    return false if verification_token_sent_at.nil?

    (verification_token_sent_at + 24.hours) >= Time.zone.now
  end

  def generate_validation_token
    self.verification_token_sent_at = Time.zone.now
    self.verification_token = SecureRandom.hex(4)
    save
  end
end
