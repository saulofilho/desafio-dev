# frozen_string_literal: true

require 'swagger_helper'

RSpec.describe 'V1::User', swagger_doc: 'v1/swagger.yaml' do
  path '/v1/users' do
    post 'create a user' do
      tags 'Users'
      consumes 'application/json'
      produces 'application/json'
      operationId 'user_create'
      parameter name: :user, in: :body, schema: { '$ref' => '#/components/schemas/user' }

      context 'when create a user' do
        response 201, 'user created' do
          schema schema_with_object(:user, '#/components/schemas/user')

          let(:user) do
            {
              user: {
                email: Faker::Internet.email
              }
            }
          end

          run_test! do
            expect(cookies[:session_token]).to be_present
          end
        end
      end
    end
  end
end
