FactoryBot.define do
  factory :transaction do
    transaction_type { %w[1 2 3 4 5].sample }
    date { Faker::Date.forward(days: 10)}
    value { Faker::Number.decimal(l_digits: 5, r_digits: 2)  }
    cpf { Faker::IdNumber.brazilian_citizen_number }
    card { Faker::Finance.credit_card }
    time { Faker::Time.forward(days: 10, period: :afternoon)}
    store
  end
end
