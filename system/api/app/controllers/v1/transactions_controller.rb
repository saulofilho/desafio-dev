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

      upload_dir = Rails.root.join('tmp/uploads')
      FileUtils.mkdir_p(upload_dir)

      file_path = upload_dir.join("#{SecureRandom.uuid}.txt")
      FileUtils.copy(file.tempfile.path, file_path)

      FileParserWorker.perform_async(file_path.to_s)

      render json: { message: 'File uploaded and processing started' }, status: :created
    rescue StandardError => e
      render json: { error: "Upload failed: #{e.message}" }, status: :internal_server_error
    end

    private

    def file
      params[:file]
    end
  end
end
