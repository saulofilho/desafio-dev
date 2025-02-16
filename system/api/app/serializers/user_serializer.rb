# frozen_string_literal: true

class UserSerializer < Panko::Serializer
  attributes :id, :email, :created_at, :updated_at
end
