# frozen_string_literal: true

require 'webmock/rspec'

# TODO: remove fixtures
Dir[File.join(__dir__, '../fixtures/**/*.rb')].each { |file| require file }
WebMock.disable_net_connect!(allow_localhost: true)
