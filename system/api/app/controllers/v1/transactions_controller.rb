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

      command = TransactionCommand::Upload.call(file)

      render json: { message: 'File uploaded and processing started' }, status: :created if command.success?
    rescue StandardError => e
      render json: { error: "Upload failed: #{e.message}." }, status: :internal_server_error
    end

    private

    def file
      params[:file]
    end
  end
end
