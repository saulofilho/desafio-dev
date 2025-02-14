# frozen_string_literal: true

require 'sidekiq/web'

Rails.application.routes.draw do
  get 'up' => 'rails/health#show', as: :rails_health_check

  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  mount Sidekiq::Web => '/sidekiq'

  namespace :v1 do
    resources :transactions, only: %i[index create]
  end
end
