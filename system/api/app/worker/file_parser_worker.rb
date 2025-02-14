# frozen_string_literal: true

require 'activerecord-import/base'
require 'activerecord-import/active_record/adapters/postgresql_adapter'

class FileParserWorker
  include Sidekiq::Worker

  def perform(file_path)
    file = File.open(file_path)
    CnabParser.parse(file)
    file.close
  end
end
