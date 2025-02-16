# frozen_string_literal: true

require 'swagger_helper'

RSpec.describe 'V1::Transactions', swagger_doc: 'v1/swagger.yaml' do
  path '/v1/transactions' do
    get 'Get a list of Transactions' do
      tags 'Transactions'
      consumes 'application/json'
      produces 'application/json'

      context 'when transactions are listed' do
        let!(:stores) do
          create_list(:store, 3).each do |store|
            create_list(:transaction, 10, store:)
          end
        end

        response '200', 'transactions fetched with success' do
          schema schema_with_object(:user, '#/components/schemas/transaction')

          run_test! do
            expect(response).to have_http_status(:ok)
            expect(json_response.stores.count).to eq 3
          end
        end
      end
    end
  end

  path '/v1/transactions/upload' do
    post 'Upload a File' do
      tags 'Transactions'
      consumes 'multipart/form-data'
      produces 'application/json'
      parameter name: :file, in: :formData, schema: { '$ref' => '#/components/schemas/attach_file_schema' }

      let(:file) { fixture_file_upload('CNAB.txt', 'text/csv', :binary) }

      context 'when upload was a success' do
        response '201', 'stores and transactions are created with success' do
          run_test! do
            expect(response).to have_http_status(:created)
            expect(response.parsed_body).to include('message' => 'File uploaded and processing started')
          end
        end
      end
    end
  end
end
