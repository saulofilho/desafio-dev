# frozen_string_literal: true

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV.fetch('GOOGLE_CLIENT_ID', nil), ENV.fetch('GOOGLE_CLIENT_SECRET', nil),
           {
             callback_path: '/v1/auth/google_oauth2/callback'
           }
end
OmniAuth.config.allowed_request_methods = %i[get]
OmniAuth.config.silence_get_warning = true
