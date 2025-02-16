# frozen_string_literal: true

module TransactionCommand
  class Upload
    prepend SimpleCommand

    def initialize(file)
      @file = file
    end

    def call
      upload_dir = Rails.root.join('tmp/uploads')
      FileUtils.mkdir_p(upload_dir)

      file_path = upload_dir.join("#{SecureRandom.uuid}.txt")
      FileUtils.copy(@file.tempfile.path, file_path)

      FileParserWorker.perform_async(file_path.to_s)
    end
  end
end
