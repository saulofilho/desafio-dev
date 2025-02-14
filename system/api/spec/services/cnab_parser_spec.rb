# frozen_string_literal: true

require 'rails_helper'

RSpec.describe CnabParser, type: :service do
  let(:file_path) { Rails.root.join('spec/fixtures/cnab_sample.txt') }

  before do
    File.write(file_path, "120190312000001420123456789012123456789012345600Dono Exemplo   Loja Exemplo       \n")
  end

  after do
    FileUtils.rm_f(file_path)
  end

  it 'correctly processes a CNAB file' do
    expect { described_class.parse(file_path.open) }.to change(Transaction, :count).by(1)
  end
end
