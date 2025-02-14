# frozen_string_literal: true

FactoryBot.define do
  factory :store do
    name { Faker::Commerce.product_name }
    owner { Faker::Name.name }
  end
end
