# frozen_string_literal: true

module GithubAuthCommand
  class Callback
    prepend SimpleCommand

    def initialize(params)
      @params = params
    end

    def call
      user = find_or_create_user
      session_token = create_session_token(user)
      { session_token: }
    end

    private

    def find_or_create_user
      user = User.find_or_initialize_by(email: @params[:info][:email])
      user.save
      user
    end

    def create_session_token(user)
      JsonWebToken.encode(user: { id: user.id })
    end
  end
end
