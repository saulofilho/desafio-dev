# frozen_string_literal: true

class GithubAuthController < ApplicationController
  def callback
    command = GithubAuthCommand::Callback.call(request.env['omniauth.auth'])
    response.set_cookie(:session_token, value: command.result[:session_token], path: '/', httponly: true)

    redirect_to Settings.system_web_url, status: :moved_permanently, allow_other_host: true
  end
end
