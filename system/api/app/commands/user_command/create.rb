# frozen_string_literal: true

module UserCommand
  class Create
    prepend SimpleCommand

    def initialize(params)
      @params = params
    end

    def call
      user = User.find_or_initialize_by(email: @params[:email])

      unless user&.verification_token_valid?
        user.generate_validation_token
        user.save
      end
      session_token = JsonWebToken.encode(user: { id: user.id })
      { session_token:, user: }
    end
  end
end
