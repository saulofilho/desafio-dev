# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    email { 'MyString' }
    verification_token { 'MyString' }
    verification_token_sent_at { '2025-02-16 19:53:39' }
  end
end
