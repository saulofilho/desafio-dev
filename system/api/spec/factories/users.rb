# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    verification_token { Faker::Alphanumeric.alpha(number: 20) }
    verification_token_sent_at { Faker::Date.backward(days: 2) }
  end
end
