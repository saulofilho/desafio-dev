# frozen_string_literal: true

require 'jwt'

class JwtService
  SECRET_KEY = Rails.application.secrets.secret_key_base || ENV.fetch('SECRET_KEY_BASE', nil)

  def self.encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  def self.decode(token)
    body = JWT.decode(token, SECRET_KEY)[0]
    ActiveSupport::HashWithIndifferentAccess.new(body)
  rescue StandardError
    nil
  end
end
