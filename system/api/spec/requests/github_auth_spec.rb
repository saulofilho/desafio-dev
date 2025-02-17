# frozen_string_literal: true

require 'swagger_helper'

RSpec.describe 'GithubAuth', swagger_doc: 'v1/swagger.yaml' do
  path '/auth/github/callback' do
    get 'receive github auth callback' do
      tags 'Auth'
      consumes 'application/json'
      produces 'application/json'
      operationId 'github_auth_callback'

      let(:omniauth_github) do
        OmniAuth::AuthHash.new({
                                 provider: 'github',
                                 uid: '123456',
                                 info: {
                                   email: 'user@example.com'
                                 }
                               })
      end

      before do
        OmniAuth.config.test_mode = true
        OmniAuth.config.mock_auth[:github] = omniauth_github
      end

      response 301, 'valid request' do
        run_test! do
          expect(cookies[:session_token]).to be_present
          expect(response).to redirect_to(Settings.system_web_url)
          expect(User.last.email).to eq('user@example.com')
        end
      end
    end
  end
end
