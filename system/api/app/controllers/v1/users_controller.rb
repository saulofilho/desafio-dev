# frozen_string_literal: true

module V1
  class UsersController < ApplicationController
    # TODO
    #
    # Create User validation in SessionController
    # Validate User token
    # Authenticate request
    #

    def create
      command = UserCommand::Create.call(user_params)
      response.set_cookie(:session_token, value: command.result[:session_token], path: '/', httponly: true,
                                          expires: 24.hours.from_now)

      render json: { user: UserSerializer.new.serialize(command.result) }, status: :created
    end

    private

    def user_params
      params.expect(user: [:email])
    end
  end
end
