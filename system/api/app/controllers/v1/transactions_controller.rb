# frozen_string_literal: true

module V1
  class TransactionsController < ApplicationController
    def index
      stores = Store.includes(:transactions)
      render json: Panko::Response.new(stores: Panko::ArraySerializer.new(stores, each_serializer: StoreSerializer)),
             status: :ok
    end

    def upload
      if file.blank?
        render json: { error: 'File is required' }, status: :unprocessable_entity
        return
      end

      FileParserWorker.perform_async(file.read)
      render json: { message: 'File uploaded and processed successfully' }, status: :created
    end

    private

    def file
      params[:file]
    end
  end
end
